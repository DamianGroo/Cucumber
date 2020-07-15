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
  "line": 87,
  "name": "Sprawdzenie czy zastosowano właściwy kolor ikonki",
  "description": "",
  "id": "pierwszy-test;sprawdzenie-czy-zastosowano-właściwy-kolor-ikonki",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 86,
      "name": "@test6_sprawdzenieKoloru"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "Użytkownik uruchamia strone serwisu",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "Strona główna serwisu Media Expert jest wyświetlona",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "Pobranie koloru",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Test nr szesc zakonczony",
  "keyword": "And "
});
formatter.match({
  "location": "PierwszyTest.użytkownik_uruchamia_strone_serwisu()"
});
formatter.result({
  "duration": 8833075800,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.strona_główna_serwisu_Media_Expert_jest_wyświetlona()"
});
formatter.result({
  "duration": 347289900,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.Pobranie_koloru()"
});
formatter.result({
  "duration": 4173644200,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.test_nr_szesc_zakonczony()"
});
formatter.result({
  "duration": 170639700,
  "status": "passed"
});
});