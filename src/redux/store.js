import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogReducer";

let store = {
//     _state: {
//         friends: [
//             {id: 1, name: 'Andrey', lastViewed: '1 минуту назад', avatar: 'https://i.yapx.ru/Ra9P6.jpg'},
//             {
//                 id: 31,
//                 name: 'Andrey',
//                 lastViewed: '3 минуты назад',
//                 avatar: 'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg'
//             },
//             {
//                 id: 59,
//                 name: 'Ilya',
//                 lastViewed: '2 часа назад',
//                 avatar: 'https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg'
//             },
//             {id: 84, name: 'Vsevolod', lastViewed: '2 дня назад', avatar: 'https://i.yapx.ru/Ra8I0.jpg'},
//             {
//                 id: 14,
//                 name: 'Misha',
//                 lastViewed: 'Был в сети вчера',
//                 avatar: 'https://weblinks.ru/wp-content/uploads/2021/04/3zeynnx6ija.jpg'
//             },
//             {
//                 id: 23,
//                 name: 'Sergey',
//                 lastViewed: 'Только что',
//                 avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
//             }
//         ],
//         dialogsPage: {
//             dialogs: [
//                 {
//                     id: 1, dialogId: 31, order: 1, messages: [
//                         {id: 0, message: 'Hi', fromPerson: 31, sendTime: '18:35'},
//                         {id: 1, message: 'Yo', fromPerson: 1, sendTime: '18:36'},
//                         {id: 2, message: 'How are you?', fromPerson: 31, sendTime: '18:36'},
//                         {id: 3, message: 'Let`s start to learn react!', fromPerson: 1, sendTime: '18:38'}
//                     ]
//                 },
//                 {
//                     id: 2, dialogId: 14, order: 2, messages: [
//                         {id: 0, message: 'Hello', fromPerson: 84, sendTime: '18:35'},
//                         {id: 1, message: 'How is you`re react?', fromPerson: 84, sendTime: '18:35'},
//                         {id: 2, message: 'Fine', fromPerson: 1, sendTime: '18:35'}
//                     ]
//                 },
//                 {
//                     id: 3, dialogId: 84, order: 3, messages: [
//                         {id: 0, message: 'Whats up men?', fromPerson: 14, sendTime: '18:35'},
//                         {id: 1, message: 'sup = whats up', fromPerson: 1, sendTime: '18:35'}
//                     ]
//                 },
//                 {
//                     id: 4, dialogId: 23, order: 4, messages: [
//                         {id: 0, message: 'Blabla', fromPerson: 23, sendTime: '18:35'},
//                         {id: 1, message: 'Very interesting :-)', fromPerson: 1, sendTime: '18:35'},
//                         {id: 2, message: 'I know)', fromPerson: 23, sendTime: '18:35'}
//                     ]
//                 },
//                 {
//                     id: 5, dialogId: 59, order: 5, messages: [
//                         {id: 0, message: 'Where is mouse`s Andrey?', fromPerson: 59, sendTime: '18:35'},
//                         {id: 1, message: 'There is a mouse on the table', fromPerson: 1, sendTime: '18:35'}
//                     ]
//                 }
//             ],
//             newMessage: 'Andrey the BEST and NUMBER ONE'
//         },
//         profilePage: {
//             posts: [
//                 {id: 0, message: 'Today I learn react', likeCount: 100501},
//                 {id: 1, message: 'This is my second post', likeCount: 57},
//                 {id: 2, message: 'This is my first post', likeCount: 35},
//             ],
//             newPostText: 'Andrey TOP 1'
//         }
//     },
//     _callSubscriber(){},
//     getState(){
//         return this._state
//     },
//     dispatch(action){
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._callSubscriber()
//     },
//     subscribe(observer){
//         this._callSubscriber = observer
//     }
}


export default store