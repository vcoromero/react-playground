import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gif.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

const searches = ['Hollow knigt', 'Silksong', 'Hades']
export const GifApp = () => {
    return (
        <>
            { /* Header */}
            <CustomHeader title="Gifs searcher" description="Find the best gifs for your search" />

            { /* Search input */}
            <SearchBar placeholder="Search what you want" />

            {/* Previous searches */}
            <PreviousSearches searches={searches} />

            {/* Gifs */}
            <GifList gifs={mockGifs} />
        </>
    )
}