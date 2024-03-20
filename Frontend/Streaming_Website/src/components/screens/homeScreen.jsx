import { React, useState, useCallback, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { useSocket } from '../context/contextProvider';

function HomeScreen() {
    const [email, setEmail] = useState('');
    const [room, setRoom] = useState('');

    const socket = useSocket();
    const navigate = useNavigate();

    const handleSubmitForm = useCallback((e) => {
        e.preventDefault()
        socket.emit('room:join', {
            email, room
        })
    }, [email, room, socket]);

    const handleJoinRoom = useCallback((data) => {
        const { email, room } = data;
        navigate(`/room/${room}`);
    });

    useEffect(() => {
        socket.on("room:join", handleJoinRoom);
        return () => {
            socket.off('room:join', handleJoinRoom);
        }
    }, []);

    return (
        <>
            <h1>Video Chat</h1>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor='email'>Email Id </label>
                <input type='text' placeholder='Enter your email id..' id='email' value={email} onChange={e => setEmail(e.target.value)} /><br />
                <label htmlFor='email'>Room Number </label>
                <input type='text' placeholder='room no...' value={room} onChange={e => setRoom(e.target.value)}></input>

                <button>Join</button>
            </form>
        </>
    )
}

export default HomeScreen;  