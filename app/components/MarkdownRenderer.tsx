"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

interface MarkdownRendererProps {
  content: string;
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-[#c8aa6e] mb-6 pb-3 border-b border-[#1e2328]">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold text-[#f0e6d2] mt-8 mb-4 flex items-center gap-3">
      <span className="w-1 h-6 bg-[#c8aa6e] rounded-full" />
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-medium text-[#c8aa6e]/80 mt-6 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[#a09b8c] leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-2 mb-6 ml-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-2 mb-6 ml-1 list-decimal list-inside">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-[#a09b8c] flex items-start gap-3">
      <span className="text-[#0ac8b9] mt-1.5 text-xs">◆</span>
      <span className="flex-1">{children}</span>
    </li>
  ),
  strong: ({ children }) => (
    <strong className="text-[#f0e6d2] font-semibold">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="text-[#0ac8b9] not-italic">{children}</em>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-[#0ac8b9] hover:text-[#0ac8b9]/80 underline underline-offset-2 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#c8aa6e] bg-[#1e2328]/50 px-4 py-3 my-4 rounded-r-md">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="bg-[#1e2328] text-[#0ac8b9] px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    }
    return (
      <code className="block bg-[#1e2328] p-4 rounded-lg text-sm font-mono text-[#a09b8c] overflow-x-auto">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="my-4">{children}</pre>
  ),
  hr: () => (
    <hr className="border-[#1e2328] my-8" />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[#1e2328]">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="text-left text-[#c8aa6e] font-semibold px-4 py-2 border border-[#1e2328]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="text-[#a09b8c] px-4 py-2 border border-[#1e2328]">
      {children}
    </td>
  ),
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <article className="prose-custom max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </article>
  );
}

