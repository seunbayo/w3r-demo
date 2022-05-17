import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { web3ReactProvider } from '@web3-react/core'
import web3 from 'web3'




function getLibrary(provider) {
  return new web3(provide)
}

function MyApp({ Component, pageProps }) {
  return (
    <web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </web3ReactProvider>
  );
}

export default MyApp
