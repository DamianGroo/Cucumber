package Runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        features = "E:\\INTELLJ 2020.1.2\\PROGRAMY DO NOWSZEJ WERSJI\\CUCUMB\\Cucumber\\Cucek\\src\\main\\java\\Features"
        , glue = {"stepsDefinitions"}
        , format = {"pretty", "html:test-outout"}
       // , tags = { "@scenariusz1" , "@scenariusz2" }
    //    , tags = {"@grupaScenariuszy"}

     //  , tags = {"@grupaScenariuszy"}
        , tags = {"@test5_DodaniePrzedmiotuDoKoszyka"}

                )






public class TestRunner {




}
