$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("target/feature/CriarConta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 2,
  "name": "Cadastrar Usuario",
  "description": "",
  "id": "cadastrar-usuario",
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
  "name": "o usuario estiver na home do site",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "clicar no menu de usuarios",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "clicar em register",
  "keyword": "E "
});
formatter.match({
  "location": "Test_CriaConta_Steps.o_usuario_estiver_na_home_do_site()"
});
formatter.result({
  "duration": 11255943700,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clicar_no_menu_de_usuarios()"
});
formatter.result({
  "duration": 129266400,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clicar_em_register()"
});
formatter.result({
  "duration": 262448300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Cadastrar um usuario com sucesso",
  "description": "",
  "id": "cadastrar-usuario;cadastrar-um-usuario-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 11,
      "name": "@CriarComSucesso"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "preencho o userName",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencho o email",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencho a senha",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencho confirmarSenha",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencho o primeiroNome",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "preencho o ultimoNome",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "preencho o telefone",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "preencho a cidade",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "preencho o pais",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencho o endereco",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "preencho o estadoEMais",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "preencho o cep",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "clico no botao de concorda",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "clico em register",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "confirmo se fui cadastrado com sucesso, tiro uma screenShot",
  "keyword": "Entao "
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_userName()"
});
formatter.result({
  "duration": 715556500,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_email()"
});
formatter.result({
  "duration": 243714800,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_a_senha()"
});
formatter.result({
  "duration": 118767100,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_confirmarSenha()"
});
formatter.result({
  "duration": 119688000,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_primeiroNome()"
});
formatter.result({
  "duration": 137835300,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_ultimoNome()"
});
formatter.result({
  "duration": 156009400,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_telefone()"
});
formatter.result({
  "duration": 194406800,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_a_cidade()"
});
formatter.result({
  "duration": 137798000,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_pais()"
});
formatter.result({
  "duration": 711736700,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_endereco()"
});
formatter.result({
  "duration": 200504400,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_estadoEMais()"
});
formatter.result({
  "duration": 214281300,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_cep()"
});
formatter.result({
  "duration": 163014500,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clico_no_botao_de_concorda()"
});
formatter.result({
  "duration": 144238000,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clico_em_register()"
});
formatter.result({
  "duration": 114930100,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.confirmo_se_fui_cadastrado_com_sucesso_tiro_uma_screenShot()"
});
formatter.result({
  "duration": 1586355300,
  "status": "passed"
});
formatter.after({
  "duration": 623648600,
  "status": "passed"
});
formatter.after({
  "duration": 167700,
  "status": "passed"
});
formatter.after({
  "duration": 131700,
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
  "name": "o usuario estiver na home do site",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "clicar no menu de usuarios",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "clicar em register",
  "keyword": "E "
});
formatter.match({
  "location": "Test_CriaConta_Steps.o_usuario_estiver_na_home_do_site()"
});
formatter.result({
  "duration": 10942471500,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clicar_no_menu_de_usuarios()"
});
formatter.result({
  "duration": 197279300,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clicar_em_register()"
});
formatter.result({
  "duration": 181313000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Mostrar que usuario ja existe ao tentar cadastrar",
  "description": "",
  "id": "cadastrar-usuario;mostrar-que-usuario-ja-existe-ao-tentar-cadastrar",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 29,
      "name": "@CriarComFalha"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "preencho o userName",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "preencho o email",
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "preencho a senha",
  "keyword": "E "
});
formatter.step({
  "line": 34,
  "name": "preencho confirmarSenha",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "preencho o primeiroNome",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "preencho o ultimoNome",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "preencho o telefone",
  "keyword": "E "
});
formatter.step({
  "line": 38,
  "name": "preencho a cidade",
  "keyword": "E "
});
formatter.step({
  "line": 39,
  "name": "preencho o pais",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "preencho o endereco",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "preencho o estadoEMais",
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "preencho o cep",
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "clico no botao de concorda",
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "clico em register",
  "keyword": "E "
});
formatter.step({
  "line": 45,
  "name": "confirmo se nao foi cadastrado, tiro uma screenshot",
  "keyword": "Entao "
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_userName()"
});
formatter.result({
  "duration": 347135300,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_email()"
});
formatter.result({
  "duration": 441472300,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_a_senha()"
});
formatter.result({
  "duration": 133438500,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_confirmarSenha()"
});
formatter.result({
  "duration": 144527500,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_primeiroNome()"
});
formatter.result({
  "duration": 143869500,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_ultimoNome()"
});
formatter.result({
  "duration": 117734300,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_telefone()"
});
formatter.result({
  "duration": 178893700,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_a_cidade()"
});
formatter.result({
  "duration": 145145900,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_pais()"
});
formatter.result({
  "duration": 828703800,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_endereco()"
});
formatter.result({
  "duration": 348106700,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_estadoEMais()"
});
formatter.result({
  "duration": 135274100,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_cep()"
});
formatter.result({
  "duration": 162150500,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clico_no_botao_de_concorda()"
});
formatter.result({
  "duration": 139998100,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clico_em_register()"
});
formatter.result({
  "duration": 107874900,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.confirmo_se_nao_foi_cadastrado_tiro_uma_screenshot()"
});
formatter.result({
  "duration": 928495700,
  "status": "passed"
});
formatter.after({
  "duration": 612120200,
  "status": "passed"
});
formatter.after({
  "duration": 84500,
  "status": "passed"
});
formatter.after({
  "duration": 84000,
  "status": "passed"
});
});