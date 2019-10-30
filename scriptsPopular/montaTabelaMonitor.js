

var lista = [
    ['Azul', 'POKRTE', 'Expresso', 'Rodrigo', '10/10/2019', '-', '0', 'Sim', 'Sim', 250.98],
    ['Gol', 'POKRTE', 'ViajeBem', 'Rodrigo', '20/10/2019', '-', '1', 'Sim', 'Sim', 220.98],
    ['Azul', 'ASDCVB', 'Expresso', 'Augusto', '15/10/2019', '-', '1', 'Sim', 'Sim', 150.00],
    ['Gol', 'POIYRS', 'Expresso', 'Rodrigo', '10/10/2019', '-', '0', '1', 'Sim', 450.50],
    ['Tam', 'POIYRS', 'ViajeBem', 'Rodrigo', '20/10/2019', '-', '1', 'Sim', 'Sim', 550.25],
    ['Tam', 'POIYRS', 'ViajeBem', 'Augusto', '15/10/2019', '-', '1', 'Sim', 'Sim', 230.10],
    ['Gol', 'POIUYT', 'AirTravel', 'Paulo', '10/01/2019', '-', '0', 'Sim', 'Sim', 210.25],
    ['Gol', 'POKRTE', 'Expresso', 'Rodrigo', '10/10/2019', '-', '0', '1', 'Não', 800.00],
    ['Azul', 'POKRTE', 'ViajeBem', 'Rodrigo', '20/10/2019', '-', '1', 'Sim', 'Sim', 450.00],
    ['Gol', 'POIUYT', 'Expresso', 'Augusto', '15/10/2019', '-', '1', 'Sim', 'Sim', 650.00],
    ['Tam', 'POIUYT', 'AirTravel', 'Rodrigo', '20/10/2019', '-', '1', 'Sim', 'Sim', 220.00],
    ['Azul', 'POIDDD', 'Expresso', 'Augusto', '15/10/2019', '-', '1', 'Sim', 'Sim', 1150.60],
    ['Tam', 'POIUYT', 'Expresso', 'Augusto', '15/10/2019', '-', '1', 'Sim', 'Sim', 2450.20],
    ['Tam', 'POKRTE', 'ViajeBem', 'Rodrigo', '20/10/2019', '-', '1', 'Sim', 'Sim', 2400.00],
    ['Azul', 'POKRTE', 'Expresso', 'Augusto', '15/10/2019', '-', '1', 'Sim', 'Sim', 2470.00]



];

var totalVendas = 0

var tabela = document.querySelector('#tbody');
var texto = '<tr>';
for (var item in lista) {
    for (var inf in lista[item]) {
        texto += '<td>'
        texto += lista[item][inf];
        if (inf == 9) {
            totalVendas += lista[item][inf]
        }
        texto += '</td>'
    }
    texto += '</tr>'
}
//se a tabela for nula significa que voce está no index e não tem os dados
if (tabela != null) {
    tabela.innerHTML = texto

 
    var mediaPreco = totalVendas / lista.length;
    document.querySelector('#tkMedio').innerHTML = 'R$' + mediaPreco.toLocaleString('pt-BR');
    document.querySelector('#qtdMes').innerHTML = lista.length;
    document.querySelector('#totalMes').innerHTML = 'R$' + totalVendas.toLocaleString('pt-BR');
}
//INSERINDO RESUMO NA INDEX.HTML
var pTotalVendas = document.querySelector('#totalVendas');

if (pTotalVendas != null) {
    pTotalVendas.innerText = 'R$' + totalVendas.toLocaleString('pt-BR');
}
