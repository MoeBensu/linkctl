import React, { useState, useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Overlay, Tooltip } from 'react-bootstrap';
import { toClientHostname } from '../../../utlis';

function UrlsList({ longUrl, redirectCode, clicks }) {
  const [copied, setCopied] = useState(false);
  const mappedUrl = toClientHostname(redirectCode);

  const buttonRef = useRef();

  function handleCopyEvent(event) {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }

  return (
    <tr>
      <td>
        <a href={longUrl} target="blank">
          {longUrl}
        </a>
      </td>
      <td>
        {' '}
        <a href={mappedUrl} target="blank">
          {mappedUrl}
        </a>
      </td>
      <td style={{ textAlign: 'center' }}>{clicks}</td>
      <td>
        <>
          <CopyToClipboard text={mappedUrl} onCopy={handleCopyEvent}>
            <Button ref={buttonRef} variant="outline-success">
              Copy!
            </Button>
          </CopyToClipboard>
          <Overlay target={buttonRef.current} show={copied} placement="right">
            {(props) => (
              <Tooltip id="copy-tooltip" {...props}>
                Copied!
              </Tooltip>
            )}
          </Overlay>
        </>
      </td>
    </tr>
  );
}

export default UrlsList;
