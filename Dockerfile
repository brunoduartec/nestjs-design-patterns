# Imagem base oficial do Node.js LTS
FROM node:20-alpine AS builder

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Compila o projeto (assumindo que usa TypeScript)
RUN npm run build

# --------------------------
# Imagem final para produção
# --------------------------
FROM node:20-alpine

WORKDIR /app

# Copia apenas os arquivos necessários da etapa de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Porta padrão do NestJS
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm","run", "start:prod"]