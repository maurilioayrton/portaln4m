# 🔧 Guia de Solução de Problemas - Hostinger

## ❌ Problema: Rotas dão 404 ao acessar diretamente

### **Sintomas:**
- `https://n4m.com.br/` funciona
- `https://n4m.com.br/admin/login` dá erro 404
- Navegação por cliques funciona, mas F5 quebra

### **Causa:**
O servidor não está redirecionando todas as rotas para `index.html`

### **Solução:**

#### **1️⃣ Verifique se o .htaccess está em dist/**

No File Manager da Hostinger:
```
domains/n4m.com.br/
└── dist/
    ├── index.html
    ├── .htaccess     ← DEVE ESTAR AQUI
    └── assets/
```

#### **2️⃣ Se não estiver, copie manualmente:**

**Via File Manager:**
1. Vá até a raiz do projeto (onde está `package.json`)
2. Localize o arquivo `.htaccess`
3. Copie e cole dentro da pasta `dist/`

**Via SSH:**
```bash
cd ~/domains/n4m.com.br
cp .htaccess dist/.htaccess
```

#### **3️⃣ Verifique as permissões:**
```bash
chmod 644 dist/.htaccess
```

#### **4️⃣ Reinicie a aplicação:**
No hPanel → Node.js App → Restart Application

---

## ❌ Problema: Página em branco após deploy

### **Sintomas:**
- Site carrega mas mostra tela branca
- Console do navegador mostra erros 404 para arquivos JS/CSS

### **Causa:**
Caminhos dos assets incorretos

### **Solução:**

#### **1️⃣ Verifique o vite.config.ts:**
```typescript
export default defineConfig({
  base: '/', // DEVE SER /
  // ...
})
```

#### **2️⃣ Reconstrua o projeto:**
```bash
npm run build
```

#### **3️⃣ Verifique o index.html gerado:**
```bash
cat dist/index.html
```

Os scripts devem começar com `/assets/`:
```html
<script type="module" src="/assets/index-abc123.js"></script>
```

---

## ❌ Problema: Build falha na Hostinger

### **Sintomas:**
- Deploy não completa
- Logs mostram erro de dependências

### **Causa:**
Dependências não instaladas ou versão do Node incorreta

### **Solução:**

#### **1️⃣ Verifique a versão do Node:**
No hPanel → Node.js App → Node.js Version: **20.x ou superior**

#### **2️⃣ Limpe o cache e reinstale:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### **3️⃣ Verifique o Build Command no hPanel:**
```bash
npm install && npm run build
```

---

## ❌ Problema: Aplicação não inicia

### **Sintomas:**
- Build completa mas aplicação não fica online
- Status mostra "Stopped"

### **Causa:**
Comando de start incorreto ou porta errada

### **Solução:**

#### **1️⃣ Verifique o Start Command no hPanel:**
```bash
npm run preview -- --host 0.0.0.0 --port 3000
```

#### **2️⃣ Se a porta 3000 estiver ocupada, use variável:**
```bash
npm run preview -- --host 0.0.0.0 --port $PORT
```

#### **3️⃣ Verifique os logs:**
No hPanel → Node.js App → Logs

---

## ✅ Checklist de Deploy Completo

Antes de considerar o deploy finalizado, teste:

### **1. Teste de Rotas:**
- [ ] `https://n4m.com.br/` carrega
- [ ] `https://n4m.com.br/admin/login` carrega (acesso direto)
- [ ] `https://n4m.com.br/admin/dashboard` carrega (acesso direto)

### **2. Teste de Navegação:**
- [ ] Clicar nos links funciona
- [ ] Botão "voltar" do navegador funciona
- [ ] F5 em qualquer página não dá 404

### **3. Teste de Login:**
- [ ] Consegue fazer login em `/admin/login`
- [ ] Redireciona para `/admin/dashboard` após login
- [ ] Logout funciona e volta para home

### **4. Teste de Performance:**
- [ ] Imagens carregam rápido
- [ ] CSS e JS estão minificados
- [ ] HTTPS está ativo (cadeado verde)

### **5. Teste de Segurança:**
- [ ] Não consegue acessar `/admin/dashboard` sem login
- [ ] Headers de segurança estão ativos (use securityheaders.com)

---

## 🔍 Como Debugar Problemas

### **1. Console do Navegador (F12):**
```javascript
// Verifique erros de carregamento
console.log('Erros:', window.errors);

// Verifique a rota atual
console.log('Rota:', window.location.pathname);
```

### **2. Network Tab:**
- Verifique se arquivos JS/CSS estão carregando (status 200)
- Verifique se há redirecionamentos (status 301/302)
- Verifique se há erros 404

### **3. Logs da Hostinger:**
```bash
# Via SSH
tail -f ~/logs/node_app.log
```

### **4. Teste o .htaccess:**
```bash
# Verifique se está sendo lido
curl -I https://n4m.com.br/admin/login
```

Deve retornar status 200, não 404.

---

## 📞 Suporte

Se nenhuma solução acima resolver:

1. **Tire prints:**
   - Erro no navegador (F12 → Console)
   - Configuração no hPanel
   - Estrutura de pastas no File Manager

2. **Colete informações:**
   - URL completa do erro
   - Logs da aplicação
   - Resultado de `npm run build` local

3. **Entre em contato:**
   - Suporte Hostinger: https://www.hostinger.com.br/contato
   - Ou me envie as informações acima para eu ajudar!

---

## 🎯 Configuração Ideal no hPanel

| Campo | Valor |
|-------|-------|
| **Application Name** | `n4m-portal` |
| **Application Root** | `/` |
| **Node.js Version** | `20.x` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run preview -- --host 0.0.0.0 --port 3000` |
| **Application Mode** | Production |
| **Environment Variables** | `NODE_ENV=production` |

---

## 🚀 Comandos Úteis

### **Rebuild completo:**
```bash
rm -rf node_modules dist package-lock.json
npm install
npm run build
npm run preview
```

### **Teste local antes de deploy:**
```bash
npm run build
npm run preview
# Acesse: http://localhost:3000
```

### **Verificar estrutura do build:**
```bash
ls -la dist/
# Deve mostrar: index.html, .htaccess, assets/
```

### **Copiar .htaccess para dist:**
```bash
cp .htaccess dist/.htaccess
cp public/_redirects dist/_redirects
```

---

**Última atualização:** 25/12/2024  
**Domínio:** https://n4m.com.br/  
**Versão:** 11
