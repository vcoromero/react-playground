import { useState } from "react";

import styles from './ShoppingCart.module.css'

interface ItemCounterProps {
    productName: string;
    quantity?: number;
}

export function ItemCounter({ productName, quantity = 1 }: ItemCounterProps) {
    const [count, setCount] = useState(quantity);

    const addOne = () => {
        setCount(count + 1);
    }
    const removeOne = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    return (
        <section className={styles.container}>
            <span className={styles.productName}> {productName}</span>
            <button className={styles.button} onClick={addOne}>+1</button>
            <span className={styles.count}>{count}</span>
            <button className={styles.button} onClick={removeOne}>-1</button>
        </section>
    )
}