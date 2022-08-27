import '@/assets/styles/globals.css';
import {AppProps} from 'next/app';

const App = ({Component, pageProps}: AppProps) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
