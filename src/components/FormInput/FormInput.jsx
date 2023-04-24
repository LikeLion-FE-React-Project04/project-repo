import styles from './FormInput.module.scss';

export function FormInput({ className = '', ...restProps }) {
  const combinedClassNames = `${styles.input} ${className}`.trim();

  return <input {...restProps} className={combinedClassNames} />;
}
