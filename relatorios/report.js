$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("target/feature/PesquisaLupa.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Pesquisar na Lupa",
  "description": "",
  "id": "pesquisar-na-lupa",
  "keyword": "Funcionalidade"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 5,
  "name": "que estou na home do site",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "eu clicar no icone da lupa",
  "keyword": "Quando "
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.que_estou_na_home_do_site()"
});
formatter.result({
  "duration": 10997249900,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.eu_clicar_no_icone_da_lupa()"
});
formatter.result({
  "duration": 113551800,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Pesquisar um produto atrav�s da Lupa e clicar no produto",
  "description": "",
  "id": "pesquisar-na-lupa;pesquisar-um-produto-atrav�s-da-lupa-e-clicar-no-produto",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@PesquisarNaLupaComSucesso"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "escrever o nome de um produto",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "fechar a lupa",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clicar em um produto",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "confirmar se estou na pagina do produto",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "tiro a ScreenShot",
  "keyword": "Entao "
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.escrever_o_nome_de_um_produto()"
});
formatter.result({
  "duration": 582385500,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.fechar_a_lupa()"
});
formatter.result({
  "duration": 301257600,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.clicar_em_um_produto()"
});
formatter.result({
  "duration": 519837500,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.confirmar_se_estou_na_pagina_do_produto()"
});
formatter.result({
  "duration": 22178000,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.tiro_a_ScreenShot()"
});
formatter.result({
  "duration": 304952100,
  "status": "passed"
});
formatter.after({
  "duration": 604381400,
  "status": "passed"
});
formatter.after({
  "duration": 322000,
  "status": "passed"
});
formatter.after({
  "duration": 217300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 5,
  "name": "que estou na home do site",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "eu clicar no icone da lupa",
  "keyword": "Quando "
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.que_estou_na_home_do_site()"
});
formatter.result({
  "duration": 10244559500,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.eu_clicar_no_icone_da_lupa()"
});
formatter.result({
  "duration": 66049700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Pesquisar um produto inexistente atrav�s da lupa",
  "description": "",
  "id": "pesquisar-na-lupa;pesquisar-um-produto-inexistente-atrav�s-da-lupa",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 17,
      "name": "@PesquisarNaLupaFalha"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "escrever o nome de um produto inexistente",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "confirmo se nao tem nenhum produto na tela",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "tiro uma ScreenShot",
  "keyword": "Entao "
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.escrever_o_nome_de_um_produto_inexistente()"
});
formatter.result({
  "duration": 147534800,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.confirmo_se_nao_tem_nenhum_produto_na_tela()"
});
formatter.result({
  "duration": 267269400,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.tiro_uma_ScreenShot()"
});
formatter.result({
  "duration": 284574300,
  "status": "passed"
});
formatter.after({
  "duration": 630947400,
  "status": "passed"
});
formatter.after({
  "duration": 72700,
  "status": "passed"
});
formatter.after({
  "duration": 61200,
  "status": "passed"
});
});