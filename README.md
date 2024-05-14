## Descrição do Projeto: Lista de Tarefas (To-Do List) em JavaScript

Este projeto consiste em uma aplicação web para gerenciar uma lista de tarefas (to-do list) utilizando JavaScript para a lógica de interação, HTML para a estrutura da página e CSS para o estilo visual.

### Funcionalidades Principais:

1. **Adicionar Tarefa:**
   - Permite ao usuário adicionar uma nova tarefa à lista, especificando o nome da tarefa e uma descrição.
   - Valida se os campos estão preenchidos antes de adicionar a tarefa à lista.

2. **Renderizar Tarefa na Tabela:**
   - Após adicionar uma nova tarefa, a mesma é renderizada dinamicamente em uma tabela na página HTML.
   - Cada tarefa é exibida em uma linha da tabela com informações como ID, nome, descrição e status de conclusão.

3. **Alterar Status da Tarefa:**
   - Permite ao usuário alterar o status de uma tarefa entre concluída e não concluída clicando no botão "Alterar Status".
   - O status da tarefa é atualizado dinamicamente na tabela.

4. **Deletar Tarefa:**
   - Oferece a funcionalidade de deletar uma tarefa da lista clicando no botão "Deletar Tarefa".
   - Remove a tarefa da lista e atualiza a exibição na tabela.

### Funcionamento Interno:

- **Estrutura de Dados:**
  - Utiliza um array `tarefas` para armazenar as tarefas adicionadas pelo usuário.
  - Cada tarefa é representada por um objeto com propriedades como `id`, `tarefa`, `descricao` e `concluido`.

- **Função `adicionarTarefa()`:**
  - Captura os valores dos campos de entrada (`tarefa` e `descricao`).
  - Cria uma nova tarefa utilizando a função `criarTarefa()` e a adiciona ao array `tarefas`.
  - Chama a função `renderizarTarefa()` para exibir a nova tarefa na tabela.

- **Função `criarTarefa(tarefa, descricao)`:**
  - Retorna um objeto representando uma nova tarefa com propriedades iniciais.

- **Função `renderizarTarefa(tarefa)`:**
  - Cria uma nova linha na tabela HTML para exibir os detalhes da tarefa.
  - Adiciona botões dinâmicos para alterar o status e deletar a tarefa.

### Tecnologias Utilizadas:

- Linguagens:
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

- Frameworks/Bibliotecas: Nenhuma (implementação pura em JavaScript)

- IDE/Editor: ![Vscode](https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### Instruções de Uso:

1. Clone o repositório para o seu ambiente local.
2. Abra o arquivo `index.html` em um navegador web.
3. Preencha os campos de "Tarefa" e "Descrição" e clique no botão "Adicionar Tarefa".
4. Utilize os botões na tabela para alterar o status das tarefas ou deletar tarefas existentes.

Este projeto foi desenvolvido como uma aplicação simples para demonstrar conceitos de manipulação do DOM (Document Object Model) em JavaScript e interação com o usuário para gerenciar uma lista de tarefas em um ambiente web.
