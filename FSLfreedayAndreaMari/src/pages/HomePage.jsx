import HeroSection from '../sections/HeroSection'
import AziendaSection from '../sections/AziendaSection'
import EsperienzaSection from '../sections/EsperienzaSection'
import IdeaSection from '../sections/IdeaSection'
import MynutriSection from '../sections/MynutriSection'
import SupabaseSection from '../sections/SupabaseSection'
import AISection from '../sections/AISection'
import CompetenzeSection from '../sections/CompetenzeSection'
import ConclusioniSection from '../sections/ConclusioniSection'

/**
 * HomePage — assembla tutte le sezioni in ordine.
 * Ogni sezione ha il proprio id usato dai link della navbar.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AziendaSection />
      <EsperienzaSection />
      <IdeaSection />
      <MynutriSection />
      <SupabaseSection />
      <AISection />
      <CompetenzeSection />
      <ConclusioniSection />
    </>
  )
}
