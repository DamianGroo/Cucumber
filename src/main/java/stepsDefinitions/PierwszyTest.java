package stepsDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class PierwszyTest {

WebDriver driver;



    @Given("^daje ci slowo kluczowe$")
    public void daje_ci_slowo_kluczowe() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "E:\\mvnrepository.com\\chromeDriver_Wersja_83\\chromedriver.exe");

        driver = new ChromeDriver();
        String url = "https://www.google.pl/";
        driver.navigate().to(url);
        driver.manage().window().maximize();
       // driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS); // PRZYKLAD GLOBALNEGO IMPLICITY WAIT-A

    }

    @When("^strona jest otwarta$")
    public void strona_jest_otwarta() throws Throwable {

        String nazwaSerwisu = driver.getTitle();
        System.out.println(nazwaSerwisu);
        Assert.assertEquals("Google", nazwaSerwisu);

    }

    @Then("^wyszukujesz id elementu$")
    public void wyszukujesz_id_elementu() throws Throwable {
        String nazwaSerwisu = driver.getTitle();
        System.out.println(nazwaSerwisu);
        Assert.assertEquals("Google", nazwaSerwisu);
    }

    @Then("^szukasz miejsca do wpisania$")
    public void szukasz_miejsca_do_wpisania() throws Throwable {
        String nazwaSerwisu = driver.getTitle();
        System.out.println(nazwaSerwisu);
        Assert.assertEquals("Google", nazwaSerwisu);
    }

    @Then("^klikasz na szukajke$")
    public void klikasz_na_szukajke() throws Throwable {
        driver.close();
    }



//  daje tutaj jednym ciagiem kolejny scenariusz testowy - sprawdzam dla innej strony


    @Given("^daje ci otwarta strone$")
    public void daje_ci_otwarta_strone() throws Throwable {
        driver = new ChromeDriver();
        String url = "http://www.pollub.pl/";
        driver.navigate().to(url);
        driver.manage().window().maximize();
        // driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS); // PRZYKLAD GLOBALNEGO IMPLICITY WAIT-A

    }

    @Then("^sprawdzam tytul strony$")
    public void sprawdzam_tytul_strony() throws Throwable {
        String PolitechnikaNazwa = driver.getTitle();
        Assert.assertEquals("Politechnika Lubelska", PolitechnikaNazwa);
    }

    @Then("^zamykam strone$")
    public void zamykam_strone() throws Throwable {
        driver.close();
    }









}
