import { IconType } from "react-icons";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export interface PlatformConfigItem {
    label: string;
    icon: IconType;
    badgeColor: string;
    cardGradient: string;
    iconColor: string;
}

export const PLATFORM_CONFIG: Record<string, PlatformConfigItem> = {
    instagram: {
        label: "Instagram",
        icon: FaInstagram,
        badgeColor: "bg-pink-500/15 text-pink-400",
        cardGradient: "from-pink-500 via-fuchsia-500 to-orange-500",
        iconColor: "text-pink-400",
    },
    youtube: {
        label: "YouTube",
        icon: FaYoutube,
        badgeColor: "bg-red-500/15 text-red-400",
        cardGradient: "from-red-600 to-red-500",
        iconColor: "text-red-500",
    },
    linkedin: {
        label: "LinkedIn",
        icon: FaLinkedin,
        badgeColor: "bg-blue-500/15 text-blue-400",
        cardGradient: "from-blue-700 to-blue-500",
        iconColor: "text-blue-400",
    },
    x: {
        label: "X",
        icon: FaXTwitter,
        badgeColor: "bg-zinc-700 text-zinc-200",
        cardGradient: "from-zinc-900 to-zinc-700",
        iconColor: "text-zinc-200",
    },
};
