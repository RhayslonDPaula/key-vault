import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';


function RecuperarSenha() {
  return ( 
    <Container className ="p-5">
    <Card className ="p-5"  bg= "shadow text-bg-kv-primary-700" style={{ width: '25' }}>
      <Card.Body>
   
     <Stack gap={2} className="col-md-5 mx-auto">
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Card.Title> <h2> Esqueceu sua senha ?</h2></Card.Title>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Preencha com o e-mail que você usou para se cadastrar. Você recebera um e-mail com intruções sobre como redefinir sua senha.</Form.Label>
        <Form.Control type="email" placeholder="Digite seu e-mail" />
      </Form.Group>

      <Button variant="shadow text-bg-kv-primary-900" 
      href="/confirmacao">
        Enviar E-mail 
      </Button>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Lembrar sua senha?</Form.Label>
        <Card.Link href="/login">Entrar</Card.Link>
      </Form.Group>

    
     </Stack>
    
    </Card.Body>
    </Card>
    </Container>
  );
}
export default RecuperarSenha;