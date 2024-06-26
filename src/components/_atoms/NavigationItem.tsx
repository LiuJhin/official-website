import React from 'react';
import { Link } from '@/components/_atoms/Link'; // 确保正确导入Link组件
// import './NavigationItem.css'; // 导入样式

interface NavigationItemProps {
  href: string;
  text: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ href, text }) => {
  return (
    <li>
      <Link href={href} className="navigation-item">{text}</Link>
    </li>
  );
};

export default NavigationItem;