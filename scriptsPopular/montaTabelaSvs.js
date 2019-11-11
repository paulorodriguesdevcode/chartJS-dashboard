var lista = [
    [01, '20/09/2019 13:27', 'Rio de Janeiro - Galeão', 'Belo Horizonte - Confins', '10/10/2019', '12/10/2019', 'Rogerio Silva', 'Aprovado', '-'],
    [02, '16/09/2019 13:17', 'São Paulo - Congonhas', 'Belo Horizonte - Confins', '20/10/2019', '11/10/2019', 'Antonia Silva', 'Emissão pendente', '-'],
    [03, '15/09/2019 13:27', 'São Paulo - Guarulhos', 'Rio de Janeiro - Galeão - Confins', '15/10/2019', '14/10/2019', 'José Augusto Nascimento', 'Aprovação pendente', '-'],
    [04, '20/09/2019 13:37', 'Rio de Janeiro - Galeão', 'Belo Horizonte - Confins', '10/10/2019', '12/10/2019', 'Rogerio Silva', 'Aprovado', '-'],
    [05, '16/09/2019 13:47', 'São Paulo - Congonhas', 'Belo Horizonte - Confins', '20/10/2019', '11/10/2019', 'Antonia Silva', 'Emissão pendente', '-'],
    [06, '15/09/2019 13:27', 'São Paulo - Guarulhos', 'Rio de Janeiro - Galeão - Confins', '15/10/2019', '14/10/2019', 'José Augusto Nascimento', 'Aprovação pendente', '-'],
    [07, '11/09/2019 13:10', 'Rio de Janeiro - Galeão', 'São Paulo - Viracopos', '09/10/2019', '14/10/2019', 'Lucas Roger', 'Aprovação pendente', '-'],
    [08, '20/09/2019 10:14', 'Rio de Janeiro - Galeão', 'Belo Horizonte - Confins', '10/10/2019', '12/10/2019', 'Rogerio Silva', 'Aprovado', '-'],
    [09, '16/09/2019 13:17', 'São Paulo - Congonhas', 'Belo Horizonte - Confins', '20/10/2019', '11/10/2019', 'Antonia Silva', 'Emissão pendente', '-'],
    [10, '15/09/2019 13:10', 'São Paulo - Guarulhos', 'Rio de Janeiro - Galeão - Confins', '15/10/2019', '14/10/2019', 'José Augusto Nascimento', 'Aprovação pendente', '-'],
    [11, '16/09/2019 13:11', 'Rio de Janeiro - Galeão', 'Belo Horizonte - Confins', '20/10/2019', '11/10/2019', 'Antonia Silva', 'Emissão pendente', '-'],
    [12, '12/09/2019 12:17', 'São Paulo - Guarulhos', 'Rio de Janeiro - Galeão - Confins', '15/10/2019', '14/10/2019', 'José Augusto Nascimento', 'Aprovação pendente', '-'],
    [13, '05/09/2019 13:17', 'São Paulo - Guarulhos', 'Rio de Janeiro - Galeão - Confins', '15/10/2019', '14/10/2019', 'José Augusto Nascimento', 'Aprovação pendente', '-'],
    [14, '16/09/2019 13:17', 'São Paulo - Congonhas', 'Belo Horizonte - Confins', '20/10/2019', '11/10/2019', 'Antonia Silva', 'Emissão pendente', '-'],
    [15, '15/09/2019 13:27', 'São Paulo - Guarulhos', 'Rio de Janeiro - Galeão - Confins', '15/10/2019', '14/10/2019', 'José Augusto Nascimento', 'Aprovação pendente', '-']
];

var tabela = document.querySelector('#tbody');
var totalPendenteAprovar = 0;
var texto = '<tr>';
for (var item in lista) {

    for (var inf in lista[item]) {
        texto += '<td>'
        texto += lista[item][inf];
        if (lista[item][inf] == 'Aprovação pendente') {
            totalPendenteAprovar += 1
        }


        texto += '</td>'
    }
    texto += '</tr>'
}

if (tabela != null) {
    tabela.innerHTML = texto
}

//se pTotalPendentesApv for nulo é porque estamos fora da pagina index
pTotalPendentesApv = document.querySelector('#totalPendenteAprovacao');
if (pTotalPendentesApv != null) {
    document.querySelector('#totalPendenteAprovacao').innerText = totalPendenteAprovar
}