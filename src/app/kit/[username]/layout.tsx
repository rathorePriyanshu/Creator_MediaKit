export default function PublicKitLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="overflow-y-auto min-h-screen">
            {children}
        </div>
    );
}