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
formatter.step({
  "line": 8,
  "name": "preencho o userName",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "preencho o email",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "preencho a senha",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "preencho confirmarSenha",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "preencho o primeiroNome",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "preencho o ultimoNome",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencho o telefone",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencho a cidade",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencho o pais",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencho o endereco",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "preencho o estadoEMais",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "preencho o cep",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "clico no botao de concorda",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "clico em register",
  "keyword": "E "
});
formatter.match({
  "location": "Test_CriaConta_Steps.o_usuario_estiver_na_home_do_site()"
});
formatter.result({
  "duration": 11241523700,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clicar_no_menu_de_usuarios()"
});
formatter.result({
  "duration": 197225000,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clicar_em_register()"
});
formatter.result({
  "duration": 126876900,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_userName()"
});
formatter.result({
  "duration": 1028117100,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_email()"
});
formatter.result({
  "duration": 278687500,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_a_senha()"
});
formatter.result({
  "duration": 126425200,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_confirmarSenha()"
});
formatter.result({
  "duration": 132144700,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_primeiroNome()"
});
formatter.result({
  "duration": 143500600,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_ultimoNome()"
});
formatter.result({
  "duration": 120481500,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_telefone()"
});
formatter.result({
  "duration": 179071900,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_a_cidade()"
});
formatter.result({
  "duration": 131814600,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_pais()"
});
formatter.result({
  "duration": 294695500,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_endereco()"
});
formatter.result({
  "duration": 337521200,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_estadoEMais()"
});
formatter.result({
  "duration": 132001800,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_cep()"
});
formatter.result({
  "duration": 165697900,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clico_no_botao_de_concorda()"
});
formatter.result({
  "duration": 103770300,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clico_em_register()"
});
formatter.result({
  "duration": 90733300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Cadastrar um usuario com sucesso",
  "description": "",
  "id": "cadastrar-usuario;cadastrar-um-usuario-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 24,
      "name": "@CriarComSucesso"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "confirmo se fui cadastrado com sucesso, tiro uma screenShot",
  "keyword": "Entao "
});
formatter.match({
  "location": "Test_CriaConta_Steps.confirmo_se_fui_cadastrado_com_sucesso_tirando_uma_screenShot()"
});
formatter.result({
  "duration": 1533353300,
  "status": "passed"
});
formatter.after({
  "duration": 620808000,
  "status": "passed"
});
formatter.after({
  "duration": 124000,
  "status": "passed"
});
formatter.after({
  "duration": 96900,
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
formatter.step({
  "line": 8,
  "name": "preencho o userName",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "preencho o email",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "preencho a senha",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "preencho confirmarSenha",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "preencho o primeiroNome",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "preencho o ultimoNome",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencho o telefone",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencho a cidade",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencho o pais",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencho o endereco",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "preencho o estadoEMais",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "preencho o cep",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "clico no botao de concorda",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "clico em register",
  "keyword": "E "
});
formatter.match({
  "location": "Test_CriaConta_Steps.o_usuario_estiver_na_home_do_site()"
});
formatter.result({
  "duration": 10387839600,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clicar_no_menu_de_usuarios()"
});
formatter.result({
  "duration": 158251400,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clicar_em_register()"
});
formatter.result({
  "duration": 175430100,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_userName()"
});
formatter.result({
  "duration": 312862900,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_email()"
});
formatter.result({
  "duration": 308811400,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_a_senha()"
});
formatter.result({
  "duration": 133182900,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_confirmarSenha()"
});
formatter.result({
  "duration": 184745500,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_primeiroNome()"
});
formatter.result({
  "duration": 171258400,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_ultimoNome()"
});
formatter.result({
  "duration": 117278500,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_telefone()"
});
formatter.result({
  "duration": 166232800,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_a_cidade()"
});
formatter.result({
  "duration": 143737400,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_pais()"
});
formatter.result({
  "duration": 676466700,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_endereco()"
});
formatter.result({
  "duration": 369346600,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_estadoEMais()"
});
formatter.result({
  "duration": 132465700,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.preencho_o_cep()"
});
formatter.result({
  "duration": 148986200,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clico_no_botao_de_concorda()"
});
formatter.result({
  "duration": 120783000,
  "status": "passed"
});
formatter.match({
  "location": "Test_CriaConta_Steps.clico_em_register()"
});
formatter.result({
  "duration": 139994000,
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
  "name": "confirmo se nao foi cadastrado, tiro uma screenshot",
  "keyword": "Entao "
});
formatter.match({
  "location": "Test_CriaConta_Steps.confirmo_se_nao_foi_cadastrado_tirando_uma_screenshot()"
});
formatter.result({
  "duration": 952938000,
  "status": "passed"
});
formatter.after({
  "duration": 609721800,
  "status": "passed"
});
formatter.after({
  "duration": 87800,
  "status": "passed"
});
formatter.after({
  "duration": 64000,
  "status": "passed"
});
});