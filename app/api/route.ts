import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client'


export async function GET(req: NextRequest, res: NextResponse) {
    const prisma = new PrismaClient()

    const entries = await prisma.form.findMany();
    return NextResponse.json(entries);

}

export async function DELETE(req: NextRequest, res: NextResponse) {
    const prisma = new PrismaClient()

    const entries = await prisma.form.deleteMany();
    return NextResponse.json({success: true});

}