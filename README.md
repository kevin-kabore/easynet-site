# EasyNet - Site Web

Site web vitrine pour **EasyNet** - Solutions logicielles de gestion pour bars et établissements scolaires.

---

## Table des matières

1. [Structure du projet](#structure-du-projet)
2. [Prérequis - Créer un compte GitHub](#prérequis---créer-un-compte-github)
3. [Déploiement initial](#déploiement-initial)
4. [Configurer le formulaire de contact (Formspree)](#configurer-le-formulaire-de-contact-formspree)
5. [Acheter et configurer le domaine](#acheter-et-configurer-le-domaine-easynetnet)
6. [Mettre à jour le site](#mettre-à-jour-le-site)
7. [Gérer les téléchargements](#gérer-les-téléchargements-github-releases)
8. [Personnaliser le design](#personnaliser-le-design)
9. [Prochaines étapes](#prochaines-étapes)

---

## Structure du projet

```
easynet-site/
├── index.html          # Page d'accueil (Bienvenue)
├── produits.html       # Page des produits (EasyBarNet, EasyClasseNet)
├── telechargement.html # Page de téléchargement + formulaire de contact
├── css/
│   └── style.css       # Tous les styles (variables personnalisables en haut)
├── js/
│   └── main.js         # JavaScript (menu mobile, formulaire)
├── images/             # Dossier pour les images et captures d'écran
└── README.md           # Ce fichier d'instructions
```

### Description des pages

| Page | Fichier | Description |
|------|---------|-------------|
| **Bienvenue** | `index.html` | Page d'accueil avec présentation de l'entreprise |
| **Produits** | `produits.html` | Détails sur EasyBarNet et EasyClasseNet |
| **Téléchargement** | `telechargement.html` | Liens de téléchargement + formulaire de contact |

---

## Prérequis - Créer un compte GitHub

GitHub est une plateforme gratuite pour stocker votre code et vos fichiers. C'est nécessaire pour héberger le site.

### Étape 1: Créer un compte GitHub

1. Allez sur **https://github.com/signup**
2. Entrez votre adresse email
3. Créez un mot de passe sécurisé
4. Choisissez un nom d'utilisateur (ex: `easynet-bf`)
5. Vérifiez votre email en cliquant sur le lien reçu
6. Complétez la configuration initiale

### Étape 2: Installer Git sur votre ordinateur

**Windows:**
1. Téléchargez Git: https://git-scm.com/download/win
2. Lancez l'installateur et acceptez toutes les options par défaut
3. Redémarrez votre ordinateur

**Vérifier l'installation:**
Ouvrez l'invite de commandes (cmd) et tapez:
```bash
git --version
```
Vous devriez voir quelque chose comme: `git version 2.x.x`

### Étape 3: Configurer Git avec votre identité

Ouvrez l'invite de commandes et tapez (remplacez avec vos informations):
```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"
```

---

## Déploiement initial

### Étape 1: Créer le repository sur GitHub

1. Connectez-vous à GitHub
2. Allez sur **https://github.com/new**
3. Remplissez:
   - **Repository name**: `easynet-site`
   - **Description**: `Site web EasyNet`
   - Laissez **Public** sélectionné
   - **Ne cochez AUCUNE case** (pas de README, pas de .gitignore)
4. Cliquez **"Create repository"**

### Étape 2: Envoyer le code vers GitHub

Ouvrez l'invite de commandes, naviguez vers le dossier du projet et exécutez:

```bash
cd chemin/vers/easynet-site
git init
git add .
git commit -m "Premier commit: Site EasyNet MVP"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/easynet-site.git
git push -u origin main
```

> **Note**: Remplacez `VOTRE_USERNAME` par votre nom d'utilisateur GitHub.

Lors du premier `push`, GitHub vous demandera de vous connecter.

### Étape 3: Créer un compte Vercel et déployer

Vercel est un service gratuit qui héberge votre site web.

1. Allez sur **https://vercel.com**
2. Cliquez **"Sign Up"**
3. Choisissez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à votre compte GitHub
5. Une fois connecté, cliquez **"Add New..."** → **"Project"**
6. Trouvez `easynet-site` dans la liste et cliquez **"Import"**
7. Laissez les paramètres par défaut (Framework Preset: Other)
8. Cliquez **"Deploy"**

Attendez 30-60 secondes. Votre site sera en ligne à une adresse comme:
**`https://easynet-site.vercel.app`**

---

## Configurer le formulaire de contact (Formspree)

Formspree permet de recevoir les messages du formulaire de contact par email, gratuitement (jusqu'à 50 messages par mois).

### Étape 1: Créer un compte Formspree

1. Allez sur **https://formspree.io**
2. Cliquez **"Get Started"** ou **"Sign Up"**
3. Créez un compte avec votre email

### Étape 2: Créer un nouveau formulaire

1. Une fois connecté, cliquez **"+ New Form"**
2. Donnez un nom: `EasyNet Contact`
3. Entrez l'email où recevoir les messages (ex: `votre@email.com`)
4. Cliquez **"Create Form"**

### Étape 3: Copier l'ID du formulaire

Après création, vous verrez une page avec un code comme:
```html
<form action="https://formspree.io/f/xpwzgvqr" method="POST">
```

L'ID est la partie après `/f/` → dans cet exemple: `xpwzgvqr`

### Étape 4: Mettre à jour le site

1. Ouvrez le fichier `telechargement.html`
2. Trouvez la ligne (vers ligne 100):
   ```html
   <form action="https://formspree.io/f/xpwzgvqr" method="POST"
   ```
3. Remplacez `xpwzgvqr` par VOTRE ID de formulaire
4. Sauvegardez le fichier
5. Envoyez les changements sur GitHub:
   ```bash
   git add .
   git commit -m "Mise à jour ID Formspree"
   git push
   ```

### Tester le formulaire

1. Allez sur votre site
2. Remplissez et envoyez le formulaire de contact
3. Vérifiez que vous recevez l'email

---

## Acheter et configurer le domaine (EasyNet.net)

### Étape 1: Acheter le domaine

Quelques options recommandées pour acheter un domaine:

| Registrar | Site | Prix approximatif |
|-----------|------|-------------------|
| **Namecheap** | https://namecheap.com | ~12$/an |
| **OVH** | https://ovh.com | ~10€/an |
| **GoDaddy** | https://godaddy.com | ~15$/an |
| **Google Domains** | https://domains.google | ~12$/an |

**Conseil**: Namecheap est généralement le moins cher et le plus simple.

1. Allez sur le site du registrar
2. Recherchez `easynet.net`
3. Si disponible, ajoutez au panier et procédez au paiement
4. Créez un compte si nécessaire

### Étape 2: Configurer le domaine sur Vercel

1. Allez sur **https://vercel.com/dashboard**
2. Cliquez sur votre projet `easynet-site`
3. Allez dans **"Settings"** → **"Domains"**
4. Cliquez **"Add"**
5. Entrez: `easynet.net`
6. Cliquez **"Add"**

Vercel vous donnera des instructions DNS. Notez les informations affichées.

### Étape 3: Configurer les DNS chez votre registrar

**Sur Namecheap (exemple):**

1. Connectez-vous à Namecheap
2. Allez dans **"Domain List"** → cliquez **"Manage"** sur votre domaine
3. Dans l'onglet **"Advanced DNS"**
4. Supprimez les enregistrements existants
5. Ajoutez les enregistrements fournis par Vercel:

   | Type | Host | Value |
   |------|------|-------|
   | A | @ | 76.76.21.21 |
   | CNAME | www | cname.vercel-dns.com |

6. Sauvegardez

**Délai**: Les changements DNS peuvent prendre de 10 minutes à 48 heures pour se propager.

### Étape 4: Vérifier

Une fois les DNS propagés, votre site sera accessible sur:
- **https://easynet.net**
- **https://www.easynet.net**

---

## Mettre à jour le site

### Option 1: Depuis votre ordinateur (recommandé)

1. Modifiez les fichiers avec un éditeur de texte (Notepad++, VS Code, etc.)
2. Ouvrez l'invite de commandes dans le dossier du projet
3. Exécutez:

```bash
git add .
git commit -m "Description de vos changements"
git push
```

4. Vercel déploiera automatiquement en 30-60 secondes

### Option 2: Depuis le site GitHub

1. Allez sur **https://github.com/VOTRE_USERNAME/easynet-site**
2. Cliquez sur le fichier que vous voulez modifier
3. Cliquez l'icône **crayon** (Edit this file)
4. Faites vos modifications
5. En bas, écrivez une description du changement
6. Cliquez **"Commit changes"**

Le site se mettra à jour automatiquement.

---

## Gérer les téléchargements (GitHub Releases)

GitHub Releases permet d'héberger gratuitement les fichiers d'installation de vos logiciels.

### Créer un repository pour chaque application

Pour EasyBarNet:

1. Allez sur **https://github.com/new**
2. Nom du repository: `easybarnet`
3. Cochez **"Add a README file"**
4. Cliquez **"Create repository"**

Répétez pour EasyClasseNet avec le nom `easyclassenet`.

### Publier une version (Release)

1. Allez sur le repository de votre application (ex: `easybarnet`)
2. À droite, cliquez **"Releases"**
3. Cliquez **"Create a new release"** ou **"Draft a new release"**
4. Remplissez:
   - **Tag version**: `v1.0.0`
   - **Release title**: `EasyBarNet Version 1.0.0`
   - **Description**: Notes sur cette version
5. Dans la section **"Attach binaries"**, glissez-déposez votre fichier `.exe` ou `.msi`
6. Cliquez **"Publish release"**

### Obtenir le lien de téléchargement

Après publication, le lien direct sera:
```
https://github.com/VOTRE_USERNAME/easybarnet/releases/download/v1.0.0/NomDuFichier.exe
```

### Mettre à jour les liens sur le site

1. Ouvrez `telechargement.html`
2. Trouvez les boutons de téléchargement (cherchez `href="#"`)
3. Remplacez `#` par le vrai lien:

```html
<a href="https://github.com/VOTRE_USERNAME/easybarnet/releases/download/v1.0.0/EasyBarNet-Setup.exe"
   class="btn btn-primary download-btn"
   data-product="EasyBarNet">
    Télécharger (Windows)
</a>
```

4. Mettez aussi à jour le numéro de version affiché
5. Sauvegardez et poussez les changements:
```bash
git add .
git commit -m "Ajout liens de téléchargement"
git push
```

### Publier une nouvelle version

Quand vous avez une mise à jour de votre logiciel:

1. Créez une nouvelle Release avec un nouveau tag (ex: `v1.1.0`)
2. Uploadez le nouveau fichier
3. Mettez à jour le lien sur le site

---

## Personnaliser le design

### Modifier les couleurs

Ouvrez `css/style.css`. En haut du fichier, vous trouverez les variables de couleurs:

```css
:root {
    /* COULEURS PRINCIPALES */
    --primary-color: #2563eb;        /* Bleu - couleur principale */
    --primary-hover: #1d4ed8;        /* Bleu foncé - survol */
    --secondary-color: #10b981;      /* Vert - couleur secondaire */

    /* COULEURS DE TEXTE */
    --text-color: #1f2937;           /* Gris foncé - texte principal */
    --text-light: #6b7280;           /* Gris - texte secondaire */

    /* ARRIÈRE-PLANS */
    --background-color: #ffffff;     /* Blanc - fond de page */
    --background-alt: #f9fafb;       /* Gris clair - sections alternées */
    --background-dark: #1f2937;      /* Gris foncé - footer */
}
```

**Pour changer une couleur:**
1. Trouvez un code couleur sur https://colorhunt.co ou https://coolors.co
2. Remplacez le code hexadécimal (ex: `#2563eb` → `#ff6600`)
3. Sauvegardez et poussez

### Modifier le contenu

- **Textes**: Ouvrez les fichiers `.html` et modifiez directement le texte
- **Images**:
  1. Ajoutez vos images dans le dossier `images/`
  2. Référencez-les dans le HTML: `<img src="images/votre-image.png" alt="Description">`

### Ajouter une nouvelle page

1. Copiez un fichier HTML existant (ex: `produits.html`)
2. Renommez-le (ex: `tarifs.html`)
3. Modifiez le contenu
4. Ajoutez un lien dans le menu de navigation de chaque page:
```html
<ul class="nav-menu">
    <li><a href="index.html">Bienvenue</a></li>
    <li><a href="produits.html">Produits</a></li>
    <li><a href="tarifs.html">Tarifs</a></li>  <!-- Nouveau -->
    <li><a href="telechargement.html">Téléchargement</a></li>
</ul>
```

---

## Prochaines étapes

### Immédiat (à faire maintenant)

- [ ] Créer un compte GitHub si pas encore fait
- [ ] Déployer le site sur Vercel
- [ ] Configurer Formspree avec votre email
- [ ] Tester le formulaire de contact

### Court terme (cette semaine)

- [ ] Acheter le domaine `easynet.net`
- [ ] Configurer le domaine sur Vercel
- [ ] Créer les repositories pour EasyBarNet et EasyClasseNet
- [ ] Publier les premières versions sur GitHub Releases
- [ ] Mettre à jour les liens de téléchargement sur le site

### Moyen terme (ce mois)

- [ ] Ajouter des captures d'écran des logiciels
- [ ] Personnaliser les couleurs selon votre identité visuelle
- [ ] Créer un logo et l'ajouter au site
- [ ] Ajouter des témoignages clients
- [ ] Créer une page de tarifs si nécessaire

### Optionnel (améliorations futures)

- [ ] Ajouter Google Analytics pour suivre les visiteurs
- [ ] Créer une page FAQ
- [ ] Ajouter des vidéos de démonstration
- [ ] Traduire le site en anglais
- [ ] Ajouter un chat en direct (Crisp, Tawk.to)

---

## Besoin d'aide ?

Pour toute question technique, contactez: **kevin.s.kabore@gmail.com**

### Ressources utiles

- [Guide Git pour débutants](https://rogerdudler.github.io/git-guide/index.fr.html)
- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Formspree](https://formspree.io/docs)
- [Choisir des couleurs](https://coolors.co)

---

*Dernière mise à jour: Décembre 2024*
