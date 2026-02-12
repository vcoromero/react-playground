import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemsInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemsInCart[] = [
    { productName: "Nintendo Switch 2", quantity: 10 },
    { productName: "PlayStation 5", quantity: 5 },
    { productName: "Xbox Series X", quantity: 3 },
    { productName: "PC", quantity: 2 },
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Shopping Cart</h1>
            {itemsInCart.map((item) => (
                <ItemCounter key={item.productName} productName={item.productName} quantity={item.quantity} />
            ))}

        </>
    )
}