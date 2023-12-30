// import type { Metadata } from 'next';
// import './globals.css';
// import { Poppins } from "next/font/google";
// import { ReactNode } from "react";
// import Script from "next/script";
// import { NextFont } from "next/dist/compiled/@next/font";
// import UserPreferencesProvider from "@/context/UserPreferencesProvider";
// import { UserPrefSettingsToggler } from "@/app/components/UserPrefSettingsToggler";
// const poppins: NextFont = Poppins({
//     style: 'normal',
//     weight: '400',
//     subsets: [ 'latin' ],
// });
// export const metadata: Metadata = {
//     title: 'Abibas | Home',
//     description: 'Website jual beli sepatu, aksesoris dan perlengkapan olahraga namun kali tidak jualan',
// };
// type RootLayoutProps = {
//     children: ReactNode
// };
// export default function RootLayout({ children }: RootLayoutProps) {
//     return (
//         <html lang="id">
//             <Script src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"/>
//             <body className={poppins.className}>
//                 <UserPreferencesProvider>
//                     { children }
//                     <UserPrefSettingsToggler />
//                 </UserPreferencesProvider>
//             </body>
//         </html>
//     );
// }