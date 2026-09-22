"use client";

import { Appcontext } from '@/context/appProvidor';
import { IApp } from '@/type/type';
import { useContext } from 'react';

const ButtonPage = ({ app }: { app: IApp }) => {
    const { setInstalledApp } = useContext(Appcontext);

    const handleUninstall = (appId: IApp["id"]) => {
        setInstalledApp((currentApps) =>
            currentApps.filter((app) => app.id !== appId)
        );
    };
    return (
        <div>
            <button
                onClick={() => handleUninstall(app.id)}
                className="rounded-lg bg-emerald-500 px-5 py-2 text-xs font-semibold text-white transition hover:bg-emerald-600"
            >
                Uninstall
            </button>
        </div>
    );
};

export default ButtonPage;