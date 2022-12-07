import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Confirmacao from '../../components/pages/login/Confirmacao';

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <Header activeKey={"/"} />
      <div className="mb-auto">
      <Confirmacao/>
      </div>
      <Footer />
    </div>
    
  );
}
