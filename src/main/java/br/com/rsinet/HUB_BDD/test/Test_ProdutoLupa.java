package br.com.rsinet.HUB_BDD.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "target/feature/PesquisaLupa.feature",
		glue = { "br.com.rsinet.HUB_BDDD.stepDefinition" }, plugin = { "pretty", "html:relatorioPesquisaLupa" })

public class Test_ProdutoLupa {

}
