import { IApp } from "@/app/type";
import { getApps } from "@/lib/page";
import Image from "next/image";
import { Download, Star, MessageSquare } from "lucide-react";
import Link from "next/link";
import AppBtn from "@/app/components/btn/btn";

export interface AppDetalisProps {
    params: {
        id: string;
    };
}

const STAR_ORDER = ["5 star", "4 star", "3 star", "2 star", "1 star"];

const AppDetalis = async ({ params }: AppDetalisProps) => {
    const { id } = await params;
    const allApps = await getApps();
    const app = allApps.find((app: IApp) => app.id === Number(id));

    if (!app) {
        return <div className="p-10 text-center text-slate-500">App not found</div>;
    }

    const maxCount = Math.max(...app.ratings.map((r) => r.count), 1);
    // round the axis max up to a clean number
    const axisMax = Math.ceil(maxCount / 3000) * 3000 || 3000;
    const axisSteps = [0, 1, 2, 3, 4].map((i) => Math.round((axisMax / 4) * i));

    const orderedRatings = STAR_ORDER.map(
        (name) => app.ratings.find((r) => r.name === name) ?? { name, count: 0 }
    );

    const descriptionParagraphs = app.description
        .split("\n")
        .map((p) => p.trim())
        .filter(Boolean);

    return (
        <div className="mx-auto max-w-3xl px-6 py-10">



            <Link
                href="/APPS"
                className="mb-8 inline-block font-semibold text-green-600 hover:text-green-700"
            >
                &larr; Back to APPS
            </Link>
            {/* Top summary card */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-6 sm:flex-row">
                    <div className="h-32 w-32 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                        <Image
                            src={app.image}
                            alt={app.title}
                            width={128}
                            height={128}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-xl font-bold text-slate-900">{app.title}</h1>
                        <p className="mt-1 text-sm text-slate-400">
                            Developed by{" "}
                            <span className="text-violet-600">{app.companyName}</span>
                        </p>

                        <div className="mt-5 flex gap-10">
                            <div>
                                <div className="flex items-center gap-1 text-emerald-500">
                                    <Download className="h-4 w-4" />
                                    <span className="text-xs text-slate-400">Downloads</span>
                                </div>
                                <p className="mt-1 text-lg font-bold text-slate-900">
                                    {app.downloads}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-1 text-orange-400">
                                    <Star className="h-4 w-4 fill-orange-400" />
                                    <span className="text-xs text-slate-400">
                                        Average Ratings
                                    </span>
                                </div>
                                <p className="mt-1 text-lg font-bold text-slate-900">
                                    {app.ratingAvg}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-1 text-violet-500">
                                    <MessageSquare className="h-4 w-4 fill-violet-500" />
                                    <span className="text-xs text-slate-400">
                                        Total Reviews
                                    </span>
                                </div>
                                <p className="mt-1 text-lg font-bold text-slate-900">
                                    {app.reviews}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <AppBtn app={app} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Ratings breakdown */}
            <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h2 className="text-sm font-bold text-slate-900">Ratings</h2>

                <div className="mt-5 space-y-3">
                    {orderedRatings.map((rating) => (
                        <div key={rating.name} className="flex items-center gap-3">
                            <span className="w-12 shrink-0 text-xs text-slate-400">
                                {rating.name}
                            </span>
                            <div className="h-2.5 flex-1 rounded-full bg-slate-100">
                                <div
                                    className="h-2.5 rounded-full bg-orange-400"
                                    style={{
                                        width: `${Math.min(
                                            (rating.count / axisMax) * 100,
                                            100
                                        )}%`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="ml-[3.75rem] mt-2 flex justify-between text-xs text-slate-400">
                    {axisSteps.map((step) => (
                        <span key={step}>{step.toLocaleString()}</span>
                    ))}
                </div>
            </div>

            {/* Description */}
            <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h2 className="text-sm font-bold text-slate-900">Description</h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-500">
                    {descriptionParagraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppDetalis;