import AdminContentWrapper from "@/app/components/AdminContentWrapper";
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
const AdminSidebar = dynamic(() => import('@/app/components/AdminSideNav'), { ssr: false });
const UserPrefsSettings = dynamic(() => import('@/app/components/UserPrefSettings'), { ssr: false });
export const metadata: Metadata = {
    title: 'Abibas | Admin'
};
export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <main className="w-full min-h-screen flex flex-row font-tommy bg-gray-100 scroll-smooth">
                <AdminSidebar />
                <AdminContentWrapper>
                    { children }
                </AdminContentWrapper>
                <UserPrefsSettings mode='Admin' />
            </main>
        </>
    );
}