// ============================================================
// DATI CENTRALI DEL SITO — modifica qui per aggiornare tutto
// ============================================================

export const meta = {
  student: 'Andrea Mari',
  school: 'ITT Allievi San Gallo — Terni',
  class: '5BIA',
  year: '2025 / 2026',
  stagePeriod: '15 – 27 settembre 2025',
  company: 'FreeDay15',
  companyUrl: 'https://www.freeday15.it/',
}

export const navLinks = [
  { label: 'Azienda',     href: '#azienda' },
  { label: 'Esperienza',  href: '#esperienza' },
  { label: 'Progetto',    href: '#mynutri' },
  { label: 'Supabase',    href: '#supabase' },
  { label: 'AI & Dev',    href: '#ai' },
  { label: 'Competenze',  href: '#competenze' },
  { label: 'Conclusioni', href: '#conclusioni' },
]

export const stats = [
  { value: 13, suffix: '',  label: 'Giorni di stage' },
  { value: 80, suffix: '+', label: 'Ore di sviluppo' },
  { value: 5,  suffix: '°', label: 'Stage di 5° anno' },
]

export const timeline = [
  {
    day: 'Giorno 1–2',
    title: 'Onboarding & Brief',
    desc: 'Presentazione del team, analisi dei requisiti, definizione delle user stories per il progetto MYNUTRI.',
  },
  {
    day: 'Giorno 3–4',
    title: 'Design & Mockup',
    desc: 'Brainstorming, wireframe su carta, creazione dei mockup digitali su Canva e definizione del design system.',
  },
  {
    day: 'Giorno 5–7',
    title: 'Setup tecnico',
    desc: 'Configurazione Supabase (database, autenticazione, API), setup progetto React con Vite, struttura cartelle.',
  },
  {
    day: 'Giorno 8–11',
    title: 'Sviluppo core',
    desc: 'Implementazione autenticazione, dashboard, diario pasti, calcolo calorie e valori nutrizionali.',
  },
  {
    day: 'Giorno 12–13',
    title: 'Statistiche & Rifinitura',
    desc: 'Grafici settimanali e mensili con Recharts, notifiche, consigli automatici e polish finale dell\'UI.',
  },
]

export const techStack = [
  { name: 'React',       category: 'Frontend',  desc: 'Libreria UI component-based' },
  { name: 'Supabase',    category: 'Backend',   desc: 'Database, auth e API cloud' },
  { name: 'Windsurf',    category: 'IDE',       desc: 'Editor con AI integrata' },
  { name: 'Vite',        category: 'Tooling',   desc: 'Build tool ultra-veloce' },
  { name: 'Tailwind CSS',category: 'Styling',   desc: 'Framework CSS utility-first' },
  { name: 'Recharts',    category: 'Charts',    desc: 'Grafici per statistiche' },
]

export const mynutriFeatures = [
  { title: 'Diario pasti',         desc: 'Registrazione giornaliera di colazione, pranzo, cena e spuntini.' },
  { title: 'Tracking calorie',     desc: 'Calcolo automatico del fabbisogno calorico in base al profilo.' },
  { title: 'Valori nutrizionali',  desc: 'Monitoraggio di proteine, carboidrati, grassi e micronutrienti.' },
  { title: 'Statistiche',          desc: 'Grafici settimanali e mensili dell\'andamento nutrizionale.' },
  { title: 'Autenticazione',       desc: 'Sistema sicuro di registrazione e login tramite Supabase Auth.' },
  { title: 'Profilo utente',       desc: 'Dati fisici personalizzati: peso, altezza, età e obiettivi.' },
  { title: 'Consigli automatici',  desc: 'Suggerimenti basati sugli obiettivi e sull\'andamento registrato.' },
  { title: 'Dashboard',            desc: 'Panoramica visiva completa del giorno e della settimana.' },
]

export const supabaseFeatures = [
  {
    title: 'Database PostgreSQL',
    desc: 'Schema relazionale per utenti, pasti, alimenti e log giornalieri. Relazioni ben definite con foreign key e indici ottimizzati.',
  },
  {
    title: 'Authentication',
    desc: 'Sistema di autenticazione completo con JWT, sessioni sicure, refresh token e protezione delle route lato client.',
  },
  {
    title: 'Auto-generated API',
    desc: 'REST e GraphQL API generate automaticamente dallo schema. Nessun backend custom da mantenere.',
  },
  {
    title: 'Row Level Security',
    desc: 'Policy RLS per garantire che ogni utente acceda esclusivamente ai propri dati nutrizionali.',
  },
  {
    title: 'Realtime',
    desc: 'Sottoscrizioni realtime per aggiornamenti live della dashboard senza polling manuale.',
  },
  {
    title: 'Edge Functions',
    desc: 'Funzioni serverless Deno per logica di business avanzata: calcolo TDEE, generazione consigli.',
  },
]

export const softSkills = [
  { name: 'Teamwork',        level: 90 },
  { name: 'Comunicazione',   level: 85 },
  { name: 'Problem Solving', level: 97 },
  { name: 'Organizzazione',  level: 92 },
  { name: 'Gestione tempo',  level: 76 },
]

export const hardSkills = [
  { name: 'React / Frontend',  level: 60 },
  { name: 'Supabase / BaaS',   level: 80 },
  { name: 'Database design',   level: 72 },
  { name: 'Autenticazione JWT',level: 75 },
  { name: 'AI-assisted dev',   level: 88 },
  { name: 'Git & Versionamento',level: 68 },
]

// Dati fake per il grafico nutrizionale nella dashboard dimostrativa
export const weeklyNutritionData = [
  { day: 'Lun', kcal: 1820, protein: 85, carbs: 210, fat: 62 },
  { day: 'Mar', kcal: 2100, protein: 98, carbs: 245, fat: 71 },
  { day: 'Mer', kcal: 1950, protein: 91, carbs: 228, fat: 67 },
  { day: 'Gio', kcal: 2240, protein: 110, carbs: 260, fat: 75 },
  { day: 'Ven', kcal: 1780, protein: 82, carbs: 198, fat: 60 },
  { day: 'Sab', kcal: 2380, protein: 115, carbs: 280, fat: 82 },
  { day: 'Dom', kcal: 2020, protein: 94, carbs: 235, fat: 70 },
]

export const monthlyProgress = [
  { week: 'Sett 1', avg: 1890 },
  { week: 'Sett 2', avg: 2050 },
  { week: 'Sett 3', avg: 1980 },
  { week: 'Sett 4', avg: 2040 },
]
