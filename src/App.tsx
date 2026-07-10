import React, { useState } from 'react';
import {
  Clock,
  CheckCircle,
  TrendingUp,
  Target,
  ArrowRight,
  Database,
  Briefcase,
  Calendar,
  Layers,
  ChevronRight,
  Zap,
  Sparkles,
  Award,
  DollarSign,
  Smartphone,
  ShieldCheck,
  Search,
  BookOpen,
  Send,
  HelpCircle
} from 'lucide-react';

export default function App() {
  // Simulator State
  const [crmHours, setCrmHours] = useState<number>(5);
  const [timeSaved, setTimeSaved] = useState<number>(3);
  const [hourlyRate, setHourlyRate] = useState<number>(100);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: 'Konstantin Brachet',
    email: 'stanislas@noah-consultant.com',
    message: 'Bonjour Stanislas, j\'ai passé en revue la proposition. Le simulateur de ROI confirme mes projections de gain de temps. Je souhaite planifier l\'appel de cadrage de 20 min pour valider le Sprint Pilotage.',
    selectedOffer: 'sprint'
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Calculations
  const weeksPerYear = 48;
  const weeklySavingsHours = timeSaved;
  const weeklySavingsFinancial = timeSaved * hourlyRate;

  const monthlySavings = weeklySavingsHours * 4;
  const yearlyHoursSavings = weeklySavingsHours * weeksPerYear;
  const yearlyDaysSavings = yearlyHoursSavings / 8; // 8h workday
  const yearlyFinancialSavings = yearlyHoursSavings * hourlyRate;

  // Budgets
  const socleBudget = 890;
  const benchmarkBudget = 390;
  const bundleBudget = 1250;
  const niveau2Budget = 1500;

  const socleAmortizationWeeks = weeklySavingsFinancial > 0 ? (socleBudget / weeklySavingsFinancial) : 0;
  const bundleAmortizationWeeks = weeklySavingsFinancial > 0 ? (bundleBudget / weeklySavingsFinancial) : 0;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="relative min-h-screen text-ivory selection:bg-gold selection:text-ink">
      {/* Background Atmosphere */}
      <div className="ambient-bg" id="bg-texture" />

      {/* Header / Nav */}
      <header className="border-b border-gold/10 bg-coffee-deep/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-gold-bright/50 flex items-center justify-center bg-gradient-to-br from-coffee-raised to-ink shadow-[0_0_10px_rgba(212,160,80,0.15)] overflow-hidden">
              <span className="font-display italic font-semibold text-lg text-gold-bright tracking-normal">N</span>
            </div>
            <div>
              <div className="font-mono text-xs tracking-[0.25em] text-gold-bright uppercase font-semibold">Noah Labs</div>
              <div className="text-[11px] text-parchment uppercase tracking-wider font-medium">Boutique Studio Data & AI</div>
            </div>
          </div>

          {/* Proposal Status Label */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="bg-coffee-raised border border-gold/15 rounded-md px-3 py-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-ivory-muted uppercase">Document : CRAFT_OUTPUT#1 — Vision Immo</span>
            </div>
            <div className="hidden lg:block text-parchment-dim text-[11px]">
              V1.0 • 2026-07-09
            </div>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-bordeaux/20 border border-bordeaux/30 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-bordeaux" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-ivory">Proposition Commerciale Tailored-Fit</span>
          </div>

          {/* Title */}
          <h1 className="display-xl text-ivory mb-6 max-w-3xl mx-auto">
            Passer de photographe artisanal à <span className="italic font-normal text-gold-bright">acteur premium scalable.</span>
          </h1>

          {/* Subtitle */}
          <p className="lede text-ivory-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Un tableau de bord de pilotage, un pipeline de vente Notion, et la réservation automatisée Calendly pour structurer et libérer votre croissance bi-villes.
            Pas de théorie, pas de charge fixe, pas de code — uniquement du temps libéré et du pilotage serein.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#simulateur" className="btn-primary w-full sm:w-auto text-center">
              Simuler mon ROI
            </a>
            <a href="#sprint" className="btn-ghost w-full sm:w-auto text-center">
              Explorer les Modules
            </a>
          </div>

          {/* Key Facts Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left pt-10 border-t border-gold/10">
            
            <div className="p-4 rounded bg-coffee/30 border border-gold/5">
              <div className="text-xs font-mono text-parchment uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold-bright" /> Déploiement
              </div>
              <div className="font-display italic text-2xl text-gold-flash">3 Semaines</div>
              <div className="text-[11px] text-parchment-dim leading-snug mt-1">Sprint Pilotage complet</div>
            </div>

            <div className="p-4 rounded bg-coffee/30 border border-gold/5">
              <div className="text-xs font-mono text-parchment uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-gold-bright" /> Pipeline Leads
              </div>
              <div className="font-display italic text-2xl text-gold-flash">0 Oubli</div>
              <div className="text-[11px] text-parchment-dim leading-snug mt-1">Règle de relance J+7 active</div>
            </div>

            <div className="p-4 rounded bg-coffee/30 border border-gold/5">
              <div className="text-xs font-mono text-parchment uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-gold-bright" /> Temps Libéré
              </div>
              <div className="font-display italic text-2xl text-gold-flash">3h / semaine</div>
              <div className="text-[11px] text-parchment-dim leading-snug mt-1">Sur vos tâches non-facturables</div>
            </div>

            <div className="p-4 rounded bg-coffee/30 border border-gold/5">
              <div className="text-xs font-mono text-parchment uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-gold-bright" /> Budget Logiciel
              </div>
              <div className="font-display italic text-xl text-gold-flash">0 € (Low Tech)</div>
              <div className="text-[11px] text-parchment-dim leading-snug mt-1">Outils sous votre contrôle (Sheets, Notion free-tier)</div>
            </div>

          </div>

        </div>
      </section>

      {/* The Context / Constat Section */}
      <section className="py-20 bg-coffee/40 border-y border-gold/5 relative">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            
            {/* Left sticky column */}
            <div className="md:w-1/3 md:sticky md:top-28">
              <div className="section-eyebrow mb-3 flex items-center gap-3">
                <span className="rule-gold" />
                <span className="eyebrow text-gold-bright">01 · LE CONSTAT</span>
              </div>
              <h2 className="display-l text-ivory mb-4">Le plafond de l'organisation mémorielle</h2>
              <p className="text-ivory-muted text-sm leading-relaxed">
                Le modèle solo de Vision Immo connaît un développement remarquable depuis janvier 2026. Cependant, la croissance aggrave un déséquilibre structurel.
              </p>
            </div>

            {/* Right content column */}
            <div className="md:w-2/3 space-y-6">
              
              <div className="p-6 rounded-lg bg-coffee-raised/60 border border-gold/10 hover:border-gold/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded bg-bordeaux/20 text-bordeaux border border-bordeaux/20 mt-1">
                    <Database className="w-5 h-5 text-gold-flash" />
                  </div>
                  <div>
                    <h3 className="display-s text-ivory mb-2">Suivi commercial "dans la tête"</h3>
                    <p className="text-ivory-muted text-sm leading-relaxed">
                      L'intégralité de vos prospects vit sous forme "d'étoiles" LinkedIn, et vos clients actifs sur un agenda papier. À partir de 20 clients actifs, la mémorisation individuelle sature. Chaque prospect non relancé par manque de temps représente une perte invisible mais directe de chiffre d'affaires.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-coffee-raised/60 border border-gold/10 hover:border-gold/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded bg-bordeaux/20 text-bordeaux border border-bordeaux/20 mt-1">
                    <Clock className="w-5 h-5 text-gold-flash" />
                  </div>
                  <div>
                    <h3 className="display-s text-ivory mb-2">90% de temps non-facturable</h3>
                    <p className="text-ivory-muted text-sm leading-relaxed">
                      La création pure sur le terrain ne représente que ~10% de votre activité. Les ~90% restants sont engloutis par la prospection manuelle, l'administratif, la rédaction fastidieuse de posts (2 à 3 heures par publication) et la logistique bi-villes Bordeaux-Paris.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-coffee-raised/60 border border-gold/10 hover:border-gold/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded bg-bordeaux/20 text-bordeaux border border-bordeaux/20 mt-1">
                    <TrendingUp className="w-5 h-5 text-gold-flash" />
                  </div>
                  <div>
                    <h3 className="display-s text-ivory mb-2">Sous-tarification stratégique active</h3>
                    <p className="text-ivory-muted text-sm leading-relaxed">
                      Pour conquérir rapidement des parts de marché à Bordeaux et Paris, vos tarifs ont été fixés volontairement sous la valeur réelle de vos prestations premium. Vos clients reconnaissent cette sous-évaluation, mais sans données concurrentielles chiffrées, la décision de rehausser les grilles reste émotionnellement bloquée.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-bordeaux/5 border border-bordeaux/25 mt-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-bordeaux" />
                  <span className="font-mono text-xs text-ivory uppercase tracking-wider">Le Verdict Mom Test</span>
                </div>
                <p className="font-display italic text-base text-ivory-muted leading-relaxed">
                  "L'enjeu n'est pas simplement d'économiser des heures de travail. Il s'agit de structurer des process transmissibles indispensables pour que vous puissiez augmenter sereinement vos grilles tarifaires et déléguer des shootings standards sans dégrader la réputation de Vision Immo."
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Intervention Axes / Modules Section */}
      <section id="sprint" className="py-20 px-6 max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center mb-3 flex items-center gap-3">
            <span className="rule-gold" />
            <span className="eyebrow text-gold-bright">02 · PROGRAMME ET METHODES</span>
            <span className="rule-gold" />
          </div>
          <h2 className="display-l text-ivory mb-4">L'Accompagnement en 4 Modules</h2>
          <p className="text-ivory-muted max-w-xl mx-auto text-sm leading-relaxed">
            Une architecture de livrables pragmatiques pour outiller votre montée en gamme. Zéro théorie, 100% opérationnel.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Module 1 */}
          <div className="axis-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="font-mono text-[10px] text-gold-bright uppercase tracking-widest mb-1">MODULE 01 • PILOTER</div>
                  <h3 className="display-m text-ivory">Tableau de bord & Prévisionnel CA</h3>
                </div>
                <span className="font-display italic text-gold-flash text-4xl font-light">M1</span>
              </div>
              <p className="text-ivory-muted text-sm leading-relaxed mb-6">
                Connexion et structuration de vos exports de facturation Indie à un tableau de bord de pilotage. Visualisation claire du CA global, des volumes, du panier moyen, et des répartitions utiles (Corporate vs IMO, Paris vs Bordeaux). Intègre une première logique de prévisionnel pour piloter vos décisions sur des chiffres objectifs, et non à l'intuition.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-ivory-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-bright shrink-0" />
                  <span>Indicateurs clés : CA global, par ville (Bordeaux / Paris) et par segment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-bright shrink-0" />
                  <span>Évolution du panier moyen et logique de prévisionnel de chiffre</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-bright shrink-0" />
                  <span>Tableau de bord épuré, actualisable en 5 minutes par mois via export</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-gold/10 flex items-center justify-between text-xs font-mono">
              <span className="text-parchment uppercase">Livrable clé :</span>
              <span className="text-gold-flash">Tableau de bord Pilotage Vision Immo</span>
            </div>
          </div>

          {/* Module 2 */}
          <div className="axis-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="font-mono text-[10px] text-gold-bright uppercase tracking-widest mb-1">MODULE 02 • CONVERTIR</div>
                  <h3 className="display-m text-ivory">Pipeline Notion & Relances AI</h3>
                </div>
                <span className="font-display italic text-gold-flash text-4xl font-light">M2</span>
              </div>
              <p className="text-ivory-muted text-sm leading-relaxed mb-6">
                Remplacement de l'agenda papier et des étoiles LinkedIn par un pipeline Kanban Notion ultra-rapide et utilisable sur mobile sur le terrain. Intégration de messages de relance réactifs calibrés sur votre voix pour relancer systématiquement à J+7 et ne plus laisser refroidir de prospects.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-ivory-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-bright shrink-0" />
                  <span>Base CRM Notion prête à l'emploi et personnalisée</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-bright shrink-0" />
                  <span>Migration et intégration initiale de vos 20 à 30 prospects réels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-bright shrink-0" />
                  <span>Templates d'écriture AI de relance (prospect, client inactif, réseau BNI)</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-gold/10 flex items-center justify-between text-xs font-mono">
              <span className="text-parchment uppercase">Livrable clé :</span>
              <span className="text-gold-flash">Pipeline Notion & Relances AI</span>
            </div>
          </div>

          {/* Module 3 */}
          <div className="axis-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="font-mono text-[10px] text-gold-bright uppercase tracking-widest mb-1">MODULE 03 • SIMPLIFIER</div>
                  <h3 className="display-m text-ivory">Réservation en ligne (Calendly) • Inclus</h3>
                </div>
                <span className="font-display italic text-gold-flash text-4xl font-light">M3</span>
              </div>
              <p className="text-ivory-muted text-sm leading-relaxed mb-6">
                Intégration et configuration complète de Calendly/TidyCal synchronisée à vos agendas existants. Permet d'éliminer les allers-retours manuels interminables pour caler les créneaux et automatise la confirmation client pour les shootings, tout en posant la base d'un fonctionnement transmissible.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-ivory-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-bright shrink-0" />
                  <span>Module de réservation connecté à votre Google Calendar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-bright shrink-0" />
                  <span>Email de confirmation automatique & brief logistique de shooting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-bright shrink-0" />
                  <span>Friction de réservation réduite au minimum pour vos agences partenaires</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-gold/10 flex items-center justify-between text-xs font-mono">
              <span className="text-parchment uppercase">Livrable clé :</span>
              <span className="text-gold-flash">Réservation en ligne automatisée</span>
            </div>
          </div>

          {/* Module 4 */}
          <div className="axis-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="font-mono text-[10px] text-gold-bright uppercase tracking-widest mb-1">MODULE 04 • COMPARER (OPTION)</div>
                  <h3 className="display-m text-ivory">Benchmark Pricing Paris-Bordeaux</h3>
                </div>
                <span className="font-display italic text-gold-flash text-4xl font-light">M4</span>
              </div>
              <p className="text-ivory-muted text-sm leading-relaxed mb-6">
                Analyse ciblée et comparative de 6 à 10 photographes concurrents de luxe sur les marchés de Paris et Bordeaux. Ce benchmark sectoriel dresse une matrice qualité/prix objective qui légitime vos arbitrages de croissance et valide solidement vos hausses de grilles tarifaires par segment.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-ivory-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-bright shrink-0" />
                  <span>Note de benchmark pricing concurrentiel ciblée</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-bright shrink-0" />
                  <span>Recommandations stratégiques d'ajustement de tarifs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-bright shrink-0" />
                  <span>Aide à la décision sur le positionnement de valeur par segment</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-gold/10 flex items-center justify-between text-xs font-mono">
              <span className="text-parchment uppercase">Livrable clé :</span>
              <span className="text-gold-flash">Benchmark pricing Paris / Bordeaux</span>
            </div>
          </div>

        </div>

      </section>

      {/* Interactive ROI Simulator Section */}
      <section id="simulateur" className="py-20 bg-coffee/40 border-y border-gold/5 relative">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <div className="section-eyebrow justify-center mb-3 flex items-center gap-3">
              <span className="rule-gold" />
              <span className="eyebrow text-gold-bright">03 · SIMULATEUR DE VALEUR</span>
              <span className="rule-gold" />
            </div>
            <h2 className="display-l text-ivory mb-4">Mesurez l'impact sur vos chiffres</h2>
            <p className="text-ivory-muted max-w-xl mx-auto text-sm leading-relaxed">
              Ajustez les curseurs pour simuler le temps récupéré sur vos tâches non-facturables et calculer le retour sur investissement direct.
            </p>
          </div>

          {/* Simulator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Input Controls (5 columns) */}
            <div className="lg:col-span-5 p-8 rounded-lg bg-coffee-raised/50 border border-gold/10 flex flex-col justify-between gap-6">
              
              <h3 className="font-display italic text-lg text-gold-bright border-b border-gold/10 pb-3 mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5" /> Paramètres d'activité
              </h3>

              {/* Slider 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-ivory-muted">Temps de gestion administrative :</span>
                  <span className="text-gold-flash font-semibold">{crmHours}h / semaine</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="8"
                  step="1"
                  value={crmHours}
                  onChange={(e) => setCrmHours(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] text-parchment-dim">
                  <span>3h (Actuel min)</span>
                  <span>8h (Surcharge)</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-ivory-muted">Temps récupéré visé (Socle) :</span>
                  <span className="text-gold-flash font-semibold">{timeSaved}h / semaine</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="5"
                  step="0.5"
                  value={timeSaved}
                  onChange={(e) => setTimeSaved(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] text-parchment-dim">
                  <span>2h (Prudent)</span>
                  <span>5h (Optimisé)</span>
                </div>
              </div>

              {/* Slider 3 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-ivory-muted">Votre valeur horaire :</span>
                  <span className="text-gold-flash font-semibold">{hourlyRate} € / heure</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="120"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] text-parchment-dim">
                  <span>80 €/h (Débuts)</span>
                  <span>120 €/h (Premium cible)</span>
                </div>
              </div>

              <div className="bg-coffee-deep/50 p-4 border border-gold/5 rounded text-xs text-parchment leading-relaxed mt-2">
                <HelpCircle className="w-4 h-4 text-gold inline mr-1 mb-0.5" />
                <span className="italic">Le simulateur calcule l'impact direct du temps récupéré par semaine grâce au tableau de bord de pilotage, au pipeline Notion, et à la réservation en ligne Calendly intégrée dans le socle.</span>
              </div>

            </div>

            {/* Output Panel (7 columns) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Highlight Stats Block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Weekly Hours Recovered */}
                <div className="p-6 rounded-lg bg-coffee-raised/40 border border-gold/10 flex flex-col justify-between">
                  <span className="eyebrow text-parchment-dim">Temps restitué par semaine</span>
                  <div className="my-3">
                    <span className="font-display italic text-4xl text-gold-flash font-light">{weeklySavingsHours.toFixed(1)}h</span>
                  </div>
                  <p className="text-[11px] text-parchment leading-snug">
                    Soit <span className="text-gold-bright font-medium">+{monthlySavings.toFixed(0)} heures</span> par mois récupérées pour la création ou le repos.
                  </p>
                </div>

                {/* Annual Financial Value */}
                <div className="p-6 rounded-lg bg-coffee-raised/40 border border-gold/10 flex flex-col justify-between">
                  <span className="eyebrow text-parchment-dim">Valeur temps restituée / an</span>
                  <div className="my-3">
                    <span className="font-display italic text-4xl text-gold-bright font-light">
                      {yearlyFinancialSavings.toLocaleString('fr-FR')} € HT
                    </span>
                  </div>
                  <p className="text-[11px] text-parchment leading-snug">
                    L'équivalent de <span className="text-gold-bright font-medium">{yearlyDaysSavings.toFixed(0)} jours de travail</span> restitués (base 8h/j).
                  </p>
                </div>

              </div>

              {/* Amortization Cards */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-coffee-raised to-ink border border-gold/20 flex-1 flex flex-col justify-between gap-6">
                
                <h4 className="font-mono text-xs uppercase tracking-widest text-gold-bright border-b border-gold/10 pb-2">
                  Délai de rentabilisation de l'investissement
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Sprint Foundation */}
                  <div className="space-y-2">
                    <div className="text-xs text-parchment flex justify-between">
                      <span>Socle Sprint Pilotage</span>
                      <span className="font-mono text-gold-bright">890 € HT</span>
                    </div>
                    <div className="bg-coffee-deep/80 rounded-md p-4 border border-gold/5">
                      <div className="text-xs text-parchment-dim uppercase tracking-wider mb-1">Amortissement en :</div>
                      <div className="font-display italic text-2xl text-gold-flash">
                        {socleAmortizationWeeks.toFixed(1)} Semaines
                      </div>
                      <p className="text-[10px] text-parchment-dim leading-snug mt-1">
                        Rentabilisé dès le premier mois d'usage opérationnel.
                      </p>
                    </div>
                  </div>

                  {/* Program Operational */}
                  <div className="space-y-2">
                    <div className="text-xs text-parchment flex justify-between">
                      <span>Bundle Sprint + Benchmark</span>
                      <span className="font-mono text-gold-bright">1 250 € HT</span>
                    </div>
                    <div className="bg-coffee-deep/80 rounded-md p-4 border border-gold/5">
                      <div className="text-xs text-parchment-dim uppercase tracking-wider mb-1">Amortissement en :</div>
                      <div className="font-display italic text-2xl text-gold-flash">
                        {bundleAmortizationWeeks.toFixed(1)} Semaines
                      </div>
                      <p className="text-[10px] text-parchment-dim leading-snug mt-1">
                        Un gain net d'une valeur de {(yearlyFinancialSavings - bundleBudget).toLocaleString('fr-FR')} € sur l'année.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="text-[11px] text-parchment-dim italic flex items-center gap-1.5 mt-2">
                  <ShieldCheck className="w-4 h-4 text-gold-bright shrink-0" />
                  <span>Engagement 100% transparent : aucun abonnement récurrent caché, aucun outil logiciel payant imposé.</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Before / After Comparison Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center mb-3 flex items-center gap-3">
            <span className="rule-gold" />
            <span className="eyebrow text-gold-bright">04 · TRANSFORMATION</span>
            <span className="rule-gold" />
          </div>
          <h2 className="display-l text-ivory mb-4">Avant / Après Noah Labs</h2>
          <p className="text-ivory-muted max-w-xl mx-auto text-sm leading-relaxed">
            Visualisez concrètement comment l'accompagnement structure et sécurise votre montée en gamme.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Avant */}
          <div className="p-8 rounded-lg bg-coffee/20 border border-bordeaux/20 flex flex-col justify-between gap-6 relative">
            <div className="absolute top-4 right-4 bg-bordeaux/10 text-bordeaux border border-bordeaux/20 px-2.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-widest">
              Actuel (Mental)
            </div>
            <div>
              <h3 className="display-s text-ivory mb-6 border-b border-gold/5 pb-2">L'Organisation Artisanale</h3>
              <ul className="space-y-4 text-xs text-ivory-muted leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-bordeaux mt-1.5 shrink-0" />
                  <span><strong className="text-ivory">Pipeline mémoriel :</strong> Les prospects LinkedIn s'effacent de votre mémoire faute de rappels structurés.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-bordeaux mt-1.5 shrink-0" />
                  <span><strong className="text-ivory">Relances opportunistes :</strong> Vous n'avez pas de templates rédigés. Écrire chaque message de relance vous demande un effort d'activation mentale.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-bordeaux mt-1.5 shrink-0" />
                  <span><strong className="text-ivory">Pilotage à vue :</strong> Les revenus IMO et Corporate sont estimés "au ressenti". Vous n'avez pas de chiffres clairs sur le CA par ville.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-bordeaux mt-1.5 shrink-0" />
                  <span><strong className="text-ivory">Surcharge de com :</strong> 2 à 3 heures pour chaque publication Instagram. Publications à l'arrêt depuis 3 semaines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-bordeaux mt-1.5 shrink-0" />
                  <span><strong className="text-ivory">Délégation bloquée :</strong> Vous aimeriez confier vos shootings standards à des partenaires mais aucun process de brief n'est formalisé.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Après */}
          <div className="p-8 rounded-lg bg-coffee-raised/60 border border-gold/20 flex flex-col justify-between gap-6 relative shadow-[0_10px_40px_-15px_rgba(212,160,80,0.1)]">
            <div className="absolute top-4 right-4 bg-gold-bright/10 text-gold-bright border border-gold-bright/20 px-2.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-widest">
              Cible (Premium)
            </div>
            <div>
              <h3 className="display-s text-gold-flash mb-6 border-b border-gold/15 pb-2">Le Système de Conseil</h3>
              <ul className="space-y-4 text-xs text-ivory-muted leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-bright mt-1.5 shrink-0" />
                  <span><strong className="text-ivory">CRM Mobile Notion :</strong> Chaque prospect a un statut visuel clair et une date de prochaine relance. Votre esprit est totalement libéré.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-bright mt-1.5 shrink-0" />
                  <span><strong className="text-ivory font-semibold">Message AI "Zéro Effort" :</strong> L'AI rédige des propositions de relance adaptées à votre style d'écriture en 1 clic. Vous n'avez qu'à valider.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-bright mt-1.5 shrink-0" />
                  <span><strong className="text-ivory">Dashboard CA 5 minutes :</strong> Une mise à jour mensuelle rapide vous indique la rentabilité par type de shooting et la croissance Bordeaux/Paris.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-bright mt-1.5 shrink-0" />
                  <span><strong className="text-ivory">Production com de 30 min :</strong> Vous gardez un contrôle esthétique absolu mais rédigez vos brouillons avec un copilote ultra-calibré.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-bright mt-1.5 shrink-0" />
                  <span><strong className="text-ivory font-semibold">Process transmissible posé :</strong> Vos templates de briefs clients et vos agendas sont prêts pour intégrer vos partenaires.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </section>

      {/* The Methodology Timeline / 5 Steps Section */}
      <section className="py-20 bg-coffee/40 border-y border-gold/5 relative">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <div className="section-eyebrow justify-center mb-3 flex items-center gap-3">
              <span className="rule-gold" />
              <span className="eyebrow text-gold-bright">05 · LA METHODOLOGIE</span>
              <span className="rule-gold" />
            </div>
            <h2 className="display-l text-ivory mb-4">Le Déroulement du Sprint</h2>
            <p className="text-ivory-muted max-w-xl mx-auto text-sm leading-relaxed">
              Un sprint intensif de 3 semaines pour poser des fondations solides et tangibles, sans surcharge pour votre planning.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gold/20">
            
            {/* Step 1 */}
            <div className="relative pl-12 flex items-start gap-4">
              <div className="absolute left-0 w-9 h-9 rounded-full border border-gold-bright bg-coffee-deep flex items-center justify-center font-display italic text-gold-bright text-xs">I</div>
              <div>
                <div className="font-mono text-[10px] text-parchment uppercase tracking-wider mb-1">JOURS 1 à 4 • FONDATION FINANCIÈRE</div>
                <h3 className="display-s text-ivory mb-2">Cartographier</h3>
                <p className="text-ivory-muted text-xs leading-relaxed max-w-2xl">
                  Analyse de vos données de facturation Indie, extraction de vos indicateurs financiers clés, et structuration de votre tableau de bord de pilotage personnalisé pour donner une visibilité immédiate et objective sur vos performances.
                </p>
                <div className="mt-2 text-[10px] text-parchment font-mono">
                  Livrable : Tableau de bord de pilotage avec base prévisionnelle
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-12 flex items-start gap-4">
              <div className="absolute left-0 w-9 h-9 rounded-full border border-gold/30 bg-coffee-deep flex items-center justify-center font-display italic text-parchment text-xs">II</div>
              <div>
                <div className="font-mono text-[10px] text-parchment uppercase tracking-wider mb-1">JOURS 5 à 7 • ANALYSE STRATÉGIQUE (OPTION)</div>
                <h3 className="display-s text-ivory mb-2">Benchmarker</h3>
                <p className="text-ivory-muted text-xs leading-relaxed max-w-2xl">
                  Si l'option est activée, réalisation d'un benchmark pricing sectoriel rigoureux sur 6 à 10 photographes de luxe à Paris et Bordeaux pour éclairer vos scénarios de croissance et légitimer sereinement vos hausses de tarifs.
                </p>
                <div className="mt-2 text-[10px] text-parchment font-mono">
                  Livrable : Note complète de benchmark pricing sectoriel
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pl-12 flex items-start gap-4">
              <div className="absolute left-0 w-9 h-9 rounded-full border border-gold/30 bg-coffee-deep flex items-center justify-center font-display italic text-parchment text-xs">III</div>
              <div>
                <div className="font-mono text-[10px] text-parchment uppercase tracking-wider mb-1">JOURS 8 à 10 • PRÉPARATION DE LA MATIÈRE</div>
                <h3 className="display-s text-ivory mb-2">Inventorier</h3>
                <p className="text-ivory-muted text-xs leading-relaxed max-w-2xl">
                  Recensement complet de toutes vos opportunités d'affaires diffuses (discussions LinkedIn, emails, historique). Nettoyage, structuration et qualification de votre liste de 20 à 30 prospects prioritaires et clients réguliers à importer.
                </p>
                <div className="mt-2 text-[10px] text-parchment font-mono">
                  Livrable : Base d'opportunités commerciales qualifiée
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative pl-12 flex items-start gap-4">
              <div className="absolute left-0 w-9 h-9 rounded-full border border-gold/30 bg-coffee-deep flex items-center justify-center font-display italic text-parchment text-xs">IV</div>
              <div>
                <div className="font-mono text-[10px] text-parchment uppercase tracking-wider mb-1">JOURS 11 à 14 • DEPLOIEMENT CRM</div>
                <h3 className="display-s text-ivory mb-2">Construire</h3>
                <p className="text-ivory-muted text-xs leading-relaxed max-w-2xl">
                  Mise en place de votre pipeline Notion personnalisé et mobile-first lors d'un atelier interactif de co-construction live d'une heure et demie. Importation de votre liste d'opportunités qualifiées pour rendre l'outil immédiatement vivant.
                </p>
                <div className="mt-2 text-[10px] text-parchment font-mono">
                  Livrable : Pipeline Notion commercial opérationnel
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative pl-12 flex items-start gap-4">
              <div className="absolute left-0 w-9 h-9 rounded-full border border-gold/30 bg-coffee-deep flex items-center justify-center font-display italic text-parchment text-xs">V</div>
              <div>
                <div className="font-mono text-[10px] text-parchment uppercase tracking-wider mb-1">JOURS 15 à 18 • FLUIDIFICATION & COMMERCE</div>
                <h3 className="display-s text-ivory mb-2">Structurer</h3>
                <p className="text-ivory-muted text-xs leading-relaxed max-w-2xl">
                  Intégration et paramétrage complet de votre page de réservation Calendly. Création et calibration de vos templates d'écriture AI de relance pour booster immédiatement votre réactivité commerciale sur les opportunités identifiées.
                </p>
                <div className="mt-2 text-[10px] text-parchment font-mono">
                  Livrable : Réservation automatisée configurée + Templates de relance AI
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="relative pl-12 flex items-start gap-4">
              <div className="absolute left-0 w-9 h-9 rounded-full border border-gold-bright bg-coffee-deep flex items-center justify-center font-display italic text-gold-bright text-xs">VI</div>
              <div>
                <div className="font-mono text-[10px] text-parchment uppercase tracking-wider mb-1">JOURS 19 à 21 • BILAN & PERSPECTIVES</div>
                <h3 className="display-s text-ivory mb-2">Valider</h3>
                <p className="text-ivory-muted text-xs leading-relaxed max-w-2xl">
                  Point structuré à J+21 pour évaluer l'usage réel de votre système, mesurer l'adoption terrain et valider vos indicateurs clés. Recommandation des suites à donner pour préparer l'accompagnement de Niveau 2.
                </p>
                <div className="mt-2 text-[10px] text-parchment font-mono">
                  Livrable : Compte-rendu d'ajustement & Recommandations d'organisation
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Deliverables & Budget Pricing Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center mb-3 flex items-center gap-3">
            <span className="rule-gold" />
            <span className="eyebrow text-gold-bright">06 · PROPOSITIONS & TARIFS</span>
            <span className="rule-gold" />
          </div>
          <h2 className="display-l text-ivory mb-4">Deux Niveaux d'Engagement</h2>
          <p className="text-ivory-muted max-w-xl mx-auto text-sm leading-relaxed">
            Choisissez l'intensité de départ adaptée à votre bande passante et à votre vitesse de développement.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Offer 1: Socle Sprint Pilotage */}
          <div className="offer-card p-8 flex flex-col justify-between relative">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="font-mono text-[10px] text-gold uppercase tracking-widest mb-1">NIVEAU 1 • SOCLE PILOTAGE</div>
                  <h3 className="display-m text-ivory">Socle Sprint Pilotage</h3>
                  <p className="text-xs text-parchment mt-1">Modules 1, 2 & 3 • 3 Semaines</p>
                </div>
              </div>

              <p className="text-ivory-muted text-xs leading-relaxed mb-6">
                Idéal pour poser les briques de gestion commerciale indispensables à court terme. Permet de structurer votre suivi, d'automatiser vos relances, et de fluidifier la réservation en ligne pour libérer immédiatement votre esprit et votre temps.
              </p>

              {/* Price Block */}
              <div className="mb-6 flex items-baseline gap-2">
                <span className="font-display italic text-4xl text-gold-bright font-light">890 €</span>
                <span className="text-xs text-parchment-dim uppercase font-mono">HT / Forfait unique</span>
              </div>

              {/* Inclusions */}
              <div className="border-t border-gold/10 pt-6 mb-8">
                <h4 className="font-mono text-[10px] text-parchment uppercase tracking-wider mb-3">LIVRABLES COMPRIS :</h4>
                <ul className="space-y-2 text-xs text-ivory-muted">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Tableau de bord de pilotage CA connecté à vos exports Indie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Pipeline Notion "Zéro Oubli" avec migration de 20-30 prospects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Page de réservation en ligne Calendly/TidyCal synchrone</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Templates de relance réactive calibrés (3 variantes AI)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>Guide de pilotage mensuel simplifié (procédure 5 min/jour)</span>
                  </li>
                </ul>
              </div>

            </div>

            <div>
              <div className="text-xs text-parchment font-mono flex justify-between mb-4">
                <span>Charge client requise :</span>
                <span className="text-gold-flash">3-4h au total</span>
              </div>
              <button 
                onClick={() => {
                  setFormData(prev => ({...prev, message: "Bonjour Stanislas, j'ai choisi la formule Socle Sprint Pilotage (890€ HT). Discutons-en lors de notre appel.", selectedOffer: 'sprint'}));
                  document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
                }}
                className="btn-ghost w-full hover:border-gold-bright text-center"
              >
                Choisir le Socle Pilotage
              </button>
            </div>
          </div>

          {/* Offer 2: Bundle Sprint + Benchmark */}
          <div className="offer-card featured p-8 flex flex-col justify-between relative shadow-xl">
            <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-gold to-gold-flash text-ink font-mono text-[9px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
              Recommandé • Analyse & Pilotage
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="font-mono text-[10px] text-gold-flash uppercase tracking-widest mb-1">NIVEAU 1 + OPTION BENCHMARK</div>
                  <h3 className="display-m text-gold-flash">Bundle Pilotage & Benchmark</h3>
                  <p className="text-xs text-gold mt-1">Modules 1 à 4 • 3 à 4 Semaines</p>
                </div>
              </div>

              <p className="text-ivory-muted text-xs leading-relaxed mb-6">
                L'excellence opérationnelle couplée à une analyse stratégique exhaustive. Comprend le benchmark pricing concurrentiel sur vos marchés clés (Paris-Bordeaux) pour éclairer vos hausses de grilles tarifaires en toute confiance.
              </p>

              {/* Price Block */}
              <div className="mb-6 flex items-baseline gap-2">
                <span className="font-display italic text-4xl text-gold-flash font-light">1 250 €</span>
                <span className="text-xs text-parchment-dim uppercase font-mono">HT / Forfait unique</span>
              </div>

              {/* Inclusions */}
              <div className="border-t border-gold/15 pt-6 mb-8">
                <h4 className="font-mono text-[10px] text-gold uppercase tracking-wider mb-3">LIVRABLES COMPRIS :</h4>
                <ul className="space-y-2 text-xs text-ivory-muted">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-flash shrink-0" />
                    <span>Tous les livrables du Socle Sprint Pilotage (M1 + M2 + M3)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-flash shrink-0" />
                    <span>Note d'analyse de benchmark pricing complet (6-10 concurrents)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-flash shrink-0" />
                    <span>Matrice qualité/prix comparative des axes Paris-Bordeaux</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-flash shrink-0" />
                    <span>Recommandations d'ajustement de grilles tarifaires par segment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-flash shrink-0" />
                    <span>Aide à la décision sur le positionnement de valeur de Vision Immo</span>
                  </li>
                </ul>
              </div>

            </div>

            <div>
              <div className="text-xs text-parchment font-mono flex justify-between mb-4">
                <span>Charge client requise :</span>
                <span className="text-gold-flash">4-5h étalées</span>
              </div>
              <button 
                onClick={() => {
                  setFormData(prev => ({...prev, message: "Bonjour Stanislas, j'ai choisi la formule Bundle Pilotage & Benchmark (1250€ HT). Discutons de sa mise en œuvre.", selectedOffer: 'program'}));
                  document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
                }}
                className="btn-primary w-full text-center"
              >
                Choisir le Bundle Complet
              </button>
            </div>
          </div>

        </div>

        {/* Level 2 Accompagnement Banner */}
        <div className="mt-12 max-w-4xl mx-auto p-6 rounded bg-coffee-deep/40 border border-gold/10 text-center flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-left">
            <span className="font-mono text-[9px] text-gold-bright uppercase tracking-widest block mb-1">NIVEAU 2 • OPTION ACCÉLÉRATION</span>
            <h4 className="display-s text-ivory">Accompagnement Opérationnel Continu</h4>
            <p className="text-xs text-ivory-muted max-w-xl leading-relaxed mt-1">
              Sur-mesure, à la suite du sprint de pilotage, pour asseoir la délégation complète (shootings standards), perfectionner l'excellence opérationnelle et piloter votre expansion de marque.
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="font-display italic text-lg text-gold-flash mb-2">À partir de 1 500 € <span className="text-[10px] font-mono text-parchment-dim not-italic">HT</span></div>
            <button 
              onClick={() => {
                setFormData(prev => ({...prev, message: "Bonjour Stanislas, je suis également intéressé par les perspectives d'Accompagnement de Niveau 2 (dès 1500€ HT). Échangeons-en lors de notre appel.", selectedOffer: 'program'}));
                document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
              }}
              className="text-xs font-mono text-gold hover:text-gold-bright underline transition-colors cursor-pointer"
            >
              En savoir plus →
            </button>
          </div>
        </div>

      </section>

      {/* Why Noah Labs Section */}
      <section className="py-20 bg-coffee/40 border-y border-gold/5 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <div className="section-eyebrow justify-center mb-3 flex items-center gap-3">
            <span className="rule-gold" />
            <span className="eyebrow text-gold-bright">07 · LA DIFFERENCE</span>
            <span className="rule-gold" />
          </div>
          <h2 className="display-l text-ivory mb-6">Pourquoi faire confiance à Noah Labs ?</h2>
          <p className="text-ivory-muted max-w-2xl mx-auto text-sm leading-relaxed mb-12">
            Nous ne croyons pas aux architectures lourdes ni aux "révolutions par l'AI". Nous construisons des outils discrets, immédiats et rentabilisés en moins d'un mois.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            <div className="p-6 rounded bg-coffee-deep/50 border border-gold/10">
              <Award className="w-6 h-6 text-gold-bright mb-3" />
              <h3 className="font-display italic text-base text-gold-flash mb-2">Alignement Esthétique</h3>
              <p className="text-ivory-muted text-xs leading-relaxed">
                Nous comprenons vos exigences de qualité visuelle et d'image premium. Vos outils et votre voix éditoriale sont respectés au pixel près.
              </p>
            </div>

            <div className="p-6 rounded bg-coffee-deep/50 border border-gold/10">
              <ShieldCheck className="w-6 h-6 text-gold-bright mb-3" />
              <h3 className="font-display italic text-base text-gold-flash mb-2">Philosophie Low Tech</h3>
              <p className="text-ivory-muted text-xs leading-relaxed">
                Pas d'abonnements logiciels complexes ou payants imposés. Nous favorisons des solutions agiles basées sur vos outils existants ou plans gratuits (Notion, Sheets, Calendly).
              </p>
            </div>

            <div className="p-6 rounded bg-coffee-deep/50 border border-gold/10">
              <Sparkles className="w-6 h-6 text-gold-bright mb-3" />
              <h3 className="font-display italic text-base text-gold-flash mb-2">Co-Construction</h3>
              <p className="text-ivory-muted text-xs leading-relaxed">
                Nous n'imposons aucun outil "clé en main". Nous le construisons à vos côtés en session live pour garantir une appropriation immédiate sur mobile.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Contact / Closing Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Text (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="section-eyebrow mb-3 flex items-center gap-3">
              <span className="rule-gold" />
              <span className="eyebrow text-gold-bright">08 · PROCHAINES ETAPES</span>
            </div>
            <h2 className="display-m text-ivory">Prêt à libérer votre temps ?</h2>
            
            <p className="text-ivory-muted text-xs leading-relaxed">
              Pour garantir un niveau d'excellence maximale, nous ne lançons que deux sprints d'accompagnement par mois.
            </p>

            <div className="space-y-4 pt-4">
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-coffee-raised border border-gold/20 flex items-center justify-center font-mono text-[10px] text-gold-bright shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="text-xs text-ivory font-semibold">1. Prise de contact</h4>
                  <p className="text-[11px] text-parchment leading-relaxed">Validez votre choix de formule via le formulaire ci-contre.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-coffee-raised border border-gold/20 flex items-center justify-center font-mono text-[10px] text-gold-bright shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="text-xs text-ivory font-semibold">2. Appel de cadrage (20 min)</h4>
                  <p className="text-[11px] text-parchment leading-relaxed">Un court appel WhatsApp ou Zoom pour valider vos paramètres d'exports Indy et votre agenda.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-coffee-raised border border-gold/20 flex items-center justify-center font-mono text-[10px] text-gold-bright shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="text-xs text-ivory font-semibold">3. Lancement du Sprint</h4>
                  <p className="text-[11px] text-parchment leading-relaxed">Déploiement du Module 1 sous 48 heures ouvrées.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Form (7 cols) */}
          <div className="md:col-span-7 p-8 rounded-lg bg-coffee-raised/40 border border-gold/15 relative">
            
            <h3 className="display-s text-gold-flash mb-4">Valider mon intérêt</h3>
            <p className="text-xs text-parchment mb-6 leading-relaxed">
              Sélectionnez votre formule préférée et envoyez votre message pour planifier l'appel de cadrage avec Stanislas.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded bg-gradient-to-br from-coffee to-ink border border-gold-bright/30 text-center space-y-4 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-gold-bright/10 text-gold-bright border border-gold-bright/20 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-display italic text-lg text-gold-flash">Intérêt enregistré avec succès</h4>
                <p className="text-xs text-parchment max-w-sm mx-auto leading-relaxed">
                  Merci Konstantin. Votre message a été transmis à Stanislas. Vous allez recevoir une notification WhatsApp pour bloquer votre créneau de cadrage de 20 minutes.
                </p>
                <div className="text-[10px] text-parchment-dim font-mono pt-4">
                  Réf : CRAFT_INTEREST_SUBMITTED • V1.0
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-parchment-dim mb-1">Votre Nom / Marque</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                    className="w-full bg-coffee-deep border border-gold/15 rounded px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold-bright transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-parchment-dim mb-1">Email pour le suivi</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                    className="w-full bg-coffee-deep border border-gold/15 rounded px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold-bright transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-parchment-dim mb-1">Formule sélectionnée</label>
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    
                    <label className={`border rounded p-3 flex flex-col justify-between cursor-pointer transition-all ${formData.selectedOffer === 'sprint' ? 'border-gold-bright bg-coffee-warm/30' : 'border-gold/15 bg-coffee-deep'}`}>
                      <input
                        type="radio"
                        name="offer-select"
                        value="sprint"
                        checked={formData.selectedOffer === 'sprint'}
                        onChange={() => setFormData(prev => ({...prev, selectedOffer: 'sprint', message: "Bonjour Stanislas, j'ai choisi la formule Socle Sprint Pilotage (890€ HT). Discutons-en lors de notre appel."}))}
                        className="sr-only"
                      />
                      <span className="text-xs text-ivory font-semibold block">Socle Pilotage</span>
                      <span className="font-mono text-[10px] text-gold-bright mt-1">890 € HT</span>
                    </label>

                    <label className={`border rounded p-3 flex flex-col justify-between cursor-pointer transition-all ${formData.selectedOffer === 'program' ? 'border-gold-bright bg-coffee-warm/30' : 'border-gold/15 bg-coffee-deep'}`}>
                      <input
                        type="radio"
                        name="offer-select"
                        value="program"
                        checked={formData.selectedOffer === 'program'}
                        onChange={() => setFormData(prev => ({...prev, selectedOffer: 'program', message: "Bonjour Stanislas, j'ai choisi la formule Bundle Pilotage & Benchmark (1250€ HT). Discutons de sa mise en œuvre."}))}
                        className="sr-only"
                      />
                      <span className="text-xs text-ivory font-semibold block">Bundle Complet</span>
                      <span className="font-mono text-[10px] text-gold-bright mt-1">1 250 € HT</span>
                    </label>

                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-parchment-dim mb-1">Message ou Précision</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                    className="w-full bg-coffee-deep border border-gold/15 rounded px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold-bright transition-all resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-3.5 h-3.5" /> Planifier mon cadrage (20 min)
                </button>

              </form>
            )}

          </div>

        </div>

      </section>

      {/* Corporate Editorial Footer */}
      <footer className="border-t border-gold/10 bg-coffee-deep/90 py-16 px-6 relative z-10 text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Brand statement */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-7 h-7 rounded-full border border-gold-bright/40 flex items-center justify-center bg-coffee-raised shadow-sm">
                <span className="font-display italic font-semibold text-sm text-gold-bright">N</span>
              </div>
              <span className="font-mono text-xs tracking-wider text-ivory uppercase">Noah Labs © 2026</span>
            </div>
            <p className="text-[11px] text-parchment-dim leading-relaxed">
              Noah Labs · Boutique Studio Data & AI. Nous aidons les fondateurs indépendants et cabinets premium à transformer leur expertise en process transmissibles et rentables.
            </p>
          </div>

          {/* Links & References */}
          <div className="flex flex-col md:flex-row gap-8 text-xs font-mono">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-parchment uppercase text-[10px] tracking-wider block">CONTACT CABINET</span>
              <a href="mailto:stanislas@noah-consultant.com" className="text-ivory-muted hover:text-gold-bright transition">
                stanislas@noah-consultant.com
              </a>
            </div>
            
            <div className="space-y-1 text-center md:text-left">
              <span className="text-parchment uppercase text-[10px] tracking-wider block">RÉFÉRENCE PROJET</span>
              <span className="text-parchment-dim">
                KB-Projet-Vision-Immo • Bordeaux / Paris
              </span>
            </div>
          </div>

        </div>

        {/* Minimalist credit line */}
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gold/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-parchment-dim font-mono uppercase tracking-wider">
          <span>Charte source : NOAH-LABS-CHARTE-20260603-v1</span>
          <span>Sprints CRAFT • Impact mesurable en 30-90 jours</span>
        </div>
      </footer>
    </div>
  );
}
