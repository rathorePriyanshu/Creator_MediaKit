"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import RateCardItem from "./RateCardItem";
import { RateCardInput } from "@/lib/validations";
import { useCreatorKitStore } from "@/store/creatorKitStore";

export default function RateCardsForm() {
    const rateCards = useCreatorKitStore((state) => state.creatorKit.rateCards);
    const creatorKit = useCreatorKitStore((state) => state.creatorKit);
    const setCreatorKit = useCreatorKitStore((state) => state.setCreatorKit);

    const handleAdd = () => {
        const newCard: RateCardInput = {
            id: crypto.randomUUID(),
            deliverable: "",
            description: "",
            basePrice: 0,
            turnaroundDays: 1,
        };
        setCreatorKit({ ...creatorKit, rateCards: [...rateCards, newCard] });
    };

    const handleRemove = (id: string) => {
        setCreatorKit({
            ...creatorKit,
            rateCards: rateCards.filter((c) => c.id !== id),
        });
    };

    const handleChange = (id: string, updated: RateCardInput) => {
        setCreatorKit({
            ...creatorKit,
            rateCards: rateCards.map((c) => (c.id === id ? updated : c)),
        });
    };

    return (
        <div className="space-y-6">
            <div className="space-y-5 flex flex-col">
                <AnimatePresence mode="popLayout">
                    {rateCards.map((card, index) => (
                        <motion.div
                            layout
                            key={card.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <RateCardItem
                                index={index}
                                rateCard={card}
                                onRemove={() => handleRemove(card.id)}
                                onChange={(updated) => handleChange(card.id, updated)}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
            >
                <Button
                    type="button"
                    variant="primary"
                    className="w-full h-11 rounded-xl font-bold shadow-md shadow-[var(--theme-color)]/10 hover:shadow-lg hover:shadow-[var(--theme-color)]/15 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                    onClick={handleAdd}
                >
                    <Plus className="mr-2 h-4 w-4 stroke-[2.5]" />
                    Add Package Tier
                </Button>
            </motion.div>
        </div>
    );
}