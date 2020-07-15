
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
