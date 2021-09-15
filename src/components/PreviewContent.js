import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PreviewContent({ children, icon, alt, title, content }) {
  return (
    <Row className='flex-column'>
      <Col>
        <img src={icon} alt={alt} />
      </Col>
      <Col>
        <h1>{title}</h1>
      </Col>
      <Col>
        <p>{content}</p>
      </Col>
      <Col>{children}</Col>
    </Row>
  );
}

export default PreviewContent;
