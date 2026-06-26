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
    <main className="min-h-screen bg-[#0d0d12] text-white">
      <div className="mx-auto flex flex-col lg:flex-row lg:overflow-hidden max-w-[1800px]">
        {/* Editor Panel - Scrollable on desktop, stacked on mobile/tablet */}
        <section className="w-full lg:w-[40%] lg:h-screen lg:overflow-y-auto border-b lg:border-b-0 lg:border-r border-zinc-800/80 px-4 py-8 sm:px-6 md:px-8">
          <div className="max-w-xl mx-auto lg:max-w-none">
            {editor}
          </div>
        </section>

        {/* Preview Panel - Scrollable on desktop, stacked below on mobile/tablet */}
        <section className="w-full lg:w-[60%] lg:overflow-y-auto bg-[#0e0e13]/60 p-6 sm:p-8 md:p-10">
          <div className="max-w-2xl mx-auto lg:max-w-none">
            {preview}
          </div>
        </section>
      </div>
    </main>
  );
}