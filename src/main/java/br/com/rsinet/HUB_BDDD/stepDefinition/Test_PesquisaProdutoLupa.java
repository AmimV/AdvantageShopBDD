package br.com.rsinet.HUB_BDDD.stepDefinition;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import br.com.rsinet.HUB_BDD.PageFactory.DriverFactory;
import br.com.rsinet.HUB_BDD.PageFactory.PesquisaNaLupa_Page;
import br.com.rsinet.HUB_TDD.ScreenShot.PrintDiretorio;
import br.com.rsinet.HUB_TDD.ScreenShot.ScreenShot;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class Test_PesquisaProdutoLupa {
	
	public static WebDriver driver;
	private PesquisaNaLupa_Page pesq;

	@Dado("^que estou na home do site$")
	public void que_estou_na_home_do_site() throws Throwable {
		
		driver = DriverFactory.AbrirSite();
	   
	}

	@Quando("^eu clicar no icone da lupa$")
	public void eu_clicar_no_icone_da_lupa() throws Throwable {
		pesq = PageFactory.initElements(driver, PesquisaNaLupa_Page.class);
		
		pesq.ClicarLupa();
	}

	@Quando("^escrever o nome de um produto$")
	public void escrever_o_nome_de_um_produto() throws Throwable {
		pesq.BuscaProduto();
	}

	@Quando("^fechar a lupa$")
	public void fechar_a_lupa() throws Throwable {
		pesq.FechaLupa();
	}

	@Quando("^clicar em um produto$")
	public void clicar_em_um_produto() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    pesq.ClicarEmProduto(driver);
	}

	@Quando("^confirmar se estou na pagina do produto$")
	public void confirmar_se_estou_na_pagina_do_produto() throws Throwable {

		Assert.assertTrue(driver.getPageSource().contains("Headset H390"));
			
	}

	@Quando("^tirar uma screenshot$")
	public void tirar_uma_screenshot() throws Throwable {
		ScreenShot.getScreenShots(PrintDiretorio.pesquisaLupa, driver);
	}

	@Entao("^fechar o navegador$")
	public void fechar_o_navegador() throws Throwable {
		DriverFactory.fecharChrome(driver);
	}
	
}
