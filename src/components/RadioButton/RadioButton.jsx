import styles from '@/components/RadioButton/RadioButton.module.scss';

function RadioButton({children}) {
  return (

    <label className={styles.RadioButtonBox}>
      <input type="radio" name="myRadio" value="option1" className={styles.RadioButton} checked />
        {children}
    </label>

  )
}

export default RadioButton