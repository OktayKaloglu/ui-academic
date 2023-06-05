import '../styles/globals.css'
import { NextUIProvider, createTheme} from '@nextui-org/react';
import { MainLayout } from '@/components/layouts/MainLayout';

const darkTheme = createTheme({type: "dark"});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={darkTheme}>
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    </NextUIProvider>
  )
}

export default MyApp