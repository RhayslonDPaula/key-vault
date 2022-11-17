import Footer from '../components/Footer';
import Header from '../components/Header';
import Bodylogin from '../components/pages/login/Bodylogin';

export default function Home() {
  return (
    <>
      <Header activeKey="/" />
      <Bodylogin/>
      <Footer/>
    </>
  );
}
