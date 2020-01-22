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
  "duration": 11278077800,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.eu_clicar_no_icone_da_lupa()"
});
formatter.result({
  "duration": 115534200,
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
  "duration": 636058800,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.fechar_a_lupa()"
});
formatter.result({
  "duration": 262946400,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.clicar_em_um_produto()"
});
formatter.result({
  "duration": 2065082700,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.confirmar_se_estou_na_pagina_do_produto()"
});
formatter.result({
  "duration": 21155200,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.tiro_a_ScreenShot()"
});
formatter.result({
  "duration": 324519600,
  "status": "passed"
});
formatter.after({
  "duration": 71500,
  "status": "passed"
});
formatter.after({
  "duration": 616096900,
  "status": "passed"
});
formatter.after({
  "duration": 187400,
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
  "duration": 10306730900,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.eu_clicar_no_icone_da_lupa()"
});
formatter.result({
  "duration": 129366400,
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
  "duration": 163920500,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.confirmo_se_nao_tem_nenhum_produto_na_tela()"
});
formatter.result({
  "duration": 363339800,
  "status": "passed"
});
formatter.match({
  "location": "Test_PesquisaProdutoLupa.tiro_uma_ScreenShot()"
});
formatter.result({
  "duration": 362235800,
  "status": "passed"
});
formatter.after({
  "duration": 45500,
  "status": "passed"
});
formatter.after({
  "duration": 631049700,
  "status": "passed"
});
formatter.after({
  "duration": 99800,
  "status": "passed"
});
});