
export interface Props extends React.TableHTMLAttributes<HTMLTableElement> {
    children: React.ReactElement
    width?: string
   
  }
  
export function Table(props: Props) {
    const { 
      children, 
      className, 
  } = props
  
     // let _style: React.CSSProperties = style || {}
  
      /**Overiding defautls? */
    //   if(backgroundColor) _style.backgroundColor = backgroundColor
    //   if(color) _style.color = color
    //   if (fontSize) _style.fontSize = fontSize
  
    return (
      <table>
            {children}
      </table>
    )
  }

export function TableHead(props: Props) {
    const { 
      children, 
      className, 
  } = props
  
     // let _style: React.CSSProperties = style || {}
  
      /**Overiding defautls? */
    //   if(backgroundColor) _style.backgroundColor = backgroundColor
    //   if(color) _style.color = color
    //   if (fontSize) _style.fontSize = fontSize
  
    return (
      <thead>
            {children}
      </thead>
    )
  }