import React from 'react';
import { Button } from 'antd';
import MainTemplate from '@/components/_templates/MainTemplate'

const HomePage = () => {
  return (
    <MainTemplate>
      <div>
        <h1>1</h1>
        <p>1</p>
        {/* 更多内容 */}
        <div className="App">
          <Button type="primary">Button</Button>
        </div>
      </div>
    </MainTemplate>
  );
};

export default HomePage;    