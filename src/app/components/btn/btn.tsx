"use client";

import { Appcontext } from '@/context/appProvidor';
import { IApp } from '@/type/type';
import { useContext } from 'react';

const AppBtn = ({ app }: { app: IApp }) => {

    const { setInstalledApp } = useContext(Appcontext);


    const handleInstall = () => {
        setInstalledApp((currentApps) => {
            if (currentApps.some((installedApp) => installedApp.id === app.id)) {
                return currentApps;
            }

            return [...currentApps, app];
        });
    }
    return (
        <div>
            <button onClick={() => handleInstall()} className=" rounded-lg bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600">
                Install Now
            </button>
        </div>
    );
};

export default AppBtn;