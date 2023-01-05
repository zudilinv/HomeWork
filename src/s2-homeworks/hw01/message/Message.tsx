import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";


export type MessagePropsType = {
    message: MessageType
}

const Message = (props: MessagePropsType) => {

    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img src={props.message.user.avatar}
                     id={'hw1-avatar-' + props.message.id}/>
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {'Ivan'}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {'I am going forward!'}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {'20:00'}
            </div>
        </div>
    )
}

export default Message
