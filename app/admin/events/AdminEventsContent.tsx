'use client';
import useAdminViewModeContext from "@/hooks/useAdminViewModeContext";
import AdminContentHeading from "@/app/components/AdminContentHeading";
import { AdminEventDataType } from "@/app/admin/events/page";
import AdminEventsCard from "@/app/admin/events/AdminEventsCard";
import AdminEventsTable from "@/app/admin/events/AdminEventsTable";

const AdminEventsContent = ({ eventsData, webKey }: { eventsData: AdminEventDataType[], webKey: { key: string | null, iv: string | null } }) => {
    const { adminViewMode, setAdminViewMode } = useAdminViewModeContext();

    return (
        <>
            <AdminContentHeading
                adminViewMode={adminViewMode}
                setAdminViewMode={setAdminViewMode}
                tittle="Events"
                webKey={webKey.key}
            />
            {
                adminViewMode === 'CARD'
                    ? <AdminEventsCard eventData={eventsData} webKey={webKey} />
                    : adminViewMode === 'TABLE'
                        ? <AdminEventsTable eventData={eventsData} />
                        : <AdminEventsCard eventData={eventsData} webKey={webKey}/>
            }
        </>
    );
};

export default AdminEventsContent;
