const Footer = () => {
  return (
    <footer>
      <h3>Colors:</h3>
      <div className="grid grid-cols-5 h-[2rem] bg-primary py-[0.2rem] gap-[0.2rem] uppercase text-center">
        <div className="bg-feature">feature</div>
        <div className="bg-additional">additional</div>
        <div className="bg-primary text-secondary">primary</div>
        <div className="bg-secondary">secondary</div>
        <div className="bg-accent">accent</div>
      </div>
    </footer>
  );
};

export default Footer;
