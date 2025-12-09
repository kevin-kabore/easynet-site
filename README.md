# EasyNet Website

Site web vitrine pour EasyNet - Solutions logicielles de gestion.

## Structure du projet

```
easynet-site/
├── index.html          # Page d'accueil (Bienvenue)
├── produits.html       # Page des produits
├── telechargement.html # Page de téléchargement + contact
├── css/
│   └── style.css       # Styles + variables personnalisables
├── js/
│   └── main.js         # JavaScript (navigation, formulaire)
├── images/             # Images et captures d'écran
└── README.md           # Ce fichier
```

## Déploiement initial

### Étape 1: Créer le repository GitHub

1. Allez sur https://github.com/new
2. Nom du repository: `easynet-site`
3. Laissez "Public" sélectionné
4. Ne cochez PAS "Add a README file" (on en a déjà un)
5. Cliquez "Create repository"

### Étape 2: Pousser le code vers GitHub

```bash
cd easynet-site
git init
git add .
git commit -m "Initial commit: EasyNet website MVP"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/easynet-site.git
git push -u origin main
```

### Étape 3: Déployer sur Vercel

1. Allez sur https://vercel.com
2. Connectez-vous avec votre compte GitHub
3. Cliquez "Add New..." → "Project"
4. Importez le repository `easynet-site`
5. Framework Preset: "Other" (site statique)
6. Cliquez "Deploy"

### Étape 4: Configurer le domaine (EasyNet.net)

1. Achetez le domaine sur un registrar (Namecheap, GoDaddy, OVH, etc.)
2. Dans Vercel: Settings → Domains → Add
3. Entrez `easynet.net`
4. Suivez les instructions pour configurer les DNS

## Mise à jour du site

### Depuis votre ordinateur

1. Modifiez les fichiers localement
2. Ouvrez un terminal dans le dossier du projet
3. Exécutez:

```bash
git add .
git commit -m "Description de vos changements"
git push
```

4. Vercel déploiera automatiquement en quelques secondes

### Depuis GitHub directement

1. Allez sur https://github.com/VOTRE_USERNAME/easynet-site
2. Cliquez sur le fichier à modifier
3. Cliquez l'icône crayon (Edit)
4. Faites vos modifications
5. Cliquez "Commit changes"

## Personnalisation

### Couleurs et styles

Ouvrez `css/style.css` et modifiez les variables CSS en haut du fichier:

```css
:root {
    --primary-color: #2563eb;      /* Couleur principale */
    --secondary-color: #10b981;    /* Couleur secondaire */
    --text-color: #1f2937;         /* Couleur du texte */
    /* ... autres variables ... */
}
```

### Contenu

- **Textes**: Modifiez directement dans les fichiers HTML
- **Images**: Ajoutez-les dans le dossier `images/` et référencez-les dans le HTML

## Gestion des téléchargements avec GitHub Releases

### Créer un repository pour vos applications

Pour chaque application (EasyBarNet, EasyClasseNet), créez un repository GitHub séparé:

1. Créez le repo: `https://github.com/new` → `easybarnet`
2. Poussez votre code ou juste les fichiers d'installation

### Créer une Release (nouvelle version)

1. Allez sur le repository de votre application
2. Cliquez "Releases" (côté droit)
3. Cliquez "Create a new release"
4. Tag version: `v1.0.0`
5. Release title: `EasyBarNet v1.0.0`
6. Glissez-déposez votre fichier .exe ou .msi dans "Attach binaries"
7. Cliquez "Publish release"

### Obtenir le lien de téléchargement

Après publication, le lien sera:
```
https://github.com/VOTRE_USERNAME/easybarnet/releases/download/v1.0.0/EasyBarNet-Setup.exe
```

### Mettre à jour les liens sur le site

1. Ouvrez `telechargement.html`
2. Trouvez les lignes avec `href="#"` dans les boutons de téléchargement
3. Remplacez `#` par les vrais liens GitHub Releases:

```html
<a href="https://github.com/USERNAME/easybarnet/releases/download/v1.0.0/EasyBarNet-Setup.exe"
   class="btn btn-primary download-btn"
   data-product="EasyBarNet">
    Télécharger (Windows)
</a>
```

4. Mettez à jour le numéro de version affiché
5. Committez et poussez

## Formulaire de contact

Le formulaire utilise Formspree (gratuit jusqu'à 50 messages/mois).

### Vérifier les messages

Les messages arrivent directement sur: kevin.s.kabore@gmail.com

### Changer l'email de réception

1. Allez sur https://formspree.io
2. Créez un compte ou connectez-vous
3. Créez un nouveau formulaire avec le nouvel email
4. Copiez le nouvel ID de formulaire
5. Remplacez dans `telechargement.html`:

```html
<form action="https://formspree.io/f/NOUVEL_ID" method="POST">
```

## Support

Pour toute question technique, contactez: kevin.s.kabore@gmail.com
