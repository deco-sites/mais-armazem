import { AppContext } from "site/apps/site.ts";

export interface Props {
    selectedUF: string;
}

const getCodes = async (
    props: Props,
    req: Request,
    ctx: AppContext,
) => {
    const { supabaseClient } = ctx;

    const { data, error } = await supabaseClient
        .from("codes")
        .select("*");

    if (error) {
        console.log("Erro:", error);
    } else {
        console.log("Dados:", data);
    }

    return {
        data,
        error,
    };
};

export default getCodes;
