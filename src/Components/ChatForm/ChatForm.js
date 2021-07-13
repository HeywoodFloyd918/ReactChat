import React, {useContext,useState} from 'react'
import { Button, InputGroup, FormControl } from "react-bootstrap"
import ChatContext from '../../Context/ChatContext'
function ChatForm() {
    const {sendMessage} = useContext(ChatContext)
    let [text, setText] = useState("");
    function submit(){
        sendMessage(text);
    }
    return (
        <div>
            <InputGroup className="mb-3 align-items-end" >
                <FormControl onChange={(e) => { setText(e.target.value) }} />
                <Button variant="outline-secondary" onClick={submit}>Отправить</Button>
            </InputGroup>
        </div>
    )
}

export default ChatForm
