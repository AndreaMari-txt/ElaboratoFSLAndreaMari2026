import { ExternalLink } from 'lucide-react'
import { meta } from '../data/siteData'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #222220', background: '#111110' }}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-display font-semibold text-sm" style={{ color: '#c8c8c0' }}>
              {meta.student}
            </p>
            <p className="font-mono text-xs mt-0.5" style={{ color: '#484840' }}>
              {meta.school} · {meta.class} · A.S. {meta.year}
            </p>
          </div>

          <p className="font-mono text-xs" style={{ color: '#3a3a38' }}>
            Elaborato FSL · Stage {meta.stagePeriod}
          </p>

          <a
            href={meta.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs transition-colors"
            style={{ color: '#484840' }}
            onMouseEnter={e => e.currentTarget.style.color = '#888878'}
            onMouseLeave={e => e.currentTarget.style.color = '#484840'}
          >
            FreeDay15 <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </footer>
  )
}
