import { useRecoilValue } from 'recoil';

import { countState } from '@/components/Counter/@recoil/counterState.js';

export default function Count({ name = 'default' }) {
  const count = useRecoilValue(countState);

  return <span>{count[name]}</span>;
}
