import React, { useContext } from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap';
import ChatContext from '../../Context/ChatContext';
function MessageList() {
    const {messages} = useContext(ChatContext);

    function getPositionClass(what) {
        if (what === 1) {
            return "justify-content-end";
        }
        if (what === 2) {
            return "justify-content-start";
        }
        return "justify-content-center";
    }
    function getAlertClass(what) {
        if (what === 1) {
            return "success";
        }
        if (what === 2) {
            return "primary";
        }
        return "light";
    }
    return (
        < Container className = {""} >
            {console.log(messages)}
            {
                messages.map((item, i) => {
                    return (
                        <Row className={getPositionClass(item.what)}
                            key={i}>
                            <Alert variant={getAlertClass(item.what)}>
                                {item.message}
                            </Alert>
                        </Row>
                    )
                })
            }
        </Container >
    )
}

export default MessageList
