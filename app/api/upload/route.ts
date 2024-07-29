import {writeFile} from 'fs/promises'
import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.formData()
    const prisma = new PrismaClient()
    const Image: File | null = data.get("file") as unknown as File


    if (!Image) {
        return NextResponse.json({success: false, msg: "Image not found"})
    }

    const bytes = await Image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const path = `./app/api/upload/${Image.name}`
    await writeFile(path, buffer)

        const dataEntry = await prisma.form.create({
            data: {
                fullName: data.get("fullName") as unknown as string,
                email: data.get("email") as unknown as string,
                age: Number(data.get("age")) as unknown as number,
                phoneNumber: Number(data.get("phoneNumber")) as unknown as number,
                imageUrl: path,
                photoTitle: data.get("photoTitle") as unknown as string,
                comment: data.get("comments") as unknown as unknown as string,
                photoLocation: data.get("photoLocation") as unknown as string,
                photoPurpose: data.get("photoPurpose") as unknown as string,
            }
        })

    return NextResponse.json({success: true, msg: "Successfully uploaded"})
}