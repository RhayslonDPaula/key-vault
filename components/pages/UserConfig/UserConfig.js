import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';



function UserConfig() {
  const [open, setOpen] = useState(false);
  return (

    <>
      <Container className="p-3">
        <Card bg="shadow text-bg-kv-primary-900" style={{ width: '25rem' }}>
          <Card.Body>

            <Stack direction="horizontal" gap={2} className="col-md-5 mx-auto">

              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="tabs" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Alterar Nome</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Segurança</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Transações</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">

                        <Container>
                          <Card className="p-2" bg="shadow text-bg-kv-primary-800" style={{ width: '25rem' }}>
                            <Card.Body>
                              <Stack gap={2} className="col-md-5 mx-auto">
                                <Form.Group className="mb-3">
                                  <Card.Title> <h2> <b>Detalhe pessoal</b></h2></Card.Title>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                  <Form.Label> Gerencie seu nome e informações de contato. Essas informações pessoais
                                    são privadas e não serão exibidos para outros usuários.
                                    Veja a nossa
                                  </Form.Label>
                                  <Card.Link href="/">Política de Privacidade</Card.Link>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                  <Form.Label>Nome :</Form.Label>
                                  <Form.Control type="email" placeholder="Digite seu Nome" />
                                </Form.Group>
                                <Button variant="shadow text-bg-kv-primary-900"
                                  href="/userconfig">
                                  Salvar mudanças
                                </Button>
                              </Stack>
                            </Card.Body>
                          </Card>
                        </Container>

                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Container >
                          <Card className="p-2" bg="shadow text-bg-kv-primary-800" style={{ width: '25rem' }}>
                            <Card.Body>
                              <Stack gap={2} className="col-md-5 mx-auto">
                                <Form.Group className="mb-3">
                                  <Card.Title> <h2> <b>Detalhe pessoal</b></h2></Card.Title>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                  <Form.Label> Gerencie seu nome e informações de contato. Essas informações pessoais
                                    são privadas e não serão exibidos para outros usuários.
                                    Veja a nossa
                                  </Form.Label>
                                  <Card.Link href="/">Política de Privacidade</Card.Link>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                  <Form.Label>Nome :</Form.Label>
                                  <Form.Control type="email" placeholder="Digite seu Nome" />
                                </Form.Group>
                                <Button variant="shadow text-bg-kv-primary-900"
                                  href="/userconfig">
                                  Salvar mudanças
                                </Button>
                              </Stack>
                            </Card.Body>
                          </Card>
                        </Container>

                      </Tab.Pane>
                      <Tab.Pane eventKey="third">

                        <Container >
                          <Card className="p-2" bg="shadow text-bg-kv-primary-800" style={{ width: '25rem' }}>
                            <Card.Body>
                              <Stack gap={2} className="col-md-5 mx-auto">
                                <Form.Group className="mb-3">
                                  <Card.Title> <h2> <b>Detalhe pessoal</b></h2></Card.Title>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                  <Form.Label> Gerencie seu nome e informações de contato. Essas informações pessoais
                                    são privadas e não serão exibidos para outros usuários.
                                    Veja a nossa
                                  </Form.Label>
                                  <Card.Link href="/">Política de Privacidade</Card.Link>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                  <Form.Label>Nome :</Form.Label>
                                  <Form.Control type="email" placeholder="Digite seu Nome" />
                                </Form.Group>
                                <Button variant="shadow text-bg-kv-primary-900"
                                  href="/userconfig">
                                  Salvar mudanças
                                </Button>
                              </Stack>
                            </Card.Body>
                          </Card>
                        </Container>

                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>










            </Stack>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
export default UserConfig;