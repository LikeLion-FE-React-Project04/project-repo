import { useRecoilValue } from 'recoil'

import styles from './RenderFilterLi.module.css'

import { checkHook } from './@recoilHook/checkHook'

import { categoryLengthListSelectorFamily } from '@/store/productListState.js'

export const RenderFilterNameLi = ({ name = 'brand', value = '스타벅스' }) => {
  const countMap = useRecoilValue(categoryLengthListSelectorFamily(name))
  const { check, checkArr, setcheckValue } = checkHook()

  return (
    <ul className={styles.navMenuUl}>
      <li className={styles.navMenuUlList}>
        <input
          onClick={(e) => setcheckValue(e)}
          type="checkbox"
          name="checkbox"
          id="check-box"
          value={value}
        />
        <div className={styles.productExText}>{value}</div>
        <span className={styles.ulListCount}>{countMap[value]}</span>
      </li>
    </ul>
  )
}

export const RenderFilterKarlyOnlyLi = ({
  name = '희소가치 프로젝트',
  value = '0',
}) => {
  const countMap = useRecoilValue(categoryLengthListSelectorFamily(name))

  // console.log(countMap.true)

  return (
    <ul className={styles.navMenuUl}>
      <li className={styles.navMenuUlList}>
        <input type="checkbox" name="checkbox" id="check-box" value={value} />
        <label htmlFor="check-box">
          <div className={styles.productExText}>{name}</div>
        </label>
        <span className={styles.ulListCount}>{countMap[true]}</span>
      </li>
    </ul>
  )
}

export const RenderFilterBenefitsLi = ({
  name = '희소가치 프로젝트',
  value = '0',
}) => {
  // const countMap = useRecoilValue(benefitsLengthListSelectorFamily(name))

  // console.log(countMap.true)

  return (
    <ul className={styles.navMenuUl}>
      <li className={styles.navMenuUlList}>
        <input type="checkbox" name="checkbox" id="check-box" value={value} />
        <label htmlFor="check-box">
          <div className={styles.productExText}>{name}</div>
        </label>
        <span className={styles.ulListCount}>{value}</span>
      </li>
    </ul>
  )
}
