# 🚀 Guia de Deploy na Hostinger

## 📋 Pré-requisitos

- Conta na Hostinger com plano que suporte Node.js
- Repositório Git (GitHub, GitLab ou Bitbucket) ou arquivo ZIP do projeto
- Node.js 18.x ou superior

---

## 🎯 Estrutura do Projeto (Validada ✅)

```
portaln4m/
├── package.json          ✅ Scripts configurados
├── vite.config.ts        ✅ Configuração Vite + Preview
├── index.html            ✅ Entry point na raiz
├── .htaccess             ✅ SPA Fallback + Cache + HTTPS
├── public/
│   └── _redirects        ✅ Fallback alternativo
├── src/
│   ├── main.tsx          ✅ Entry point React
│   ├── App.tsx           ✅ Componente principal
│   ├── router/
│   │   ├── config.tsx    ✅ Rotas configuradas
│   │   └── index.ts      ✅ Router setup
│   └── pages/
│       ├── home/         ✅ Página inicial
│       └── admin/        ✅ Área administrativa
│           ├── login/
│           └── dashboard/
└── dist/                 (gerado no build)
```

---

## 🔧 Configuração no hPanel da Hostinger

### **1. Criar Aplicação Node.js**

Acesse: **hPanel → Website → Node.js App → Create Application**

### **2. Configurações Obrigatórias:**

| Campo | Valor |
|-------|-------|
| **Application Name** | `portaln4m` |
| **Application Root** | `/` (raiz do projeto) |
| **Node.js Version** | `20.x` ou superior |
| **Application Mode** | `Production` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run preview -- --host 0.0.0.0 --port 3000` |
| **Port** | `3000` (ou a porta atribuída) |

### **3. Variáveis de Ambiente (se necessário):**

```env
NODE_ENV=production
PORT=3000
BASE_PATH=/
```

---

## 📦 Métodos de Deploy

### **Opção 1: Via GitHub (Recomendado) 🌟**

```bash
# 1. Inicialize o repositório
git init
git add .
git commit -m "Deploy para Hostinger"

# 2. Crie repositório no GitHub e conecte
git remote add origin https://github.com/seu-usuario/portaln4m.git
git branch -M main
git push -u origin main

# 3. No hPanel:
# - Node.js App → Create Application
# - Clique em "Connect to Git"
# - Autorize o GitHub
# - Selecione o repositório
# - Branch: main
# - Configure os campos acima
# - Clique em "Create"
```

### **Opção 2: Via Upload ZIP**

```bash
# 1. Crie o ZIP (SEM node_modules e dist)
# Windows (PowerShell):
Compress-Archive -Path * -DestinationPath portaln4m.zip -Force -Exclude node_modules,dist,.git

# Linux/Mac:
zip -r portaln4m.zip . -x "node_modules/*" "dist/*" ".git/*"

# 2. No hPanel:
# - File Manager → Upload para pasta do domínio
# - Extraia o arquivo
# - Node.js App → Create Application
# - Configure os campos
# - Clique em "Create"
```

---

## 🔍 Solução de Problemas

### **❌ Erro: "Rotas /admin/* não funcionam"**

**Causa:** Falta configuração de SPA fallback

**Solução:**
1. Verifique se o `.htaccess` está na pasta `dist/` após o build
2. Copie manualmente se necessário:
```bash
cp .htaccess dist/.htaccess
cp public/_redirects dist/_redirects
```

3. Ou adicione ao `vite.config.ts`:
```typescript
build: {
  rollupOptions: {
    output: {
      assetFileNames: (assetInfo) => {
        if (assetInfo.name === '.htaccess') return '[name][extname]';
        return 'assets/[name]-[hash][extname]';
      }
    }
  }
}
```

### **❌ Erro: "Cannot find vite.config"**

**Causa:** Application Root incorreto

**Solução:**
- Certifique-se que **Application Root** está como `/`
- Verifique se `vite.config.ts` está na raiz do projeto

### **❌ Erro: "Port already in use"**

**Causa:** Porta 3000 ocupada

**Solução:**
Ajuste o comando de start:
```bash
npm run preview -- --host 0.0.0.0 --port $PORT
```

### **❌ Erro: "Build failed"**

**Causa:** Dependências faltando ou erro de compilação

**Solução:**
1. Verifique os logs no hPanel
2. Teste localmente:
```bash
npm install
npm run build
npm run preview
```

### **❌ Erro: "404 ao acessar /admin/login diretamente"**

**Causa:** Servidor não está redirecionando para index.html

**Solução:**
1. Verifique se `.htaccess` está em `dist/`
2. Se usar Nginx, adicione ao config:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

3. Teste o fallback:
```bash
# Acesse direto pela URL
https://seudominio.com/admin/login
```

---

## ✅ Checklist de Deploy

Antes de fazer o deploy, confirme:

- [ ] `package.json` na raiz com scripts `build` e `preview`
- [ ] `vite.config.ts` na raiz com configuração de preview
- [ ] `index.html` na raiz
- [ ] `.htaccess` configurado com SPA fallback
- [ ] `public/_redirects` criado
- [ ] Pasta `src/` com `main.tsx` e `App.tsx`
- [ ] Rotas configuradas em `src/router/config.tsx`
- [ ] **Application Root** definido como `/`
- [ ] Build Command: `npm install && npm run build`
- [ ] Start Command: `npm run preview -- --host 0.0.0.0 --port 3000`
- [ ] Não fazer upload de `node_modules/` ou `dist/`

---

## 🧪 Testar Localmente Antes do Deploy

```bash
# 1. Instale as dependências
npm install

# 2. Faça o build de produção
npm run build

# 3. Teste o preview (simula produção)
npm run preview

# 4. Acesse e teste todas as rotas:
# - http://localhost:3000/
# - http://localhost:3000/admin/login
# - http://localhost:3000/admin/dashboard

# 5. Teste navegação direta (F5 nas páginas)
```

---

## 📊 Após o Deploy

### **1. Verifique o Status:**
```bash
# No hPanel, vá em Node.js App
# Status deve estar: "Running" ✅
```

### **2. Teste as Rotas:**
- ✅ `https://seudominio.com/` (Home)
- ✅ `https://seudominio.com/admin/login` (Login Admin)
- ✅ `https://seudominio.com/admin/dashboard` (Dashboard)

### **3. Teste Navegação Direta:**
- Acesse `https://seudominio.com/admin/login` diretamente
- Pressione F5 na página
- Deve carregar normalmente (não dar 404)

### **4. Verifique os Logs:**
```bash
# No hPanel → Node.js App → Logs
# Procure por erros ou avisos
```

---

## 🔐 Credenciais de Admin

**Usuário:** `maurilio.alves`  
**Senha:** `2331`

---

## 🎯 Estrutura de Rotas

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | `Home` | Página inicial |
| `/admin/login` | `AdminLogin` | Login administrativo |
| `/admin/dashboard` | `AdminDashboard` | Painel admin |
| `*` | `NotFound` | Página 404 |

---

## 📞 Suporte

Se encontrar problemas:

1. **Verifique os logs** no hPanel
2. **Teste localmente** com `npm run preview`
3. **Confirme o .htaccess** está em `dist/`
4. **Valide as rotas** em `src/router/config.tsx`

---

## 🚀 Performance

O projeto está otimizado com:

- ✅ **Code Splitting** (vendor chunks separados)
- ✅ **Cache Headers** (1 ano para assets)
- ✅ **Compressão Gzip** (texto e JS)
- ✅ **Lazy Loading** (rotas carregadas sob demanda)
- ✅ **Security Headers** (XSS, CSRF, Clickjacking)

---

**Projeto pronto para produção! 🎉**
