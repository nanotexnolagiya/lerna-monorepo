'use client';
import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import { HTMLProps } from 'react';
import { ConfigProviderProps } from 'antd';
import { useTheme } from 'next-themes';
import { COLORS } from '../_constants/styles.constants';

const lightMode = {
  token: {
    colorPrimary: COLORS.primary,
  },
};

const darksMode = {
  token: {
    colorPrimary: COLORS.additional,
  },
};

const UiKitProvider = ({
  children,
  providerTheme,
  ...props
}: ConfigProviderProps & { providerTheme: string } & Pick<
    HTMLProps<HTMLElement>,
    'children'
  >) => {
  const { theme } = useTheme();
  return (
    <ConfigProvider
      locale={enUS}
      theme={(theme || providerTheme) === 'dark' ? darksMode : lightMode}
      {...props}
    >
      {children}
    </ConfigProvider>
  );
};

export default UiKitProvider;
