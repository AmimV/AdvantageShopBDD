package br.com.rsinet.HUB_BDD.PageFactory;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import br.com.rsinet.HUB_BDD.Excel.MassaDeDadosPesqLupa;

public class PesquisaNaLupa_Page {
	MassaDeDadosPesqLupa celula = new MassaDeDadosPesqLupa();
	private WebDriver driver;
	
	public PesquisaNaLupa_Page(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.ID, using = "menuSearch")
	private WebElement lupa;

	@FindBy(how = How.ID, using = "autoComplete")
	private WebElement busca;

	@FindBy(how = How.XPATH, using = "/html/body/header/nav/ul/li[4]/a/div/div[1]/div/div/div/img")
	private WebElement buscafecha;

	@FindBy(how = How.XPATH, using = "/html/body/div[3]/section/article/div[3]/div/label/span")
	private WebElement SemResultado;

	public void ClicarLupa() {
		lupa.click();
	}

	public void BuscaProduto() throws Exception {
		busca.sendKeys(celula.PesquisaProduto01(), Keys.ENTER);
	}
	
	public void BuscaProdutoInexistente() throws Exception {
		busca.sendKeys(celula.ProdutoInvalido(), Keys.ENTER);
	}

	public void FechaLupa() {
		buscafecha.click();
	}

	public void ClicarEmProduto() throws Exception {
	driver.findElement(By.partialLinkText(celula.ClicaProduto01())).click();
	}
	
	public void ConfereSeEstaNoProduto() {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		Boolean ADD = wait.until(ExpectedConditions.textToBe(By.xpath("/html/body/div[3]/section/article[1]/div[2]/div[2]/div/div[3]/button"), "ADD TO CART"));
		Assert.assertTrue(ADD);
	}
}
