package stepsDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;



public class PierwszyTest {

    public void czas(int milisekundy) {
        try {
            Thread.sleep(milisekundy);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }






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

        System.setProperty("webdriver.chrome.driver", "E:\\mvnrepository.com\\chromeDriver_Wersja_83\\chromedriver.exe");


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



//// test nr 1 - poprawne dane logowania




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
        czas(3000);
        //driver.findElement(By.linkText("\n" +
         //       "Zaloguj/Zarejestruj")).click();
      //  driver.findElement(By.className("c-menu_linkName")).click();
        driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[5]/div/div/div[3]/div/ul/li[3]/div/a/span[1]")).click();
    }

    @Then("^Użytkownik czeka na załadowanie się strony$")
    public void użytkownik_czeka_na_załadowanie_się_strony() throws Throwable {
       // wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("Logowanie")));
        czas(5000);
    }

    @Then("^użytkownik wprowadza w pole login swój login$")
    public void użytkownik_wprowadza_w_pole_login_swój_login() throws Throwable {
        String email = "ddd-ggg-ddd-ggg@wp.pl";
        driver.findElement(By.id("enp_customer_form_login_username")).click();
        driver.findElement(By.id("enp_customer_form_login_username")).sendKeys(email);
        czas(1000);
    }

    @Then("^użytkownik wprowadza w pole hasło swoje hasło$")
    public void użytkownik_wprowadza_w_pole_hasło_swoje_hasło() throws Throwable {
        String haslo = "5ontoTestowe";
        driver.findElement(By.id("enp_customer_form_login_password")).click();
        driver.findElement(By.id("enp_customer_form_login_password")).sendKeys(haslo);
        czas(1000);
    }

    @Then("^użytkownik klika na przycisk zaloguj$")
    public void użytkownik_klika_na_przycisk_zaloguj() throws Throwable {
        driver.findElement(By.xpath("/html/body/div[1]/div[7]/div/div/div[1]/div[1]/div[2]/form/div[4]/div/input")).click();
    //    driver.findElement(By.linkText("Zaloguj się")).click();
    }

    @Then("^Strona powitalna jest wyświetlona$")
    public void strona_powitalna_jest_wyświetlona() throws Throwable {
        czas(5000);
        String wynikLogowania = driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[5]/div/div/div[3]/div/ul/li[3]/p/span[1]")).getText();

                //driver.findElement(By.className("is-user")).getText();
        Assert.assertEquals("Witaj DDD", wynikLogowania);
    }

    @Then("^Test nr jeden zakonczony$")
    public void test_nr_jeden_zakonczony() throws Throwable {
        driver.close();
    }



// test nr 2 - niepoprawne dane logowania



    @Then("^użytkownik wprowadza w pole hasło błędne hasło$")
    public void użytkownik_wprowadza_w_pole_hasło_błędne_hasło() throws Throwable {
        String Zlehaslo = "invalidinvalidinvalid";
        driver.findElement(By.id("enp_customer_form_login_password")).click();
        driver.findElement(By.id("enp_customer_form_login_password")).sendKeys(Zlehaslo);
        czas(1000);
    }


    @Then("^Strona z komunikatem błędnego logowania jest widoczna$")
    public void strona_z_komunikatem_błędnego_logowania_jest_widoczna() throws Throwable {
        czas(5000);
        String wynikLogowania = driver.findElement(By.xpath("/html/body/div[1]/div[6]/div/p")).getText();
        String spodziewanyKomunikat = "Nieprawidłowa nazwa użytkownika lub hasło";

        //driver.findElement(By.className("is-user")).getText();
        Assert.assertEquals(spodziewanyKomunikat, wynikLogowania);
    }


    @Then("^Test nr dwa zakonczony$")
    public void test_nr_dwa_zakonczony() throws Throwable {
        driver.close();
    }








}
