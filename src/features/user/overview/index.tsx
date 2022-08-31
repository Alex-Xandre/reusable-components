import React from 'react'
import { useSelector } from 'react-redux'
import {Table, TableBody, TableHead} from '../../../components/tables/index'

const UserTable = () => {
  const users = useSelector((store:any) => store.users.users)

  return (
    <Table width={1000} border={1}style={{border:'1px solid black'}}>
        <TableHead>
          <tr >
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Role</th>
          </tr>
        </TableHead>

        <TableBody>
        
            {users.map((user:any) => {
              return(
                <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>{user.status}</td>
                <td>{user.role}</td>
                </tr>
              )

            })}
        
        </TableBody>
    </Table>  
  )
}

export default UserTable