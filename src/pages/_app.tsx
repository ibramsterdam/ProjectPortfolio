import Theme from '../styles/theme';
import { AppProps } from 'next/app';

const prefix = '/ProjectPortfolio';
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
