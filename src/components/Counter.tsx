import { useState } from "react";
import style from './Counter.module.scss'


export const Counter = () => {
    const [count, setCount] = useState(0)
    const incr = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p className={style.p}>{count}</p>
            <button onClick={incr}>inc</button>
        </div>
    );
};

