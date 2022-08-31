import React from 'react'
import styles from './index.module.css'
interface Props extends React.HtmlHTMLAttributes<HTMLElement>{
    children: React.ReactNode,
    width?: number,
    height?: number
}

const Modal = (props: Props) => {

  return <div style={{
    width: props.width, 
    height: props.height}} 
    className={styles.modal_container}>

    {props.children}
  </div>
}

export default Modal

