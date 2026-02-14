import { useState } from "react"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import type { Gif } from "./gifs/interfaces/gif.interface"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifApp = () => {

    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([])

    const handleTermClicked = (term: string) => {
        console.log({ term })
    }

    const handleSearch = async(query: string = '') => {
        query = query.toLocaleLowerCase().trim()
        if (query.length === 0) return

        if (previousTerms.includes(query)) return

        setPreviousTerms([query, ...previousTerms.splice(0, 7)])

        const gifs= await getGifsByQuery(query)
        setGifs(gifs)
    }

    return (
        <>
            { /* Header */}
            <CustomHeader title="Gifs searcher" description="Find the best gifs for your search" />

            { /* Search input */}
            <SearchBar placeholder="Search what you want" onQuery={handleSearch} />

            {/* Previous searches */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

            {/* Gifs */}
            <GifList gifs={gifs} />
        </>
    )
}