
@grupaScenariuszy
Feature: Pierwszy test



  @test1_poprawneLogowanie
  Scenario: Użytkownik wprowadza poprawne dane logowania
    Given Użytkownika uruchamia strone serwisu
    Then Strona główna serwisu Media Expert jest wyświetlona
    And Użytkownik klika na przycisk Twoje konto
    And Użytkownik czeka na załadowanie się strony
    And użytkownik wprowadza w pole login swój login
    And użytkownik wprowadza w pole hasło swoje hasło
    And użytkownik klika na przycisk zaloguj
    And Strona powitalna jest wyświetlona
    And Test nr jeden zakonczony


  @test2_NiePoprawneLogowanie
  Scenario: Użytkownik wprowadza nie poprawne dane logowania
    Given Użytkownika uruchamia strone serwisu
    Then Strona główna serwisu Media Expert jest wyświetlona
    And Użytkownik klika na przycisk Twoje konto
    And Użytkownik czeka na załadowanie się strony
    And użytkownik wprowadza w pole login swój login
    And użytkownik wprowadza w pole hasło błędne hasło
    And użytkownik klika na przycisk zaloguj
    And Strona z komunikatem błędnego logowania jest widoczna
    And Test nr dwa zakonczony



  @test3_WyszukanieProduktu
  Scenario: Użytkownik wyszukuje konkretny produkt
    Given Użytkownika uruchamia strone serwisu
    Then Strona główna serwisu Media Expert jest wyświetlona
    And Użytkownik klika na przycisk Twoje konto
    And Użytkownik czeka na załadowanie się strony
    And użytkownik wprowadza w pole login swój login
    And użytkownik wprowadza w pole hasło swoje hasło
    And użytkownik klika na przycisk zaloguj
    And Strona powitalna jest wyświetlona
    And Użytkownik wpisuje szukany produkt w wyszukiwarke
    And Użytkownik czeka na znalezienie produktu
    And Użytkownik klika na znaleziony produkt
    And Weryfikacja tytulu strony z wyszukanym produktem
    And Test nr trzy zakonczony



  @test4_NieudanaRejestracja
  Scenario: Użytkownik wyszukuje konkretny produkt
    Given Użytkownika uruchamia strone serwisu
    Then Strona główna serwisu Media Expert jest wyświetlona
    And Użytkownik klika na przycisk Twoje konto
    And Użytkownik czeka na załadowanie się strony
    And użytkownik klika przycisk Rejestracja
    And użytkownik czeka na wyświetlenie się formularza rejestracji
    And użytkownik wprowadza dane bez adresu email
    And uzytkownik klika przycisk zapoznania sie z regulaminem
    And użytkownik klika przycisk Zalóż Konto
    And Użytkownik czeka na przetworzenie sie formularza
    And Pojawia się komunikat o błędzie
    And Test nr cztery zakonczony


