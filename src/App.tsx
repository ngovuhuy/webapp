
import Dashboard from './pages/dashboard/Dashboard';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ExpenseDetails from './pages/expense/ExpenseDetails';
import NewExpense from './pages/expense/NewExpense';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ExpenseReports from './pages/expense/ExpenseReports';
import { useAuthContext } from './hooks/useAuthContext';

const App = () => {
  const {isAuthenicated} = useAuthContext();
  return(
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/login' element={!isAuthenicated ? <Login/> : <Navigate to="/" />}/>
  <Route path='register' element={!isAuthenicated ? <Register /> : <Navigate to="/" />}/>
   <Route path='/' element={isAuthenicated ?  <Dashboard/> :  <Navigate to="/login"/> }/>
   <Route path='/new' element={isAuthenicated ? <NewExpense/> :   <Navigate to="/login"/>}/>
   <Route path='/view/:expenseId' element={isAuthenicated ? <ExpenseDetails/> : <Navigate to="/login"/>}/>
   <Route path='/edit/:expenseId' element={isAuthenicated ? <NewExpense/>: <Navigate to="/login"/>}/>
   <Route path='/reports' element={isAuthenicated ? <ExpenseReports/> : <Navigate to="/login"/>}/>
  </Routes>
  </BrowserRouter>
  );
};

export default App