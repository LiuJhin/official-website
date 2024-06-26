import Text from '../_atoms/Text';

const Footer = () => {
  return (
    <footer>
      <Text>© {new Date().getFullYear()} Kevin's Blog. All rights reserved.</Text>
    </footer>
  );
};

export default Footer;