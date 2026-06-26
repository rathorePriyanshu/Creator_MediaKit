export type Platform = "instagram" | "youtube" | "linkedin" | "x";

export interface CreatorProfile {
    username: string;
    fullName: string;
    bio: string;
    profileImageUrl: string;
    themeColor: string;
}

export interface Metric {
    id: string;
    platform: Platform;
    username: string;
    followers: number;
    engagementRate: number;
}

export interface RateCard {
    id: string;
    deliverable: string;
    description: string;
    basePrice: number;
    turnaroundDays: number;
}

export interface CreatorKit {
    id?: string;
    profile: CreatorProfile;
    metrics: Metric[];
    rateCards: RateCard[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
    error?: unknown;
}