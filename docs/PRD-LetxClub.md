# 📄 PRD — LetxClub

## 1️⃣ Visão geral
O **LetxClub** é uma plataforma digital mobile-first, multilíngue e acessível, projetada para corredores e entusiastas do running. Seu objetivo é consolidar informações sobre eventos, provas, conteúdos e dicas relevantes, proporcionando uma experiência moderna, personalizada e altamente interativa para a comunidade running.

## 2️⃣ Objetivos
- Centralizar informações sobre corridas e eventos esportivos em um único ambiente digital.
- Oferecer busca avançada e filtros inteligentes para facilitar a descoberta de eventos.
- Compartilhar conteúdos multimídia (vídeos, dicas, notícias) para informar e engajar.
- Conectar corredores, organizadores e parceiros.
- Prover interface multilíngue (PT-BR, ENG, ESP), responsiva e com suporte a tema escuro/claro.
- Planejar espaço para login e gestão de eventos por produtores.

## 3️⃣ Público-alvo
- Corredores amadores e profissionais.
- Entusiastas de esportes e estilo de vida saudável.
- Organizadores e produtores de eventos esportivos.
- Marcas e parceiros do segmento running.

## 4️⃣ Funcionalidades principais
### 🔹 Home
- Header com logo, alternância de idioma, links principais, botão modo escuro/claro.
- Carrossel de imagens e corridas em destaque.
- Blocos interativos: newsletter, dicas, vídeos do YouTube.
- Footer com logo e link Instagram.

### 🔹 Calendário
- Barra de filtros (busca, cidade, tipo de evento).
- Lista de eventos em cards com informações resumidas.

### 🔹 Conteúdos
- Página reservada para posts e artigos futuros.

### 🔹 Login Produtor
- Área reservada para organizadores cadastrarem e gerenciarem seus próprios eventos (em roadmap).

## 5️⃣ Critérios de aceitação
- Interface responsiva e funcional em dispositivos mobile.
- Suporte completo a três idiomas: PT-BR, EN, ES.
- Tema escuro habilitado por padrão, com alternância para modo claro.
- Filtros funcionando com persistência durante a sessão.
- Validação obrigatória para campos de eventos (título, subtítulo, data, localização, imagem).
- Validação de formato de e-mail antes do registro na newsletter.
- URLs de imagens com fallback caso inválidas.
- Conformidade com padrões de acessibilidade WCAG.

## 6️⃣ Fluxos principais do usuário
- **Descoberta:** Usuário acessa Home, visualiza banners e carrosséis, explora conteúdo e dicas.
- **Busca:** Usuário navega até Calendário, aplica filtros e consulta detalhes dos eventos.
- **Engajamento:** Usuário assina a newsletter com e-mail validado.
- **Futuro:** Organizadores acessam área de login para gerenciamento de eventos.

## 7️⃣ Requisitos técnicos
- **Frontend:** React + Vite + TailwindCSS (dark mode enabled)
- **Backend:** FastAPI (Python)
- **Banco de Dados:** PostgreSQL + SQLAlchemy + Alembic
- **Estado global:** Zustand
- **Autenticação:** OAuth2 via Google
- **Animações:** Framer Motion
- **Validação:**
  - E-mail antes de registro
  - Campos obrigatórios em eventos
  - URLs com fallback
- **Acessibilidade:** WCAG
- **Integrações futuras:** YouTube API, Instagram API, Supabase, TaskMaster AI.

## 8️⃣ Restrições ou limitações conhecidas
- Página **Conteúdos** ainda será planejada em etapas futuras.
- **Área de login para produtores** prevista mas não implementada no MVP inicial.
- Dependência de integrações externas (YouTube, Instagram) em fases posteriores.

## 9️⃣ Roadmap sugerido
✅ **Fase 1: MVP (Prioridade Alta)**
- Home e Calendário totalmente funcionais.
- Newsletter com validação de e-mail.
- Multilíngue e dark mode habilitado.
- Design responsivo mobile-first.
- Filtros inteligentes no calendário.

🔜 **Fase 2: Melhorias UX/UI e Conteúdos**
- Página de conteúdos habilitada.
- Integração YouTube e Instagram.

🔒 **Fase 3: Login Produtor e CMS de Eventos**
- Sistema de autenticação OAuth2 Google.
- Dashboard para produtores gerenciarem eventos.
