import Cards from "../Components/Cards";
import DevSpot from "../Components/DevSpot";

export default function BaseSection() {
    return (
        <div className="flex-1 flex flex-wrap md:flex-row flex-row-reverse gap-3 h-full px-3">
            <Cards />
            <DevSpot />
        </div>
    );
}