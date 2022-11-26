import { Provider, defaultTheme, SSRProvider } from '@adobe/react-spectrum';
import { AuthProvider } from '@watheia/waweb.auth';
import { MessageProvider } from '@watheia/waweb.message';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { UiProvider } from '@watheia/waweb.ui';

function WaNextApp({ Component, pageProps }: AppProps) {
  // keep color scheme in sync with tailwindcss
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('dark');
  useEffect(() => {
    setColorScheme(
      window.document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
    );
  }, []);
  return (
    <SSRProvider>
      <MessageProvider>
        <AuthProvider>
          <Provider theme={defaultTheme} colorScheme={colorScheme} minHeight="100%">
            <UiProvider>
              <Component {...pageProps} />
            </UiProvider>
          </Provider>
        </AuthProvider>
      </MessageProvider>
    </SSRProvider>
  );
}

export default WaNextApp;
