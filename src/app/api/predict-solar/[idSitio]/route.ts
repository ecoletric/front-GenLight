import { previsaoSolar } from "@/utils/types/types";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { idSitio: number } }) {
    const response = await fetch(`https://distinct-certainly-gobbler.ngrok-free.app/predict-solar/${params.idSitio}`);
    const data : previsaoSolar = await response.json();
    return NextResponse.json(data);    
}