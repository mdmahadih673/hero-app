import { IApp } from '../type';
import AllAppsCards from './allAppsCards';


export interface PageProps {
    app: IApp
}

const getApps = async (): Promise<IApp[]> => {
    const res = await fetch('http://localhost:3000/data.json');
    const data = res.json();
    return data;
}




const AllAppsPage = async () => {
    const allApps = await getApps();
    return (
        <main className=' bg-gray-100'>
            <div>
                <div className="bg-[#f4f4f6] px-6 py-16 text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900">
                        Our All Applications
                    </h1>
                    <p className="mt-3 text-sm text-slate-400">
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-4 container mx-auto p-8'>

                {
                    allApps.map((app) => {
                        return (
                            <div key={app.id}> <AllAppsCards app={app} /> </div>
                        )
                    })
                }


            </div>
        </main>

    );
};

export default AllAppsPage;