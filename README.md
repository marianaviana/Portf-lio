# Portfólio Profissional — Mariana Viana | Cloud & Platform Engineer

> **Cloud, DevOps, Platform Engineering (IDP) & Observability Portfolio**  
> Desenvolvido com **React, TypeScript, Tailwind CSS e Vite**.

Este repositório contém o código-fonte completo do portfólio profissional de **Mariana Viana**, estruturado para apresentar de forma estratégica suas experiências com **Microsoft Azure, Infraestrutura como Código (Terraform & Ansible), CI/CD (GitHub Actions), Docker, Kubernetes, Platform Engineering (IDP) e Observabilidade** em ambientes corporativos de grande escala (Banco do Brasil via Getronics).

---

## 🌟 Funcionalidades e Diferenciais Técnicos

- **Bilingue (PT-BR / EN-US)**: Seletor de idiomas em tempo real, com tradução técnica profissional para recrutadores do Brasil e internacionais.
- **Simulador Interativo de Telemetria e Pipeline**: Demonstração visual do ciclo de vida de IDP (Commit -> CI Lint & Scan -> IaC Terraform -> Deploy em Cluster -> Observabilidade Grafana/Prometheus).
- **Projetos com Diagramas de Arquitetura**: Detalhamento arquitetural, decisões técnicas, problemas resolvidos e segregação clara entre experiências de produção corporativa, laboratórios práticos e projetos futuros em roadmap.
- **Currículo para Visualização e Impressão (PDF)**: Modal com visualização completa do CV e botão de impressão estilizado em alta resolução (`window.print()` otimizado para PDF).
- **Gerador de Pacote ZIP no Navegador**: O visitante ou recrutador pode baixar o projeto compactado completo diretamente pelo botão "Exportar Projeto (ZIP)".
- **SEO & Metadados Avançados**: Configurado com OpenGraph, Twitter Cards e Schema.org JSON-LD estruturado para perfil profissional.
- **Design Minimalista & Responsivo**: Estética moderna em tons escuros com toques de ciano e esmeralda inspirados em terminais e infraestrutura cloud.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior recomendada)
- Gerenciador de pacotes: `npm`, `yarn` ou `pnpm`

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/marianaviana/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   Abra `http://localhost:3000` ou a URL informada no terminal.

---

## 📦 Como Gerar a Versão de Produção (Build)

Para validar a integridade do código e compilar a versão estática otimizada para publicação:

```bash
npm run build
```

Os arquivos prontos para deploy serão gerados na pasta `/dist`. Para testar localmente a versão compilada:

```bash
npm run preview
```

---

## 🌐 Como Publicar na Web (Deploy Passo a Passo)

O projeto foi construído como uma SPA estática otimizada, permitindo publicação gratuita e com deploy contínuo em poucos cliques:

### Opção 1: Vercel (Recomendado)
1. Crie uma conta em [vercel.com](https://vercel.com) e conecte com seu GitHub.
2. Clique em **"Add New Project"** e selecione o repositório do portfólio.
3. A Vercel detectará automaticamente o framework Vite:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Clique em **"Deploy"**. Seu site estará no ar em segundos com HTTPS automático.

### Opção 2: Netlify
1. Acesse [netlify.com](https://www.netlify.com/) e conecte seu GitHub.
2. Selecione **"Import an existing project"** -> selecione o repositório.
3. Preencha as configurações:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Clique em **"Deploy site"**.

### Opção 3: GitHub Pages
1. No repositório do GitHub, vá em **Settings** > **Pages**.
2. Em **Build and deployment > Source**, selecione **GitHub Actions**.
3. Escolha o template oficial do Vite/Static HTML para deploy automático a cada push na branch `main`.

---

## ⚙️ Configuração de Conteúdo e Links

Todas as informações pessoais, projetos e textos estão centralizados no arquivo:
```
/src/data/portfolioData.ts
```

Para atualizar seus links de redes sociais ou telefone:
1. Abra `src/data/portfolioData.ts`.
2. Atualize os campos `github`, `linkedin`, `email`, `phone` e `location`.
3. Os textos estão organizados nos objetos bilíngues `{ pt: "...", en: "..." }`.

---

## 📁 Estrutura de Pastas

```
├── .env.example              # Exemplo de variáveis de ambiente
├── .gitignore                # Arquivos ignorados pelo Git
├── index.html                # Ponto de entrada HTML com SEO e OpenGraph
├── metadata.json             # Metadados do projeto
├── package.json              # Dependências e scripts npm
├── README.md                 # Documentação completa de execução e deploy
├── tsconfig.json             # Configurações do compilador TypeScript
├── vite.config.ts            # Configuração do Vite e Tailwind CSS
└── src/
    ├── main.tsx              # Ponto de entrada React
    ├── App.tsx               # Componente principal do portfólio
    ├── index.css             # Estilos globais e utilitários de impressão
    ├── data/
    │   └── portfolioData.ts  # Dados estruturados (bilíngues PT/EN)
    ├── utils/
    │   └── zipGenerator.ts   # Utilitário de empacotamento ZIP
    └── components/
        ├── Navbar.tsx        # Barra de navegação e seletor de idioma
        ├── Hero.tsx          # Apresentação e simulador de telemetria IDP
        ├── About.tsx         # Trajetória profissional e destaques
        ├── Skills.tsx        # Competências técnicas categorizadas
        ├── Projects.tsx      # Projetos detalhados e diagramas
        ├── Experience.tsx    # Linha do tempo de experiências no BB e Getronics
        ├── Education.tsx     # Pós-graduação, graduação e certificações
        ├── Contact.tsx       # Canais de contato com cópia rápida
        ├── ResumeModal.tsx   # Visualização e impressão do currículo
        ├── ExportModal.tsx   # Modal de download do projeto e instruções
        └── Footer.tsx        # Rodapé e status operacional
```

---

## 📄 Licença

Distribuído sob licença MIT. Sinta-se livre para utilizar como referência ou clonar para seu próprio uso profissional.
