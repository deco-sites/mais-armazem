import Image from "apps/website/components/Image.tsx";

export default function Homepage() {
    return (
        <>
            <div className="p-10 flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
                <span className="mb-16 font-semibold text-xl font-sora">
                    Escolha uma opção:
                </span>
                <div className="flex flex-col items-center justify-center gap-5">
                    <a href="/form-page">
                        <button className="flex items-center justify-center w-48 h-48 bg-slate-100 border-white rounded-xl">
                            <Image
                                src={"/floppy-disk.png"}
                                alt="Icon"
                                className="w-24 h-w-24"
                            />
                        </button>
                    </a>
                    <a href="/list-page">
                        <button className="flex items-center justify-center w-48 h-48 bg-slate-100 border-white rounded-xl">
                            <Image
                                src={"/check.png"}
                                alt="Icon"
                                className="w-24 h-w-24"
                            />
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}
