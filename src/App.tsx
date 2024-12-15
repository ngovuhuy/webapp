
import Dashboard from './pages/dashboard/Dashboard';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExpenseDetails from './pages/expense/ExpenseDetails';
import NewExpense from './pages/expense/NewExpense';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ExpenseReports from './pages/expense/ExpenseReports';
const App = () => {
  return(
  <BrowserRouter>
  <Navbar/>
  <Routes>
   <Route path='/' element={<Dashboard/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='register' element={<Register />}/>
   <Route path='/new' element={<NewExpense/>}/>
   <Route path='/view/:expenseId' element={<ExpenseDetails/>}/>
   <Route path='/edit/:expenseId' element={<NewExpense/>}/>
   <Route path='/reports' element={<ExpenseReports/>}/>
  </Routes>
  </BrowserRouter>
  );
};

export default App