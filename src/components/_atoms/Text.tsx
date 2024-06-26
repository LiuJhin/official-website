import React from 'react';
// import './Text.css'; // 导入样式

interface TextProps {
  children: React.ReactNode;
  as?: 'p' | 'span' | 'div'; // 允许不同HTML元素
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, as: Element = 'p', className = '' }) => {
  return React.createElement(Element, { className: `text ${className}` }, children);
};

export default Text;