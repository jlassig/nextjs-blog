import "../styles/global.css"
import type {AppProps} from 'next/app'
import React, {Component} from 'react';


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
