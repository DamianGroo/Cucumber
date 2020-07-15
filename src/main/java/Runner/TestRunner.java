package Runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(


        features = "E:\\INTELLJ 2020.1.2\\PROGRAMY DO NOWSZEJ WERSJI\\CUCUMB\\Cucumber3\\src\\main\\java\\Features"
        , glue = {"stepsDefinitions.PierwszyTest"}
        , format = {"pretty", "html:test-outout"}
        // , tags = { "@scenariusz1" , "@scenariusz2" }
        , tags = {"@grupaScenariuszy"}



)

        /*
        features = "E:\\INTELLJ 2020.1.2\\PROGRAMY DO NOWSZEJ WERSJI\\CUCUMB\\Cucumber3\\src\\main\\java\\Features\\Testowanie.feature"
       // features = "E:\\INTELLJ 2020.1.2\\PROGRAMY DO NOWSZEJ WERSJI\\CUCUMB\\Cucumber3\\src\\main\\java\\Features"
     //   , glue = {"stepsDefinitions"}
        , glue = {"stepsDefinitions.PierwszyTest"}
        , format = {"pretty", "html:test-outout"}
       // , tags = { "@scenariusz1" , "@scenariusz2" }
        , tags = {"@grupaScenariuszy"}

                )
*/





public class TestRunner {




}
