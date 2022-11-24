import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

function BodyRegister() {
  return (
    <Container>
     <Stack gap={2} className="col-md-5 mx-auto">
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> <b>Faça login e comece a usar! </b></Form.Label>
        </Form.Group>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de e-mail</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Sua senha</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Lembrar de min por 30 dias" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login 
      </Button>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Text className="text-muted">
          Não possui conta? Crie uma agora ?
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Text className="text-muted">
          Esqueceu a senha ?
        </Form.Text>
      </Form.Group>
    </Form>
     </Stack>
    </Container>
  );
}
export default BodyRegister;