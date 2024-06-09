import { HTMLProps } from 'react';
import Footer from './_components/footer';
import Header from './_components/header';
import { IDefaultLayout } from '@/_types/common';

const LandingLayout = ({ children }: IDefaultLayout) => {
  return (
    <>
      <Header />
      <main className='bg-secondary dark:bg-primary'>{children}</main>
      <Footer />
    </>
  );
};

export default LandingLayout;
