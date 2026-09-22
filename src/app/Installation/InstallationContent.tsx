"use client";

import { Appcontext } from "@/context/appProvidor";
import errorImage from "@/assets/error-404.png";
import { Download, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { IApp } from "@/type/type";
import ButtonPage from "./button";

type SortOption = "size" | "downloads" | "rating";

const InstallationContent = () => {
    const { installedApp } = useContext(Appcontext);
    const [sortBy, setSortBy] = useState<SortOption>("size");

    const sortedApps = [...installedApp].sort((firstApp, secondApp) => {
        if (sortBy === "rating") {
            return secondApp.ratingAvg - firstApp.ratingAvg;
        }

        if (sortBy === "downloads") {
            return secondApp.downloads.localeCompare(firstApp.downloads, undefined, {
                numeric: true,
            });
        }

        return firstApp.size - secondApp.size;
    });

    return (
        <div className="bg-[#f4f4f6] min-h-screen">
            <div className="px-6 py-14 text-center">
                <h1 className="text-4xl font-extrabold text-slate-900">
                    Your Installed Apps
                </h1>
                <p className="mt-3 text-sm text-slate-400">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="mx-auto max-w-4xl px-6 pb-16">
                <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">
                        {installedApp.length} Apps Found
                    </p>

                    <select
                        value={sortBy}
                        onChange={(event) => setSortBy(event.target.value as SortOption)}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600"
                    >
                        <option value="size">Sort By Size</option>
                        <option value="downloads">Sort By Downloads</option>
                        <option value="rating">Sort By Rating</option>
                    </select>
                </div>

                {installedApp.length === 0 ? (
                    <div className="flex flex-col items-center py-8 text-center">
                        <Image
                            src={errorImage}
                            alt="No installed apps"
                            width={320}
                            height={320}
                            className="h-auto w-64"
                        />
                        <h2 className="mt-4 text-2xl font-bold text-slate-900">
                            No Installed Apps
                        </h2>
                        <p className="mt-2 text-sm text-slate-500">
                            Install an app to see it here.
                        </p>
                        <Link
                            href="/APPS"
                            className="mt-5 rounded-lg bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
                        >
                            Browse Apps
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {sortedApps.map((app: IApp) => (
                            <div
                                key={app.id}
                                className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-200">
                                        <Image
                                            src={app.image}
                                            alt={app.title}
                                            width={56}
                                            height={56}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-900">
                                            {app.title}
                                        </h3>
                                        <div className="mt-1 flex items-center gap-3 text-xs">
                                            <span className="flex items-center gap-1 text-emerald-500">
                                                <Download className="h-3 w-3" />
                                                {app.downloads}
                                            </span>
                                            <span className="flex items-center gap-1 text-orange-400">
                                                <Star className="h-3 w-3 fill-orange-400" />
                                                {app.ratingAvg}
                                            </span>
                                            <span className="text-slate-400">{app.size} MB</span>
                                        </div>
                                    </div>
                                </div>

                                <ButtonPage app={app} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InstallationContent;
