import { NextResponse } from "next/server";

export function middlewear(request){
    return NextResponse.next()
}

export const config={
    matcher:"/news"
}