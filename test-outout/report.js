$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Testowanie.feature");
formatter.feature({
  "line": 3,
  "name": "Pierwszy test",
  "description": "",
  "id": "pierwszy-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@grupaScenariuszy"
    }
  ]
});
formatter.scenario({
  "line": 95,
  "name": "Demonstracja negatywnego wyniku testu",
  "description": "",
  "id": "pierwszy-test;demonstracja-negatywnego-wyniku-testu",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 94,
      "name": "@test7_TestKtoryKonczySieNiepowodzeniem"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "Użytkownik uruchamia strone serwisu",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "Strona główna serwisu Media Expert jest wyświetlona",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "Użytkownik klika na przycisk Twoje konto",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "Użytkownik czeka na załadowanie się strony",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "użytkownik wprowadza w pole login błędny login",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "użytkownik wprowadza w pole hasło błędne hasło",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "użytkownik klika na przycisk zaloguj",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "Komunikat błędu na stronie jest inny niż oczekiwany",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "Test nr siedem zakonczony",
  "keyword": "And "
});
formatter.match({
  "location": "PierwszyTest.użytkownik_uruchamia_strone_serwisu()"
});
formatter.result({
  "duration": 10062448600,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.strona_główna_serwisu_Media_Expert_jest_wyświetlona()"
});
formatter.result({
  "duration": 591257300,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_klika_na_przycisk_Twoje_konto()"
});
formatter.result({
  "duration": 5362024300,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_czeka_na_załadowanie_się_strony()"
});
formatter.result({
  "duration": 5000600600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_wprowadza_w_pole_hasło_błędne_hasło()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_klika_na_przycisk_zaloguj()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});