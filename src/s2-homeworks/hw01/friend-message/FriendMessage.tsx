import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";


export type FriendMessageType = {
    message: MessageType
}
const FriendMessage = (props: FriendMessageType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img src={props.message.user.avatar}
                    id={'hw1-friend-avatar-' + props.message.id}/>
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}>
                        {'Semen'}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}>
                        {'Hello, how are you?'}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}>
                {'20:05'}
            </div>
        </div>
    )
}

export default FriendMessage
