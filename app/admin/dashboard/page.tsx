import Image from "next/image";
import { Noa2L, Rio1L, Rio2L } from "@/lib/StaticImagesLib";
import Link from "next/link";
import prisma from "@/lib/prisma";

type DashboardDataType = {
    categories: number,
    series: number,
    products: number,
    events: {
        all: number,
        ongoing: number
    }
} | undefined
const getDashboardData = async () => {
    try {
        const eventsQuery = async (): Promise<{ all: number, ongoing: number }> => {
            const [ allCount, ongoingCount ]: [ allCount: number, ongoingCount: number ] = await prisma.$transaction([
                prisma.events.count(),
                prisma.events.count({
                    where: {
                        status: true
                    }
                })
            ]);
            return {
                all: allCount,
                ongoing: ongoingCount
            };
        };
        const queries: [ number, number, number, { all: number, ongoing: number }] = await Promise.all([
            await prisma.categories.count(),
            await prisma.series.count(),
            await prisma.products.count(),
            await eventsQuery()
        ]);
        return {
            categories: queries[0],
            series: queries[1],
            products: queries[2],
            events: queries[3],
        };
    } catch (error) {
        console.log(error);
    }
};
const DashboardPage = async () => {
    const dashboardData: DashboardDataType = await getDashboardData();
    console.log(dashboardData);
    return (
        <>
            {/*<div className="space-y-10">*/}
            {/*    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-4 md:gap-x-4 lg:gap-x-4 py-2">*/}
            {/*        <div className="w-full h-36 bg-white rounded-lg ring-[0.5px] ring-zinc-400 shadow-sm shadow-gray-300">*/}
            {/*            <div className="w-11/12 h-2/3 relative overflow-hidden">*/}
            {/*                <div className="absolute left-5 top-1/3 w-12 h-12 flex items-center justify-center bg-neutral-800 text-white rounded-xl">*/}
            {/*                    <iconify-icon width={24} icon="mdi:folder-multiple-outline"></iconify-icon>*/}
            {/*                </div>*/}
            {/*                <div className="absolute top-1/3 left-16 right-2 translate-x-2">*/}
            {/*                    <h1 className="text-sm text-zinc-700 font-medium text-right truncate">*/}
            {/*                        Total Categories*/}
            {/*                    </h1>*/}
            {/*                    <p className="text-xl text-right font-bold truncate">*/}
            {/*                        { `20 Categories` }*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="h-10 flex items-end justify-center text-sm text-zinc-700">*/}
            {/*                Last Entry :*/}
            {/*                /!*{ dashboardData.categories.createdAt*!/*/}
            {/*                /!*    ? ` ${dateFormat(dashboardData.categories.createdAt.toDateString(), 'YYYY-MM-DD')}`*!/*/}
            {/*                /!*    : 'Not set yet'*!/*/}
            {/*                /!*}*!/*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="w-full h-36 bg-white rounded-lg ring-[0.5px] ring-zinc-400 shadow-sm shadow-gray-300">*/}
            {/*            <div className="w-11/12 h-2/3 relative overflow-hidden">*/}
            {/*                <div className="absolute left-5 top-1/3 w-12 h-12 flex items-center justify-center bg-neutral-800 text-white rounded-xl">*/}
            {/*                    <iconify-icon width={24} icon="mdi:cards"></iconify-icon>*/}
            {/*                </div>*/}
            {/*                <div className="absolute top-1/3 left-16 right-2 translate-x-2">*/}
            {/*                    <h1 className="text-sm text-zinc-700 font-medium text-right truncate">*/}
            {/*                        Total Series*/}
            {/*                    </h1>*/}
            {/*                    <p className="text-xl text-right font-bold truncate">*/}
            {/*                        { `20 Series` }*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="h-10 flex items-end justify-center text-sm text-zinc-700">*/}
            {/*                Last entry : 2022 - 08 - 20*/}
            {/*                /!*{ dashboardData.series.createdAt*!/*/}
            {/*                /!*    ? ` ${dateFormat(dashboardData.series.createdAt.toDateString())} `*!/*/}
            {/*                /!*    : ' Not set yet'*!/*/}
            {/*                /!*}*!/*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="w-full h-36 bg-white rounded-lg ring-[0.5px] ring-zinc-400 shadow-sm shadow-gray-300">*/}
            {/*            <div className="w-11/12 h-2/3 relative overflow-hidden">*/}
            {/*                <div className="absolute left-5 top-1/3 w-12 h-12 flex items-center justify-center bg-neutral-800 text-white rounded-xl">*/}
            {/*                    <iconify-icon width={24} icon="mdi:shopping-outline"></iconify-icon>*/}
            {/*                </div>*/}
            {/*                <div className="absolute top-1/3 left-16 right-2 translate-x-2">*/}
            {/*                    <h1 className="text-sm text-zinc-700 font-medium text-right truncate">*/}
            {/*                        Total Products*/}
            {/*                    </h1>*/}
            {/*                    <p className="text-xl text-right font-bold truncate">*/}
            {/*                        { `99 Products`}*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="h-10 flex items-end justify-center text-sm text-zinc-700">*/}
            {/*                Last entry : 2023- 02 - 11*/}
            {/*                /!*{ dashboardData.products.createdAt*!/*/}
            {/*                /!*    ? ` ${dateFormat(dashboardData.products.createdAt.toDateString(), 'YYYY-MM-DD')} `*!/*/}
            {/*                /!*    : ' Not set yet'*!/*/}

            {/*                /!*}*!/*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="w-full h-36 bg-white rounded-lg ring-[0.5px] ring-zinc-400 shadow-sm shadow-gray-300">*/}
            {/*            <div className="w-11/12 h-2/3 relative overflow-hidden">*/}
            {/*                <div className="absolute left-5 top-1/3 w-12 h-12 flex items-center justify-center bg-neutral-800 text-white rounded-xl">*/}
            {/*                    <iconify-icon width={24} icon="mdi:calendar-month-outline"></iconify-icon>*/}
            {/*                </div>*/}
            {/*                <div className="absolute top-1/3 left-16 right-2 translate-x-2">*/}
            {/*                    <h1 className="text-sm text-zinc-700 font-medium text-right truncate">*/}
            {/*                        Total Events*/}
            {/*                    </h1>*/}
            {/*                    <p className="text-xl text-right font-bold truncate">*/}
            {/*                        { `9 Events` }*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="h-10 flex items-end justify-center text-sm text-zinc-700">*/}
            {/*                7 Events on going*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </section>*/}

            {/*    <section className="space-y-3 select-none">*/}
            {/*        <div className="flex flex-col md:flex-row justify-between items-center lg:items-start gap-x-5 gap-y-4">*/}
            {/*            <div className="relative group w-11/12 lg:w-80 aspect-[5/4] transition-all duration-300 ease-in-out rounded-md ring-[3px] ring-neutral-900 shadow-sm shadow-zinc-500 overflow-hidden">*/}
            {/*                <div className="absolute z-10 -top-1 -left-1.5 px-3 py-1 -skew-x-[22deg] rounded-r-md text-white bg-neutral-900">*/}
            {/*                    Latest Products*/}
            {/*                </div>*/}
            {/*                <Image*/}
            {/*                    src={Rio1L}*/}
            {/*                    alt=""*/}
            {/*                    fill*/}
            {/*                    style={{*/}
            {/*                        objectFit: 'cover',*/}
            {/*                        objectPosition: 'center'*/}
            {/*                    }}*/}
            {/*                />*/}
            {/*                <div className="absolute z-20 top-0 bottom-0 left-0 w-full flex flex-col items-center justify-evenly  bg-neutral-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">*/}
            {/*                    <h1 className="justify-self-center mx-8 font-semibold text-zinc-100 text-lg text-center truncate capitalize">*/}
            {/*                        {` Abibas Night Star Fall MK I `}*/}
            {/*                    </h1>*/}
            {/*                    <div className="text-center text-white">*/}
            {/*                        <Link*/}
            {/*                            href={`/admin`}*/}
            {/*                            className="peer"*/}
            {/*                        >*/}
            {/*                            <iconify-icon*/}
            {/*                                width={45}*/}
            {/*                                icon="mdi:arrow-right-circle"*/}
            {/*                            />*/}
            {/*                        </Link>*/}
            {/*                        <p className="text-sm tracking-tighter -mt-2 peer-hover:opacity-100 opacity-0 transition-opacity duration-150">*/}
            {/*                            Check details*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                    <p className="font-mono text-sm font-semibold text-white">*/}
            {/*                        {` Updated on: 2022-01-01 `}*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="relative group w-11/12 lg:w-80 aspect-[5/4] transition-all duration-300 ease-in-out rounded-md ring-[3px] ring-neutral-900 shadow-sm shadow-zinc-500 overflow-hidden">*/}
            {/*                <div className="absolute z-10 -top-1 -left-1.5 px-3 py-1 -skew-x-[22deg] rounded-r-md text-white bg-neutral-900">*/}
            {/*                    Latest Series*/}
            {/*                </div>*/}
            {/*                <Image*/}
            {/*                    src={Noa2L}*/}
            {/*                    alt=""*/}
            {/*                    fill*/}
            {/*                    style={{*/}
            {/*                        objectFit: 'cover',*/}
            {/*                        objectPosition: 'center'*/}
            {/*                    }}*/}
            {/*                />*/}
            {/*                <div className="absolute z-20 top-0 bottom-0 left-0 w-full flex flex-col items-center justify-evenly  bg-neutral-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">*/}
            {/*                    <h1 className="justify-self-center mx-8 font-semibold text-zinc-100 text-lg text-center truncate capitalize">*/}
            {/*                        {` Pict 2 `}*/}
            {/*                    </h1>*/}
            {/*                    <div className="text-center text-white">*/}
            {/*                        <Link*/}
            {/*                            href={`/admin`}*/}
            {/*                            className="peer"*/}
            {/*                        >*/}
            {/*                            <iconify-icon*/}
            {/*                                width={45}*/}
            {/*                                icon="mdi:arrow-right-circle"*/}
            {/*                            />*/}
            {/*                        </Link>*/}
            {/*                        <p className="text-sm tracking-tighter -mt-2 peer-hover:opacity-100 opacity-0 transition-opacity duration-150">*/}
            {/*                            Check details*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                    <p className="font-mono text-sm font-semibold text-white">*/}
            {/*                        {` Updated on: 2022-02-01 `}*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="relative group w-11/12 lg:w-80 aspect-[5/4] transition-all duration-300 ease-in-out rounded-md ring-[3px] ring-neutral-900 shadow-sm shadow-zinc-500 overflow-hidden">*/}
            {/*                <div className="absolute z-10 -top-1 -left-1.5 px-3 py-1 -skew-x-[22deg] rounded-r-md text-white bg-neutral-900">*/}
            {/*                    Latest Events*/}
            {/*                </div>*/}
            {/*                <Image*/}
            {/*                    src={Rio2L}*/}
            {/*                    alt=""*/}
            {/*                    fill*/}
            {/*                    style={{*/}
            {/*                        objectFit: 'cover',*/}
            {/*                        objectPosition: 'center'*/}
            {/*                    }}*/}
            {/*                />*/}
            {/*                <div className="absolute z-20 top-0 bottom-0 left-0 w-full flex flex-col items-center justify-evenly  bg-neutral-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">*/}
            {/*                    <h1 className="justify-self-center mx-8 font-semibold text-zinc-100 text-lg text-center truncate capitalize">*/}
            {/*                        {` Pict 3 `}*/}
            {/*                    </h1>*/}
            {/*                    <div className="text-center text-white">*/}
            {/*                        <Link*/}
            {/*                            href={`/admin`}*/}
            {/*                            className="peer"*/}
            {/*                        >*/}
            {/*                            <iconify-icon*/}
            {/*                                width={45}*/}
            {/*                                icon="mdi:arrow-right-circle"*/}
            {/*                            />*/}
            {/*                        </Link>*/}
            {/*                        <p className="text-sm tracking-tighter -mt-2 peer-hover:opacity-100 opacity-0 transition-opacity duration-150">*/}
            {/*                            Check details*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                    <p className="font-mono text-sm font-semibold text-white">*/}
            {/*                        {` Updated on: 2022-01-01 `}*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </section>*/}
            {/*</div>*/}
        </>
    );
};
export default DashboardPage;
