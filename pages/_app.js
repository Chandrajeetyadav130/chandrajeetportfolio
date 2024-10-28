import "@/styles/globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function App({ Component, pageProps }) {
  return<>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </> ;
}
