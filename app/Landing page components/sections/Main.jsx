import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

export default function MainSection() {
    return (
        <section className="grid grid-rows-[auto_1fr_auto] rounded-2xl min-w-[20rem] dark:bg-white/10 flex-1 p-6 relative overflow-hidden border-2 dark:border-white/20 border-black/20 min-h-[70vh]">
            <div className="absolute h-56 w-44 bg-blue-500 top-0 rounded-br-[10rem] filter blur-[64px] opacity-20 scale-125 pointer-events-none"></div>
            <div className="absolute h-56 w-44 bg-blue-500 bottom-0 right-0 rounded-tl-[10rem] filter blur-[64px] opacity-10 scale-150 pointer-events-none"></div>
            <div>
                <span className="flex gap-2 items-center font-semibold">
                    <Image
                        src={"/android-icon-72x72.png"}
                        alt=""
                        height={35}
                        width={35}
                    />
                    <span>WeatherWise</span>
                </span>
            </div>

            <div className="sm:text-5xl text-4xl p-6 flex flex-col justify-center sm:gap-4 gap-1 uppercase">
                <div className="flex gap-3 items-center capl">
                    <span>Weatherly</span>
                    <span className="-mt-5 animate-bounce">
                        <Image
                            src={"https://weatherwise.sirv.com/Images/all/partly-cloudy-day-hail.svg"}
                            alt="Weather Icon"
                            height={70}
                            width={70}
                        />
                    </span>
                </div>
                <div className="flex gap-3 items-center">
                    <span>
                        <Image
                            src={"https://weatherwise.sirv.com/Images/elements/arrow.png"}
                            alt="Arrow Icon"
                            height={100}
                            width={150}
                            className="dark:invert animate-pulse"
                        />
                    </span>
                    <span>Amplifying</span>
                </div>
                <div className="flex gap-3 items-start">
                    <span className="p-3 px-6 border-2 rounded-full grid place-items-center font-semibold bg-white/5">intelligence</span>
                    <span className="text-sm">2</span>
                </div>
                <div className="flex gap-5 items-end">
                    <span>powering</span>
                    <span className="text-sm grid capitalize">
                        <span>weather insights</span>
                        <span>forecast accuracy</span>
                    </span>
                </div>
                <div className="flex gap-5 items-end">
                    <span className="text-sm grid text-right capitalize">
                        <span>enhance</span>
                        <span>your experience</span>
                    </span>
                    <span>Tomorrow</span>
                </div>
            </div>

            <div className="flex gap-2 flex-wrap">
                <div className="min-w-fit flex-1 rounded-full flex p-2 items-center text-sm bg-blue-600 cursor-pointer active:scale-90 opacity-80 hover:opacity-100">
                    <span className="flex-1 px-8">Try for free</span>
                    <div className="grid place-items-center p-2 rounded-full bg-black/80 rotate-[30deg] text-sm">
                        <FaArrowUp className="font-thin" />
                    </div>
                </div>
                <div className="min-w-fit flex-1 rounded-full flex p-2 items-center text-sm bg-white text-black cursor-pointer active:scale-90 opacity-80 hover:opacity-100">
                    <span className="flex-1 px-8">See more projects</span>
                    <div className="grid place-items-center p-2 rounded-full bg-black rotate-[30deg] text-sm text-white">
                        <FaArrowUp className="font-thin" />
                    </div>
                </div>
            </div>

        </section>
    )
}