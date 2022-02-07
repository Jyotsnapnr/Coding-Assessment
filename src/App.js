import React, {useEffect} from 'react';
import PageNotFound from './components/pages/PageNotFound';
import TrainerDetails from './components/pages/TrainerDetails';
import UserEdit from './components/pages/UserEdit';
import UserTable from './components/pages/UserTable';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useStore from './app/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App()  {

  const {setUsers} = useStore()
  useEffect(() => {
    const fetchUsers = async () => {
        try{
            const url = 'https://pre.bistrainer.com/v1/index.cfm?action=testapi.users'
            const response = await fetch(url)
            const userData = await response.json()
            setUsers(userData.users)
        }catch(err){
            console.log(err)
        }
    }
    fetchUsers()
},[setUsers])

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserTable/>}>
      </Route>
      <Route path="details/:userId" element={<TrainerDetails />}></Route>
      <Route path="edit/:userId" element={<UserEdit/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App