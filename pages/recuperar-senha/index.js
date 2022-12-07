import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RecuperarSenha from '../../components/pages/login/RecuperarSenha';

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <Header activeKey={"/"} />
      <div className="mb-auto">
      <RecuperarSenha/>
      </div>
      <Footer />
    </div>
    
  );
}
