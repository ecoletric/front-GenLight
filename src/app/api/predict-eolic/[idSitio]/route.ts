import { previsaoEolica } from "@/utils/types/types";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { idSitio: number } }) {
    const response = await fetch(`https://distinct-certainly-gobbler.ngrok-free.app/predict-eolic/${params.idSitio}`);
    const data : previsaoEolica = await response.json();
    return NextResponse.json(data);    
}