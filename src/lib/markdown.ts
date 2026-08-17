/**
 * Minimal Markdown renderer for research report bodies.
 * Handles the controlled subset used in content/research summary files:
 * headings, paragraphs, bold, italic, inline code, bullets, numbered lists,
 * horizontal rules, and block quotes. Everything else is escaped.
 */

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function inline(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
}

function renderLine(line: string): string {
  if (line.startsWith('### ')) return `<h3>${inline(escapeHtml(line.slice(4)))}</h3>`
  if (line.startsWith('## ')) return `<h2>${inline(escapeHtml(line.slice(3)))}</h2>`
  if (line.startsWith('# ')) return `<h1>${inline(escapeHtml(line.slice(2)))}</h1>`
  if (line.startsWith('---')) return '<hr />'
  if (line.startsWith('> ')) return `<blockquote>${inline(escapeHtml(line.slice(2)))}</blockquote>`
  if (/^\s*[-*]\s+/.test(line)) return `<li>${inline(escapeHtml(line.replace(/^\s*[-*]\s+/, '')))}</li>`
  if (/^\s*\d+\.\s+/.test(line)) return `<li>${inline(escapeHtml(line.replace(/^\s*\d+\.\s+/, '')))}</li>`
  return `<p>${inline(escapeHtml(line))}</p>`
}

export function mdToHtml(markdown: string): string {
  const blocks: string[] = []
  let listType: 'ul' | 'ol' | null = null

  const closeList = () => {
    if (listType) {
      blocks.push(`</${listType}>`)
      listType = null
    }
  }

  for (const rawLine of markdown.split('\n')) {
    const line = rawLine.trim()
    if (!line) {
      closeList()
      continue
    }

    if (/^\s*[-*]\s+/.test(line)) {
      if (listType !== 'ul') {
        closeList()
        listType = 'ul'
        blocks.push('<ul>')
      }
      blocks.push(renderLine(line))
      continue
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      if (listType !== 'ol') {
        closeList()
        listType = 'ol'
        blocks.push('<ol>')
      }
      blocks.push(renderLine(line))
      continue
    }

    closeList()
    blocks.push(renderLine(line))
  }

  closeList()
  return blocks.join('\n')
}

/** Plain-text extraction of a markdown body (for meta descriptions). */
export function mdToPlain(markdown: string, maxLength = 300): string {
  const text = markdown
    .replace(/[#>*`_\-]/g, '')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()}…` : text
}