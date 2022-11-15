import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes';

import Navbar from '../components/Navbar';
import Layout from '../components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">

      <Navbar /> 
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
