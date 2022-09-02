import styles from './index.module.css'

interface InputProps {
    icon ?: React.ReactElement,
    handleClick?: React.FC,
    type?: string,
    name?:string,
    handleChange?: React.FC,
    defaultValue?:string,
    disabled?: boolean,
    text?: string,
  }
  const Input = (props:InputProps) => {
    return (
      <div className={styles.input}>
        <label>
          <div className={styles.input_icon} onClick={props.handleClick}>
            {props.icon}
          </div>
          <input
            type={props.type}
            name={props.name}
            onChange={props.handleChange}
            defaultValue={props.defaultValue}
            disabled={props.disabled}
            placeholder="&nbsp;"
            autoComplete="off"
          />
          <span>{props.text}</span>
        </label>
      </div>
    );
  };
  
  export default Input;