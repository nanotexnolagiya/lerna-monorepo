'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Button from 'pro-ui/components/button';
import { useEffect, useMemo, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const Theme = () => {
  const navigate = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const theme = Cookies.get('theme');
    setTheme(String(theme));
  }, [setTheme]);

  const themeConfig = useMemo(() => {
    const isLight = theme === 'light';
    return {
      onClick: () => {
        const newTheme = isLight ? 'dark' : 'light';
        Cookies.set('theme', newTheme, { expires: 365 * 10, path: '/' });
        setTheme(newTheme);
      },
      icon: isLight ? (
        <Moon className="w-[1rem] h-[1rem] stroke-secondary" />
      ) : (
        <Sun className="w-[1rem] h-[1rem] stroke-primary" />
      ),
    };
  }, [setTheme, theme]);
  if (!mounted) return null;

  return (
    <>
      <Button
        icon={themeConfig.icon}
        onClick={themeConfig.onClick}
        type="primary"
      />
    </>
  );
};

export default Theme;
