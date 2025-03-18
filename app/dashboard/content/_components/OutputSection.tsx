"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic"; // Import Next.js dynamic
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface 

// Dynamically import @toast-ui/react-editor to prevent SSR issues
const Editor = dynamic(() => import("@toast-ui/react-editor").then(mod => mod.Editor), { ssr: false });

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="p-5 flex justify-between items-center">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-2">
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>

      {/* Toast UI Editor */}
      <Editor
        ref={editorRef}
        initialValue="Your desired result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current?.getInstance().getMarkdown())}
      />
    </div>
  );
}

export default OutputSection;
