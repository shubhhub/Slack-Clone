import React, { useState, useEffect } from 'react'
import "./Chat.css"
import { useParams } from "react-router-dom"
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import db from './firebase'
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
    const { roomID } = useParams()
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        if (roomID) {
            db.collection('rooms').doc(roomID).onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ))
        }
        db.collection('rooms').doc(roomID).collection('messages').orderBy('timeStamp', 'asc').onSnapshot((snapshot) => (
            setRoomMessages(
                snapshot.docs.map(doc => doc.data())
            )
        )
        )
    }, [roomID])
    // console.log(roomDetails)
    // console.log('Message ', roomMessages)
    return (
        <div className='chat'>
            {/* <h2>You are in the {roomID} room</h2> */}
            <div className='chat__header'>
                <div className='chat__headerLeft'>
                    <h4 className='chat__channelName'>
                        <strong>#{roomDetails?.name}</strong>
                        {/* ? means optional chaining, es6-es7 feature, like an instant try catch, help in keeping app from crashing*/}
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className='chat__headerRight'>
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>

            </div>
            <div className='chat__messages'>
                {/* <Message ... */}
                { roomMessages.map(({message, timeStamp, user, userImage}) => (
                    <Message 
                    message = {message}
                    timeStamp = {timeStamp}
                    user = {user}
                    userImage = {userImage}
                    />
                ))}
            </div>
            <ChatInput channelName = {roomDetails?.name} channelId = {roomID}/>
        </div>
    )
}

export default Chat