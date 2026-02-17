import { useState } from 'react'
import type { Gif } from '../interfaces/gif.interface'
import { getGifsByQuery } from '../actions/get-gifs-by-query.actions'

const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([])


    const handleTermClicked = async (term: string) => {
        if (gifsCache[term]) {
            setGifs(gifsCache[term])
            return;
        }
        const gifs = await getGifsByQuery(term)
        setGifs(gifs)
    }

    const handleSearch = async (query: string = '') => {
        query = query.toLocaleLowerCase().trim()
        if (query.length === 0) return

        if (previousTerms.includes(query)) return

        setPreviousTerms([query, ...previousTerms.splice(0, 7)])

        const gifs = await getGifsByQuery(query)
        setGifs(gifs)

        gifsCache[query] = gifs
    }

    return {
        gifs,
        previousTerms,

        handleTermClicked,
        handleSearch

    }
}
