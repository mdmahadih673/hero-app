"use client";

import React, { createContext, ReactNode, useState } from 'react';
import { IApp } from '@/type/type';


export interface IAppcontext {
    installedApp: IApp[]
    setInstalledApp: React.Dispatch<React.SetStateAction<IApp[]>>
}


export const Appcontext = createContext<IAppcontext>({
    installedApp: [],
    setInstalledApp: () => { },
});


const AppProvidor = ({ children }: { children: ReactNode }) => {

    const [installedApp, setInstalledApp] = useState<IApp[]>([])
    const shareData = {
        installedApp,
        setInstalledApp
    }


    return <Appcontext.Provider value={shareData}> {children}  </Appcontext.Provider>
};

export default AppProvidor; 