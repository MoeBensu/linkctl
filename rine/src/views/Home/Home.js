import Header from '../../components/Header/Header';
import PageFooter from '../../components/Footer/Footer';

import InputUrl from '../../components/InputUrl/InputUrl';
import UrlsList from '../../components/UrlsList/UrlsList';
import { useState } from 'react';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [retriedData, onDataRetrieval] = useState([]);

  return (
    <>
      <Header />
      <Container>
        <InputUrl
          retriedData={retriedData}
          onDataRetrieval={onDataRetrieval}></InputUrl>

        {retriedData.length ? (
          <UrlsList retriedData={retriedData}></UrlsList>
        ) : null}
      </Container>
      <PageFooter />
    </>
  );
}

export default Home;
