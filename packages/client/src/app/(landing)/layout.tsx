import LandingLayout from '@/_layouts/landing/landing.layout';
import { IDefaultLayout } from '@/_types/common';

const Layout = ({ children }: IDefaultLayout) => {
  return <LandingLayout>{children}</LandingLayout>;
};

export default Layout;
