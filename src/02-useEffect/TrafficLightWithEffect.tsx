import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
}

type TrafficLightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {

    const [light, setLight] = useState<TrafficLightColor>('red')
    const [countdown, setCountdown] = useState(5)

    useEffect(() => {
        if (countdown === 0) return

        const intervalId = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [countdown])

    useEffect(() => {
        if (countdown > 0) return

        setTimeout(() => {
            setCountdown(5)
        }, 1000)

        if (light === 'red') {
            setTimeout(() => {
                setLight('green')
            }, 1000)
            return
        }

        if (light === 'yellow') {
            setTimeout(() => {
                setLight('red')
            }, 1000)
            return
        }

        if (light === 'green') {
            setTimeout(() => {
                setLight('yellow')
            }, 1000)
            return
        }


    }, [light, countdown])


    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">

                <h1 className="text-white text-3xl font-thin">Traffic Light with useEffect</h1>
                <h2 className="text-white text-xl">Countdown: {countdown}</h2>

                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
                        style={{ width: `${(countdown / 5) * 100}%` }}
                        ></div>
                </div>


                <div className={`w-32 h-32 ${light === 'red' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'yellow' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'green' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
            </div>
        </div>
    );
};