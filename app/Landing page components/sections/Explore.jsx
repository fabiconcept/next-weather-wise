"use client"
import { getForecastTest } from "@/redux-store/thunk/testThunk";
import Image from "next/image";
import { useMemo } from "react";
import { FaBell, FaSearch } from "react-icons/fa";

import { useDispatch } from "react-redux";

export default function ExploreSection() {
    const dispatch = useDispatch();

    const testMemo = useMemo(() => {
        dispatch(getForecastTest());        
    }, [dispatch]);

    return (
        <section className="relative p-2 rounded-2xl overflow-hidden min-w-fit flex-1 bgImg border-2 md:min-h-[20rem] min-h-[25rem] dark:border-white/20 border-black/20">
            <div className="absolute h-full w-full bg-black/20 -top-1 -left-1 scale-105"></div>
            <div className="flex p-1 items-center w-full bg-white/10 border border-white/20 backdrop-blur-sm rounded-full relative z-30">
                <div className="h-12 w-12 rounded-full grid place-items-center relative cursor-pointer">
                    <span className="bg-white p-3 rounded-full grid place-items-center text-black text-xs relative z-10">
                        <FaBell />
                    </span>
                    <div className="absolute top-0 left-0 h-full w-full bg-white/40 rounded-full animate-pulse"></div>
                </div>

                <div className="flex-1 flex justify-end relative items-center gap-4">
                    <div className="h-12 w-12 rounded-full grid place-items-center relative cursor-pointer active:scale-90 hover:scale-105 z-10">
                        <span className="bg-blue-600 p-3 rounded-full grid place-items-center text-white text-xs relative z-10">
                            <FaSearch />
                        </span>
                        <div className="absolute top-0 left-0 h-full w-full bg-white/40 rounded-full animate-pulse"></div>
                    </div>
                    <input
                        type="text"
                        className="absolute right-4 rounded-full px-4 py-2 text-sm bg-white/10 border-2 border-white placeholder:text-white placeholder-shown:w-28 placeholder-shown:opacity-50 opacity-100 flex-1 w-[calc(100%-2rem)] outline-none"
                        placeholder="Search"
                        maxLength={25}
                        minLength={2}
                    />
                </div>
            </div>

            <div className="absolute z-10 top-24 right-16 text-xs">
                <div className="relative flex items-center gap-1" title="city">
                    <span className="p-1 px-5 bg-white text-black rounded-full font-semibold">London</span>
                    <div className="relative grid place-items-center">
                        <div className="absolute h-16 w-16 animate-pulse bg-white/10 border border-white/30 rounded-full backdrop-blur-sm -z-[1]"></div>
                        <div className="h-7 w-7 grid place-items-center rounded-full bg-white/40 relative">
                            <div className="h-4 w-4 grid place-items-center rounded-full bg-blue-600">
                                <div className="h-2 w-2 grid place-items-center rounded-full bg-white">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute z-10 bottom-2 left-2 text-xs p-3 bg-white/20 backdrop-blur-lg max-w-sm rounded-lg text-white flex flex-col gap-3">
                <div className="text-base w-full relative">
                    <div className="max-w-[8rem] font-semibold">
                        London, United Kingdom
                    </div>
                    <div className="absolute z-10 -top-16 -right-16 text-xs">
                        <Image
                            src={"https://weatherwise.sirv.com/Images/all/partly-cloudy-day-rain.svg"}
                            alt="Weather icon"
                            height={150}
                            width={150}
                        />
                    </div>
                </div>
                <div className="text-sm max-w-[18rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eveniet a voluptates ullam unde vero.
                </div>
                
            </div>
        </section>
    );
}