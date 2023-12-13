'use client';

import { useEffect, useState } from "react";
import { ListItemNode, ListNode } from "@lexical/list";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ExampleTheme from "@/app/themes/ExampleTheme";
// import { textDailyStandup } from "./text-daily-standup";

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
     
        ListNode,
        ListItemNode,
       
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
