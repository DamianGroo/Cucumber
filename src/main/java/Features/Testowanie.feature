
@grupaScenariuszy
Feature: Pierwszy test


@scenariusz1
  Scenario: Scenariusz testowy numer jeden
    Given daje ci slowo kluczowe
    When strona jest otwarta
    Then wyszukujesz id elementu
    And szukasz miejsca do wpisania
    And klikasz na szukajke


@scenariusz2
Scenario: badamy strone Media Expert
  Given daje ci otwarta strone
  Then sprawdzam tytul strony
  And zamykam strone



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