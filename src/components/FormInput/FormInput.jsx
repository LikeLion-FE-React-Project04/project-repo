import styles from "./FormInput.module.scss";

export function FormInput(props) {
  return (
    <div className={styles.FormInput}>
      <input id="" name={props.name} placeholder={props.placeholder} type={props.type} />
    </div>
  )
}