// pages/_app.tsx
import '../styles/globals.css'
import { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Sidebar /> 
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
