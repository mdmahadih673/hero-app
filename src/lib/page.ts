import { IApp } from "@/app/type";

export const getApps = async (): Promise<IApp[]> => {
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    return data;
}
