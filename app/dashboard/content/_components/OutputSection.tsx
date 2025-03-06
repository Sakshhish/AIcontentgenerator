import React from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/Button';

function OutputSection() {
  const editorRef:any=React.useRef(null)
  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='p-5 flex justify-between items-center'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2'><Copy className='w-4 h-4'/> Copy </Button>
      </div>
      {/* added using ui.toast.com */}
      <Editor
        ref={editorRef}
        initialValue="Your desired result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
      />
      
    </div>
  )
}

export default OutputSection

