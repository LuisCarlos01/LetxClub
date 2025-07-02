module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Novas funcionalidades
        'fix',      // Correções de bugs
        'docs',     // Documentação
        'style',    // Formatação, ponto e vírgula faltando, etc
        'refactor', // Refatoração de código
        'test',     // Adição ou modificação de testes
        'chore',    // Atualizações de tarefas de build, configs, etc
        'perf',     // Melhorias de performance
        'ci',       // Configuração de CI
        'build',    // Alterações no sistema de build
        'revert'    // Reverter commits
      ]
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72]
  }
}; 