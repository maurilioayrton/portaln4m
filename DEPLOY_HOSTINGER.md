# 🚀 Guia de Deploy na Hostinger

## ✅ Estrutura do Projeto (Pronta para Hostinger)

Seu projeto já está organizado corretamente:

```
portaln4m/
├── package.json          ✅ Scripts configurados
├── vite.config.ts        ✅ Configuração Vite
├── index.html            ✅ Entry point
├── tsconfig.json         ✅ TypeScript config
├── tailwind.config.ts    ✅ Tailwind config
├── postcss.config.ts     ✅ PostCSS config
├── src/                  ✅ Código fonte
│   ├── main.tsx          ✅ Entry point React
│   ├── App.tsx           ✅ Componente principal
│   ├── pages/            ✅ Páginas
│   ├── components/       ✅ Componentes
│   └── router/           ✅ Rotas
└── .gitignore            ✅ Arquivos ignorados
```

---

## 📋 Pré-requisitos

1. **Conta Hostinger** com plano que suporte Node.js
2. **Repositório Git** (GitHub, GitLab ou Bitbucket) OU arquivo ZIP do projeto
3. **Node.js 18+** configurado no painel Hostinger

---

## 🔧 Método 1: Deploy via Git (Recomendado)

### 1️⃣ Prepare o Repositório

```bash
# Inicialize o Git (se ainda não fez)
git init

# Adicione todos os arquivos
git add .

# Faça o commit
git commit -m "Preparado para deploy na Hostinger"

# Conecte ao seu repositório remoto
git remote add origin https://github.com/seu-usuario/portaln4m.git

# Envie para o repositório
git push -u origin master
```

### 2️⃣ Configure no hPanel da Hostinger

1. Acesse **hPanel** → **Websites**
2. Selecione seu domínio
3. Vá em **Node.js App**
4. Clique em **Create Application**
5. Preencha:
   - **Application mode**: Production
   - **Application root**: `/` (raiz do projeto)
   - **Application URL**: seu-dominio.com
   - **Application startup file**: `dist/index.html` (após build)
   - **Node.js version**: 20.x ou superior

### 3️⃣ Conecte o Repositório

1. Em **Source Control**, clique em **Connect Repository**
2. Escolha **GitHub/GitLab/Bitbucket**
3. Autorize o acesso
4. Selecione o repositório `portaln4m`
5. Branch: `master` ou `main`

### 4️⃣ Configure Build Commands

No painel Node.js App, adicione:

**Build Command:**
```bash
npm install && npm run build
```

**Start Command:**
```bash
npm run preview
```

### 5️⃣ Variáveis de Ambiente (se necessário)

Se usar banco de dados ou APIs, adicione em **Environment Variables**:
```
NODE_ENV=production
BASE_PATH=/
```

### 6️⃣ Deploy

1. Clique em **Deploy**
2. Aguarde o build (2-5 minutos)
3. Acesse seu domínio!

---

## 📦 Método 2: Deploy via ZIP

### 1️⃣ Prepare o Arquivo ZIP

**IMPORTANTE:** Não inclua `node_modules` e `dist` no ZIP!

```bash
# No terminal, na raiz do projeto:
zip -r portaln4m.zip . -x "node_modules/*" "dist/*" ".git/*" "*.log"
```

Ou manualmente:
- Selecione TODOS os arquivos da raiz (package.json, vite.config.ts, index.html, src/, etc.)
- Comprima em ZIP
- **NÃO inclua** as pastas `node_modules` e `dist`

### 2️⃣ Upload no hPanel

1. Acesse **hPanel** → **File Manager**
2. Navegue até a pasta do seu domínio (ex: `public_html`)
3. Faça upload do `portaln4m.zip`
4. Extraia o arquivo

### 3️⃣ Configure Node.js App

1. Vá em **Node.js App** → **Create Application**
2. Preencha:
   - **Application root**: `/public_html` (ou onde extraiu)
   - **Application URL**: seu-dominio.com
   - **Node.js version**: 20.x

3. Em **Build Commands**:
```bash
npm install && npm run build
```

4. Em **Start Command**:
```bash
npm run preview
```

5. Clique em **Create**

---

## 🔍 Verificação Pós-Deploy

### ✅ Checklist

- [ ] Site carrega em `seu-dominio.com`
- [ ] Navegação entre páginas funciona
- [ ] Painel admin acessível em `/admin/login`
- [ ] Imagens e estilos carregam corretamente
- [ ] Console do navegador sem erros

### 🐛 Solução de Problemas

#### Erro: "Application failed to start"
```bash
# No terminal SSH da Hostinger:
cd /home/seu-usuario/public_html
npm install
npm run build
```

#### Erro 404 nas rotas
Adicione arquivo `.htaccess` na raiz:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Build muito lento
Aumente a memória Node.js no hPanel:
```bash
NODE_OPTIONS=--max-old-space-size=4096
```

---

## 🎯 Configurações Recomendadas

### Performance

No `vite.config.ts` (já configurado):
```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
})
```

### Cache

Adicione no `.htaccess`:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 📊 Monitoramento

### Logs de Erro

No hPanel → **Node.js App** → **Logs**

### Reiniciar Aplicação

```bash
# Via SSH:
pm2 restart all
```

Ou no hPanel: **Node.js App** → **Restart**

---

## 🔐 Segurança

### Variáveis Sensíveis

**NUNCA** commite no Git:
- Senhas de banco de dados
- API keys
- Tokens de autenticação

Use **Environment Variables** no hPanel!

### HTTPS

A Hostinger fornece SSL gratuito:
1. **hPanel** → **SSL**
2. Ative **Let's Encrypt**
3. Force HTTPS no `.htaccess`

---

## 📞 Suporte

- **Documentação Hostinger**: https://support.hostinger.com
- **Chat ao vivo**: Disponível 24/7 no hPanel
- **Comunidade**: https://community.hostinger.com

---

## ✨ Pronto!

Seu projeto está 100% preparado para deploy na Hostinger! 🎉

Qualquer dúvida, consulte este guia ou entre em contato com o suporte da Hostinger.
