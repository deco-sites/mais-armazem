import Image from "apps/website/components/Image.tsx";

export default function LoginPageIsland() {
    const handleSubmit = (e) => {
        console.log("Bateu aqui");

        globalThis.location.href = "/home";
    };
    return (
        <>
            <div className="relative px-10 flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 overflow-hidden">
                <div
                    className="absolute z-40 -right-4 -top-4 bg-white h-64 w-64 opacity-95"
                    style={{
                        borderRadius: "67% 33% 69% 31% / 45% 74% 26% 55%",
                    }}
                >
                </div>
                <div className="relative flex items-center flex-col gap-8 w-full z-50">
                    <Image
                        src="/mais-armazem-logo.png"
                        alt="Logo"
                        className="w-52"
                    />
                    <input
                        type="text"
                        id=""
                        name=""
                        placeholder="Email"
                        className="outline-none bg-white rounded-full py-2 px-6 w-full text-gray-500"
                        required
                    />
                    <input
                        type="password"
                        id=""
                        name=""
                        placeholder="Senha"
                        className="outline-none bg-white rounded-full py-2 px-6 w-full text-gray-500"
                    />
                    <button
                        onClick={handleSubmit}
                        className="rounded-full py-4 px-12 bg-[#5bc6d0] text-white"
                    >
                        Entrar
                    </button>
                </div>
                <div
                    className="absolute bottom-0 left-0 bg-white z-40 h-64 w-64 opacity-95"
                    style={{
                        borderRadius: "67% 33% 100% 0% / 33% 30% 70% 67%",
                    }}
                >
                </div>
            </div>
        </>
    );
}
