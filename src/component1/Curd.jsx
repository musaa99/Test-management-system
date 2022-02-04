// import React, {useState} from 'react'
// import UserTable from './UserTable'
// import styles from  "../css/Curd.module.css"
// import AddUserForm from '../forms/AddUserForm'

// const Curd = () => {
//   const usersData = [
//     {id:1, name: '', username: ''},
//     // {id:2, name: 'Ben', username: 'beenn'},
//     // {id:3, name: 'Adam', username: 'adamu'},
//   ]

//   const [users, setUsers] = useState(usersData)

//   const addUser = (user) => {
//     user.id = users.length + 1
//     setUsers ([...users, user])
//   }
//   const deleteUser = (id) => {
//     setUsers(users.filter((user) => user.id !== id))
//   }
//     return (
//         <div className={styles.container}>
//           <h1>CRUD App with Hooks</h1>
//           <div className="flex-row">
//             <div className="flex-small">
//               <h2>Add user</h2>
//               <AddUserForm addUser={addUser}/>
//             </div>
//             <div className="flex-large">
//               <h2>View users</h2>
//               <UserTable users={users} deleteUser={deleteUser} />
//             </div>
//           </div>
//         </div>
//       )
// }

// export default Curd
