import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react';
import { MathJaxContext } from 'better-react-mathjax';

type Default = {
  mainState: any,
  setMainState: any
}

export const AppContext = createContext<Default>({
  mainState: null,
  setMainState: null
});

function MyApp({ Component, pageProps }: AppProps) {
  
  const [mainState, setMainState] = useState();

  return (
    <MathJaxContext>
      <AppContext.Provider value={{ mainState, setMainState }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </MathJaxContext>
  )
}

export default MyApp
