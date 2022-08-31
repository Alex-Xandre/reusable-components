import styles from './index.module.css'
export interface Props extends React.TableHTMLAttributes<HTMLTableElement> {
    children: React.ReactNode
    width?: number,
    borderWidth?: number
   
  }
  
export function Table(props: Props) {
    const { 
      children, 
      className, 
      width,
      style,
      ...rest
  } = props
      let _style: React.CSSProperties = style || {}
  
      /**Overiding defautls? */
      if(width) _style.width = width 
    //   if(color) _style.color = color
    //   if (fontSize) _style.fontSize = fontSize
  
    return (
      <table className={styles.table} style={_style}{...rest}>
            {children}
      </table>
    )
  }

export function TableHead(props: Props) {
    const { 
      children,  
  } = props
  
    return (
      <thead className={styles.thead} >
            {children}
      </thead>
    )
  }
  
export function TableBody(props: Props) {
    const { 
      children,  
  } = props
  
    return (
      <tbody className={styles.thead}> 
            {children}
      </tbody>
    )
  }