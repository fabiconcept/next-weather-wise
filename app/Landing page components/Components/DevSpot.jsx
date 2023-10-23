import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function DevSpot() {
    return (
        <section className="flex-1 min-w-[10rem] flex flex-col h-full">
            <div className="flex gap-1 font-semibold items-center">
                <span className="p-2 px-6 flex-1 dark:bg-white/10 bg-white rounded-t-3xl select-none">About Developer:</span>
                <span className="h-8 w-8 grid place-items-center dark:bg-white/20 bg-white rounded-r-full rounded-t-full text-sm cursor-pointer hover:scale-105 active:rotate-[20deg] origin-bottom-left group">
                    <FaArrowRight className="-rotate-[35deg] group-active:rotate-0" />
                </span>
            </div>
            <div className="dark:bg-white/10 bg-white rounded-b-3xl rounded-tr-3xl w-full p-1 border-b border-transparent border-r border-l h-full flex flex-col gap-2">
                <span className="text-sm p-3 flex-1 select-none">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad perferendis mollitia rerum similique optio sint veniam debitis accusamus officia? In.
                </span>
                <div className="rounded-3xl min-h-[15rem] max-h-[25rem] relative overflow-hidden grid place-items-start touch-none select-none pointer-events-none">
                    <Image
                        src={"https://weatherwise.sirv.com/Images/elements/face.png"}
                        alt="Developer Image"
                        height={500}
                        width={500}
                        className="h-full min-w-full"
                    />

                    <div className="absolute bottom-0 flex flex-col">
                        <span className="px-4 py-1 text-black bg-white/50 w-fit text-lg font-semibold backdrop-blur-md rounded-tr-2xl" draggable>
                            Virtual
                        </span>
                        <span className="px-4 py-1 text-black bg-white/50 text-lg font-semibold backdrop-blur-md rounded-tr-2xl" draggable>
                            Accelerator
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}