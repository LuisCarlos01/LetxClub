# Configuração do Supabase - LetxClub Admin

## 🎯 Objetivo

Este documento descreve os passos necessários para conectar o sistema admin do LetxClub com o Supabase para persistência de dados.

## 📋 Pré-requisitos

- Projeto Supabase configurado
- Chaves de API do Supabase
- Permissões de administrador no projeto

## 🔧 Configuração

### 1. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_SUPABASE_SERVICE_KEY=your-service-key-here
```

### 2. Criar Tabela de Eventos

Execute o seguinte SQL no editor SQL do Supabase:

```sql
-- Create events table following admin.md specification
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  city TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  event_type TEXT NOT NULL,
  sponsored BOOLEAN DEFAULT FALSE,
  created_by TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Admin can manage events" ON events
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_events_date ON events(date);
CREATE INDEX idx_events_city ON events(city);
CREATE INDEX idx_events_event_type ON events(event_type);
```

### 3. Instalar Dependências

```bash
npm install @supabase/supabase-js
```

### 4. Configurar Cliente Supabase

Crie o arquivo `src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 5. Atualizar eventsService.ts

Substitua o mock no `eventsService.ts` pelas chamadas reais do Supabase.

## 🔐 Autenticação

O sistema atual usa mock authentication. Para integrar com Supabase Auth:

1. Configurar provedores de autenticação no Supabase
2. Atualizar `AuthContext.tsx` para usar `supabase.auth`
3. Implementar redirecionamentos e callbacks

## 📊 Status Atual

- ✅ Interface do Admin Dashboard implementada
- ✅ CRUD completo com mock data
- ✅ Sistema de toast notifications
- ✅ Componentes de criação e edição de eventos
- ✅ Validação de formulários
- ✅ Internacionalização (pt-BR/en)
- ⏳ Integração com Supabase (pendente)
- ⏳ Autenticação real (pendente)
- ⏳ Upload de imagens (pendente)

## 🚀 Próximos Passos

1. Configurar projeto Supabase
2. Aplicar as migrações SQL
3. Configurar as variáveis de ambiente
4. Substituir mock services por implementações reais
5. Implementar autenticação com Google OAuth
6. Adicionar upload de imagens com Storage
7. Implementar real-time updates
