import Header from '../_organisms/Header';
import Footer from '../_organisms/Footer';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainTemplate;