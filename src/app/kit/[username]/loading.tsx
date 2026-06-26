export default function Loading() {
    return (
        <main className="min-h-screen bg-[#0d0d12] py-12">
            <div className="mx-auto max-w-6xl animate-pulse space-y-6 px-6">

                <div className="h-10 w-64 rounded bg-zinc-800" />

                <div className="rounded-xl border border-zinc-800 bg-[#18181b] p-8">

                    <div className="mx-auto mb-6 h-28 w-28 rounded-full bg-zinc-800" />

                    <div className="mx-auto mb-4 h-8 w-60 rounded bg-zinc-800" />

                    <div className="mx-auto mb-10 h-4 w-40 rounded bg-zinc-800" />

                    <div className="space-y-3">
                        <div className="h-4 rounded bg-zinc-800" />
                        <div className="h-4 rounded bg-zinc-800" />
                        <div className="h-4 w-3/4 rounded bg-zinc-800" />
                    </div>

                </div>
            </div>
        </main>
    );
}