'use client';
import { useSearchParams } from "next/navigation";
import { checkWebKey } from "@/lib/CryptoLib";
import GenresCreateForm from "@/app/admin/genres/create/GenresCreateForm";
const CreateCategoriesPage = () => {
    const searchParams = useSearchParams();
    const keyParams: string = searchParams.get('key') ?? '';
    if (!searchParams.get('key') || !checkWebKey(keyParams)) {
        throw new Error('KEY bg', { cause: '' });
    }

    return (
        <>
            <section className="w-full min-h-96 bg-white rounded-md space-y-3">
                <div className="flex items-center justify-center lg:justify-start w-full h-14 px-7">
                    <h1 className="font-semibold">
                        Create New Genre
                    </h1>
                </div>
                <GenresCreateForm />
            </section>
        </>
    );
};
export default CreateCategoriesPage;
