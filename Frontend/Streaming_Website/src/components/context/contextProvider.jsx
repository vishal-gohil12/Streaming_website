import { createContext, useMemo, useContext } from 'react';
import { io } from 'socket.io-client'

const SocketContext = createContext(null);

export const useSocket = () => {
    const socket = useContext(SocketContext);
    if (!socket) {
        throw new Error('useSocket must be used within a SocketProvider');
    }
    return socket;
}

function SocketProvider(props) {
    const socket = useMemo(() => {
        return io('http://localhost:8080');
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}

export default SocketProvider;
