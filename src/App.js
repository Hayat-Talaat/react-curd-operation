import React from 'react';
import { Row, Col } from "react-bootstrap";

import './App.css';
import Users from './components/Users';

function App() {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs lg="10">
          <Users/>
        </Col>
      </Row>
    </>
  );
}

export default App;
