'use client';

import { useEffect, useState } from "react";
import { ListItemNode, ListNode } from "@lexical/list";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";

import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ExampleTheme from "@/app/themes/ExampleTheme";
import ToolbarPlugin from "@/app/plugins/ToolbarPlugin";

function Placeholder() {
    return <div className="editor-placeholder">Enter some rich text...</div>;
}
const editorConfig = {
    theme: ExampleTheme,
    namespace: "daily-standup-editor",
    // editorState: textDailyStandup,
    onError(error: unknown) {
        throw error;
    },
    // Any custom nodes go here
    nodes: [
        HeadingNode,
        ListNode,
        ListItemNode,
        QuoteNode,
        CodeNode,
        CodeHighlightNode,
        TableNode,
        TableCellNode,
        TableRowNode,
        AutoLinkNode,
        LinkNode
    ],
};

export function Editor(): JSX.Element | null {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) return null

    return (
        <LexicalComposer initialConfig={editorConfig}>
            <div className="editor-container">
            <ToolbarPlugin />
                <div className="editor-inner">
                    <RichTextPlugin
                        contentEditable={<ContentEditable className="editor-input" />}
                        placeholder={<Placeholder />}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
               
                </div>
            </div>
        </LexicalComposer>
    );
}
