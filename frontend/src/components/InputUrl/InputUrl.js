import React, { useState, useRef } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { createShortUrl } from './../../api';

//development
require('dotenv').config();

function InputUrl({ retriedData, onDataRetrieval }) {
  const [longUrl, setLongUrl] = useState('');

  async function shortenUrl() {
    const payLoad = {
      longUrl,
    };
    await createShortUrl(payLoad).then((res) => {
      onDataRetrieval(retriedData.concat(res.data));
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

  const divStyle = {
    top: '150px',
  };
  return (
    <div style={divStyle}>
      <InputGroup className="mb-3">
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
    </div>
  );
}

export default InputUrl;
