$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogowaniePoprawne.feature");
formatter.feature({
  "line": 2,
  "name": "Poprawne logowanie do serwisu Media Expert",
  "description": "",
  "id": "poprawne-logowanie-do-serwisu-media-expert",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@scenariuszLogowaniaPoprawnego"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Użytkownik wprowadza poprawne dane logowania",
  "description": "",
  "id": "poprawne-logowanie-do-serwisu-media-expert;użytkownik-wprowadza-poprawne-dane-logowania",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@scenariuszPoprawnegoLogowania"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Użytkownika uruchamia strone serwisu",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Strona główna serwisu Media Expert jest wyświetlona",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Użytkownik klika na przycisk Twoje konto",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Użytkownik czeka na załadowanie się strony",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "użytkownik wprowadza w pole login swój login",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "użytkownik wprowadza w pole hasło swoje hasło",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "użytkownik klika na przycisk zaloguj",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Strona powitalna jest wyświetlona",
  "keyword": "Then "
});
formatter.match({
  "location": "stepy_LogowaniePoprawne.użytkownika_uruchamia_strone_serwisu()"
});
formatter.result({
  "duration": 284986900,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class stepsDefinitions.stepy_LogowaniePoprawne\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 33 more\r\nCaused by: java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepsDefinitions.stepy_LogowaniePoprawne.\u003cinit\u003e(stepy_LogowaniePoprawne.java:19)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepy_LogowaniePoprawne.strona_główna_serwisu_Media_Expert_jest_wyświetlona()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepy_LogowaniePoprawne.użytkownik_klika_na_przycisk_Twoje_konto()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepy_LogowaniePoprawne.użytkownik_czeka_na_załadowanie_się_strony()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepy_LogowaniePoprawne.użytkownik_wprowadza_w_pole_login_swój_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepy_LogowaniePoprawne.użytkownik_wprowadza_w_pole_hasło_swoje_hasło()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepy_LogowaniePoprawne.użytkownik_klika_na_przycisk_zaloguj()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepy_LogowaniePoprawne.strona_powitalna_jest_wyświetlona()"
});
formatter.result({
  "status": "skipped"
});
});