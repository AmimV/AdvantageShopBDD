package br.com.rsinet.HUB_BDDD.stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import br.com.rsinet.HUB_BDD.PageFactory.DriverFactory;
import br.com.rsinet.HUB_BDD.PageFactory.Home_Page;
import br.com.rsinet.HUB_BDD.PageFactory.Tablet_Page;
import br.com.rsinet.HUB_TDD.ScreenShot.PrintDiretorio;
import br.com.rsinet.HUB_TDD.ScreenShot.ScreenShot;
import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class Test_PesquisarAtravesDaHomePage {
	public static WebDriver driver;
	private Home_Page inicio;
	private Tablet_Page tablets;
	
	@Dado("^que estou na pagina inicial do site$")
	public void que_estou_na_pagina_inicial_do_site() throws Throwable {
		driver = DriverFactory.AbrirSite();
	}

	@Quando("^eu clicar em tablet$")
	public void eu_clicar_em_tablet() throws Throwable {
		inicio = PageFactory.initElements(driver, Home_Page.class);
		inicio.tablet();
	}

	@Quando("^selecionar um dos tablets da lista$")
	public void selecionar_um_dos_tablets_da_lista() throws Throwable {
		tablets = PageFactory.initElements(driver, Tablet_Page.class);
		tablets.Hp_Pro(driver);
	}

	@Quando("^confirmar que foi selecionado$")
	public void confirmar_que_foi_selecionado() throws Throwable {
		driver.getPageSource().contains("HP PRO");
	}

	@Quando("^comprovar com uma screenshot$")
	public void comprovar_com_uma_screenshot() throws Throwable {
		ScreenShot.getScreenShots(PrintDiretorio.pesquisaHome, driver);
	}

	@Entao("^fechar o navegador\\.$")
	public void fechar_o_navegador() throws Throwable {
		DriverFactory.fecharChrome(driver);
	}
}
