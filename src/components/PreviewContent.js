import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PreviewContent({ children, icon, alt, title, content }) {
  return (
    <Row className='flex-column p-3 m-5'>
      <Col className='pb-5 mb-1'>
        <img src={icon} alt={alt} />
      </Col>
      <Col className='pb-5'>
        <h1 className='text-white text-opacity-95 text-uppercase'>{title}</h1>
      </Col>
      <Col className='pb-5'>
        <p className='text-white text-opacity-75'>{content}</p>
      </Col>
      <Col>{children}</Col>
    </Row>
  );
}

export default PreviewContent;
