import React from 'react';
import {useParams} from "react-router-dom";
import style from './_dialogs.module.scss'
import MessagesList from "./messageList/messageList";
import DialogsList from "./dislogList/dialogList";
import {Field, reduxForm} from "redux-form";

const DialogForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Field type={'text'} placeholder={'Write a message'} rows="1" name={'message'} component={'textarea'}/>
        <button>Send</button>
    </form>
}

const DialogReduxForm = reduxForm({form: 'dialog'})(DialogForm)

const Dialogs = ({dialogsPage, friends, addMessage, reset}) => {

    const params = useParams();
    const currentDialogId = Number(params.id);

    const dialogList = dialogsPage.dialogs.map(dialog => {
        const friendInfo = friends.filter(friend => friend.id === dialog.dialogId)[0]
        return <DialogsList dialogInfo={friendInfo} key={dialog.dialogId}/>
    })

    let messagesList = null

    const currentMessages = dialogsPage.dialogs.filter(dialog => dialog.dialogId === currentDialogId)

    if (currentMessages.length) {
        messagesList = currentMessages[0].messages.map(message => {
            return <MessagesList text={message.message} from={message.fromPerson} key={message.id}/>
        })
    }

    let onAddMessage = formData => {
        addMessage(currentDialogId, 1, formData.message)
        reset('dialog')
    }

    return <div className={style.dialogsPage}>
        <div className={style.dialogsList}>
            <ul>{dialogList}</ul>
        </div>
        <div className={style.messagesList}>
            {messagesList}
            <div className={style.messageArea}>
                <DialogReduxForm onSubmit={onAddMessage}/>
            </div>
        </div>
    </div>
}

export default Dialogs