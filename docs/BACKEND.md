Crie o backend em FastAPI com as seguintes rotas:

- `GET /races`: lista todas as corridas com filtros por estado, cidade, tipo e data
- `POST /races`: cadastra nova corrida (restrito a admin)
- `GET /races/{id}`: detalhes de uma corrida
- `GET /dashboard/stats`: retorna estatísticas (nº de corridas, usuários, favoritos)
- `POST /favorites`: adiciona corrida aos favoritos de um usuário
- `GET /favorites`: retorna corridas favoritedas pelo usuário logado

Use SQLAlchemy para os models (Race, User, Favorite) e PostgreSQL como banco.
Configure autenticação via OAuth2 (Google).
Inclua migrações com Alembic e `.env` para variáveis sensíveis.
