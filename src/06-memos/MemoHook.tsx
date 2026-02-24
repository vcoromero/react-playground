import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubitle } from "./ui/MySubtitle"

export const MemoHook = () => {

    const [title, setTitle] = useState('Mi titulo')
    const [subtitle, setSubtitle] = useState('Mi subtitulo')

    const handleMyAPICall = useCallback(() => {
        console.log('Calling my API');
    }, [subtitle])

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">MemoApp</h1>

            <MyTitle title={title} />
            <MySubitle subtitle={subtitle} callMyAPI={handleMyAPICall} />

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setTitle('Hello')}>
                Cambiar titulo
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setSubtitle(' world')}>
                Cambiar subtitulo
            </button>
        </div>
    )
}
