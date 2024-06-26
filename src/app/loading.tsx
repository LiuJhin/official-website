import React from 'react';

// 定义一个简单的加载组件
const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-solid border-blue-500 border-t-transparent"></div>
    </div>
  );
};

export default Loading;