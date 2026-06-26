import { z } from "zod";

export const PlatformSchema = z.enum([
    "instagram",
    "youtube",
    "linkedin",
    "x",
]);

export const CreatorProfileSchema = z.object({
    username: z
        .string()
        .trim()
        .min(3, "Username must be at least 3 characters")
        .max(50)
        .regex(
            /^[a-zA-Z0-9_]+$/,
            "Username can only contain letters, numbers and underscores"
        ),
    fullName: z
        .string()
        .trim()
        .min(2)
        .max(100),
    bio: z
        .string()
        .trim()
        .max(500),
    profileImageUrl: z
        .string()
        .optional()
        .or(z.literal(""))
        .refine(
            (val) => {
                if (!val) return true;
                if (val.startsWith("data:image/")) {
                    return /^data:image\/[a-zA-Z+-]+;base64,/.test(val);
                }
                try {
                    const parsed = new URL(val);
                    return parsed.protocol === "http:" || parsed.protocol === "https:";
                } catch {
                    return false;
                }
            },
            {
                message: "Must be a valid HTTP/HTTPS URL or base64 image data",
            }
        ),
    themeColor: z
        .string()
        .regex(/^#[0-9A-Fa-f]{6}$/),
});


export const MetricSchema = z.object({
    id: z.string(),
    platform: PlatformSchema,
    username: z.string().trim().min(1),
    followers: z
        .number()
        .nonnegative(),
    engagementRate: z
        .number()
        .min(0)
        .max(100),
});


export const RateCardSchema = z.object({
    id: z.string(),
    deliverable: z
        .string()
        .trim()
        .min(1)
        .max(100),
    description: z
        .string()
        .trim()
        .max(500),
    basePrice: z
        .number()
        .positive(),
    turnaroundDays: z
        .number()
        .int()
        .positive(),
});


export const CreatorKitSchema = z.object({
    profile: CreatorProfileSchema,
    metrics: z.array(MetricSchema),
    rateCards: z.array(RateCardSchema),
});


export type CreatorKitInput = z.infer<typeof CreatorKitSchema>;
export type CreatorProfileInput = z.infer<typeof CreatorProfileSchema>;
export type MetricInput = z.infer<typeof MetricSchema>;
export type RateCardInput = z.infer<typeof RateCardSchema>;