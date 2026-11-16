import React from "react";
import Link from "next/link";

interface MarkdownRendererProps {
  content: string;
}

// Inline formatting helper for bold, italic, and links
function formatInline(text: string): React.ReactNode {
  // Regex pattern matching:
  // 1: [text](url)
  // 2: **bold**
  // 3: *italic*
  const pattern = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    if (!part) return null;

    // Link: [label](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const isInternal = linkMatch[2].startsWith("/") || linkMatch[2].includes("icondrugs.com");
      return (
        <Link
          key={index}
          href={linkMatch[2]}
          className="text-[#005EB1] font-semibold underline underline-offset-2 hover:text-[#F87901] transition-colors"
          target={isInternal ? undefined : "_blank"}
          rel={isInternal ? undefined : "noopener noreferrer"}
        >
          {linkMatch[1]}
        </Link>
      );
    }

    // Bold: **text**
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      return (
        <strong key={index} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Italic: *text*
    if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
      return (
        <em key={index} className="italic text-slate-800">
          {part.slice(1, -1)}
        </em>
      );
    }

    return part;
  });
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  if (!content) return null;

  // Split raw content into block chunks by double newline
  const rawBlocks = content.split(/\n\s*\n/);
  const renderedElements: React.ReactNode[] = [];

  rawBlocks.forEach((block, blockIndex) => {
    const trimmed = block.trim();
    if (!trimmed) return;

    // 1. Horizontal Rule
    if (trimmed === "---" || trimmed === "***") {
      renderedElements.push(
        <hr key={blockIndex} className="my-8 border-t border-slate-200" />
      );
      return;
    }

    // 2. Heading 2 (## Title)
    if (trimmed.startsWith("## ")) {
      const headingText = trimmed.replace(/^##\s+/, "").trim();
      const slugId = headingText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      renderedElements.push(
        <h2
          key={blockIndex}
          id={slugId}
          className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-10 mb-4 pt-4 border-t border-slate-100 flex items-center gap-3 scroll-mt-28"
        >
          <span className="w-1.5 h-6 bg-[#F87901] rounded-full inline-block" />
          <span>{formatInline(headingText)}</span>
        </h2>
      );
      return;
    }

    // 3. Heading 3 (### Title)
    if (trimmed.startsWith("### ")) {
      const headingText = trimmed.replace(/^###\s+/, "").trim();
      const slugId = headingText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      renderedElements.push(
        <h3
          key={blockIndex}
          id={slugId}
          className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mt-8 mb-3 scroll-mt-28"
        >
          {formatInline(headingText)}
        </h3>
      );
      return;
    }

    // 4. Markdown Table (| Header | Header | ... )
    if (trimmed.includes("|") && trimmed.includes("---")) {
      const lines = trimmed.split("\n").filter((l) => l.trim().startsWith("|"));
      if (lines.length >= 2) {
        const headerCells = lines[0]
          .split("|")
          .map((c) => c.trim())
          .filter((c) => c.length > 0);

        // find separator line index (usually 1)
        const dataLines = lines.slice(2);

        renderedElements.push(
          <div
            key={blockIndex}
            className="my-8 overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white"
          >
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold uppercase tracking-wider text-xs">
                <tr>
                  {headerCells.map((h, i) => (
                    <th key={i} className="px-5 py-3.5">
                      {formatInline(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {dataLines.map((rowLine, rowIndex) => {
                  const cells = rowLine
                    .split("|")
                    .map((c) => c.trim())
                    .filter((c) => c.length > 0);
                  return (
                    <tr
                      key={rowIndex}
                      className={
                        rowIndex % 2 === 0
                          ? "bg-white hover:bg-slate-50/60"
                          : "bg-slate-50/40 hover:bg-slate-50/80"
                      }
                    >
                      {cells.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-5 py-3.5 align-top">
                          {formatInline(cell)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
        return;
      }
    }

    // 5. Blockquote (> ...)
    if (trimmed.startsWith("> ")) {
      const quoteText = trimmed.replace(/^>\s*/gm, "");
      renderedElements.push(
        <blockquote
          key={blockIndex}
          className="my-6 pl-5 py-3 border-l-4 border-[#005EB1] bg-blue-50/50 rounded-r-xl text-slate-800 italic"
        >
          {formatInline(quoteText)}
        </blockquote>
      );
      return;
    }

    // 6. Educational Disclaimer or Author Signature Callout
    if (
      trimmed.includes("Educational Disclaimer:") ||
      trimmed.includes("Icon Drugs Pharmaceuticals Pvt. Ltd.")
    ) {
      renderedElements.push(
        <div
          key={blockIndex}
          className="my-8 p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-amber-50/40 border border-amber-200/60 text-slate-700 text-sm leading-relaxed"
        >
          {formatInline(trimmed)}
        </div>
      );
      return;
    }

    // 7. Unordered List (- or *)
    const lines = trimmed.split("\n");
    const isUnorderedList = lines.every((l) => /^\s*[-*]\s+/.test(l));
    if (isUnorderedList) {
      renderedElements.push(
        <ul
          key={blockIndex}
          className="my-5 space-y-2.5 pl-6 list-disc text-slate-700 leading-relaxed marker:text-[#F87901]"
        >
          {lines.map((item, i) => (
            <li key={i}>
              {formatInline(item.replace(/^\s*[-*]\s+/, ""))}
            </li>
          ))}
        </ul>
      );
      return;
    }

    // 8. Ordered List (1. 2. 3.)
    const isOrderedList = lines.every((l) => /^\s*\d+\.\s+/.test(l));
    if (isOrderedList) {
      renderedElements.push(
        <ol
          key={blockIndex}
          className="my-5 space-y-2.5 pl-6 list-decimal text-slate-700 leading-relaxed marker:font-bold marker:text-[#005EB1]"
        >
          {lines.map((item, i) => (
            <li key={i}>
              {formatInline(item.replace(/^\s*\d+\.\s+/, ""))}
            </li>
          ))}
        </ol>
      );
      return;
    }

    // 9. Standard Paragraph
    renderedElements.push(
      <p
        key={blockIndex}
        className="my-4 text-slate-700 text-base sm:text-lg leading-relaxed"
      >
        {formatInline(trimmed)}
      </p>
    );
  });

  return <div className="blog-content-body">{renderedElements}</div>;
}
