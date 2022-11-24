import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Bodylogin from '../../components/pages/login/Bodylogin';

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <Header activeKey={"/"} />
      <div className="mb-auto">
      <Bodylogin/>
      </div>
      <Footer />
    </div>
    
  );
}
