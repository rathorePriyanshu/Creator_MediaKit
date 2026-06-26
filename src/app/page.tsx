import SplitLayout from "@/components/layout/SplitLayout";
import EditorPanel from "@/components/editor/EditorPanel";
import PreviewPanel from "@/components/preview/PreviewPanel";
import CreatorKitProvider from "@/providers/CreatorKitProvider";

export default function HomePage() {
  return (
    <CreatorKitProvider>
      <SplitLayout
        editor={<EditorPanel />}
        preview={<PreviewPanel />}
      />
    </CreatorKitProvider>
  );
}