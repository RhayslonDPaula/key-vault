import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BodyRegister from '../../components/pages/register/BodyRegister';

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <Header activeKey={"/"} />
      <div className="mb-auto">
      <BodyRegister/>
      </div>
      <Footer />
    </div>
    
  );
}
