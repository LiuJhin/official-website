import React from 'react';
// import './Link.css'; // 导入样式

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ href, children, className = '' }) => {
  return (
    <a href={href} className={`link ${className}`}>
      {children}
    </a>
  );
};

export default Link;