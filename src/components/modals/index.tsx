import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../app/globalslices/modalSlice'
import Button from '../button'
import styles from './index.module.css'
interface Props extends React.HtmlHTMLAttributes<HTMLElement>{
    children: React.ReactNode,
    width?: number,
    height?: number,
    icon: string,
    title: string
}

const Modal = (props: Props) => {
const dispatch = useDispatch()
  return <div style={{
    width: props.width, 
    height: props.height}} 
    className={styles.modal_container}>
     
      <div className={styles.modal_header} style={{width: props.width}}>
      <h1 style={{paddingBottom:'-30px'}}>{props.title}</h1>
      <Button backgroundColor='red' onClick={() => dispatch(closeModal())}>{props.icon}</Button>
      </div>
    
    {props.children}
  </div>
}

export default Modal

