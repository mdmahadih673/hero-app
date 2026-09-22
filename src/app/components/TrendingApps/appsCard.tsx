import Image from "next/image";
import { Download, Star } from "lucide-react";
import { IApp } from "@/type/type";

interface AppCardProps {
    apps: IApp;
}

const AppCard = ({ apps }: AppCardProps) => {
    return (
        <div className="rounded-2xl bg-white p-3">
            <div className="aspect-square w-full overflow-hidden rounded-xl bg-slate-200">
                <Image
                    src={apps.image}
                    alt={apps.title}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                />
            </div>

            <h3 className="mt-3 truncate text-sm font-medium text-slate-800">
                {apps.title}
            </h3>

            <div className="mt-2 flex items-center justify-between">
                <span className="flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600">
                    <Download className="h-3 w-3" />
                    {apps.downloads}
                </span>
                <span className="flex items-center gap-1 rounded-md bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-500">
                    <Star className="h-3 w-3 fill-orange-500" />
                    {apps.ratingAvg}
                </span>
            </div>
        </div>
    );
};

export default AppCard;