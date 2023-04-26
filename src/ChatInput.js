import React, { useState } from 'react'
import './ChatInput.css'
import db from './firebase'
import { useStateValue } from './StateProvider'
import firebase from './firebase'
import { serverTimestamp } from 'firebase/firestore'

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState('')
    const [{ user }] = useStateValue()
    const sendMessage = e => {
        e.preventDefault();
        if (channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add(
                {
                    message: input,
                    timeStamp: serverTimestamp(),
                    // timeStamp: new Date(),
                    // timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                    // above one not
                    user: user.displayName,
                    userImage: user.photoURL
                }
            )
        }
    }

    return (
        <div className='chatInput'>
            <form>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`}
                />
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    )
}

export default ChatInput