import { Button } from 'pro-ui';
import ReactLottie from './react.lottie';

const ZeroSection = () => {
  return (
    <section className="container mx-auto min-h-screen flex flex-col  items-center">
      <div>
        <ReactLottie />
      </div>
      <div>
        <h1 className="heading-h1 leading-[120%] text-center">
          Become <span className="text-additional">Pro</span> with me
        </h1>
        <p className="body-xlarge-medium mt-6 text-center max-w-[50rem] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          accusamus! Ab illo sed accusantium. Iusto illum repudiandae,
          temporibus distinctio error cupiditate vitae ipsa deserunt officiis
          possimus enim ab libero quas.
        </p>
        <div className="flex items-center justify-center mt-6 gap-4">
          <Button size="large" type="primary">
            Register
          </Button>
          <Button size="large" type="text">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ZeroSection;
