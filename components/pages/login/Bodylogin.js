import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import {BsEnvelopeFill} from 'react-icons/bs';
import Card from 'react-bootstrap/Card';


function Bodylogin() {
  return ( 
  <Container>
    <Card bg= "shadow text-bg-kv-primary-700" style={{ width: '25' }}>
      <Card.Body>
   
     <Stack gap={2} className="col-md-5 mx-auto">
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Card.Title> <h2> Faça login e comece a usar!</h2></Card.Title>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de e-mail</Form.Label>
        <Form.Control type="email" placeholder="Digite seu e-mail" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Sua senha</Form.Label>
        <Form.Control type="password" placeholder="**********" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Lembrar de min por 30 dias" />
      </Form.Group>
      <Button variant="shadow text-bg-kv-primary-900" 
      href="/userconfig">
        Login 
      </Button>
      <Form.Group className="mb-3" controlId="formBasiclink">
      <Form.Text className="text-muted">
      <Card.Link href="/register">Não possui conta? Crie uma agora ?</Card.Link>
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Text className="text-muted">
          Esqueceu a senha ?
        </Form.Text>
      </Form.Group>
    
     </Stack>
    
    </Card.Body>
    </Card>
    </Container>
  );
}
export default Bodylogin;