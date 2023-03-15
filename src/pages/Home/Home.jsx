import { Mainmodal } from './Mainmodal/Mainmodal';
import { useGetCookieEvent } from './Mainmodal/useGetCookieEvent';

function Home() {
  const { isModalOpen, setModalOpen } = useGetCookieEvent();

  return (
    <>
      <div>Home</div>
      {isModalOpen ? <Mainmodal setModalOpen={setModalOpen} /> : null}
    </>
  );
}


export default Home;
