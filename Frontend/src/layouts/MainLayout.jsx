import React from 'react';
import Header from '@/components/Header/Header';  // @로 src를 경로 지정

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
