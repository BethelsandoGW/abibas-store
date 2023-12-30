import Image from "next/image";
import { Noa2L, Rio1L, Rio2L } from "@/lib/StaticImagesLib";
import Link from "next/link";
import { dateFormat } from "@/lib/DateFormatLib";
import { WebDashboardResponseType } from "@/app/api/v2/web/admin/dashboard/route";

const getDashboardData = async () => {
    const res: Response =  await fetch(`${ process.env.MY_WEBAPI_URL }/admin/dashboard`, {
        method: 'GET',
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error('H3H3');
    }
    return res.json();
};
const DashboardPage = async () => {
    const dashboardRes: WebDashboardResponseType = await getDashboardData();
    const dashboardData = { ...dashboardRes.data };

    return (
        <>
            <div className="space-y-10">
                <section className="flex flex-row flex-wrap justify-evenly lg:justify-between gap-y-4 md:gap-x-3 py-2 transition-all ease-in-out duration-300">
                    <div className="w-full md:w-80 lg:w-[32%] h-36 bg-white rounded-lg ring-[0.5px] ring-zinc-400 shadow-sm shadow-gray-300 transition-all duration-200 ease-in-out">
                        <div className="relative w-11/12 h-2/3 overflow-hidden">
                            <div className="absolute left-5 top-1/3 w-12 h-12 flex items-center justify-center bg-neutral-800 text-white rounded-xl">
                                <iconify-icon
                                    width={24}
                                    icon="mdi:account-group-outline"
                                />
                            </div>
                            <div className="absolute top-1/3 left-16 right-2 translate-x-2">
                                <h1 className="text-sm text-zinc-700 font-medium text-right truncate">
                                    Total Audiences
                                </h1>
                                <p className="text-xl text-right font-bold truncate">
                                    {
                                        dashboardData.audiences.count
                                            ? `${ dashboardData.audiences.count } Audience`
                                            : ' 0 Audience'
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="h-10 flex items-end justify-center text-sm text-zinc-700">
                            Last Entry :
                            {
                                dashboardData.audiences.data?.createdAt
                                    ? ` ${ dateFormat(dashboardData.audiences.data.createdAt.toString(), 'YYYY-MM-DD hh:mm') }`
                                    : ' Not set yet'
                            }
                        </div>
                    </div>
                    <div className="w-full md:w-80 lg:w-[32%] h-36 bg-white rounded-lg ring-[0.5px] ring-zinc-400 shadow-sm shadow-gray-300 transition-all duration-200 ease-in-out">
                        <div className="w-11/12 h-2/3 relative overflow-hidden">
                            <div className="absolute left-5 top-1/3 w-12 h-12 flex items-center justify-center bg-neutral-800 text-white rounded-xl">
                                <iconify-icon width={24} icon="mdi:folder-multiple-outline"></iconify-icon>
                            </div>
                            <div className="absolute top-1/3 left-16 right-2 translate-x-2">
                                <h1 className="text-sm text-zinc-700 font-medium text-right truncate">
                                    Total Categories
                                </h1>
                                <p className="text-xl text-right font-bold truncate">
                                    {
                                        dashboardData.categories.count
                                            ? `${ dashboardData.categories.count } Category`
                                            : ' 0 Category'
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="h-10 flex items-end justify-center text-sm text-zinc-700">
                            Last Entry :
                            {
                                dashboardData.categories.data?.createdAt
                                    ? ` ${ dateFormat(dashboardData.categories.data.createdAt.toString(), 'YYYY-MM-DD hh:mm') }`
                                    : ' Not set yet'
                            }
                        </div>
                    </div>
                    <div className="w-full md:w-80 lg:w-[32%] h-36 bg-white rounded-lg ring-[0.5px] ring-zinc-400 shadow-sm shadow-gray-300 transition-all duration-200 ease-in-out">
                        <div className="w-11/12 h-2/3 relative overflow-hidden">
                            <div className="absolute left-5 top-1/3 w-12 h-12 flex items-center justify-center bg-neutral-800 text-white rounded-xl">
                                <iconify-icon width={24} icon="mdi:folder-star-multiple-outline"></iconify-icon>
                            </div>
                            <div className="absolute top-1/3 left-16 right-2 translate-x-2">
                                <h1 className="text-sm text-zinc-700 font-medium text-right truncate">
                                    Total Genres
                                </h1>
                                <p className="text-xl text-right font-bold truncate">
                                    {
                                        dashboardData.genres.count
                                            ? `${ dashboardData.genres.count } Genre`
                                            : ' 0 Genre'
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="h-10 flex items-end justify-center text-sm text-zinc-700">
                            Last Entry :
                            {
                                dashboardData.genres.data?.createdAt
                                    ? ` ${ dateFormat(dashboardData.genres.data.createdAt.toString(), 'YYYY-MM-DD hh:mm') }`
                                    : ' Not set yet'
                            }
                        </div>
                    </div>

                    <div className="w-full md:w-80 lg:w-[32%] h-36 bg-white rounded-lg ring-[0.5px] ring-zinc-400 shadow-sm shadow-gray-300 transition-all duration-200 ease-in-out">
                        <div className="w-11/12 h-2/3 relative overflow-hidden">
                            <div className="absolute left-5 top-1/3 w-12 h-12 flex items-center justify-center bg-neutral-800 text-white rounded-xl">
                                <iconify-icon width={24} icon="mdi:cards"></iconify-icon>
                            </div>
                            <div className="absolute top-1/3 left-16 right-2 translate-x-2">
                                <h1 className="text-sm text-zinc-700 font-medium text-right truncate">
                                    Total Series
                                </h1>
                                <p className="text-xl text-right font-bold truncate">
                                    {
                                        dashboardData.series.count
                                            ? `${ dashboardData.series.count } Series`
                                            : ' 0 Series'
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="h-10 flex items-end justify-center text-sm text-zinc-700">
                            Last entry :
                            {
                                dashboardData.series.data?.createdAt
                                    ? ` ${dateFormat(dashboardData.series.data.createdAt.toString(), 'YYYY-MM-DD hh:mm')}`
                                    : ' Not set yet'
                            }
                        </div>
                    </div>
                    <div className="w-full md:w-80 lg:w-[32%] h-36 bg-white rounded-lg ring-[0.5px] ring-zinc-400 shadow-sm shadow-gray-300 transition-all duration-200 ease-in-out">
                        <div className="w-11/12 h-2/3 relative overflow-hidden">
                            <div className="absolute left-5 top-1/3 w-12 h-12 flex items-center justify-center bg-neutral-800 text-white rounded-xl">
                                <iconify-icon width={24} icon="mdi:shopping-outline"></iconify-icon>
                            </div>
                            <div className="absolute top-1/3 left-16 right-2 translate-x-2">
                                <h1 className="text-sm text-zinc-700 font-medium text-right truncate">
                                    Total Products
                                </h1>
                                <p className="text-xl text-right font-bold truncate">
                                    {
                                        dashboardData.products.count
                                            ? `${ dashboardData.products.count } Product`
                                            : ' 0 Product'
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="h-10 flex items-end justify-center text-sm text-zinc-700">
                            Last entry :
                            {
                                dashboardData.products.data?.createdAt
                                    ? ` ${dateFormat(dashboardData.products.data.createdAt.toString(), 'YYYY-MM-DD hh:mm')}`
                                    : ' Not set yet'
                            }
                        </div>
                    </div>
                    <div className="w-full md:w-80 lg:w-[32%] h-36 bg-white rounded-lg ring-[0.5px] ring-zinc-400 shadow-sm shadow-gray-300 transition-all duration-200 ease-in-out">
                        <div className="w-11/12 h-2/3 relative overflow-hidden">
                            <div className="absolute left-5 top-1/3 w-12 h-12 flex items-center justify-center bg-neutral-800 text-white rounded-xl">
                                <iconify-icon width={24} icon="mdi:calendar-month-outline"></iconify-icon>
                            </div>
                            <div className="absolute top-1/3 left-16 right-2 translate-x-2">
                                <h1 className="text-sm text-zinc-700 font-medium text-right truncate">
                                    Total Events
                                </h1>
                                <p className="text-xl text-right font-bold truncate">
                                    {
                                        dashboardData.events.count
                                            ? `${ dashboardData.events.count } Events`
                                            : ' 0 Event '
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="h-10 flex items-end justify-center text-sm text-zinc-700">
                            {
                                dashboardData.events.ongoing
                                    ? `${ dashboardData.events.ongoing } Event On Going `
                                    : ' Not Set Yet'
                            }
                        </div>
                    </div>
                </section>

                <section className="space-y-3 select-none">
                    <div className="flex flex-col md:flex-row justify-between items-center lg:items-start gap-x-5 gap-y-4">
                        <div className="relative group w-11/12 lg:w-80 aspect-[5/4] transition-all duration-300 ease-in-out rounded-md ring-[3px] ring-neutral-900 shadow-sm shadow-zinc-500 overflow-hidden">
                            <div className="absolute z-10 -top-1 -left-1.5 px-3 py-1 -skew-x-[22deg] rounded-r-md text-white bg-neutral-900">
                                Latest Products
                            </div>
                            <Image
                                src={Rio1L}
                                alt=""
                                fill
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                            <div className="absolute z-20 top-0 bottom-0 left-0 w-full flex flex-col items-center justify-evenly  bg-neutral-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <h1 className="justify-self-center mx-8 font-semibold text-zinc-100 text-lg text-center truncate capitalize">
                                    {` Abibas Night Star Fall MK I `}
                                </h1>
                                <div className="text-center text-white">
                                    <Link
                                        href={`/admin`}
                                        className="peer"
                                    >
                                        <iconify-icon
                                            width={45}
                                            icon="mdi:arrow-right-circle"
                                        />
                                    </Link>
                                    <p className="text-sm tracking-tighter -mt-2 peer-hover:opacity-100 opacity-0 transition-opacity duration-150">
                                        Check details
                                    </p>
                                </div>
                                <p className="font-mono text-sm font-semibold text-white">
                                    {` Updated on: 2022-01-01 `}
                                </p>
                            </div>
                        </div>
                        <div className="relative group w-11/12 lg:w-80 aspect-[5/4] transition-all duration-300 ease-in-out rounded-md ring-[3px] ring-neutral-900 shadow-sm shadow-zinc-500 overflow-hidden">
                            <div className="absolute z-10 -top-1 -left-1.5 px-3 py-1 -skew-x-[22deg] rounded-r-md text-white bg-neutral-900">
                                Latest Series
                            </div>
                            <Image
                                src={Noa2L}
                                alt=""
                                fill
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                            <div className="absolute z-20 top-0 bottom-0 left-0 w-full flex flex-col items-center justify-evenly  bg-neutral-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <h1 className="justify-self-center mx-8 font-semibold text-zinc-100 text-lg text-center truncate capitalize">
                                    {` Pict 2 `}
                                </h1>
                                <div className="text-center text-white">
                                    <Link
                                        href={`/admin`}
                                        className="peer"
                                    >
                                        <iconify-icon
                                            width={45}
                                            icon="mdi:arrow-right-circle"
                                        />
                                    </Link>
                                    <p className="text-sm tracking-tighter -mt-2 peer-hover:opacity-100 opacity-0 transition-opacity duration-150">
                                        Check details
                                    </p>
                                </div>
                                <p className="font-mono text-sm font-semibold text-white">
                                    {` Updated on: 2022-02-01 `}
                                </p>
                            </div>
                        </div>
                        <div className="relative group w-11/12 lg:w-80 aspect-[5/4] transition-all duration-300 ease-in-out rounded-md ring-[3px] ring-neutral-900 shadow-sm shadow-zinc-500 overflow-hidden">
                            <div className="absolute z-10 -top-1 -left-1.5 px-3 py-1 -skew-x-[22deg] rounded-r-md text-white bg-neutral-900">
                                Latest Events
                            </div>
                            <Image
                                src={Rio2L}
                                alt=""
                                fill
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                            <div className="absolute z-20 top-0 bottom-0 left-0 w-full flex flex-col items-center justify-evenly  bg-neutral-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <h1 className="justify-self-center mx-8 font-semibold text-zinc-100 text-lg text-center truncate capitalize">
                                    {` Pict 3 `}
                                </h1>
                                <div className="text-center text-white">
                                    <Link
                                        href={`/admin`}
                                        className="peer"
                                    >
                                        <iconify-icon
                                            width={45}
                                            icon="mdi:arrow-right-circle"
                                        />
                                    </Link>
                                    <p className="text-sm tracking-tighter -mt-2 peer-hover:opacity-100 opacity-0 transition-opacity duration-150">
                                        Check details
                                    </p>
                                </div>
                                <p className="font-mono text-sm font-semibold text-white">
                                    {` Updated on: 2022-01-01 `}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
export default DashboardPage;