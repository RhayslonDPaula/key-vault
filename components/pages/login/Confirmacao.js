import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';


function Confirmacao() {
  return ( 
    <Container className ="p-5">
    <Card className ="p-5"  bg= "shadow text-bg-kv-primary-700" style={{ width: '25' }}>
      <Card.Body>
   
     <Stack gap={2} className="col-md-5 mx-auto">
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Card.Title> <h1> E-mail Enviado!</h1></Card.Title>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Um e-mail foi enviado para o seu endereço de e-mail com instruções sobre como redefinir sua senha.Caso não receba dentro de alguns minutos ,verifique se usou o endereço de e-mail em questão na sua conta da KeyVault e tente novamente ou entre em contato conosco para obter ajuda.</Form.Label>
      </Form.Group>

      <Button variant="shadow text-bg-kv-primary-900" 
      href="/login">
        Entrar  
      </Button>

    
     </Stack>
    
    </Card.Body>
    </Card>
    </Container>
  );
}
export default Confirmacao;