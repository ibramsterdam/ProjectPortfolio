import Theme from '../styles/theme';
import { AppProps } from 'next/app';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <link rel="shortcut icon" href={prefix + '/favicon.ico'} />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
