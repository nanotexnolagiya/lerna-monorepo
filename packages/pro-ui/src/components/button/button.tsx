import { Button as AntButton, ButtonProps } from 'antd';

const Button = (props: ButtonProps) => {
  return <AntButton {...props} className='bg-main' />;
};

export default Button;
