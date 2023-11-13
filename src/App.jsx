import { useEffect, useState } from 'react';
import './App.css';
import { FormUsuario } from './components/FormUsuario';
import { Users } from './components/Users';

export const App = () => {
  const inicialState = JSON.parse(localStorage.getItem('users')) || []
  const [users, setUsers] = useState(inicialState);
  const [userEdit, setUserEdit] = useState()

  useEffect(()=>{
    localStorage.setItem("users", JSON.stringify(users))
  },[users])
  

  const onAddUser = (user) => {
    setUsers([...users, user]);
  };

  const onDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onEditUser = (userToEdit) => {
    const newUsers =  users.map( user => user.id === userToEdit.id 
      ? userToEdit
      : user
    )
    setUsers(newUsers)
    setUserEdit()
  }

  const findUser = (id) => {
    const userToEdit = users.filter(user => user.id === id)
    setUserEdit(userToEdit)
  }

  return (
    <div className="container">
      <FormUsuario 
        onAddUser={onAddUser} 
        userEdit={userEdit}
        onEditUser={onEditUser}
      />
      <Users 
        onDeleteUser={onDeleteUser} 
        findUser={findUser}
        users={users} 
      />
    </div>
  );
};
