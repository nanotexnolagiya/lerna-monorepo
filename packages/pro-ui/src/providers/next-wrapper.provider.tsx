import { FC, HTMLProps } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const RegistryProvider: FC<Pick<HTMLProps<HTMLElement>, 'children'>> = ({
  children,
}) => {
  return <AntdRegistry>{children}</AntdRegistry>;
};

export default RegistryProvider;