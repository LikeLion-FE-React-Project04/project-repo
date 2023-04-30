import styles from './FormInput.module.scss';

export function FormInput({ className = '', id, label, ...restProps }) {
  const combinedClassNames = `${styles.input} ${className}`.trim();

  return (
    <>
      <label className = "a11yHidden" htmlFor={id}>{label}</label>
      <input id={id} {...restProps} className={combinedClassNames} />
    </>
  );
}
