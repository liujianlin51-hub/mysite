export default function Home() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{
          width: 100, height: 100, borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          margin: '0 auto 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 40
        }}>
          🦞
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 700, margin: '0 0 8px' }}>刘建林</h1>
        <p style={{ color: '#94a3b8', fontSize: 16, margin: 0 }}>
          AI Agent 开发者 · 吉林建筑科技学院 · 人工智能
        </p>
      </div>

      <Section title="👋 关于我">
        <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>
          热爱 AI Agent 开发，熟悉 Python、TypeScript。正在构建自己的智能体系统，
          用 Hermes + Obsidian 打造个人第二大脑。
        </p>
      </Section>

      <Section title="🛠 技能">
        <Tags items={['Python', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Spring Boot', 'AI Agent', 'Prompt Engineering', 'Obsidian']} />
      </Section>

      <Section title="🚀 项目">
        <ProjectCard title="MetaBot" desc="飞书/Telegram → Claude Code 桥接，Node.js + TypeScript" />
        <ProjectCard title="Hermes 知识管理系统" desc="多 Profile Agent 协作 + Obsidian 知识库自动化" />
      </Section>

      <Section title="🔗 找到我">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <LinkBtn href="https://github.com/liujianlin51-hub" text="GitHub" />
        </div>
      </Section>

      <footer style={{ textAlign: 'center', color: '#475569', marginTop: 60, fontSize: 13 }}>
        Built with Next.js · Deployed on Vercel
      </footer>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16, borderBottom: '1px solid #1e293b', paddingBottom: 8 }}>{title}</h2>
      {children}
    </section>
  )
}

function Tags({ items }: { items: string[] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {items.map(t => (
        <span key={t} style={{
          background: '#1e293b', color: '#a5b4fc',
          padding: '4px 14px', borderRadius: 20, fontSize: 14
        }}>{t}</span>
      ))}
    </div>
  )
}

function ProjectCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={{
      background: '#1e293b', borderRadius: 10, padding: '16px 20px',
      marginBottom: 12, border: '1px solid #334155'
    }}>
      <h3 style={{ margin: '0 0 6px', fontSize: 16 }}>{title}</h3>
      <p style={{ margin: 0, color: '#94a3b8', fontSize: 14 }}>{desc}</p>
    </div>
  )
}

function LinkBtn({ href, text }: { href: string; text: string }) {
  return (
    <a href={href} target="_blank" style={{
      background: '#6366f1', color: '#fff', padding: '8px 20px',
      borderRadius: 8, textDecoration: 'none', fontSize: 14, fontWeight: 500
    }}>{text}</a>
  )
}
