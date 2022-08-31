import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/button'
import Modal from '../../components/modals'
import UserTable from './overview'
import styles from './index.module.css'
import { openModal } from '../../app/globalslices/modalSlice'

const AddUsers = () =>{
  return(
    <div>
      hi
    </div>
  )
}
const Users = () => {
  const dispatch = useDispatch()
  const {isOpen} = useSelector(((store:any) => store.modals))
  return (
    <div className={styles.container}>
      {isOpen ? 
      <Modal width={1000} height={300}>
        <AddUsers/>
      </Modal>
      :
      ""
      }
      <Button  className='primary_button' onClick={()=> dispatch(openModal())}>
        Add Users
      </Button>
      <UserTable/>
    </div>
  )
}

export default Users