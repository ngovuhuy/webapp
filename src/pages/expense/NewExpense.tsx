import { useFormik } from "formik"
import { Expense } from "../../model/Expense"
import expenseValidationSchema from "../../validation/expenseValidationSchema";
import { Dropdown } from "../../components/Dropdown";
import { expenseCategories } from "../../utils/AppConstants";
import { getExpenseByExpenseId, saveOrUpdateExpense } from "../../services/expense-service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const NewExpense = () => {
  const {expenseId} = useParams<{expenseId: string}>();
  const navigate = useNavigate(); 
  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Expense>({
    name: '',
    amount: 0,
    note: '',
    category: '',
    date: new Date().toISOString().split('T')[0]
  });
  useEffect(() => {
    if(expenseId){
      //call the service method to get existing expense
      getExpenseByExpenseId(expenseId)
      .then((response => {
        if(response && response.data){
          setInitialValues(response.data);
        }
      })
      ).catch((error) => setErrors(error.message))
      .finally(() => setLoader(false));
    }
  }, [expenseId]);


  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values: Expense) => {
     saveOrUpdateExpense(values)
     .then((response) => {
      if(response && response.status == 201){
          navigate('/');
      }else if (response && response.status === 200){
        navigate(`/view/${expenseId}`);
      }
     })
     .catch((error) => {
      setErrors(error.message);
     });
    },
    validationSchema:expenseValidationSchema,
  })
  return (
   <div className="d-flex justify-content-center align-item-center mt-2">
    {error && <p className="text-danger fst-italic">{error}</p>}
    {isLoading && <p>Loading...</p>}
        <div className="container col-md-4 col-sm-8 col-xs-12">
                 <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input type="text" name="name" id="name" className="form-control" onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange}/>
                     {formik.touched.name && formik.errors.name ? (
                     <div className="text-danger fst-italic">
                      {formik.errors.name}
                     </div>
                    ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="amout" className="form-label">
                        Amount
                      </label>
                      <input type="number" name="amount" id="amount" onBlur={formik.handleBlur} className="form-control" value={formik.values.amount} onChange={formik.handleChange}/>
                      {formik.touched.amount && formik.errors.amount ?( <div className="text-danger fst-italic">
                        {formik.errors.amount}</div>) : null}
                    </div> 
                    <div className="mb-3">
                      <label htmlFor="note" className="form-label">
                        Note
                      </label>
                      <textarea name="note" id="note" className="form-control" value={formik.values.note} onChange={formik.handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="date" className="form-label">
                        Date
                      </label>
                      <input type="date" name="date" id="date" className="form-control" onBlur={formik.handleBlur}  value={typeof formik.values.date === 'string' ? formik.values.date : formik.values.date.toISOString().split('T')[0]} onChange={formik.handleChange} />
                     {formik.touched.date && formik.errors.date ?(  <div className="text-danger fst-italic">
                        {formik.errors.date}
                     </div>) : null}
                    </div>
                    <Dropdown options={expenseCategories} id="category" name="category" label="Category" value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.category} touched={formik.touched.category}/>
                    <button type="submit" className="btn btn-sm btn-primary btn-outline-light">Save</button>
                 </form>
        </div>
   </div>
  )
}

export default NewExpense