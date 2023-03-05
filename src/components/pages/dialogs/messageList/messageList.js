import style from './_messagesList.module.scss'

const MessagesList = ({from, text}) => {
    return <div className={from === 1 ? style.fromMe : style.fromYou}>
        <div className={style.messageItem}>
            <span className={style.messageText}>{text}</span>
        </div>
    </div>
}

export default MessagesList