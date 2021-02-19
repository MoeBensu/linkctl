import Header from './components/Header/Header';
import InputUrl from './components/InputUrl/InputUrl';
import UrlsList from './components/UrlsList/UrlsList';
import { useState } from 'react';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [retriedData, onDataRetrieval] = useState([]);

  return (
    <>
      <Header></Header>
      <Container>
        <InputUrl
          retriedData={retriedData}
          onDataRetrieval={onDataRetrieval}></InputUrl>
        {retriedData.length ? (
          <UrlsList retriedData={retriedData}></UrlsList>
        ) : null}
      </Container>
    </>
  );
}

export default App;
