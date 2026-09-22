import banner from "@/assets/hero.png";
import Image from "next/image";

const stats = [
    { label: "Total Downloads", value: "29.6M", note: "21% More Than Last Month" },
    { label: "Total Reviews", value: "906K", note: "46% More Than Last Month" },
    { label: "Active Apps", value: "132+", note: "31 More Will Launch" },
];

const HeroPage = () => {
    return (
        <div className="bg-[#f4f4f6]">
            {/* Top: headline + phone mockup */}
            <section className="px-6 pt-16 pb-10 text-center container mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
                    We Build
                    <br />
                    <span className="text-violet-600">Productive</span> Apps
                </h1>

                <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500">
                    At HERO.IO , we craft innovative apps designed to make everyday life
                    simpler, smarter, and more exciting. Our goal is to turn your ideas
                    into digital experiences that truly make an impact.
                </p>

                <div className="mt-6 flex items-center justify-center gap-3">
                    <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:shadow-md">
                        <span className="text-emerald-500" aria-hidden="true">▶</span>
                        Google Play
                    </button>
                    <button className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800">
                        <span className="text-base" aria-hidden="true">●</span>
                        App Store
                    </button>
                </div>

                <div className="mx-auto mt-8 max-w-2xl">
                    <Image
                        src={banner}
                        alt="HERO.IO app preview"
                        className="mx-auto w-full max-w-lg"
                    />
                </div>
            </section>

            {/* Stats band */}
            <section className="bg-gradient-to-r from-violet-600 to-purple-500 px-6 py-14">
                <h2 className="text-center text-2xl md:text-3xl font-bold text-white">
                    Trusted By Millions, Built For You
                </h2>

                <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-xs text-violet-100/80">{stat.label}</p>
                            <p className="mt-1 text-4xl font-extrabold text-white">
                                {stat.value}
                            </p>
                            <p className="mt-1 text-xs text-violet-100/80">{stat.note}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HeroPage;