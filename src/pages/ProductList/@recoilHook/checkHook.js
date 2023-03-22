import { useRecoilState } from 'recoil'

import { checkState, checkArrState } from '../@recoil/checkState'

export const checkHook = () => {
  const [check, setCheck] = useRecoilState(checkState)
  const [checkArr, setCheckArr] = useRecoilState(checkArrState)

  const setcheckValue = (e) => {
    e.preventDefault
    setCheck(!check)
    setCheckArr([])
  }

  const pushItemToBoxDataArr = (obj, status) => {
    let copyArray = [...checkArr]

    // 자식 컴포에서 체크박스를 부분 체크했을 경우
    if (status === 'add') {
      copyArray.push(obj)
      copyArray.forEach((obj, idx) => (obj.index = idx + 1)) // order 키로 넘버링
      setCheckArr(copyArray)
    }
    if (status === 'delete') {
      // 자식 컴포에서 체크박스를 해제했을 경우, 강의명으로 비교하여 해당 원소 삭제
      const deleteArray = copyArray.filter((item) => item.index !== obj.index)

      setCheckArr(deleteArray)
    }
  }

  return { check, checkArr, setcheckValue, pushItemToBoxDataArr }
}
