import { Mainmodal } from './Mainmodal/Mainmodal';
import { useGetCookieEvent } from './Mainmodal/useGetCookieEvent';
import { Linebanner } from './Linebanner/Linebanner';

function Home() {
  const { isModalOpen, setModalOpen } = useGetCookieEvent();

  return (
    <>
      <div>Home</div>
      <Linebanner />
      {isModalOpen ? <Mainmodal setModalOpen={setModalOpen} /> : null}
    </>
  );
}


export default Home;
