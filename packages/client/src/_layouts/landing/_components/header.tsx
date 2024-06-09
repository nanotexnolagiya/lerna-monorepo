import Link from 'next/link';
import Tools from './tools';

const Header = () => {
  return (
    <header className="bg-secondary dark:bg-primary border-b border-b-accent dark:border-b-feature/10">
      <div className="container mx-auto flex items-center justify-between py-3">
        <div className="flex items-center gap-12">
          <Link href="/" className="heading-h6">
            Logo
          </Link>
          <div className="flex items-center">
            <Link href="/" className="px-[1rem]">
              Bepul Darslar
            </Link>
            <Link href="/" className="px-[1rem]">
              Kurslar
            </Link>
            <Link href="/blog" className="px-[1rem]">
              Blog
            </Link>
          </div>
        </div>
        <Tools />
      </div>
    </header>
  );
};

export default Header;
