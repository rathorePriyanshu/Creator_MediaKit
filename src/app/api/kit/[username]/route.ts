import { NextRequest, NextResponse } from "next/server";
import { creatorKitService } from "@/services/creatorKit.service";

interface RouteContext {
    params: Promise<{ username: string; }>;
}

export async function GET(request: NextRequest, { params }: RouteContext) {
    try {
        const { username } = await params;
        const creatorKit = await creatorKitService.getCreatorKitByUsername(username);

        if (!creatorKit) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Creator not found.",
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json(
            {
                success: true,
                data: creatorKit,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("GET CREATOR API ERROR:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong.",
            },
            {
                status: 500,
            }
        );
    }
}