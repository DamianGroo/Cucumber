
@grupaScenariuszy
Feature: Pierwszy test


@scenariusz1
  Scenario: Scenariusz testowy numer jeden
    Given daje ci slowo kluczowe
    When strona jest otwarta
    Then wyszukujesz id elementu
    And szukasz miejsca do wpisania
    And klikasz na szukajke

  @scenariusz3
  Scenario: Użytkownik wprowadza poprawne dane logowania
    Given Użytkownika uruchamia strone serwisu
    Then Strona główna serwisu Media Expert jest wyświetlona
    And Użytkownik klika na przycisk Twoje konto
    And Użytkownik czeka na załadowanie się strony
    And użytkownik wprowadza w pole login swój login
    And użytkownik wprowadza w pole hasło swoje hasło
    And użytkownik klika na przycisk zaloguj
    And Strona powitalna jest wyświetlona



@scenariusz2
Scenario: badamy strone Media Expert
  Given daje ci otwarta strone
  Then sprawdzam tytul strony
  And zamykam strone




