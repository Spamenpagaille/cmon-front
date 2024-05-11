# Utiliser l'image Node.js 14 comme base pour construire l'application Angular
FROM node:14 as builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Angular pour la production
RUN npm run build -- --prod

# Utiliser un serveur HTTP léger pour servir l'application construite
FROM nginx:latest

# Copier les fichiers d'application construits dans le répertoire approprié de Nginx
COPY --from=builder /app/dist/my-auth-app /usr/share/nginx/html

# Exposer le port 80 pour accéder à l'application via HTTP
EXPOSE 80

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]

