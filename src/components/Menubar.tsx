import { Editor } from "@tiptap/react";

interface IMenubarProp {
  editor: Editor;
}

export default function Menubar({ editor }: IMenubarProp) {
  const getFocus = () => editor.chain().focus();
  const isActive = (type: string, options?: any) => {
    return editor.isActive(type, options ?? {}) ? "is-active" : "";
  };

  const menus = [
    [
      {
        icon: "bold",
        onClick: () => getFocus().toggleBold(),
        isActive: isActive("bold"),
      },
      {
        icon: "italic",
        onClick: () => getFocus().toggleItalic(),
        isActive: isActive("italic"),
      },
      {
        icon: "strikethrough",
        onClick: () => getFocus().toggleStrike(),
        isActive: isActive("strike"),
      },
      {
        icon: "code-line",
        onClick: () => getFocus().toggleCode(),
        isActive: isActive("code"),
      },
    ],
    [
      {
        icon: "h1",
        onClick: () => getFocus().toggleHeading({ level: 1 }),
        isActive: isActive("heading", { level: 1 }),
      },
      {
        icon: "h2",
        onClick: () => getFocus().toggleHeading({ level: 2 }),
        isActive: isActive("heading", { level: 2 }),
      },
      {
        icon: "list-unordered",
        onClick: () => getFocus().toggleBulletList(),
        isActive: isActive("bulletList"),
      },
      {
        icon: "list-ordered",
        onClick: () => getFocus().toggleOrderedList(),
        isActive: isActive("orderedList"),
      },
    ],
  ];

  return <div>Menubar</div>;
}
