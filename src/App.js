import { useEffect } from 'react';
import Container from './components/Container';
import Section from './components/Section';
import Hero from './components/Hero';
import About from './components/About';
import List from './components/List';
import Work from './components/Work';
import Partners from './components/Partners';
import Info from './components/Info';
import Send from './components/Send';
import Form from './components/Form';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader';
import Script from '@gumgum/react-script-tag';

export default function App() {
  // const dispatch = useDispatch();
  // const isFetchingUser = useSelector(authSelectors.getIsFetchingCurrent);

  // useEffect(() => {
  //   dispatch(authOperations.getCurrentUser());
  // }, [dispatch]);

  return (
    <>
      <Hero />
      <Section>
        <About />
      </Section>
      <Section>
        <List />
      </Section>
      <Section>
        <Work />
      </Section>
      <Section>
        <Partners />
      </Section>
      <Section>
        <Info />
      </Section>
      <Section>
        <Send />
      </Section>
      <Section>
        <Form />
      </Section>
      <Section>
        <Footer />
      </Section>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Script src="./js/script.js" type="text/html"></Script>
    </>
  );
}
