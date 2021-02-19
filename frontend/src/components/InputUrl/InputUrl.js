import React, { useState, useRef } from 'react';
import axios from 'axios';
import { InputGroup, FormControl, Button, Container } from 'react-bootstrap';

//development
require('dotenv').config();

function InputUrl() {
  const [longUrl, setLongUrl] = useState('');

  async function shortenUrl() {
    const data = {
      longUrl,
    };
    await axios.post(process.env.REACT_APP_HOSTURI_POST, data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }

  const formControlRef = useRef();

  function handleChange(event) {
    setLongUrl(event.target.value);
  }

  function submit(event) {
    event.preventDefault();
    if (formControlRef.current && formControlRef.current.checkValidity()) {
      shortenUrl();
      setLongUrl('');
    } else {
      formControlRef.current.focus();
    }
  }

  function onKeyDown(event) {
    if (event.key === 'Enter') {
      submit(event);
    }
  }

  const containerStyle = {
    top: '50px',
  };
  return (
    <Container className="my-auto">
      <InputGroup className="mb-3" style={containerStyle}>
        <FormControl
          size="lg"
          placeholder="i.e. https://example.com/"
          aria-label="longUrl"
          aria-describedby="basic-addon1"
          value={longUrl}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          ref={formControlRef}
          required
        />
        <InputGroup.Append>
          <Button variant="outline-success" onClick={submit}>
            Shorten!
          </Button>
        </InputGroup.Append>
        <FormControl.Feedback type="invalid">
          Please provide URL to shorten!
        </FormControl.Feedback>
      </InputGroup>
    </Container>
  );
}

export default InputUrl;
