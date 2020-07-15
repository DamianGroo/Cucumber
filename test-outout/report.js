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
  "line": 15,
  "name": "Użytkownik wprowadza poprawne dane logowania",
  "description": "",
  "id": "pierwszy-test;użytkownik-wprowadza-poprawne-dane-logowania",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@scenariusz3"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Użytkownika uruchamia strone serwisu",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Strona główna serwisu Media Expert jest wyświetlona",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Użytkownik klika na przycisk Twoje konto",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Użytkownik czeka na załadowanie się strony",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "użytkownik wprowadza w pole login swój login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "użytkownik wprowadza w pole hasło swoje hasło",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "użytkownik klika na przycisk zaloguj",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Strona powitalna jest wyświetlona",
  "keyword": "And "
});
formatter.match({
  "location": "PierwszyTest.użytkownika_uruchamia_strone_serwisu()"
});
formatter.result({
  "duration": 10021367400,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.strona_główna_serwisu_Media_Expert_jest_wyświetlona()"
});
formatter.result({
  "duration": 263904900,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_klika_na_przycisk_Twoje_konto()"
});
formatter.result({
  "duration": 5628657800,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_czeka_na_załadowanie_się_strony()"
});
formatter.result({
  "duration": 5000698100,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_wprowadza_w_pole_login_swój_login()"
});
formatter.result({
  "duration": 1292560000,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_wprowadza_w_pole_hasło_swoje_hasło()"
});
formatter.result({
  "duration": 1225026700,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_klika_na_przycisk_zaloguj()"
});
formatter.result({
  "duration": 2540143100,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.strona_powitalna_jest_wyświetlona()"
});
formatter.result({
  "duration": 5144311100,
  "status": "passed"
});
});