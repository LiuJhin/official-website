import React from 'react';
import { Button } from 'antd';
// import './Button.css'; // 导入样式

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button type="primary" className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;