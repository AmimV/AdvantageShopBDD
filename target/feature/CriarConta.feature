# language: pt
Funcionalidade: Cadastrar Usuario

	Contexto: 
	  Dado o usuario estiver na home do site
    Quando clicar no menu de usuarios
    E clicar em register
    E preencho o userName "MatheusAmim"
    E preencho o email "matheus.amim.vieira@hotmail.com"
    E preencho a senha "Senha123"
    E preencho confirmarSenha "Senha123"
    E preencho o primeiroNome "Matheus"
    E preencho o ultimoNome "Amim"
    E preencho o telefone "(11) 4144-1698"
    E preencho a cidade "Itapevi"
    E preencho o pais "Brazil"
    E preencho o endereco "Emilio Lehmann"
    E preencho o estadoEMais "SP"
    E preencho o cep "066695-480"
    E clico no botao de concorda
    E clico em register
   
	
	@CriarComSucesso
  Cenario: Cadastrar um usuario com sucesso

    Entao confirmo se fui cadastrado com sucesso, tirando uma screenShot

   @CriarComFalha
    Cenario: Mostrar que usuario ja existe ao tentar cadastrar
    Entao confirmo se nao foi cadastrado, tirando uma screenshot
