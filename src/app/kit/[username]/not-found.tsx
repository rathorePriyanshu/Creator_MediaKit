import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0d0d12] px-6">

            <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-[#18181b] p-10 text-center">

                <h1 className="mb-3 text-3xl font-bold text-white">
                    Creator Not Found
                </h1>

                <p className="mb-8 text-zinc-400">
                    The requested creator media kit doesn't exist.
                </p>

                <Link
                    href="/"
                    className="inline-flex rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500"
                >
                    Back to Builder
                </Link>

            </div>

        </main>
    );
}