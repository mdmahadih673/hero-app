import { getApps } from '@/lib/page';
import { IApp } from '../type';
import AllAppsCards from './allAppsCards';


export interface PageProps {
    app: IApp
}

const AllAppsPage = async () => {
    const allApps = await getApps();
    return (
        <main className=' bg-gray-100'>
            <div className="container mx-auto mt-8 mb-5 px-4">
                <div className="flex items-center justify-between rounded-xl bg-white border border-slate-200 px-5 py-4 shadow-sm">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                            All Apps
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            Explore all available applications
                        </p>
                    </div>

                    <div className="rounded-full bg-blue-50 px-4 py-2">
                        <span className="text-sm font-semibold text-blue-600">
                            {allApps.length} Apps Found
                        </span>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-4 container mx-auto py-4'>

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