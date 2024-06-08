import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import { HTMLProps } from 'react';
import { ConfigProviderProps } from 'antd';

const UiKitProvider = ({
  children,
  ...props
}: ConfigProviderProps & Pick<HTMLProps<HTMLElement>, 'children'>) => {
  return (
    <ConfigProvider locale={enUS} {...props}>
      {children}
    </ConfigProvider>
  );
};

export default UiKitProvider;
