import styles from "./index.module.css"

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  icon?: React.ReactElement,
  className?: string,
  color?: string,
  backgroundColor?:string,
  fontSize?: string,
}

function Button(props: Props) {
  const { 
    children, 
    icon, 
    className, 
    color,
    backgroundColor,
    style,
    fontSize,
    ...rest} = props

    let _style: React.CSSProperties = style || {}

    /**Overiding defautls? */
    if(backgroundColor) _style.backgroundColor = backgroundColor
    if(color) _style.color = color
    if (fontSize) _style.fontSize = fontSize

  return (
    <button className={styles[`${className}`]} style={_style} {...rest}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{children}</span>
    </button>
  )
}
export default Button