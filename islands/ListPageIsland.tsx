import { useEffect } from "preact/hooks";
import { invoke } from "../runtime.ts";
import { useSignal } from "@preact/signals";
import { FnContext } from "deco/types.ts";

const getCodes = async () => {
    return await invoke.site.actions.getCodes();
};

export default function ListPageIsland() {
    const codes = useSignal([]);

    useEffect(() => {
        const fetchCodes = async () => {
            const fetchedCodes = await getCodes();
            codes.value = fetchedCodes;
        };

        fetchCodes();
    }, []);

    console.log("Aqui:", codes.value);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("pt-BR"); // Formata a data para o padrão dia/mês/ano
    };

    return (
        <>
            <div className="p-10 flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 overflow-x-hidden">
                <span className="text-xl font-bold mb-16 ">Códigos:</span>

                <div class="relative overflow-x-scroll shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Data de Criação
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Código de Barras
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Lote
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Quantidade
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Validade
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Tipo de Operação
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Carga
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Produto
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {codes.value?.data?.map((code) => (
                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {code.id}
                                    </th>
                                    <td class="px-6 py-4">
                                        {formatDate(code.created_at)}
                                    </td>
                                    <td class="px-6 py-4">
                                        {code.code_number}
                                    </td>
                                    <td class="px-6 py-4">
                                        {code.batch}
                                    </td>
                                    <td class="px-6 py-4">
                                        {code.quantity}
                                    </td>
                                    <td class="px-6 py-4">
                                        {code.validity}
                                    </td>
                                    <td class="px-6 py-4">
                                        {code.operation_type}
                                    </td>
                                    <td class="px-6 py-4">
                                        {code.load}
                                    </td>
                                    <td class="px-6 py-4">
                                        {code.product}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <a href="/home" className="w-full flex justify-center mt-16">
                    <button className="rounded-full py-3 w-64 bg-red-200">
                        Voltar
                    </button>
                </a>
            </div>
        </>
    );
}

export const loader = (props: Props, req: Request, ctx: FnContext) => {
    return {
        ...props,
        codes: ctx.device,
    };
};
