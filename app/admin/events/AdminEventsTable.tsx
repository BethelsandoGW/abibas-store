'use client';
import { dateFormat } from "@/lib/DateFormatLib";
import { AdminEventDataType } from "@/app/admin/events/page";

const AdminEventsTable = ({ eventData }: { eventData: AdminEventDataType[]}) => {
    return (
        <>
            <section
                className="h-full bg-white border-[0.5px] border-zinc-300 shadow-sm shadow-zinc-400 overflow-x-auto animate-fade animate-duration-[600ms] animate-ease-in-out animate-once">
                <table className="items-center bg-transparent w-full border-collapse">
                    <thead className="font-semibold text-left">
                    <tr>
                        <th className="px-2.5 py-3 text-xs uppercase whitespace-nowrap">
                            No.
                        </th>
                        <th className="px-6 py-3 text-xs uppercase whitespace-nowrap">
                            Event
                        </th>
                        <th className="max-w-24 flex flex-col px-6 py-3 text-xs uppercase whitespace-nowrap">
                            <p>Total</p>
                            <p>Products</p>
                        </th>
                        <th className="px-6 py-3 text-xs uppercase whitespace-nowrap">
                            Begin Date
                        </th>
                        <th className="px-6 py-3 text-xs uppercase whitespace-nowrap">
                            End Date
                        </th>
                        <th className="px-6 py-3 text-xs uppercase whitespace-nowrap">
                            Status
                        </th>
                        <th className="px-6 py-3 text-xs uppercase whitespace-nowrap">
                            Actions
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        eventData && eventData.map ((event: AdminEventDataType, index: number) => {
                            return (
                                <tr key={index}>
                                    <td className="text-center text-sm whitespace-nowrap">
                                        {index + 1}
                                    </td>
                                    <td className="indent-2 text-xs whitespace-nowrap p-4">
                                        {event.name ?? 'Not Set yet'}
                                    </td>
                                    <td className="indent-2 text-xs whitespace-nowrap p-4">
                                        {event._count.products ?? 0}
                                    </td>
                                    <td className="indent-2 text-xs whitespace-nowrap p-4">
                                        {event.beginDate ? `${dateFormat (event.beginDate.toString (), 'YYYY-MM-DD, hh:mm A')}` : '-'}
                                    </td>
                                    <td className="indent-2 text-xs whitespace-nowrap p-4">
                                        {event.endDate ? `${dateFormat (event.endDate.toString (), 'YYYY-MM-DD, hh:mm A')}` : '-'}
                                    </td>
                                    <td className="indent-4 whitespace-nowrap p-4">
                                        {
                                            event.status
                                                ? (
                                                    <iconify-icon
                                                        icon="lets-icons:check-fill"
                                                        width={25}
                                                        class="text-green-600"
                                                    />
                                                ) : (
                                                    <iconify-icon
                                                        icon="lets-icons:close-round-fill"
                                                        width={25}
                                                        class="text-red-500 mx-auto"
                                                    />
                                                )

                                        }
                                    </td>
                                    <td className="text-xs whitespace-nowrap p-4">
                                        <div className="relative flex flex-row gap-x-3">
                                            <button
                                                className="group relative w-6 h-6 hover:text-blue-700 transition-colors duration-200 rounded-full">
                                                <iconify-icon width={24} icon="mdi:pencil-outline"></iconify-icon>
                                                <p className="absolute -top-[110%] -left-1.5 text-xs text-white rounded-md bg-neutral-900 scale-100 group-hover:visible invisible px-2 py-1">
                                                    Edit
                                                </p>
                                            </button>

                                            <button
                                                className="peer w-6 h-6 hover:text-red-500 hover:scale-125 transition-scale duration-200 rounded-full">
                                                <iconify-icon width={24} icon="mdi:delete-outline"></iconify-icon>
                                            </button>
                                            <p className="absolute -top-[110%] left-5 text-xs text-white rounded-md bg-neutral-900 scale-100 peer-hover:visible invisible px-2 py-1">
                                                Delete
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default AdminEventsTable;
