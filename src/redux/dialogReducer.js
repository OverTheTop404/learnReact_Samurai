const ADD_MESSAGE = 'select-dialog/ADD-MESSAGE'

let initialState = {
    dialogs: [
        {
            id: 1, dialogId: 31, order: 1, messages: [
                {id: 0, message: 'Hi', fromPerson: 31, sendTime: '18:35'},
                {id: 1, message: 'Yo', fromPerson: 1, sendTime: '18:36'},
                {id: 2, message: 'How are you?', fromPerson: 31, sendTime: '18:36'},
                {id: 3, message: 'Let`s start to learn react!', fromPerson: 1, sendTime: '18:38'}
            ]
        },
        {
            id: 2, dialogId: 14, order: 2, messages: [
                {id: 0, message: 'Hello', fromPerson: 84, sendTime: '18:35'},
                {id: 1, message: 'How is you`re react?', fromPerson: 84, sendTime: '18:35'},
                {id: 2, message: 'Fine', fromPerson: 1, sendTime: '18:35'}
            ]
        },
        {
            id: 3, dialogId: 84, order: 3, messages: [
                {id: 0, message: 'Whats up men?', fromPerson: 14, sendTime: '18:35'},
                {id: 1, message: 'sup = whats up', fromPerson: 1, sendTime: '18:35'}
            ]
        },
        {
            id: 4, dialogId: 23, order: 4, messages: [
                {id: 0, message: 'Blabla', fromPerson: 23, sendTime: '18:35'},
                {id: 1, message: 'Very interesting :-)', fromPerson: 1, sendTime: '18:35'},
                {id: 2, message: 'I know)', fromPerson: 23, sendTime: '18:35'}
            ]
        },
        {
            id: 5, dialogId: 59, order: 5, messages: [
                {id: 0, message: 'Where is mouse`s Andrey?', fromPerson: 59, sendTime: '18:35'},
                {id: 1, message: 'There is a mouse on the table', fromPerson: 1, sendTime: '18:35'}
            ]
        }
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                dialogs: state.dialogs.map(dialog => {
                    if (dialog.dialogId === action.dialogId) {
                        return {
                            ...dialog,
                            messages: [
                                ...dialog.messages,
                                {
                                    id: dialog.messages.length,
                                    message: action.message,
                                    fromPerson: action.personId,
                                    sendTime: '13:35'
                                }
                            ]
                        }
                    }
                    return dialog
                }),
            }
        default:
            return state
    }
}

export const addMessage = (dialogId, personId = 1, message) => ({type: ADD_MESSAGE, dialogId, personId, message})

export default dialogReducer