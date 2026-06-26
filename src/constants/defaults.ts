import {
    CreatorKit,
    CreatorProfile,
    Metric,
    RateCard,
} from "@/types/creator-kit";

export const DEFAULT_PROFILE: CreatorProfile = Object.freeze({
    username: "",
    fullName: "",
    bio: "",
    profileImageUrl: "",
    themeColor: "#6366F1",
});

export const DEFAULT_METRIC: Metric = {
    id: "",
    platform: "instagram",
    username: "",
    followers: 0,
    engagementRate: 0,
};

export const DEFAULT_RATE_CARD: RateCard = {
    id: "",
    deliverable: "",
    description: "",
    basePrice: 0,
    turnaroundDays: 1,
};

export const DEFAULT_CREATOR_KIT: CreatorKit = {
    profile: DEFAULT_PROFILE,
    metrics: [],
    rateCards: [],
};