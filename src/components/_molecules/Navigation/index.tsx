import Logo from '../../_atoms/Logo';
import Link from '../../_atoms/Link';
import './index.css';

const Navigation = () => {
  return (
    <nav>
      <Logo />
      <ul>
        <li><Link href="/">首页</Link></li>
        <li><Link href="/about">关于我</Link></li>
        <li><Link href="/contact">联系方式</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;