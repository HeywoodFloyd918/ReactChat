export default function reduce(state, action) {
    switch (action.type) {
        case "CONNECTION_OPEN":
            return {
                ...state,
                connection: true
            }
            break;
        case "CONNECTION_CLOSE":
            return {
                ...state,
                connection: false
            }
            break;
        case "NEW_MESSAGE":
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state;
    }
}