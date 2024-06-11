'use client';
import Lottie from 'react-lottie';
import * as animationData from './react.json';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const ReactLottie = () => {
  return <Lottie options={defaultOptions} height={500} width={500} />;
};

export default ReactLottie;
