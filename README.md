# Proposition Commerciale Interactive — Vision Immo Photographie

> **Noah Consultant · Studio Noah Labs**  
> **Client :** Konstantin BRACHET — Vision Immo Photographie  
> **Projet :** Sprint Pilotage & Structuration commerciale — Vision Immo  
> **Statut :** Proposition active — Version ajustée après retours d'arbitrage

---

## 📋 Présentation du Projet

Ce dépôt contient le code source de l'**application de proposition commerciale interactive** conçue pour **Vision Immo Photographie** (fondé par Konstantin Brachet). 

L'objectif de cette application web immersive est de présenter une offre commerciale structurée sous forme de **socle + options + bundle** de manière transparente, engageante et hautement personnalisée. Elle intègre des outils d'aide à la décision comme un **simulateur de ROI en temps réel** afin d'accompagner Konstantin dans la projection des gains opérationnels et financiers de sa collaboration avec Noah Consultant.

---

## 🎯 Contexte Métier & Enjeux

### 1. Profil Client
* **Nom :** Konstantin BRACHET
* **Activité :** Photographe freelance haut de gamme (clientèle premium, agences immobilières de luxe)
* **Périmètre d'action :** Activité bi-ville dynamique (Paris / Bordeaux)
* **Outils d'origine :** Gmail, LinkedIn, Indie (facturation), agenda papier

### 2. Le Diagnostic (Mom Test)
L'analyse de l'activité de Konstantin a mis en lumière une croissance forte mais freinée par des goulots d'étranglement administratifs et de suivi :
* Une **charge mentale élevée** liée à une gestion commerciale majoritairement mentale et diffuse (étoiles LinkedIn, discussions éparpillées).
* Des **opportunités perdues** ou ralenties faute de relances structurées systématiques.
* Une **réservation entrante gourmande en temps** (allers-retours manuels incessants pour caler des créneaux).
* Un **manque de visibilité objective** sur la rentabilité comparée de Paris et Bordeaux pour guider l'évolution des tarifs.

---

## 📦 Structure de l'Offre & Tarification

L'offre est structurée selon une logique modulaire et évolutive pour s'adapter parfaitement aux priorités immédiates et futures de Vision Immo.

### 🛡️ 1. Le Socle : Sprint Pilotage & Structuration commerciale (890 € HT)
* **Durée :** 3 semaines.
* **Focus :** Sortir l'activité de la mémoire individuelle et automatiser la prise de contact pour libérer de l'esprit.
* **Livrables :**
  1. **Tableau de bord de pilotage CA :** Connecté à vos exports de facturation Indie, avec lecture claire du CA, volumes, paniers moyens et prévisionnels.
  2. **Pipeline Notion "Zéro Oubli" :** CRM visuel structuré pour piloter les opportunités.
  3. **Migration initiale :** Importation et qualification de vos 20 à 30 prospects ou clients actuels.
  4. **Réservation en ligne automatisée (Calendly) :** Intégrée au socle pour éliminer les frottements de prise de rendez-vous.
  5. **Templates de relance IA :** Calibrés sur votre voix pour automatiser les relances à J+7.
  6. **Session d'ajustement :** Bilan opérationnel à J+21.

### 📊 2. L'Option : Note de Benchmark Pricing (390 € HT)
* **Focus :** Analyse ciblée et comparative de 6 à 10 concurrents positionnés sur le segment luxe à Paris et Bordeaux pour légitimer et sécuriser scientifiquement les hausses tarifaires de Vision Immo.

### 🎁 3. Le Bundle : Pilotage & Benchmark (1 250 € HT)
* **Focus :** Regroupe l'intégralité du socle (M1 + M2 + M3) et l'option benchmark stratégique (M4) pour une sérénité décisionnelle complète à tarif préférentiel.

### 🚀 4. Niveau 2 : Accompagnement Opérationnel Continu (Dès 1 500 € HT)
* **Focus :** Cadrage sur-mesure post-sprint pour asseoir la délégation des shootings standards et soutenir l'expansion à long terme sans perte de contrôle.

---

## 💻 Fonctionnalités Clés de l'Application

L'application web interactive propose un parcours de lecture soigné et dynamique :

1. **Hero Section immersive :** Une introduction haut de gamme posant la promesse centrale de clarté, de réactivité et de croissance.
2. **Indicateurs clés du Sprint :** Synthèse visuelle des bénéfices (3 semaines de déploiement, 3h de temps libéré estimé par semaine, outil 100% sans code/sans abonnement).
3. **Parcours des Modules d'intervention :** Découpage pédagogique détaillé des 4 piliers méthodologiques.
4. **Simulateur de ROI Dynamique :** 
   * Permet à l'utilisateur de configurer son temps d'administration actuel, ses objectifs de temps récupéré (Socle) et sa valeur horaire cible.
   * Calcule instantanément le volume d'heures et de jours de repos récupérés à l'année.
   * Affiche en temps réel le **nombre de semaines nécessaires pour amortir** le *Socle* par rapport au *Bundle*.
5. **Calendrier du Sprint (Chronologie interactive) :** Une frise chronologique détaillée montrant le déroulement des livrables du Jour 1 au Jour 21.
6. **Cartes d'Offres & Sélections d'engagements :** Permet à l'utilisateur de cliquer sur une formule pour l'étudier, changeant dynamiquement le message du formulaire de contact selon l'option choisie.
7. **Formulaire de Contact Réactif :** Pré-rempli avec les informations de Konstantin Brachet, facilitant la validation de l'offre et l'envoi d'un message direct à Stanislas.

---

## 🛠️ Stack Technique

* **Framework :** [React](https://react.dev/) (v18+) avec [TypeScript](https://www.typescriptlang.org/)
* **Build Tool :** [Vite](https://vite.dev/)
* **Styling :** [Tailwind CSS](https://tailwindcss.com/)
* **Animations :** [Motion](https://motion.dev/) (importé depuis `motion/react`) pour des transitions fluides et haut de gamme.
* **Iconographie :** [Lucide React](https://lucide.dev/) (tous les visuels vectoriels de l'interface).

---

## 🚀 Installation & Lancement en Local

Suivez ces instructions pour installer le projet localement et lancer le serveur de développement.

### Prérequis
* [Node.js](https://nodejs.org/) (Version 18 ou supérieure recommandée)
* npm (généralement installé avec Node.js)

### Étape 1 : Cloner le dépôt
```bash
git clone <url-du-depot>
cd <nom-du-dossier>
```

### Étape 2 : Installer les dépendances
```bash
npm install
```

### Étape 3 : Lancer le serveur de développement
```bash
npm run dev
```
L'application sera accessible par défaut à l'adresse : `http://localhost:3000` (ou le port attribué par votre configuration).

### Étape 4 : Compiler pour la production
```bash
npm run build
```
Les fichiers statiques optimisés seront générés dans le dossier `/dist`.

---

## 🎨 Philosophie de Design Appliquée

L'identité visuelle de l'application a été méticuleusement conçue par **Studio Noah Labs** pour refléter l'excellence artistique et premium de Vision Immo Photographie :
* **La palette "Calm Warmth" / "Chocolat & Or" :** Alliance d'un arrière-plan sombre enveloppant (`bg-coffee-deep`), de touches dorées lumineuses (`text-gold` / `text-gold-bright`) et de nuances douces ivoire/parchemin pour assurer un excellent confort de lecture.
* **L'honnêteté architecturale :** Zéro jargon technique artificiel, aucun indicateur système ou log factice. L'accent est entièrement mis sur l'impact humain, l'organisation et le pilotage serein.
* **La fluidité des micro-interactions :** Animations de survol, entrées progressives des blocs, et réactivité instantanée du simulateur de retour sur investissement.

---

*Document développé et maintenu par Noah Consultant / Studio Noah Labs — 2026.*