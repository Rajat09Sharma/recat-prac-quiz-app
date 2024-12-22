import React, { useEffect, useState } from 'react'

export default function QuestionTimer({ timeout, onTimeout, mode }) {

    const [remainingTIme, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(() => {
            {onTimeout && onTimeout()}
        }, timeout);

        return () => {
            clearTimeout(timer)
        }
    }, [timeout, onTimeout])

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime((prevState) => prevState - 100);
        }, 100);

        return () => {
            clearInterval(timer)
        }
    }, [])

    // console.log("otc");
    return (
        <progress value={remainingTIme} max={timeout} className={mode} />
    )
}


/*


*/