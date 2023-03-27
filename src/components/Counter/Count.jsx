import { useRecoilValue } from 'recoil';
import { countState } from '@/store/CounterState.js';

export default function Count({ name = 'default' }) {
  const count = useRecoilValue(countState);

  return <span>{count[name]}</span>;
}
