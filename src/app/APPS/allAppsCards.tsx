import Image from "next/image";
import { Download, Star } from "lucide-react";
import { IApp } from "../type";

export interface PageProps {
    app: IApp;
}

const AllAppsCards = ({ app }: PageProps) => {
    return (
        <div className="group rounded-lg bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

            {/* Image */}
            <div className="overflow-hidden rounded-md">
                <Image
                    src={app.image}
                    alt={app.title}
                    width={300}
                    height={200}
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Title */}
            <h3 className="mt-2 truncate text-sm font-medium text-slate-800">
                {app.title}
            </h3>

            {/* Bottom Info */}
            <div className="mt-2 flex items-center justify-between">

                {/* Downloads */}
                <div className="flex items-center gap-1 rounded bg-green-50 px-2 py-1 text-xs text-green-500">
                    <Download size={12} />
                    <span>{app.downloads}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 rounded bg-orange-50 px-2 py-1 text-xs text-orange-500">
                    <Star
                        size={12}
                        fill="currentColor"
                    />
                    <span>{app.ratingAvg}</span>
                </div>

            </div>
        </div>
    );
};

export default AllAppsCards;