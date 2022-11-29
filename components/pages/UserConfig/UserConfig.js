import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import {BsEnvelopeFill} from 'react-icons/bs';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function BodyRegister() {
  const [open, setOpen] = useState(false);
  return (
    
    <Container>
    
    <Card  bg= "shadow text-bg-kv-primary-700" style={{ width: '25' }}>
      <Card.Body>
     <Stack gap={2} className="col-md-5 mx-auto">
     <Button variant= "shadow text-bg-kv-primary-900">
        click
      </Button>
      <Button
        variant= "shadow text-bg-kv-primary-800"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
     </Stack>
     </Card.Body>
    </Card>
    </Container>
  );
}
export default BodyRegister;