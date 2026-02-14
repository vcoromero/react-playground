import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gif.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

const searches = ['Hollow knigt', 'Silksong', 'Hades']
export const GifApp = () => {

    const [previousTerms, setPreviousTerms] = useState(searches)

    const handleTermClicked = (term: string) => {
        console.log({ term })
    }

    return (
        <>
            { /* Header */}
            <CustomHeader title="Gifs searcher" description="Find the best gifs for your search" />

            { /* Search input */}
            <SearchBar placeholder="Search what you want" />

            {/* Previous searches */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

            {/* Gifs */}
            <GifList gifs={mockGifs} />
        </>
    )
}