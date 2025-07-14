# 📄 Documentação — Integração da Seção Administrador — LetxClub

## 1️⃣ Descrição Geral
Nova seção "Administrador" no LetxClub, com fluxo de autenticação e painel dedicado para gerenciamento de corridas e patrocínios.

---

## 2️⃣ Fluxo de acesso
- **Login/Registro:**
  - Autenticação via OAuth 2.0 (Google)
  - Registro automático caso o administrador acesse pela primeira vez
  - Persistência da sessão segura

- **Acesso:**
  - Após autenticação bem-sucedida, redirecionamento automático para o **Painel Administrador**

---

## 3️⃣ Funcionalidades da Seção Administrador

### 🔹 Gerenciamento de Corridas
- **Tela "Minhas Corridas":** listagem de eventos cadastrados pelo administrador
- **Ação "Nova Corrida":** formulário com os seguintes campos:
  - Nome do evento
  - Descrição
  - Cidade
  - Data e horário
  - Imagem (upload)
  - Tipo de evento (Street, Trail, Kids)
  - Outras características

- **Validações obrigatórias:**
  - Todos os campos obrigatórios
  - Validação de formato de data/hora
  - Upload de imagem obrigatoriamente válida

- **Armazenamento:**
  - Dados persistidos no backend (FastAPI)
  - Imagem armazenada em storage integrado (ex: Supabase Storage)

- **Integração direta com "Calendário":**
  - Eventos criados no Painel Administrador aparecem automaticamente na seção "Calendário" do LetxClub, após persistência bem-sucedida.

### 🔹 Destaque / Patrocínio de Corrida
- **Opção "Tornar Corrida Patrocinada":**
  - Disponível no painel de edição de evento
  - Pagamento necessário para ativação

- **Mecanismo de pagamento:**
  - Integração futura com gateway de pagamento
  - Valor da assinatura a definir

- **Benefício:**
  - Corrida patrocinada exibida em destaque no carrossel "Corridas em Destaque" da Home e priorizada no Calendário

---

## 4️⃣ Regras de Negócio
- Apenas usuários autenticados (OAuth 2.0) têm acesso ao Painel Administrador
- Cada administrador gerencia **apenas as corridas que cadastrou**
- Corridas patrocinadas têm status diferenciado e aparecem em seções destacadas
- Eventos cadastrados devem respeitar as mesmas validações de exibição do frontend público (imagem válida, campos obrigatórios, etc)

---

## 5️⃣ Requisitos técnicos
- **Frontend:**
  - Nova rota protegida `/admin`
  - Proteção de rota (auth guard)
  - Formulário de criação e edição com validação client-side (React Hook Form ou similar)
  - Upload de imagem com preview

- **Backend:**
  - Endpoints REST/GraphQL:
    - `POST /admin/events`: criar evento
    - `GET /admin/events`: listar eventos do administrador
    - `PATCH /admin/events/{id}`: atualizar evento
    - `DELETE /admin/events/{id}`: remover evento
  - Proteção OAuth 2.0 obrigatória para todos os endpoints admin
  - Persistência em PostgreSQL
  - Flag "sponsored" no modelo `Event`

- **Banco de dados:**
  ```sql
  ALTER TABLE events ADD COLUMN sponsored BOOLEAN DEFAULT FALSE;
  ALTER TABLE events ADD COLUMN created_by TEXT;
  ```

- **Relacionamento:**
  - `created_by`: campo para armazenar identificador único do administrador (sub do OAuth)

- **Integração futura:** gateway de pagamento para assinatura de destaque

---

## 6️⃣ UX/UI Considerações
- Interface amigável e responsiva
- Feedback visual após cada operação (sucesso, erro)
- Upload de imagem com pré-visualização
- Marcação visual clara de "Corrida Patrocinada"

---

## 7️⃣ Dependências
- OAuth 2.0 (Google)
- FastAPI Auth Middleware
- Supabase Storage (opcional)
- Zustand para gerenciamento de estado frontend
- TailwindCSS para layout e estilos

---

## 8️⃣ Próximos passos
- Implementar roteamento protegido
- Desenvolver API backend para CRUD de eventos com autenticação
- Criar UI/UX da área administrativa
- Planejar integração do sistema de pagamento (corridas patrocinadas)

---

Pronto para ser integrado e desenvolvido na IDE Cursor 🚀
