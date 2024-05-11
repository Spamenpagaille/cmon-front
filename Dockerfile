# Utilisez l'image Node.js comme base pour le build
FROM node:latest as builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires pour installer les dépendances
COPY ./package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port 4200 utilisé par le serveur de développement
EXPOSE 4200

# Commande par défaut pour démarrer le serveur de développement
CMD ["npm", "start"]
