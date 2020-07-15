package Runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(


        features = {"src/main/java/Features/LogowaniePoprawne.feature"}

    //    features = "E:\\INTELLJ 2020.1.2\\PROGRAMY DO NOWSZEJ WERSJI\\CUCUMB\\Cucumber3\\src\\main\\java\\Features\\LogowaniePoprawne.feature"
    //    features = "E:\\INTELLJ 2020.1.2\\PROGRAMY DO NOWSZEJ WERSJI\\CUCUMB\\Cucumber3\\src\\main\\java\\Features"
    //   , glue = {"stepsDefinitions\\stepy_LogowaniePoprawne.java"}
   //     , glue = {"stepsDefinitions\\loginPoprawny"}
      //  , glue = {"E:\\INTELLJ 2020.1.2\\PROGRAMY DO NOWSZEJ WERSJI\\CUCUMB\\Cucumber3\\src\\main\\java\\stepsDefinitions\\loginPoprawny\\stepy_LogowaniePoprawne.java"}
        , glue = {"stepsDefinitions"}
        , format = {"pretty", "html:test-outout"}
        , tags = {"@scenariuszLogowaniaPoprawnego"}

)




public class TR_LogowaniePoprawne {
}
