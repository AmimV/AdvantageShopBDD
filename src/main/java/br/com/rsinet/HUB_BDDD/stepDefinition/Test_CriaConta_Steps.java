package br.com.rsinet.HUB_BDDD.stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import br.com.rsinet.HUB_BDD.PageFactory.CriarConta_Page;
import br.com.rsinet.HUB_BDD.PageFactory.DriverFactory;
import br.com.rsinet.HUB_BDD.PageFactory.Home_Page;
import br.com.rsinet.HUB_TDD.Excel.MassaDeDadosNovaConta;
import br.com.rsinet.HUB_TDD.ScreenShot.PrintDiretorio;
import br.com.rsinet.HUB_TDD.ScreenShot.ScreenShot;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class Test_CriaConta_Steps {

	public static WebDriver driver;
	private CriarConta_Page cc;
	private Home_Page inicio;

	@Dado("^o usuario estiver na home do site$")
	public void o_usuario_estiver_na_home_do_site() throws Throwable {
		driver = DriverFactory.AbrirSite();
	}

	@Quando("^clicar no menu de usuarios$")
	public void clicar_no_menu_de_usuarios() throws Throwable {
		inicio = PageFactory.initElements(driver, Home_Page.class);
		Thread.sleep(2500);
		inicio.Register();
	}

	@Quando("^clicar em register$")
	public void clicar_em_register() throws Throwable {
		inicio.ClicarEmRegister(driver);
	}

	@Quando("^preencho o userName \"([^\"]*)\"$")
	public void preencho_o_userName(String arg1) throws Throwable {
		cc = PageFactory.initElements(driver, CriarConta_Page.class);
		cc.Usuario();
	}

	@Quando("^preencho o email \"([^\"]*)\"$")
	public void preencho_o_email(String arg1) throws Throwable {
		cc.email();
	}

	@Quando("^preencho a senha \"([^\"]*)\"$")
	public void preencho_a_senha(String arg1) throws Throwable {
		cc.senha();
	}

	@Quando("^preencho confirmarSenha \"([^\"]*)\"$")
	public void preencho_confirmarSenha(String arg1) throws Throwable {
		cc.ConfirmarSenha();
	}

	@Quando("^preencho o primeiroNome \"([^\"]*)\"$")
	public void preencho_o_primeiroNome(String arg1) throws Throwable {
		cc.PrimeiroNome();
	}

	@Quando("^preencho o ultimoNome \"([^\"]*)\"$")
	public void preencho_o_ultimoNome(String arg1) throws Throwable {
		cc.UltimoNome();
	}

	@Quando("^preencho o telefone \"([^\"]*)\"$")
	public void preencho_o_telefone(String arg1) throws Throwable {
		cc.Telefone();
	}

	@Quando("^preencho a cidade \"([^\"]*)\"$")
	public void preencho_a_cidade(String arg1) throws Throwable {
		cc.Cidade();
	}

	@Quando("^preencho o pais \"([^\"]*)\"$")
	public void preencho_o_pais(String arg1) throws Throwable {
		cc.Pais();
	}

	@Quando("^preencho o endereco \"([^\"]*)\"$")
	public void preencho_o_endereco(String arg1) throws Throwable {
		cc.Endereco();
	}

	@Quando("^preencho o estadoEMais \"([^\"]*)\"$")
	public void preencho_o_estadoEMais(String arg1) throws Throwable {
		cc.Estado();
	}

	@Quando("^preencho o cep \"([^\"]*)\"$")
	public void preencho_o_cep(String arg1) throws Throwable {
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

	@Quando("^confirmo se foi cadastrado com sucesso$")
	public void confirmo_se_foi_cadastrado_com_sucesso() throws Throwable {
		MassaDeDadosNovaConta celula = new MassaDeDadosNovaConta();
		WebDriverWait wait = new WebDriverWait(driver, 10);
		Boolean element = wait.until(ExpectedConditions
				.textToBePresentInElementLocated(By.xpath("/html/body/header/nav/ul/li[3]/a/span"), celula.Usuario()));
		Assert.assertTrue(element);
	}

	@Quando("^tiro uma screenshot$")
	public void tiro_uma_screenshot() throws Throwable {
		ScreenShot.getScreenShots(PrintDiretorio.criaConta, driver);
	}

	@Entao("^fecho o navegador\\.$")
	public void fecho_o_navegador() throws Throwable {
		DriverFactory.fecharChrome(driver);
	}

}
