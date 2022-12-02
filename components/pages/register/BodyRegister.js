import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import {BsEnvelopeFill} from 'react-icons/bs';
import Card from 'react-bootstrap/Card';

function BodyRegister() {
  return (
    <Container className ="p-5">
    <Card className ="p-4" bg= "shadow text-bg-kv-primary-700" style={{ width: '25' }}>
      <Card.Body>
     <Stack gap={2} className="col-md-5 mx-auto">
     <Form.Group className="mb-7">
        <Card.Title > <h2>Cadastre-se !</h2> </Card.Title>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Label> Seu nick</Form.Label>
        <Form.Control type="text" placeholder="Digite seu nome" /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasictext">
        <Form.Label> Seu CPF</Form.Label>
        <Form.Control type="text" placeholder="Digite seu cpf" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de e-mail</Form.Label>
        <Form.Control type="email" placeholder="Digite seu email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Sua senha</Form.Label>
        <Form.Control variant="shadow text-bg-kv-primary-900" type="password" placeholder="Digite sua senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirme sua senha</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Tenho 13 anos de idade ou mais e aceito os termos 
do Acordo de Assinatura da KeyVault e da sua 
Política de Privacidade." />
      </Form.Group>
      
      <Button variant="shadow text-bg-kv-primary-900">
        Cadastrar na Plataforma 
      </Button>
      
     </Stack>
     </Card.Body>
    </Card>
    </Container>
  );
}
export default BodyRegister;