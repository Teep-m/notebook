import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Menubar from "./Menubar";

export default function MainEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<h2>Hello</h2>`,
  });
  return (
    <>
      {editor ? <Menubar editor={editor} /> : null}
      <EditorContent editor={editor} />
    </>
  );
}
