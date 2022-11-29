import Footer from '../../components/Footer';
import Header from '../../components/Header';
import UserConfig from '../../components/pages/UserConfig/UserConfig';

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <Header activeKey={"/"} />
      <div className="mb-auto">
      <UserConfig/>
      </div>
      <Footer />
    </div>
    
  );
}
