import { useEffect, useState } from "preact/hooks";
import { invoke } from "../runtime.ts";

//021789100001269420001525040137150 104231046061
//45 dígitos

export default function FormPageIsland() {
    const [dataSaved, setDataSaved] = useState(false);
    const [code, setCode] = useState();
    const [lote, setLote] = useState();
    const [quantidade, setQuantidade] = useState();
    const [validade, setValidade] = useState();
    const [tipoOperacao, setTipoOperacao] = useState("Expedicao");
    const [carga, setCarga] = useState();
    const [currentDate, setCurrentDate] = useState("");
    const [produto, setProduto] = useState();

    const handleSave = async () => {
        const dataToSave = {
            code_number: code,
            batch: lote,
            quantity: quantidade,
            validity: validade,
            operation_type: tipoOperacao,
            load: carga,
            date: currentDate,
            product: produto,
        };
        setDataSaved(true);
        await invoke.site.actions.saveCode({ dataToSave: dataToSave });
    };

    function breakCode(code) {
        const loteExtraido = code.slice(36, 45);
        const quantidadeExtraida = code.slice(30, 33);
        const validadeExtraida = code.slice(22, 28);

        setLote(loteExtraido);
        setQuantidade(quantidadeExtraida);
        setValidade(validadeExtraida);
    }

    function handleCode(e) {
        setCode(e.target.value);

        if (e.target.value.length === 45) {
            breakCode(e.target.value);
        } else {
            console.log("código inválido");
        }
    }

    useEffect(() => {
        setDataSaved(false);
    }, []);

    //UseEffect para dar focus automaticamente no campo do código de barras
    useEffect(() => {
    }, []);

    //UseEffect para pegar a data atual
    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split("T")[0];
        setCurrentDate(formattedDate);
    }, []);

    const savePage = (
        <>
            <div className="p-10 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
                <span className="text-xl font-semibold mb-16">
                    Dados Salvos
                </span>
                <a href="/home" className="w-64">
                    <button className="rounded-full py-3 w-full bg-red-200">
                        Voltar
                    </button>
                </a>
            </div>
        </>
    );

    const Form = (
        <>
            <div>
                <div className="p-10 flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="code">Código de Barras</label>
                            <input
                                type="text"
                                id="code"
                                name="code"
                                placeholder="Código de Barras"
                                value={code}
                                className="outline-none bg-white rounded-md py-2 px-6 w-full text-gray-500"
                                onChange={handleCode}
                                maxLength={45}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <span>Lote</span>
                            <div className="bg-white py-2 px-6 rounded-md h-10 w-full text-gray-500">
                                <label>{lote}</label>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span>Quantidade</span>
                            <div className="bg-white py-2 px-6 rounded-md h-10 w-full text-gray-500">
                                <label>{quantidade}</label>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span>Validade</span>
                            <div className="bg-white py-2 px-6 rounded-md h-10 w-full text-gray-500">
                                <label>{validade}</label>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Tipo de Operação</label>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setTipoOperacao("Expedicao")}
                                    className={`rounded-full py-3 w-1/2 bg-gray-100 ${
                                        tipoOperacao === "Expedicao"
                                            ? "bg-green-200"
                                            : ""
                                    }`}
                                >
                                    Expedição
                                </button>
                                <button
                                    onClick={() =>
                                        setTipoOperacao("Recebimento")}
                                    className={`rounded-full py-3 w-1/2 bg-gray-100 ${
                                        tipoOperacao === "Recebimento"
                                            ? "bg-green-200"
                                            : ""
                                    }`}
                                >
                                    Recebimento
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Carga</label>
                            <input
                                type="text"
                                id=""
                                name=""
                                placeholder=""
                                value={carga}
                                onChange={(e) => setCarga(e.target.value)}
                                className="outline-none bg-white rounded-md py-2 px-6 w-full text-gray-500"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Data</label>
                            <input
                                type="date"
                                id=""
                                name=""
                                placeholder=""
                                disabled
                                className="outline-none bg-white rounded-md py-2 px-6 w-full text-gray-500"
                                value={currentDate}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Produto</label>
                            <input
                                type="text"
                                id=""
                                name=""
                                value={produto}
                                onChange={(e) => setProduto(e.target.value)}
                                placeholder=""
                                className="outline-none bg-white rounded-md py-2 px-6 w-full text-gray-500"
                            />
                        </div>

                        <div className="flex gap-3">
                            <a href="/home" className="w-1/2">
                                <button className="rounded-full py-3 w-full bg-red-200">
                                    Cancelar
                                </button>
                            </a>
                            <button
                                onClick={handleSave}
                                className="rounded-full py-3 w-1/2 bg-green-100"
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <>
            {dataSaved && savePage}
            {!dataSaved && Form}
        </>
    );
}
