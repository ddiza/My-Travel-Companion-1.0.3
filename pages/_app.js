import "./globals.css";
import { ChakraProvider } from '@chakra-ui/react'
import Head from "next/head";
import Script from 'next/script';

function myApp({ Component, pageProps }) {
  return(        
    <ChakraProvider>
      <Head>
        <script src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}></script>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>       
  );
}   

export default myApp