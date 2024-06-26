import React, { useState } from 'react';
// import './Input.css'; // 导入样式

interface InputProps {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, onChange, className = '' }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`input ${className}`}
    />
  );
};

export default Input;