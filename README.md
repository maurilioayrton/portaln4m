# N4M - Portal Tecnológico

Landing page moderna e tecnológica para startup de tecnologia com painel administrativo.

## 🚀 Tecnologias

- **Frontend**: React 19 + TypeScript + Vite
- **Estilização**: TailwindCSS
- **Banco de Dados**: MySQL 8.0
- **Containerização**: Docker + Docker Compose

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Docker](https://docs.docker.com/get-docker/) (versão 20.10 ou superior)
- [Docker Compose](https://docs.docker.com/compose/install/) (versão 2.0 ou superior)
- [Git](https://git-scm.com/downloads)

## 🔧 Instalação e Configuração

### 1. Clone o repositório (se aplicável)

\`\`\`bash
git clone <seu-repositorio>
cd <nome-do-projeto>
\`\`\`

### 2. Configure as variáveis de ambiente

Copie o arquivo de exemplo e ajuste se necessário:

\`\`\`bash
cp .env.example .env
\`\`\`

### 3. Suba os containers com Docker Compose

\`\`\`bash
docker-compose up -d
\`\`\`

Este comando irá:
- Baixar as imagens necessárias (MySQL e Node.js)
- Criar o banco de dados MySQL
- Executar o script de inicialização (criar tabelas e inserir dados)
- Instalar as dependências do Node.js
- Iniciar a aplicação React

### 4. Aguarde a inicialização

A primeira execução pode levar alguns minutos para:
- Baixar as imagens Docker
- Instalar todas as dependências npm
- Inicializar o banco de dados

Você pode acompanhar os logs com:

\`\`\`bash
docker-compose logs -f
\`\`\`

### 5. Acesse a aplicação

Após a inicialização completa:

- **Frontend**: http://localhost:5173
- **Painel Admin**: http://localhost:5173/admin/login
- **MySQL**: localhost:3306

## 🔐 Credenciais de Acesso

### Painel Administrativo
- **Usuário**: maurilio.alves
- **Senha**: 2331

### Banco de Dados MySQL
- **Host**: localhost (ou mysql dentro do container)
- **Porta**: 3306
- **Database**: u432003722_portaln4m
- **Usuário**: u432003722_maurilioayrton
- **Senha**: 23311913mmmN.
- **Root Password**: rootpassword

## 📦 Comandos Úteis

### Parar os containers

\`\`\`bash
docker-compose down
\`\`\`

### Parar e remover volumes (apaga dados do banco)

\`\`\`bash
docker-compose down -v
\`\`\`

### Reiniciar os containers

\`\`\`bash
docker-compose restart
\`\`\`

### Ver logs em tempo real

\`\`\`bash
docker-compose logs -f
\`\`\`

### Ver logs apenas da aplicação

\`\`\`bash
docker-compose logs -f app
\`\`\`

### Ver logs apenas do MySQL

\`\`\`bash
docker-compose logs -f mysql
\`\`\`

### Acessar o terminal do container da aplicação

\`\`\`bash
docker-compose exec app sh
\`\`\`

### Acessar o MySQL via linha de comando

\`\`\`bash
docker-compose exec mysql mysql -u u432003722_maurilioayrton -p u432003722_portaln4m
# Senha: 23311913mmmN.
\`\`\`

### Reconstruir os containers (após mudanças no Dockerfile)

\`\`\`bash
docker-compose up -d --build
\`\`\`

### Instalar novas dependências npm

\`\`\`bash
docker-compose exec app npm install <nome-do-pacote>
\`\`\`

## 🗄️ Estrutura do Banco de Dados

### Tabela: partners
- id (INT, AUTO_INCREMENT, PRIMARY KEY)
- name (VARCHAR 255)
- logo_url (TEXT)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

### Tabela: testimonials
- id (INT, AUTO_INCREMENT, PRIMARY KEY)
- name (VARCHAR 255)
- position (VARCHAR 255)
- company (VARCHAR 255)
- content (TEXT)
- rating (INT, 1-5)
- avatar_url (TEXT)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

## 🎯 Funcionalidades

### Frontend
- Landing page moderna e responsiva
- Seção Hero com animações
- Apresentação de serviços
- Galeria de parceiros
- Depoimentos de clientes
- Formulário de contato via WhatsApp
- Design futurista com tema escuro

### Painel Administrativo
- Login seguro
- Gerenciamento de parceiros (CRUD)
- Gerenciamento de depoimentos (CRUD)
- Interface intuitiva com abas
- Preview de imagens em tempo real

## 🔧 Desenvolvimento

### Estrutura de Pastas

\`\`\`
src/
├── components/          # Componentes reutilizáveis
├── pages/              # Páginas da aplicação
│   ├── home/          # Landing page
│   └── admin/         # Painel administrativo
├── router/            # Configuração de rotas
├── i18n/              # Internacionalização
└── main.tsx           # Entry point
\`\`\`

### Hot Reload

O projeto está configurado com hot reload. Qualquer alteração nos arquivos será refletida automaticamente no navegador.

## 🐛 Troubleshooting

### Porta 5173 já está em uso

\`\`\`bash
# Pare o processo que está usando a porta ou altere a porta no docker-compose.yml
docker-compose down
# Edite docker-compose.yml e mude "5173:5173" para "3000:5173"
docker-compose up -d
\`\`\`

### Porta 3306 já está em uso (MySQL local)

\`\`\`bash
# Pare o MySQL local ou altere a porta no docker-compose.yml
docker-compose down
# Edite docker-compose.yml e mude "3306:3306" para "3307:3306"
docker-compose up -d
\`\`\`

### Erro ao conectar no banco de dados

\`\`\`bash
# Verifique se o container do MySQL está rodando
docker-compose ps

# Verifique os logs do MySQL
docker-compose logs mysql

# Reinicie os containers
docker-compose restart
\`\`\`

### Dependências não instaladas

\`\`\`bash
# Reconstrua os containers
docker-compose down
docker-compose up -d --build
\`\`\`

## 📝 Notas Importantes

1. **Dados Persistentes**: Os dados do MySQL são armazenados em um volume Docker. Eles persistem mesmo após parar os containers.

2. **Desenvolvimento**: O código fonte é montado como volume, então alterações são refletidas imediatamente.

3. **Produção**: Para produção, você precisará:
   - Configurar variáveis de ambiente adequadas
   - Usar build de produção do React
   - Configurar HTTPS
   - Usar senhas mais seguras
   - Configurar backup do banco de dados

4. **Segurança**: As credenciais neste README são apenas para desenvolvimento local. Nunca use essas credenciais em produção.

## 📞 Suporte

Para dúvidas ou problemas:
- WhatsApp: +55 61 99214-9630
- Email: contato@n4m.com.br

## 📄 Licença

Este projeto é proprietário e confidencial.
