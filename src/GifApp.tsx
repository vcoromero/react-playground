import { PreviousSearches } from "./gifs/PreviousSearches"
import { mockGifs } from "./mock-data/gif.mock,"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifApp = () => {
    return (
        <>
            { /* Header */}
            <CustomHeader title="Gifs searcher" description="Find the best gifs for your search" />

            { /* Search input */}
            <SearchBar placeholder="Search what you want" />

            {/* Previous searches */}
            <PreviousSearches />

            {/* Gifs */}
            <div className="gifs-container">
                {mockGifs.map((gif) => (
                    <div className="gif-card" key={gif.id}>
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>{gif.width}x{gif.height}(1.5mb)</p>
                    </div>
                ))}
            </div>
        </>
    )
}