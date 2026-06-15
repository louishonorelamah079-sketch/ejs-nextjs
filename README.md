# ENSEA Junior Services — Site Next.js

## Stack
- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** pour le style
- **EmailJS** pour le formulaire de contact
- **Vercel** pour le déploiement

## Démarrage rapide

### 1. Installer Node.js
Télécharger sur https://nodejs.org (version LTS recommandée)

### 2. Installer les dépendances
```bash
cd ejs-nextjs
npm install
```

### 3. Configurer EmailJS
1. Créer un compte sur https://emailjs.com
2. Créer un **Service** (Gmail, Outlook…) → copier le `Service ID`
3. Créer un **Template** avec les variables : `{{name}}`, `{{email}}`, `{{phone}}`, `{{subject}}`, `{{message}}`
4. Copier le `Template ID` et la `Public Key`
5. Dupliquer `.env.local.example` → `.env.local` et remplir les valeurs

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://ejservices.ci
```

### 4. Lancer en développement
```bash
npm run dev
```
→ Ouvrir http://localhost:3000

### 5. Build de production
```bash
npm run build
npm start
```

## Déploiement sur Vercel

### Option A — Via l'interface Vercel (recommandé)
1. Pousser le projet sur GitHub
2. Aller sur https://vercel.com → **New Project**
3. Importer le dépôt GitHub
4. Ajouter les variables d'environnement dans **Settings → Environment Variables**
5. Cliquer **Deploy**

### Option B — Via CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

## Structure du projet
```
ejs-nextjs/
├── app/
│   ├── layout.tsx       # Layout global + SEO metadata
│   ├── page.tsx         # Page d'accueil
│   ├── globals.css      # Styles globaux + animations
│   ├── sitemap.ts       # Sitemap automatique (/sitemap.xml)
│   └── robots.ts        # robots.txt automatique
├── components/
│   ├── Navbar.tsx       # Navigation responsive
│   ├── Hero.tsx         # Section héro + compteurs animés
│   ├── TrustBar.tsx     # Bandeau défilant
│   ├── About.tsx        # Section À propos
│   ├── Services.tsx     # Grille des services
│   ├── Approach.tsx     # 4 étapes de notre approche
│   ├── Testimonials.tsx # Témoignages clients
│   ├── CTA.tsx          # Section contact + formulaire EmailJS
│   ├── Footer.tsx       # Pied de page + bouton retour en haut
│   └── Loader.tsx       # Loader animé au chargement
├── .env.local.example   # Variables d'environnement (à dupliquer)
├── vercel.json          # Configuration Vercel + en-têtes de sécurité
└── tailwind.config.ts   # Thème Tailwind (couleurs EJS)
```
