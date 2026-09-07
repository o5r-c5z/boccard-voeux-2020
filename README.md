# Boccard 2020

Carte de vœux en ligne du groupe Boccard pour l'année 2020. Une page unique
diffuse une vidéo de vœux, servie dans la langue du navigateur (anglais par
défaut) et dans une définition adaptée à la largeur de l'écran, avec activation
du son et bouton de relecture en fin de vidéo.

**Année de réalisation / livraison : décembre 2019 (vœux 2020).**
D'après les paramètres de cache des feuilles de style (`?1575451956`), les
sources ont été produites le 4 décembre 2019.

## Contenu

- `index.html` — page unique : en-tête avec logo et bouton son, conteneur
  vidéo, bloc « Revoir la vidéo / Watch again ».
- `js/scripts.js` — détection de la langue du navigateur et de la largeur
  d'écran, construction des `<source>` de la `<video>`, gestion du son, de la
  fin de lecture et de la relecture. Métadonnées Open Graph adaptées en
  français.
- `css/screen.css` — feuille de style compilée depuis Compass (sortie
  compressée). `css/ie.css` et `css/print.css` sont présents mais vides.
- `images/` — `fond-bleu.png` et `particules.png` (arrière-plans),
  `logo-boccard.png`, `2020_B.JPG` (poster de la vidéo), `share-fr.jpg` /
  `share-en.jpg` (images Open Graph), icônes réseaux sociaux
  (`facebook.png`, `twitter.png`, `linkedin.png`, `youtube.png`),
  `image007.jpg`.
- `videos/` — vidéo de vœux déclinée en 5 langues (EN, FR, ES, PL, RU),
  2 définitions (360p, 720p) et 3 formats (`.mp4`, `.webm`, `.ogg`).
- `private/compass/` — projet Compass : `config.rb`, sources Sass dans
  `sass/` (`screen.scss`, `ie.scss`, `print.scss`), cache `.sass-cache/`.
- `_Documents/Boccard-voeux2020_0-51-00/` — PNG de travail (`fond-bleu.png`,
  `titre.png`, `particules.png`) extraits d'une image de la vidéo.

## Stack technique

- Site statique : un seul fichier HTML, JavaScript sans dépendance, aucun
  serveur applicatif.
- Feuilles de style générées avec **Compass + Sass** (`private/compass/`,
  `output_style = :compressed`, `relative_assets = true`).
- Chargés depuis un CDN dans `index.html` :
  - Font Awesome 5.11.2 (icônes son coupé / relecture) ;
  - animate.css 3.7.2 (clignotement du bouton son) ;
  - Google Fonts — Roboto.
- Lecture vidéo via l'élément HTML `<video>` natif ; les `<source>` sont
  ajoutées dynamiquement selon la langue et la définition retenues.
- Pas de gestionnaire de paquets JavaScript (ni `package.json`, ni Bower).

## Développement

Prérequis : Ruby avec les gems `compass` et `compass-core` (le cache indique
`compass-core 1.0.3`). La compilation Sass passe par la commande `compass`.

```sh
gem install compass

# compilation / surveillance des styles
cd private/compass
compass compile          # génère css/screen.css (+ ie.css, print.css)
compass watch            # recompile à chaque modification des .scss

# servir le site depuis la racine du dépôt
cd -
python3 -m http.server 8000
```

Notes de configuration :

- `private/compass/config.rb` écrit la sortie hors du dossier Compass :
  `css_dir = "../../css"`, `images_dir = "../../images"`,
  `javascripts_dir = "../../js"`. `http_path = "/"` : à adapter si le site
  n'est pas servi à la racine du domaine.
- L'URL de production déclarée dans les métadonnées Open Graph est
  `https://www.boccard.com/greetings/2020/`.
- `js/scripts.js` construit les sources avec l'extension `.ogv` alors que les
  fichiers livrés portent l'extension `.ogg` ; la langue `zh` est détectée
  mais aucune vidéo chinoise n'est fournie.

## Crédits

- **Commanditaire** — Boccard (`https://www.boccard.com`)
- **Développement web** — Olivier Charvoz
- **Agence** — Big Company

Copyright © 2019 Boccard. Tous droits réservés.
