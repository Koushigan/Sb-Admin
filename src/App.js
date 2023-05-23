
import './App.css';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import AddUser from './components/AddUser'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import EditUser from './components/EditUser';

function App() {

let data={
  earningsMonthly:"5,00,000",
  earningsAnnual:"60,00,000",
  task:55,
  pendingRequest:20
}

let [users,setUsers] = useState([
  {
    name:"Koushik",
    email:"r.koushigan@gmail.com",
    mobile:7550159272,
    batch:"B39"
},
{
  name:"Madesh",
  email:"madesh@gmail.com",
  mobile:9707888888,
  batch:"B39"
},
{
  name:"Arun",
  email:"arun@gmail.com",
  mobile:9962091250,
  batch:"B39"
}
])
// const [value,setValue] = useState("Hi")

  return<>
  <div id='wrapper'>
    <BrowserRouter>
       <Sidebar/>

       <Routes>
        <Route path='/dashboard' element={<Dashboard data={{data,users,setUsers}}/>}/>
        <Route path='/add-user' element={<AddUser data={{users,setUsers}}/>}/>
        <Route path='/edit-user/:id' element={<EditUser  data={{users,setUsers}}/> }/> 
        <Route path='*' element={<Navigate to='/add-user'/>}/>
            
       </Routes>
       {/* <Dashboard data={{data,setValue}}/> */}
       </BrowserRouter> 

       
  </div>
  </>
}

export default App;
