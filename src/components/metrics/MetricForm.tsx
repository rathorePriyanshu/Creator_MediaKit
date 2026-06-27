"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import MetricCard from "./MetricCard";
import { MetricInput } from "@/lib/validations";
import { useCreatorKitStore } from "@/store/creatorKitStore";

export default function MetricsForm() {
    const metrics = useCreatorKitStore((state) => state.creatorKit.metrics);
    const setCreatorKit = useCreatorKitStore((state) => state.setCreatorKit);
    const creatorKit = useCreatorKitStore((state) => state.creatorKit);

    const handleAdd = () => {
        const newMetric: MetricInput = {
            id: crypto.randomUUID(),
            platform: "instagram",
            username: "",
            followers: 0,
            engagementRate: 0,
        };
        setCreatorKit({
            ...creatorKit,
            metrics: [...(metrics ?? []), newMetric],
        });
    };

    const handleRemove = (id: string) => {
        setCreatorKit({
            ...creatorKit,
            metrics: metrics.filter((m) => m.id !== id),
        });
    };

    const handleChange = (id: string, updated: MetricInput) => {
        setCreatorKit({
            ...creatorKit,
            metrics: metrics.map((m) => (m.id === id ? updated : m)),
        });
    };

    return (
        <div className="space-y-6">
            <div className="space-y-5 flex flex-col">
                <AnimatePresence mode="popLayout">
                    {metrics.map((metric, index) => (
                        <motion.div
                            layout
                            key={metric.id}
                            initial={{ opacity: 0, scale: 0.95, y: 12 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -12 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <MetricCard
                                index={index}
                                metric={metric}
                                onRemove={() => handleRemove(metric.id)}
                                onChange={(updated) => handleChange(metric.id, updated)}
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
                    Add Platform Profile
                </Button>
            </motion.div>
        </div>
    );
}