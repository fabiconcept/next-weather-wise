import Image from "next/image";
import { useMemo } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function WeatherCard({ locationInfo, imgSrc, status }) {
    let toolTip = "";
    const weatherReport = useMemo(() => {
        let weatherIcon = "";
        switch (status) {
            case 1:
                weatherIcon = "https://weatherwise.sirv.com/Images/all/clear-day.svg";
                toolTip = `Clear day in ${locationInfo}`;
                break;
            case 2:
                weatherIcon = "https://weatherwise.sirv.com/Images/all/lightning-bolt.svg";
                toolTip = `Ligthing Bolts in ${locationInfo}`;
                break;
            case 3:
                weatherIcon = "https://weatherwise.sirv.com/Images/all/overcast-day.svg";
                toolTip = `Overcast day in ${locationInfo}`;
                break;
            default:
                weatherIcon = "https://weatherwise.sirv.com/Images/all/starry-night.svg";
                toolTip = `Starry Nights in ${locationInfo}`;
                break;
        }

        return (<div className={`absolute -top-8 -right-8 z-40 h-44 w-44 grid place-items-center rounded-full text-white`}>
            <Image
                src={weatherIcon}
                alt=""
                height={150}
                width={150}
                className="drop-shadow-lg"
            />
        </div>)

    }, [status]);

    return (
        <section className="w-full flex flex-col h-full relative" title={toolTip}>
            <div className="w-full flex items-center py-2 px-3 border-b border-black/20 dark:border-white/20 relative">
                <span className="flex-1 font-semibold text-xs">{locationInfo}</span>
                {weatherReport}
            </div>

            <div className="flex-1 grid place-items-center backdrop-blur-lg">
                <div className="text-lg font-semibold line-clamp-5 dark:text-white text-black bg-white/10 grid place-items-center h-full text-center p-1 rounded-b-xl w-full">
                    <Image
                        src={imgSrc}
                        alt=""
                        height={1000}
                        width={1000}
                        className="h-full min-w-full object-cover opacity-80 rounded-b-xl overflow-hidden"
                    />
                </div>
            </div>

            <div title="Open Editor" className="absolute z-30 bottom-2 right-2 h-10 w-10 border-2 dark:border-dark-themeBackground border-light-themeBackground grid place-items-center cursor-pointer hover:scale-110 active:scale-90 group rounded-full bg-themeMain text-white text-sm bg-blue-600">
                <FaArrowRight className="group-active:rotate-12 -rotate-[30deg] text-lg" />
            </div>
        </section>
    );
}