import type { CSSProperties } from "react";

export function MyAwesomeApp() {
    const firstName = 'Victor';
    const lastName = 'Romero';

    const myFavoriteGames = ['Halo 3', 'Gears 5', 'Hollow Knight', 'Silksong'];
    const isActive = true;

    const myAddress = {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    };

    const myStyle: CSSProperties = {
        backgroundColor: '#fafafa',
        borderRadius: isActive ? 10 : 20,
        padding: 10
    }

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{myFavoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>
            <p>{isActive ? 'Active' : 'Inactive'}</p>

            <p style={myStyle}>{JSON.stringify(myAddress)}</p>
        </>
    )
}