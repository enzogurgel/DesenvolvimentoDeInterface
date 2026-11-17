# Registro de testes — Aula 3

| Caso | Dados de entrada | Esperado | Obtido | Status |
|---|---|---|---|---|
| 1 | Nome vazio ou uma nota vazia (ex.: nome vazio; 8, 7, 9) | Preencha todos os campos. | | |
| 2 | Nota não numérica (quando possível inserir) | Use notas entre 0 e 10. | | |
| 3 | Nota -1 ou 11 (ex.: -1, 7, 9 e 11, 7, 9) | Use notas entre 0 e 10. | | |
| 4 | 5, 5, 5 | Média 5.0; Recuperação | | |
| 5 | 7, 7, 7 | Média 7.0; Aprovado | | |
| 6 | 4, 4, 4 | Média 4.0; Reprovado | | |
