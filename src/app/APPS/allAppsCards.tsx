import Image from "next/image";
import { Download, Star } from "lucide-react";
import { IApp } from "../type";
import Link from "next/link";

export interface PageProps {
    app: IApp;
}

const AllAppsCards = ({ app }: PageProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">

            {/* Image */}
            <div className="relative overflow-hidden rounded-xl">
                <Image
                    src={app.image}
                    alt={app.title}
                    width={300}
                    height={200}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Rating Badge */}
                <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-orange-500 shadow-sm backdrop-blur-sm">
                    <Star size={12} fill="currentColor" />
                    <span>{app.ratingAvg}</span>
                </div>
            </div>

            {/* Content */}
            <div className="px-1 pt-3">

                {/* Title */}
                <h3 className="truncate text-base font-semibold text-slate-800">
                    {app.title}
                </h3>

                {/* Company */}
                <p className="mt-1 truncate text-xs text-slate-500">
                    {app.companyName}
                </p>

                {/* Bottom Info */}
                <div className="mt-3 flex items-center justify-between">

                    {/* Downloads */}
                    <div className="flex items-center gap-1.5 rounded-lg bg-green-50 px-2.5 py-1.5 text-xs font-medium text-green-600">
                        <Download size={13} />
                        <span>{app.downloads}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 rounded-lg bg-orange-50 px-2.5 py-1.5 text-xs font-medium text-orange-500">
                        <Star size={13} fill="currentColor" />
                        <span>{app.ratingAvg}</span>
                    </div>
                </div>

                {/* Button */}
                <div className="text-center p-4 w-full">
                    <Link
                        href={`/APPS/${app.id}`}
                        className="w-full rounded-lg  bg-green-600 p-3 text-sm font-semibold text-white transition hover:bg-green-500"
                    >
                        View Details
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default AllAppsCards;