'use client';
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { useUserPrefsContext } from "@/hooks/useUserPreferencesContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
const AdminNavbar = dynamic(() => import('@/app/components/AdminNavbar'), { ssr: false });
const AdminContentWrapper = ({ children }: { children: ReactNode }) => {
    const { userPrefsState } = useUserPrefsContext();
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="id">
                <section
                    className="flex-1 ml-0 pb-5 lg:ml-80 w-full transition-all duration-300 ease-in-out overflow-x-clip">
                    <div className="mx-4">
                        <AdminNavbar/>
                        <section
                            className={`${userPrefsState.navbarFixed ? 'mt-10' : 'mt-0'} transition-all duration-300 ease-in-out`}>
                            {children}
                        </section>
                    </div>
                </section>
            </LocalizationProvider>

        </>
    );
};

export default AdminContentWrapper;
