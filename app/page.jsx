import BaseSection from "./Landing page components/sections/Base";
import ExploreSection from "./Landing page components/sections/Explore";
import MainSection from "./Landing page components/sections/Main";

export default function LandingPage() {
    return (
        <main className="flex flex-wrap gap-6 sm:p-4 p-2 min-h-screen dark:text-white text-black w-screen">
            <MainSection />
            <div className="flex-1 rounded-2xl min-w-[20rem] flex flex-col sm:min-h-[auto] min-h-[100vh] gap-6">
                <ExploreSection />
                <BaseSection />
            </div>
        </main>
    )
}
