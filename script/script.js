let proximoID = 1;
let tarefas = [];

function adicionarTarefa() {
    const entradaTarefa = document.getElementById('tarefa').value.trim();
    const entradaDescricao = document.getElementById('descricao').value.trim();

    if (entradaTarefa === '' || entradaDescricao === '') {
        window.alert('Por favor, preencha o campo de tarefa antes de continuar.');
        return;
    }

    const novaTarefa = criarTarefa(entradaTarefa, entradaDescricao);
    tarefas.push(novaTarefa);
    renderizarTarefa(novaTarefa);
}

function criarTarefa(tarefa, descricao) {
    return {
        id: proximoID++,
        tarefa: tarefa,
        descricao: descricao,
        concluido: false
    };
}

function renderizarTarefa(tarefa) {
    let tabela = document.getElementById('tabela');
    let novaLinha = tabela.insertRow();

    let cell1 = novaLinha.insertCell(0);
    let cell2 = novaLinha.insertCell(1);
    let cell3 = novaLinha.insertCell(2);
    let cell4 = novaLinha.insertCell(3);
    let cell5 = novaLinha.insertCell(4);

    cell1.textContent = tarefa.id;
    cell2.textContent = tarefa.tarefa;
    cell3.textContent = tarefa.descricao;
    cell4.textContent = tarefa.concluido ? 'Sim' : 'Não';

    let botaoAlterar = document.createElement('button');
    botaoAlterar.textContent = 'Alterar Status';
    botaoAlterar.onclick = () => {
        tarefa.concluido = !tarefa.concluido;
        cell4.textContent = tarefa.concluido ? 'Sim' : 'Não';
    };
    cell5.appendChild(botaoAlterar);

    let botaoDeletar = document.createElement('button');
    botaoDeletar.textContent = 'Deletar tarefa';
    botaoDeletar.onclick = () => {
        let index = tarefas.findIndex(t => t.id === tarefa.id);
        if (index !== -1) {
            tarefas.splice(index, 1);
            tabela.deleteRow(novaLinha.rowIndex);
        }
    };
    cell5.appendChild(botaoDeletar);
}