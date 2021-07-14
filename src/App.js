import './App.css';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import MessageList from './Components/MessageList/MessageList';
import ChatForm from './Components/ChatForm/ChatForm';
import ChatState from './Context/ChatState';
import { useContext, useEffect } from 'react';
import ChatContext from './Context/ChatContext';

function App() {
  const { connect, connection } = useContext(ChatContext);
  useEffect(() => {
    connect();
  }, [])
  return (
    <Container className={"justify-content-center"} >
      <Row className={"justify-content-center"}>
        Чатик
      </Row>
      {
        connection ?
          <>
            <Row style={{ height: "70vh"}}>
              <MessageList></MessageList>
            </Row>
            <Row >
              <Col >
                <ChatForm></ChatForm>
              </Col>
            </Row>
          </>
          :
          <Row className={"justify-content-center"}>
            <Spinner style={{ height: "20vh", width: "20vh" }} animation="border" variant="secondary" />
          </Row>
      }

    </Container>
  );
}

export default App;
