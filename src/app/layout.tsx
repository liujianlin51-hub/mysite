import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '刘建林 | 个人主页',
  description: 'AI Agent 开发者',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', background: '#0f172a', color: '#e2e8f0' }}>{children}</body>
    </html>
  )
}
