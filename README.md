# 🚀 N4M Portal - Landing Page

Landing page moderna e tecnológica para startup de tecnologia com painel administrativo.

## 📋 Pré-requisitos

- [Docker Desktop](https://docs.docker.com/get-docker/) instalado
- Portas 3306 (MySQL) e 5173 (App) disponíveis

## 🐳 Como rodar o projeto

### 1️⃣ Clone o repositório (se ainda não tiver)
```bash
git clone <seu-repositorio>
cd <pasta-do-projeto>
```

### 2️⃣ Suba os containers
```bash
docker-compose up -d
```

**Aguarde 2-3 minutos** na primeira execução (download de imagens e instalação de dependências).

### 3️⃣ Verifique se os containers estão rodando
```bash
docker-compose ps
```

Você deve ver algo assim:
```
NAME        IMAGE          STATUS         PORTS
n4m_mysql   mysql:8.0      Up (healthy)   0.0.0.0:3306->3306/tcp
n4m_app     n4m_app        Up             0.0.0.0:5173->5173/tcp
```

### 4️⃣ Acesse a aplicação

- **Site**: http://localhost:5173
- **Painel Admin**: http://localhost:5173/admin/login
  - Usuário: `maurilio.alves`
  - Senha: `2331`

## 🔧 Comandos úteis

### Ver logs em tempo real
```bash
# Todos os serviços
docker-compose logs -f

# Apenas MySQL
docker-compose logs -f mysql

# Apenas aplicação
docker-compose logs -f app
```

### Parar os containers
```bash
docker-compose down
```

### Reiniciar os containers
```bash
docker-compose restart
```

### Reconstruir a aplicação (após mudanças no código)
```bash
docker-compose down
docker-compose up -d --build
```

### Limpar tudo e começar do zero
```bash
docker-compose down -v
docker-compose up -d --build
```

## 🗄️ Acessar o MySQL

### Via linha de comando
```bash
docker-compose exec mysql mysql -u u432003722_maurilioayrton -p
```
Senha: `23311913mmmN.`

### Via cliente MySQL (DBeaver, MySQL Workbench, etc.)
- Host: `localhost`
- Porta: `3306`
- Banco: `u432003722_portaln4m`
- Usuário: `u432003722_maurilioayrton`
- Senha: `23311913mmmN.`

## 📊 Estrutura do Banco de Dados

O script `init.sql` cria automaticamente:

### Tabela `partners`
- id (INT, AUTO_INCREMENT)
- name (VARCHAR)
- logo_url (TEXT)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

### Tabela `testimonials`
- id (INT, AUTO_INCREMENT)
- name (VARCHAR)
- position (VARCHAR)
- company (VARCHAR)
- content (TEXT)
- rating (INT, 1-5)
- avatar_url (TEXT)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

## 🐛 Solução de Problemas

### ❌ Erro: "port is already allocated"
**Problema**: Porta 3306 ou 5173 já está em uso.

**Solução**:
```bash
# Verificar o que está usando a porta
# Windows
netstat -ano | findstr :3306
netstat -ano | findstr :5173

# Linux/Mac
lsof -i :3306
lsof -i :5173

# Parar o processo ou mudar a porta no docker-compose.yml
```

### ❌ Erro: "Cannot connect to MySQL"
**Problema**: MySQL ainda não está pronto.

**Solução**:
```bash
# Aguarde o MySQL ficar saudável
docker-compose logs -f mysql

# Quando ver "ready for connections", o MySQL está pronto
```

### ❌ Aplicação não carrega no navegador
**Problema**: Container da aplicação não iniciou corretamente.

**Solução**:
```bash
# Ver logs da aplicação
docker-compose logs -f app

# Se necessário, reconstruir
docker-compose down
docker-compose up -d --build
```

### ❌ Erro: "npm install failed"
**Problema**: Falha ao instalar dependências.

**Solução**:
```bash
# Limpar cache e reconstruir
docker-compose down -v
docker system prune -a
docker-compose up -d --build
```

### ❌ Mudanças no código não aparecem
**Problema**: Volume não está sincronizando.

**Solução**:
```bash
# Reiniciar o container da aplicação
docker-compose restart app

# Ou reconstruir
docker-compose up -d --build app
```

## 📁 Estrutura do Projeto

```
.
├── docker-compose.yml      # Orquestração dos containers
├── Dockerfile             # Configuração do container da aplicação
├── init.sql              # Script de inicialização do banco
├── package.json          # Dependências do projeto
├── src/                  # Código fonte
│   ├── pages/           # Páginas da aplicação
│   │   ├── home/       # Landing page
│   │   └── admin/      # Painel administrativo
│   ├── components/     # Componentes reutilizáveis
│   └── router/         # Configuração de rotas
└── README.md           # Este arquivo
```

## 🎯 Funcionalidades

### Landing Page
- ✅ Hero Section com animações
- ✅ Sobre a empresa
- ✅ Serviços (Desenvolvimento, DevOps, BI, Observabilidade, Sustentação)
- ✅ Seção de Parceiros
- ✅ Depoimentos de clientes
- ✅ Contato via WhatsApp
- ✅ Rodapé completo

### Painel Administrativo
- ✅ Login seguro
- ✅ Gerenciamento de Parceiros (CRUD)
- ✅ Gerenciamento de Depoimentos (CRUD)
- ✅ Interface moderna e intuitiva

## 🔐 Credenciais

### Painel Admin
- Usuário: `maurilio.alves`
- Senha: `2331`

### MySQL
- Host: `localhost:3306`
- Banco: `u432003722_portaln4m`
- Usuário: `u432003722_maurilioayrton`
- Senha: `23311913mmmN.`

## 📞 Suporte

Se encontrar algum problema, verifique:
1. Docker Desktop está rodando
2. Portas 3306 e 5173 estão livres
3. Logs dos containers (`docker-compose logs -f`)

---

Desenvolvido com ❤️ por N4M
