import { NextRequest, NextResponse } from "next/server";
import { CreatorKitSchema } from "@/lib/validations";
import { creatorKitService } from "@/services/creatorKit.service";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validationResult = CreatorKitSchema.safeParse(body);

        if (!validationResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Validation failed.",
                    error: validationResult.error.flatten(),
                },
                {
                    status: 400,
                }
            );
        }

        const creatorKit = await creatorKitService.saveCreatorKit(validationResult.data);

        return NextResponse.json(
            {
                success: true,
                message: "Creator kit saved successfully.",
                data: creatorKit,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("SAVE API ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong while saving creator kit.",
            },
            {
                status: 500,
            }
        );
    }
}