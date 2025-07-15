# 📄 Briefing do Projeto — LetxClub

## 1️⃣ Nome do projeto

**LetxClub**

## 2️⃣ Descrição resumida

Plataforma digital para corredores e entusiastas do running, oferecendo informações sobre provas, calendário de eventos, dicas, conteúdos multimídia e recomendações personalizadas, com suporte multilíngue, tema escuro e layout mobile-first.

## 3️⃣ Problema ou necessidade que o projeto resolve

Facilitar o acesso a informações atualizadas e centralizadas sobre corridas e eventos, promovendo maior engajamento da comunidade running, com experiência visual moderna e personalizável.

## 4️⃣ Objetivos principais

- Consolidar informações sobre corridas e eventos esportivos em um único ambiente digital
- Permitir pesquisa avançada e filtros inteligentes
- Compartilhar dicas, vídeos e conteúdos relevantes
- Conectar a comunidade de corredores
- Prover interface multilíngue e modo escuro/claro para melhor experiência do usuário
- Prever espaço futuro para produtores gerenciarem seus próprios eventos

## 5️⃣ Público-alvo

Corredores amadores e profissionais, entusiastas de esportes e vida saudável, organizadores de corridas, parceiros e marcas do segmento running.

## 6️⃣ Diferenciais ou características exclusivas

- Multilíngue (PT-BR, ENG, ESP)
- Tema escuro por padrão e alternância de tema
- Layout responsivo e mobile-first
- Carrosséis interativos e componentes reutilizáveis
- Conformidade com padrões de acessibilidade (WCAG)
- Captura e validação de e-mails para newsletter
- Área planejada para login e gerenciamento de eventos por produtores
- Identidade visual vibrante com destaque em cores contrastantes e modernas

## 7️⃣ Principais funcionalidades esperadas

### 🔹 Home

- Header com logo LetxClub, opções de idioma, links (Home, Calendário, Conteúdos), botão modo escuro
- Carrossel de imagens promocionais
- Carrossel de cards com corridas disponíveis
- Newsletter: campo para e-mail, botão "Assinar", ícone Instagram
- Container “Encontre seu look ACE” com botão “Confira”
- Carrossel com dicas sobre tênis de corrida
- Container interativo de imagem de corredor com link para dicas
- Carrossel de vídeos do YouTube sobre corrida
- Footer: logo LetxClub + link Instagram Lext.Run

### 🔹 Calendário

- Header idêntico ao da Home
- Barra de filtros: busca textual, cidade, tipo de evento + botão "Pesquisar"
- Exibição de cards com nome, data e imagem do evento
- Footer com logo e Instagram

### 🔹 Conteúdos

- Página planejada para futura implementação

### 🔹 Login Produtor

- Recurso futuro para organizadores criarem/gerenciarem eventos

## 8️⃣ Restrições ou dependências técnicas

- **Frontend:** React, Vite, TailwindCSS (dark mode por padrão)
- **Backend:** FastAPI, Python
- **Banco de Dados:** PostgreSQL + SQLAlchemy + Alembic
- **Gerenciamento de estado:** Zustand
- **Autenticação:** OAuth2 via Google
- **Design responsivo:** mobile-first
- **Acessibilidade:** conformidade com WCAG
- **Validações obrigatórias:**
  - Eventos exigem título, subtítulo, data, localização, imagem
  - Filtros aplicados automaticamente
  - Validação de e-mail antes de registro
  - URLs de imagens com fallback se inválidas
- **Integrações futuras:** YouTube, Instagram, Supabase, TaskMaster AI para gerenciamento de tarefas

## 9️⃣ Equipe envolvida

Responsável: **Luis Carlos V. Neto**

## 🔟 Deadline ou cronograma geral

**Não informado**

## 🎨 Identidade visual

- **Logo:** LetxClub (imagem fornecida)
- **Paleta de cores:**
  - Verde escuro: `#2D4342`
  - Verde claro: `#A0D8CF`
  - Azul: `#009BDB`
  - Azul escuro: `#2434BA`
  - Verde neon: `#CFF350`
  - Laranja: `#F35C03`
  - Off-white: `#F8FAEF`
  - Preto: `#000000`
- Estilo: moderno, vibrante, com contraste alto para excelente legibilidade e aderência à estética esportiva

## ✅ Resumo de principais regras de negócio

- Eventos categorizados (Street Running, Trail Running, Kids)
- Sistema de busca e filtros inteligentes (cidade, tipo, termo)
- Persistência de filtros durante sessão
- Newsletter validando formato do e-mail
- UI multilíngue e tema escuro/claro
- Layout responsivo com animações suaves (Framer Motion)
- Área futura para produtores

---

_Pronto para ser usado como base para PRD ou documentação oficial._
