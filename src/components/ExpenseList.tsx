import { Expense } from "../model/Expense";

interface Props{
    expenses: Expense[]
};
const ExpenseList = ({expenses}: Props)  => {
    
    // table>thead+tbody
    //    tr>th*3
  return (
    <div>
        <table border={1}>
            <thead>
               <tr>
                <th>Title</th>
                <th>Amout</th>
                <th>Date</th>
               </tr>
            </thead>
            <tbody>
           {expenses.map((expense) => (
           <tr key={expense.expenseId}>
            <td>{expense.name}</td>
            <td>{expense.amount}</td>
            <td>{expense.date}</td>
           </tr>)
        )}
            </tbody>
        </table>
    </div>
  )
};

export default ExpenseList