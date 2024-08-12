import React, {useState, useEffect} from 'react'

function UseInternateStatus() {
    
    const [isOnline, setIsOnline] = useState(true);

    useEffect( () => {
        // handle online and offline events

        const setOnline = () => {
        setIsOnline(true);
        }

        const setOffline = () => {
        setIsOnline(false);
        }

        window.addEventListener("online", setOnline);
        window.addEventListener("offline", setOffline);

        return(() => {
        window.removeEventListener("online", setOnline);
        window.removeEventListener("offline", setOffline)
        })
    }, [])

    
    return isOnline;
}

export default UseInternateStatus
