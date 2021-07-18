import React from 'react';
import { Table } from 'react-bootstrap';
import UrlRow from './UrlRow/UrlRow';

function UrlsList({ retriedData }) {
  return (
    <Table responsive="sm md" striped bordered hover>
      <thead>
        <tr>
          <th>ORIGINAL URL</th>
          <th>SHORT URL</th>
          <th>CLICKS</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {retriedData.map((item) => (
          <UrlRow
            key={`id-${item.date}`}
            longUrl={item.longUrl}
            redirectCode={item.redirectCode}
            clicks={item.clicks}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default UrlsList;
