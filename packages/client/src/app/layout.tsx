import '@/_styles/global.scss';
import type { Metadata } from 'next';
import { RegistryProvider, UiKitProvider } from 'pro-ui';
import Provider from '@/_trpc/provider';
import { ThemeProvider } from 'next-themes';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Welcom Starter',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = String(cookies().get('theme')?.value);
  return (
    <html lang="en">
      <body>
        <ThemeProvider enableSystem={false} attribute="class">
          <Provider>
            <UiKitProvider providerTheme={theme}>
              <RegistryProvider>{children}</RegistryProvider>
            </UiKitProvider>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
