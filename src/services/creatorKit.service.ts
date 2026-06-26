import { prisma } from "@/lib/prisma";
import { CreatorKitInput } from "@/lib/validations";

class CreatorKitService {
    async saveCreatorKit(data: CreatorKitInput) {
        const { profile, metrics, rateCards } = data;

        return prisma.creatorKit.upsert({
            where: {
                username: profile.username,
            },

            update: {
                fullName: profile.fullName,
                bio: profile.bio,
                profileImageUrl: profile.profileImageUrl,
                themeColor: profile.themeColor,
                metrics,
                rateCards,
            },

            create: {
                username: profile.username,
                fullName: profile.fullName,
                bio: profile.bio,
                profileImageUrl: profile.profileImageUrl,
                themeColor: profile.themeColor,
                metrics,
                rateCards,
            },
        });
    }

    async getCreatorKitByUsername(username: string) {
        return prisma.creatorKit.findUnique({
            where: {
                username,
            },
        });
    }


    async updateCreatorKit(username: string, data: CreatorKitInput) {
        const { profile, metrics, rateCards } = data;

        return prisma.creatorKit.update({
            where: {
                username,
            },

            data: {
                fullName: profile.fullName,
                bio: profile.bio,
                profileImageUrl: profile.profileImageUrl,
                themeColor: profile.themeColor,
                metrics,
                rateCards,
            },
        });
    }

    async deleteCreatorKit(username: string) {
        return prisma.creatorKit.delete({
            where: {
                username,
            },
        });
    }
}

export const creatorKitService = new CreatorKitService();