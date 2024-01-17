import Image from "next/image";
import { HaloFest2L } from "@/lib/StaticImagesLib";
import dynamic from "next/dynamic";
const UserPrefsSettings = dynamic(() => import("@/app/components/UserPrefSettings"), { ssr: false });
const Navbar = dynamic(() => import('@/app/components/DefaultNavbar'), { ssr: false });
const ContentWrapper = dynamic(() => import ("@/app/components/DefaultContentWrapper"), { ssr: false });
const HomePage = () => {
    return (
        <>
            <Navbar />
            <ContentWrapper>
                <section className="w-full aspect-video">
                    <Image
                        src={HaloFest2L}
                        alt="halo-fest-2"
                        quality={100}
                        className="w-full h-full object-cover object-center"
                    />
                </section>
                <div>

                </div>
            </ContentWrapper>
            <UserPrefsSettings mode="Default" />
        </>
    );
};

export default HomePage;
