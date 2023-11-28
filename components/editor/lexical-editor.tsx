import RichTextTheme from './themes/rich-text-theme'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import ToolbarPlugin from './plugins/toolbar-plugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table'
import { ListItemNode, ListNode } from '@lexical/list'
import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { TRANSFORMERS } from '@lexical/markdown'

import ListMaxIndentLevelPlugin from './plugins/list-max-indent-level-plugin'
import CodeHighlightPlugin from './plugins/code-highlight-plugin'
import AutoLinkPlugin from './plugins/auto-link-plugin'
import { Card, CardContent } from '../ui/card'

import '@/styles/lexical-editor.css'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { ScrollBar } from '../ui/scroll-area'

function Placeholder() {
  return <div className="editor-placeholder">Enter event description</div>
}

const editorConfig = {
  namespace: 'lexical-rich-text-editor',
  // The editor theme
  theme: RichTextTheme,
  // Handling of errors during update
  onError(error: any) {
    throw error
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
    LinkNode,
  ],
}

export default function LexicalEditor() {
  return (
    <Card>
      <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-container">
          <ToolbarPlugin />
          <CardContent>
            <ScrollArea className="max-h-[350px] overflow-auto">
              <div className="editor-inner">
                <RichTextPlugin
                  contentEditable={<ContentEditable className="editor-input" />}
                  placeholder={<Placeholder />}
                  ErrorBoundary={LexicalErrorBoundary}
                />
                <HistoryPlugin />
                <AutoFocusPlugin />
                <CodeHighlightPlugin />
                <ListPlugin />
                <LinkPlugin />
                <AutoLinkPlugin />
                <ListMaxIndentLevelPlugin maxDepth={7} />
                <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
              </div>

              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </CardContent>
        </div>
      </LexicalComposer>
    </Card>
  )
}
