# Étapes à suivre

### 1. Cloner le projet

-   Clonez ce projet depuis le repo initial.
-   Créez un nouveau repository sur **GitHub** et poussez-y votre code.
-   Déployez-le sur **GitHub Pages** pour qu'il soit accessible en ligne.

### 2. Configuration de la base de données et de l'API

-   Choisissez la base de données que vous souhaitez utiliser (**SQLITE**, **MongoDB**, **PostgreSQL**, etc.).
-   Créez l'API qui servira à gérer les transactions. Cette API sera utilisée pour ajouter des transactions, récupérer les transactions, et mettre à jour le solde.
-   Hébergez l'API sur **Render.com** ou une autre plateforme cloud (**Heroku**, etc.).

### 3. Créer la modale et le formulaire pour ajouter des transactions

-   Créez une **modale** en HTML/CSS avec les champs nécessaires pour ajouter une transaction : montant, description, type (Crédit/Débit), et la date.
-   Lorsqu'une transaction est soumise, elle doit être envoyée à l'API pour être enregistrée dans la base de données.

### 4. Mettre à jour le solde et le graphique

-   Utilisez **Chart.js** pour afficher un graphique dynamique qui sera mis à jour chaque fois qu'une nouvelle transaction est ajoutée.
-   Actualisez le **solde** visible sur l'interface chaque fois qu'une transaction est ajoutée. Ce calcul peut se faire directement via l'API ou côté client.

### 5. Filtrer les transactions

-   Implémentez un système de **filtrage** qui permet de voir uniquement les transactions **Crédit** ou **Débit** en fonction du choix de l'utilisateur.
-   Cela peut être réalisé avec un simple bouton ou menu déroulant pour choisir entre **Crédit** et **Débit**.

### 6. Ajouter un toast après l'ajout d'une transaction

-   Implémentez un **toast** qui apparaît après chaque ajout de transaction, pour informer l'utilisateur que l'opération a été réussie.

### 7. Bonus - Modifier la devise

-   Ajoutez un bouton pour changer la devise entre **€** et **$**. Vous pouvez effectuer une conversion basée sur un taux fixe ou bien intégrer une API de taux de change pour effectuer la conversion en temps réel.

---

## Déploiement sur GitHub Pages

-   Créez un nouveau **repository** sur **GitHub**.
-   Poussez votre projet dans ce repository.
-   Activez **GitHub Pages** sur ce repository (dans les paramètres GitHub).
-   Partagez le lien vers votre **démo en ligne** pour que l'équipe puisse y accéder.

---

## À remettre pour une démo à Dubaï !

Soyez prêts pour la démonstration avec **Elon & Bill** ! Le projet doit être abouti et disponible en ligne avant la date limite.

---

## Contact

Si vous avez des questions ou si vous rencontrez des problèmes techniques, n'hésitez pas à nous contacter via **GitHub Issues** ou à poser des questions pour des éclaircissements.

---

Cela couvre toutes les fonctionnalités demandées, y compris la création de la base de données, l'API, la modale, et bien plus encore. Il vous donnera aussi un cadre clair pour déployer et tester votre projet ! 😊
