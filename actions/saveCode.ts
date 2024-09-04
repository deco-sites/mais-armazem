import { AppContext } from "site/apps/site.ts";

export interface Data {
    code_number: string;
    batch: string;
    quantity: number;
    validity: string;
    operation_type: string;
    load: string;
    date: string;
    product: string;
}

export interface Props {
    dataToSave: Data;
}

const saveCode = async (
    props: Props,
    req: Request,
    ctx: AppContext,
) => {
    const { supabaseClient } = ctx;

    console.log("Props:", props.dataToSave);

    const { data, error } = await supabaseClient
        .from("codes")
        .insert(props.dataToSave)
        .select();

    if (error) {
        console.log("Erro da saveCode", error);
    } else {
        console.log("Data da saveCode", data);
    }

    return {
        data,
        error,
    };
};

export default saveCode;
