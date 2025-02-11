# Bienvenue chez Bank Mastery Cash

[Démo en ligne](https://christophe-008.github.io/Bank-Mastery-Cash/)

![Money Money Money](https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people/leonardo-dicaprio-l-argent-fou-1064176/15215422-1-fre-FR/Leonardo-DiCaprio-l-argent-fou.jpg)

Hello, on nous a dit que vous étiez DEVELOPPEUR.SE, nous représentons la société BANK Mastery Cash la nouvelle neo banque numéro 1 mondiale de **l'optimisation fiscale 😉**

> Dans notre stratégie de digitalisation, nous voulons proposer désormais un service en ligne de gestion de votre capital. Notre slogan marketing "**Money Money Money**" 💸

Un de vos collaborateurs a déjà créé un début de template statique en HTML, CSS & JS, il ne vous reste plus qu'à rendre l'interface DYNAMIQUE et UTILISABLE via JS. Nous comptons sur votre talent pour rendre ce projet **ultra rentable**

🛩️ Nous avons rendez-vous à Dubaï avec Elon & Bill pour une démonstration, nous comptons sur vous pour rendre le projet abouti le plus rapidement possible 🍹🌴.

# Objectifs du projet

## Le projet doit être cloné et disponible sur un nouveau repo, et hébergé sur GitHub Pages.

Voici ce que vous devrez implémenter :

-   Connexion à une base de données (BDD) :

    -   Les données des transactions doivent provenir d'une base de données. Vous pouvez utiliser SQLITE, PostgreSQL, MongoDB, ou toute autre base de données de votre choix.
    -   Une API (que vous pourrez héberger sur Render.com) sera utilisée pour récupérer les données des transactions.

-   Actualisation du solde et du graphique :

    -   Le solde et le graphique doivent être mis à jour automatiquement chaque fois qu'une nouvelle transaction est ajoutée via le formulaire de la modale.

-   Créer une modale pour ajouter des transactions :

    -   Créez une modale avec un formulaire permettant à l'utilisateur d'ajouter une transaction (crédit ou débit).
    -   Le formulaire doit inclure les champs suivants :
        -   Montant de la transaction
        -   Description de la transaction
        -   Type de transaction (Crédit/Débit)
            -Date de la transaction (la date actuelle peut être pré-remplie)
    -   Lorsqu'une transaction est ajoutée, elle doit être envoyée à la base de données via l'API et l'interface mise à jour.

-   Filtrage des transactions :

    -   Implémentez un système de filtrage pour afficher uniquement les transactions Crédit ou Débit, en fonction de la sélection de l'utilisateur dans la navigation.
    -   Cela permettra de filtrer l'affichage des transactions et d'afficher uniquement celles qui correspondent au type sélectionné.

-   Toast après ajout d'une transaction :

    -   Ajoutez un toast (petite notification temporaire) pour informer l'utilisateur après qu'une transaction a été ajoutée avec succès. Cela donne un retour visuel rapide et améliore l'expérience utilisateur.

-   Bonus - Modifier la devise (€. USD) :

    -   Implémentez une fonctionnalité qui permet à l'utilisateur de modifier la devise d'affichage du solde et des transactions entre € et $.
    -   Vous pouvez utiliser une simple bascule de devise avec un bouton dans l'interface, et il faudra que la conversion se fasse en fonction du taux de change actuel.

-   Respecter la charte graphique et le code existant
