@scenariuszLogowaniaPoprawnego
  Feature: Poprawne logowanie do serwisu Media Expert


    @scenariuszPoprawnegoLogowania
    Scenario: Użytkownik wprowadza poprawne dane logowania
      Given Użytkownika uruchamia strone serwisu
    When Strona główna serwisu Media Expert jest wyświetlona
      Then Użytkownik klika na przycisk Twoje konto
      And Użytkownik czeka na załadowanie się strony
      Then użytkownik wprowadza w pole login swój login
      And użytkownik wprowadza w pole hasło swoje hasło
      And użytkownik klika na przycisk zaloguj
      Then Strona powitalna jest wyświetlona