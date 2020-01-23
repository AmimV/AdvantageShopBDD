package br.com.rsinet.HUB_BDD.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "target/feature/",
		glue = { "br.com.rsinet.HUB_BDDD.stepDefinition" },plugin = { "pretty", "html:RelatorioPesquisaHome" })

public class Test_ProdutoHome {

}
