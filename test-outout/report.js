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
  "line": 35,
  "name": "Użytkownik wyszukuje konkretny produkt",
  "description": "",
  "id": "pierwszy-test;użytkownik-wyszukuje-konkretny-produkt",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@test3_WyszukanieProduktu"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Użytkownika uruchamia strone serwisu",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Strona główna serwisu Media Expert jest wyświetlona",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Użytkownik klika na przycisk Twoje konto",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Użytkownik czeka na załadowanie się strony",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "użytkownik wprowadza w pole login swój login",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "użytkownik wprowadza w pole hasło swoje hasło",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "użytkownik klika na przycisk zaloguj",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Strona powitalna jest wyświetlona",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Użytkownik wpisuje szukany produkt w wyszukiwarke",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Użytkownik czeka na znalezienie produktu",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Użytkownik klika na znaleziony produkt",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Weryfikacja tytulu strony z wyszukanym produktem",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Test nr trzy zakonczony",
  "keyword": "And "
});
formatter.match({
  "location": "PierwszyTest.użytkownika_uruchamia_strone_serwisu()"
});
formatter.result({
  "duration": 10685767900,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.strona_główna_serwisu_Media_Expert_jest_wyświetlona()"
});
formatter.result({
  "duration": 42582800,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_klika_na_przycisk_Twoje_konto()"
});
formatter.result({
  "duration": 5206329800,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_czeka_na_załadowanie_się_strony()"
});
formatter.result({
  "duration": 5000437600,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_wprowadza_w_pole_login_swój_login()"
});
formatter.result({
  "duration": 1322244200,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_wprowadza_w_pole_hasło_swoje_hasło()"
});
formatter.result({
  "duration": 1232224500,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_klika_na_przycisk_zaloguj()"
});
formatter.result({
  "duration": 2265538800,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.strona_powitalna_jest_wyświetlona()"
});
formatter.result({
  "duration": 6055555200,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_wpisuje_szukany_produkt_w_wyszukiwarke()"
});
formatter.result({
  "duration": 1448915500,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_czeka_na_znalezienie_produktu()"
});
formatter.result({
  "duration": 6001684300,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.użytkownik_klika_na_znaleziony_produkt()"
});
formatter.result({
  "duration": 5403499200,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.Weryfikacja_tytulu_strony_z_wyszukanym_produktem()"
});
formatter.result({
  "duration": 1977795400,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.test_nr_trzy_zakonczony()"
});
formatter.result({
  "duration": 314674000,
  "status": "passed"
});
});