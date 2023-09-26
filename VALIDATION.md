        ### Critères d'évaluation

        ## Git
            ✅  - Versionné régulièrement et de manière atomique (Plusieurs "commit" par jour pendant toute la durée du projet) => Vérif Git
                - Historique de commit propre => (éviter les doublons, les commits inutiles)
                - Mise en plance d'une branche de développement supplémentaire, voire plusieurs selon l'architecture du site => Vérif sur Git
                - Fonction "pull request" => Check sur Github
                - Mise en place un Github Action (automatisation de tests intégration, vulnérabilité, ...) => Check sur Github

        ## Sécurité
                - Prévenir les vulnérabilités principales (cross site, injection sql, protection des tokens, validation des données) => GoogleSearchConsole, Sucuri
                - Respect de la protection des données (RGPD, encapsulation)
                - Utilisation des chemins absolus

        ## SEO
            ✅  - Mise en place de la stratégie SEO : données structurées, ...
                - PWA (Progressive Web App) : services workers (microphone, localisation, ...)
                - HTML sémantique

        ## Performance
            ✅  - Bon résultat sur PageSpeed Insights
                - Optimisation images (surtout mobile)
                - Limiter le nombre de requêtes

        ## Accessibilité
            ✅  - Accessibilité : title, aria-label, alt
                - Optimisation des images : poids et formats adaptés
                - Fournir un site web avec une bonne expérience utilisateur
                - Texte lisible : interlinéage suffisant, taille des polices proportionnelles, contraste des couleurs optimale, ...

        ## Architecture
            ✅  - Bons principes de structuration respectés, y compris pour le web mobile => vérif des balises (body, header, navbar), et des noms de classes CSS, variables, media queries
                - Eviter les répétitions en utilisant des fonctions => check du code source

        ## Contenu
                - Contenu vérifié : informations croisées, résumé de plusieurs sources, ...
                - Détail des étapes pour chaque diagramme

        ## UI/UX
                - Features d'animations, transitions, barre de navigation => vérif du site
                - Design cohérent (couleur, forme, polices)