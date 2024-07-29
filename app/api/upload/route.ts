import { writeFile } from 'fs/promises'
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await res.formData()
    const Image : File | null = data.get("file") as unknown as File

    if(!Image){
        return NextResponse.json({success: false, msg: "Image not found"})
    }

    const bytes = await Image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const path = `/uploads/${Image.name}`
    await writeFile(path,buffer)
    console.log(`open ${path} to see the uploaded Image`)

    return NextResponse.json({success: true, msg: "Successfully uploaded"})
}