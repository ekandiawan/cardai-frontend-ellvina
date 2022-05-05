import React from 'react';

import cardContentData from '../utils/card-content-data';
import { Col, Row } from 'react-bootstrap';

const CardContent = () => (
  <div className="next-steps my-5">
    <h2 className="my-5 text-center">This is CardAI Card page</h2>
    <Row className="d-flex justify-content-between">
      {cardContentData.map((col, i) => (
        <Col key={i} md={5} className="mb-4">
          <h6 className="mb-3">
            <a target="_blank" rel="noopener noreferrer" href={col.cardImage}>
              {col.cardName}
            </a>
          </h6>
          <img src={col.Image} class="card__image" />
          <p>{col.cardDescription}</p>
        </Col>
      ))}
    </Row>
  </div>
);

export default CardContent;
