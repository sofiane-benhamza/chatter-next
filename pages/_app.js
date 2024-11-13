import "@/styles/globals.scss";
import Header from '@/components/Header'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import react, { useState } from "react";

export default function App({ Component, pageProps }) {
  const [pageTitle, setPageTitle] = useState("Welcome to Chatter")
  return (<>
    <Header />
    <Component {...pageProps} pageTitle={pageTitle}/>
  </>)
}
