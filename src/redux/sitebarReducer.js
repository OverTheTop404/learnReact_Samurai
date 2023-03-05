let initialState = [
    {id: 1, name: 'Andrey', lastViewed: '1 минуту назад', avatar: 'https://i.yapx.ru/Ra9P6.jpg'},
    {
        id: 31,
        name: 'Andrey',
        lastViewed: '3 минуты назад',
        avatar: 'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg'
    },
    {
        id: 59,
        name: 'Ilya',
        lastViewed: '2 часа назад',
        avatar: 'https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg'
    },
    {id: 84, name: 'Vsevolod', lastViewed: '2 дня назад', avatar: 'https://i.yapx.ru/Ra8I0.jpg'},
    {
        id: 14,
        name: 'Misha',
        lastViewed: 'Был в сети вчера',
        avatar: 'https://weblinks.ru/wp-content/uploads/2021/04/3zeynnx6ija.jpg'
    },
    {
        id: 23,
        name: 'Sergey',
        lastViewed: 'Только что',
        avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'
    }
]

const siteBarReducer = (state = initialState, action) => {
    return state
}

export default siteBarReducer