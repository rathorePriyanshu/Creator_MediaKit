"use client";

import { ReactNode } from "react";

interface SplitLayoutProps {
  editor: ReactNode;
  preview: ReactNode;
}

export default function SplitLayout({
  editor,
  preview,
}: SplitLayoutProps) {
  return (
    <main className="bg-[#0d0d12] text-white lg:h-[100dvh] lg:overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] lg:h-full">
        <section className="lg:min-h-0 lg:overflow-y-auto border-b border-zinc-800/80 px-4 py-8 sm:px-6 md:px-8 lg:border-b-0 lg:border-r">
          {editor}
        </section>

        <section className="lg:min-h-0 lg:overflow-y-auto bg-[#0e0e13]/60 p-6 sm:p-8 md:p-10">
          {preview}
        </section>
      </div>
    </main>
  );
}