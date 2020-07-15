package stepsDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class PierwszyTest {

WebDriver driver;
    WebDriverWait wait = new WebDriverWait(driver, 10);


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



//// jedziemy z testem glownym ale tutaj


    @Given("^Użytkownika uruchamia strone serwisu$")
    public void użytkownika_uruchamia_strone_serwisu() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "E:\\mvnrepository.com\\chromeDriver_Wersja_83\\chromedriver.exe");

        driver = new ChromeDriver();
        String url = "https://www.mediaexpert.pl/";
        driver.navigate().to(url);
        driver.manage().window().maximize();
    }

    @When("^Strona główna serwisu Media Expert jest wyświetlona$")
    public void strona_główna_serwisu_Media_Expert_jest_wyświetlona() throws Throwable {

        String nazwaSerwisu = "Media Expert | Sklep internetowy RTV, AGD, komputery";
        String otrzymanaNazwaSerwisu = driver.getTitle();
        Assert.assertEquals(nazwaSerwisu, otrzymanaNazwaSerwisu);
    }


    @Then("^Użytkownik klika na przycisk Twoje konto$")
    public void użytkownik_klika_na_przycisk_Twoje_konto() throws Throwable {
        driver.findElement(By.className("c-menu_linkName")).click();


    }

    @Then("^Użytkownik czeka na załadowanie się strony$")
    public void użytkownik_czeka_na_załadowanie_się_strony() throws Throwable {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("Logowanie")));
    }

    @Then("^użytkownik wprowadza w pole login swój login$")
    public void użytkownik_wprowadza_w_pole_login_swój_login() throws Throwable {
        String email = "ddd-ggg-ddd-ggg@wp.pl";
        driver.findElement(By.id("enp_customer_form_login_username")).click();
        driver.findElement(By.id("enp_customer_form_login_username")).sendKeys(email);
    }

    @Then("^użytkownik wprowadza w pole hasło swoje hasło$")
    public void użytkownik_wprowadza_w_pole_hasło_swoje_hasło() throws Throwable {
        String haslo = "5ontoTestowe";
        driver.findElement(By.id("enp_customer_form_login_password")).click();
        driver.findElement(By.id("enp_customer_form_login_password")).sendKeys(haslo);
    }

    @Then("^użytkownik klika na przycisk zaloguj$")
    public void użytkownik_klika_na_przycisk_zaloguj() throws Throwable {
        driver.findElement(By.linkText("Zaloguj się")).click();
    }

    @Then("^Strona powitalna jest wyświetlona$")
    public void strona_powitalna_jest_wyświetlona() throws Throwable {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("is-user")));
        String wynikLogowania = driver.findElement(By.className("is-user")).getText();
        Assert.assertEquals("Witaj DDD", wynikLogowania);
    }






}