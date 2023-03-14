import { useRecoilValue } from 'recoil';
import { countState } from '@/store/CounterState.js';

export default function Count() {
  const count = useRecoilValue(countState);

  return <span>{count}</span>;
}
