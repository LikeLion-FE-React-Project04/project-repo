import { useState } from 'react';

import { Footer } from '../../components/Footer/Footer';

import { Mainmodal } from './Mainmodal/Mainmodal';

function Home() {
  const [isModalOpen, setModalOpen] = useState(true);

  return (
    <>
      <div>Home</div>
      <Footer/>
      {isModalOpen && <Mainmodal setModalOpen={setModalOpen} />}
    </>
  );
}

export default Home;
