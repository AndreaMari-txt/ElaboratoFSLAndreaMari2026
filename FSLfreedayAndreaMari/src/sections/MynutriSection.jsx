import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from 'recharts'
import {
  Home, BookOpen, BarChart2, List, User, Bell,
  Flame, Beef, Wheat, Droplets, Leaf, ChevronDown,
  Plus, Pencil,
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { mynutriFeatures } from '../data/siteData'

// ─── dati simulati ───────────────────────────────────────────
const KCAL_TARGET = 2000
const KCAL_CONSUMED = 1250
const KCAL_REMAINING = KCAL_TARGET - KCAL_CONSUMED

const macros = [
  { label: 'Proteine',     value: 78,  unit: 'g', pct: 85,  color: '#7c8cf8' },
  { label: 'Carboidrati',  value: 142, unit: 'g', pct: 65,  color: '#f59e0b' },
  { label: 'Grassi',       value: 45,  unit: 'g', pct: 56,  color: '#34d399' },
  { label: 'Fibre',        value: 21,  unit: 'g', pct: 70,  color: '#4ade80' },
  { label: 'Acqua',        value: 1.4, unit: 'L', pct: 70,  color: '#38bdf8' },
]

const tips = [
  { icon: '💧', title: 'Idratati regolarmente',   desc: 'Bevi almeno 1,5–2 litri di acqua al giorno per mantenere il tuo corpo idratato e attivo.' },
  { icon: '🥗', title: 'Scegli alimenti integrali', desc: 'Prediligi cereali integrali, legumi e verdure per un apporto costante di energia e fibre.' },
  { icon: '🥑', title: 'Non saltare i pasti',      desc: 'Fare colazione, pranzo e cena aiuta a mantenere stabile il metabolismo.' },
  { icon: '🏃', title: 'Ascolta il tuo corpo',     desc: 'Fai attenzione ai segnali di fame e sazietà e cerca di mantenere uno stile di vita attivo.' },
]

const pieData = [
  { name: 'Consumate', value: KCAL_CONSUMED },
  { name: 'Rimanenti', value: KCAL_REMAINING },
]
const PIE_COLORS = ['#22c55e', '#e5e7eb']

// ─── Tooltip custom ──────────────────────────────────────────
const CustomPieTip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="text-xs rounded-lg px-3 py-2 font-mono shadow-xl"
         style={{ background: '#1e1e1c', border: '1px solid #2a2a28', color: '#c0c0b8' }}>
      {payload[0].name}: {payload[0].value} kcal
    </div>
  )
}

// ─── Mini nav tab ─────────────────────────────────────────────
function NavTab({ icon: Icon, label, active }) {
  return (
    <button className="flex flex-col items-center gap-0.5 px-2 py-1 relative">
      <Icon size={16} style={{ color: active ? '#22c55e' : '#9ca3af' }} />
      <span className="font-body text-[10px]" style={{ color: active ? '#22c55e' : '#9ca3af' }}>{label}</span>
      {active && <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-green-500" />}
    </button>
  )
}

// ─── Dashboard component ──────────────────────────────────────
function MyNutriDashboard() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl select-none"
         style={{ background: '#f9fafb', fontFamily: 'DM Sans, sans-serif', maxWidth: 580, margin: '0 auto' }}>

      {/* ── Top nav ── */}
      <div className="flex items-center justify-between px-5 py-3 border-b"
           style={{ background: '#fff', borderColor: '#e5e7eb' }}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center">
            <Leaf size={14} className="text-white" />
          </div>
          <span className="font-bold text-green-700 text-sm">MyNutry</span>
        </div>

        {/* Nav items */}
        <div className="flex items-center gap-1">
          {[
            { icon: Home,     label: 'Home',              key: 'home' },
            { icon: BookOpen, label: 'Diario',            key: 'diario' },
            { icon: BarChart2,label: 'Statistiche',       key: 'stats' },
            { icon: List,     label: 'Piani alimentari',  key: 'piani' },
            { icon: User,     label: 'Profilo',           key: 'profilo' },
          ].map(t => (
            <NavTab key={t.key} icon={t.icon} label={t.label} active={t.key === activeTab} />
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-2">
          <Bell size={16} style={{ color: '#6b7280' }} />
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold"
               style={{ background: '#dcfce7', color: '#166534' }}>
            AM <ChevronDown size={10} />
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="p-4 space-y-4" style={{ background: '#f9fafb' }}>

        {/* Top row: Tips + Donut */}
        <div className="grid grid-cols-2 gap-3">

          {/* Consigli del giorno */}
          <div className="rounded-xl p-4" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                <Leaf size={13} className="text-green-600" />
              </div>
              <div>
                <p className="font-bold text-green-800 text-xs">Consigli del giorno</p>
                <p className="text-[10px] text-green-600">Piccoli gesti quotidiani per grandi risultati.</p>
              </div>
            </div>
            <div className="space-y-2">
              {tips.map(tip => (
                <div key={tip.title} className="flex items-start gap-2">
                  <span className="text-sm leading-none mt-0.5">{tip.icon}</span>
                  <div>
                    <p className="font-semibold text-[11px] text-gray-800">{tip.title}</p>
                    <p className="text-[10px] text-gray-500 leading-tight">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Obiettivo giornaliero */}
          <div className="rounded-xl p-4" style={{ background: '#fff', border: '1px solid #e5e7eb' }}>
            <div className="flex items-center gap-1 mb-2">
              <Flame size={13} className="text-orange-400" />
              <p className="font-bold text-gray-800 text-xs">Obiettivo giornaliero</p>
            </div>
            <p className="text-[10px] text-gray-400 mb-2">Kcal</p>

            {/* Donut */}
            <div className="relative h-28">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={36}
                    outerRadius={52}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={PIE_COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomPieTip />} />
                </PieChart>
              </ResponsiveContainer>
              {/* Centro donut */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="font-bold text-gray-800 text-sm leading-none">1.250</span>
                <span className="text-[9px] text-gray-400">kcal</span>
                <span className="text-[9px] text-green-600 font-semibold">consumate</span>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-1.5 mt-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-[10px] text-gray-600">Kcal consumate</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-green-600">{KCAL_CONSUMED} kcal</span>
                  <span className="text-[10px] text-gray-400 ml-1">62%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <span className="text-[10px] text-gray-600">Kcal rimanenti</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-600">{KCAL_REMAINING} kcal</span>
                  <span className="text-[10px] text-gray-400 ml-1">38%</span>
                </div>
              </div>
              <div className="pt-1 border-t" style={{ borderColor: '#f3f4f6' }}>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-gray-400">Obiettivo giornaliero</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-bold text-gray-800">2.000 kcal</span>
                    <Pencil size={9} className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aggiungi alimento CTA */}
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
                style={{ background: '#16a34a' }}>
          <Plus size={16} />
          Aggiungi alimento
        </button>

        {/* Riepilogo di oggi */}
        <div className="rounded-xl p-4" style={{ background: '#fff', border: '1px solid #e5e7eb' }}>
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-gray-800 text-sm">Riepilogo di oggi</span>
            <div className="flex items-center gap-1 text-[11px]" style={{ color: '#6b7280' }}>
              <BookOpen size={11} />
              <span>22 Maggio 2024</span>
              <ChevronDown size={11} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {/* Kcal consumate */}
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <Flame size={11} className="text-orange-400" />
                <span className="text-[10px] text-gray-500">Kcal consumate</span>
              </div>
              <p className="font-bold text-green-600 text-sm">{KCAL_CONSUMED} kcal</p>
              <p className="text-[9px] text-gray-400">62% obiettivo</p>
            </div>

            {/* Proteine */}
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[11px]">🫐</span>
                <span className="text-[10px] text-gray-500">Proteine</span>
              </div>
              <p className="font-bold text-gray-800 text-sm">78 g</p>
              <p className="text-[9px] text-green-500">85% obiettivo</p>
            </div>

            {/* Carboidrati */}
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[11px]">🌽</span>
                <span className="text-[10px] text-gray-500">Carboidrati</span>
              </div>
              <p className="font-bold text-gray-800 text-sm">142 g</p>
              <p className="text-[9px] text-orange-400">65% obiettivo</p>
            </div>

            {/* Grassi */}
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[11px]">🥑</span>
                <span className="text-[10px] text-gray-500">Grassi</span>
              </div>
              <p className="font-bold text-gray-800 text-sm">45 g</p>
              <p className="text-[9px] text-orange-400">56% obiettivo</p>
            </div>

            {/* Fibre */}
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <Leaf size={11} className="text-green-500" />
                <span className="text-[10px] text-gray-500">Fibre</span>
              </div>
              <p className="font-bold text-gray-800 text-sm">21 g</p>
              <p className="text-[9px] text-green-500">70% obiettivo</p>
            </div>

            {/* Acqua */}
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <Droplets size={11} className="text-blue-400" />
                <span className="text-[10px] text-gray-500">Acqua</span>
              </div>
              <p className="font-bold text-gray-800 text-sm">1,4 L</p>
              <p className="text-[9px] text-green-500">70% obiettivo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Section wrapper ──────────────────────────────────────────
export default function MynutriSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="mynutri" className="py-28" style={{ background: '#161614' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="section-label mb-4"
            >
              04 — Progetto sviluppato
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-display font-black text-5xl lg:text-6xl leading-none mb-6"
            >
              MY<span style={{ color: '#c0c0b8' }}>NUTRI</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-body leading-relaxed mb-8"
              style={{ color: '#808070' }}
            >
              Un'applicazione web completa per il tracciamento nutrizionale: diario
              dei pasti, calcolo calorie, valori macronutrienti, statistiche giornaliere
              e consigli personalizzati. Sviluppata interamente durante il periodo di stage.
            </motion.p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {mynutriFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.06 }}
                  className="p-4 rounded-xl transition-colors"
                  style={{ background: '#1e1e1c', border: '1px solid #2a2a28' }}
                >
                  <p className="font-display font-semibold text-sm mb-1" style={{ color: '#c8c8c0' }}>{f.title}</p>
                  <p className="font-body text-xs leading-relaxed" style={{ color: '#585850' }}>{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: dashboard demo */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <MyNutriDashboard />
            <p className="font-mono text-xs text-center mt-3" style={{ color: '#3a3a38' }}>
              Demo interattiva — dati simulati
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
