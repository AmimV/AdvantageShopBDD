package br.com.rsinet.HUB_BDD.stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import br.com.rsinet.HUB_BDD.Excel.MassaDeDadosNovaConta;
import br.com.rsinet.HUB_BDD.PageFactory.CriarConta_Page;
import br.com.rsinet.HUB_BDD.PageFactory.DriverFactory;
import br.com.rsinet.HUB_BDD.PageFactory.Home_Page;
import br.com.rsinet.HUB_BDD.ScreenShot.PrintDiretorio;
import br.com.rsinet.HUB_BDD.ScreenShot.ScreenShot;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class Test_CriaConta_Steps {

	private WebDriver driver;
	private CriarConta_Page cc;
	private Home_Page inicio;

	@Dado("^o usuario estiver na home do site$")
	public void o_usuario_estiver_na_home_do_site() throws Throwable {
		driver = DriverFactory.AbrirSite();
	}

	@Quando("^clicar no menu de usuarios$")
	public void clicar_no_menu_de_usuarios() throws Throwable {
		inicio = PageFactory.initElements(driver, Home_Page.class);
		inicio.Register();
	}

	@Quando("^clicar em register$")
	public void clicar_em_register() throws Throwable {
		inicio.ClicarEmRegister();
	}

	@Quando("^preencho o userName$")
	public void preencho_o_userName() throws Throwable {
		cc = PageFactory.initElements(driver, CriarConta_Page.class);
		cc.Usuario();
	}

	@Quando("^preencho o email$")
	public void preencho_o_email() throws Throwable {
		cc.email();
	}

	@Quando("^preencho a senha$")
	public void preencho_a_senha() throws Throwable {
		cc.senha();
	}

	@Quando("^preencho confirmarSenha$")
	public void preencho_confirmarSenha() throws Throwable {
		cc.ConfirmarSenha();
	}

	@Quando("^preencho o primeiroNome$")
	public void preencho_o_primeiroNome() throws Throwable {
		cc.PrimeiroNome();
	}

	@Quando("^preencho o ultimoNome$")
	public void preencho_o_ultimoNome() throws Throwable {
		cc.UltimoNome();
	}

	@Quando("^preencho o telefone$")
	public void preencho_o_telefone() throws Throwable {
		cc.Telefone();
	}

	@Quando("^preencho a cidade$")
	public void preencho_a_cidade() throws Throwable {
		cc.Cidade();
	}

	@Quando("^preencho o pais$")
	public void preencho_o_pais() throws Throwable {
		cc.Pais();
	}

	@Quando("^preencho o endereco$")
	public void preencho_o_endereco() throws Throwable {
		cc.Endereco();
	}

	@Quando("^preencho o estadoEMais$")
	public void preencho_o_estadoEMais() throws Throwable {
		cc.Estado();
	}

	@Quando("^preencho o cep$")
	public void preencho_o_cep() throws Throwable {
		cc.Cep();
	}

	@Quando("^clico no botao de concorda$")
	public void clico_no_botao_de_concorda() throws Throwable {
		cc.Aceitar();
	}

	@Quando("^clico em register$")
	public void clico_em_register() throws Throwable {
		cc.botao();
	}

	@Entao("^confirmo se fui cadastrado com sucesso, tiro uma screenShot$")
	public void confirmo_se_fui_cadastrado_com_sucesso_tiro_uma_screenShot() throws Throwable {
		MassaDeDadosNovaConta celula = new MassaDeDadosNovaConta();

		WebDriverWait wait = new WebDriverWait(driver, 10);
		Boolean element = wait.until(ExpectedConditions
				.textToBePresentInElementLocated(By.xpath("/html/body/header/nav/ul/li[3]/a/span"), celula.Usuario()));
		Assert.assertTrue(element);
		
		ScreenShot.getScreenShots(PrintDiretorio.criaConta, driver);

	}

	@Entao("^confirmo se nao foi cadastrado, tiro uma screenshot$")
	public void confirmo_se_nao_foi_cadastrado_tiro_uma_screenshot() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		Boolean element = wait.until(ExpectedConditions.textToBePresentInElementLocated(
				By.xpath("/html/body/div[3]/section/article/sec-form/div[2]/label[1]"), "User name already exists"));
		Assert.assertTrue(element);
		
		ScreenShot.getScreenShots(PrintDiretorio.criaConta, driver);

	}

	@After
	public void fechar() throws Exception {
		DriverFactory.fecharChrome(driver);
	}

}
