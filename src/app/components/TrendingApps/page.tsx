import { IApp } from "@/type/type";
import AppsCard from "./appsCard";
import Link from "next/link";

export interface PageProps {
    app: IApp
}

const getApps = async (): Promise<IApp[]> => {
    const res = await fetch('http://localhost:3000/data.json');
    const data = res.json();
    return data;
}


const TrendingAppsPage = async () => {
    const AppsData = await getApps()

    return (
        <div className="bg-gray-100">
            <div className=" py-16 px-6">
                <h1 className="text-5xl text-black font-extrabold text-center mb-4">
                    Trending Apps
                </h1>
                <p className="text-lg text-gray-400 text-center max-w-xl mx-auto">
                    Explore all trending apps on the market, developed by us
                </p>
            </div>

            <div className="grid grid-cols-4 gap-4 my-4 container mx-auto">
                {
                    AppsData.splice(0, 8).map((apps) => {
                        return (
                            <div key={apps.id}>
                                <AppsCard apps={apps} />
                            </div>
                        )
                    })
                }
            </div>

            <div className="text-center m-8">
                <Link
                    href="/APPS"
                    className="inline-block mb-8 bg-[#16c20e] hover:bg-[#12a90c] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                    Show All
                </Link>
            </div>

        </div>
    );
};

export default TrendingAppsPage;