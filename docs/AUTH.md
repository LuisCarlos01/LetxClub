Implemente autenticação Google OAuth2 no backend FastAPI com o fluxo:

- Login inicia no frontend com botão "Entrar com Google"
- Backend redireciona para o Google com escopo `email`, `profile`
- Google retorna token → backend cria usuário (se não existir) e retorna JWT
- Proteger rotas usando `Depends(get_current_user)`

Inclua configuração de `credentials.json`, URI de redirecionamento local (`localhost:3000`) e produção.
