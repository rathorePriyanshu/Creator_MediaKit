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

      <div className="mx-auto flex h-screen max-w-[1800px]">

        <section className="w-full lg:w-[45%] overflow-y-auto border-r border-zinc-800 px-8 py-8">
          {editor}
        </section>

        <section className="hidden lg:block w-[55%] bg-[#111115]">
          <div className="sticky top-0 h-screen overflow-y-auto p-10">
            {preview}
          </div>
        </section>

      </div>

    </main>
  );
}