import React, { useCallback, useReducer } from 'react'
import ChatContext from './ChatContext'
import reduce from './ChatReducer'

const ws = new WebSocket('wss://androidnodeserverchat.herokuapp.com')

function ChatState({ children }) {
    let [state, dispatch] = useReducer(reduce, {
        messages: [],
        connection: false
    })

    const connect = useCallback(
        () => {
            ws.addEventListener("open", (evt) => {
                connectionOpen();
            })
            ws.addEventListener("close", (evt) => {
                connectionClose();
            })
            ws.onmessage = (evt) => {
                let obj = JSON.parse(evt.data)
                newMessage(obj)
            }
        },
        [],
    )

    function newMessage(msg) {
        dispatch({
            type: "NEW_MESSAGE",
            payload: msg
        })
    }

    function connectionOpen(msg) {
        dispatch({
            type: "CONNECTION_OPEN",
        })
    }
    function connectionClose(msg) {
        dispatch({
            type: "CONNECTION_CLOSE",
        })
    }

    function sendMessage(msg) {
        ws.send(msg);
    }
    return (
        <ChatContext.Provider value={{
            messages: state.messages, connection: state.connection, sendMessage, connect
        }

        }>
            {children}
            {console.log(1)}
        </ChatContext.Provider>
    )
}

export default ChatState
