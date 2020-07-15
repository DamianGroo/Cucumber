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
  "line": 7,
  "name": "Scenariusz testowy numer jeden",
  "description": "",
  "id": "pierwszy-test;scenariusz-testowy-numer-jeden",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@scenariusz1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "daje ci slowo kluczowe",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "strona jest otwarta",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "wyszukujesz id elementu",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "szukasz miejsca do wpisania",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "klikasz na szukajke",
  "keyword": "And "
});
formatter.match({
  "location": "PierwszyTest.daje_ci_slowo_kluczowe()"
});
formatter.result({
  "duration": 8046752000,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.strona_jest_otwarta()"
});
formatter.result({
  "duration": 10792900,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.wyszukujesz_id_elementu()"
});
formatter.result({
  "duration": 6974600,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.szukasz_miejsca_do_wpisania()"
});
formatter.result({
  "duration": 6561800,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.klikasz_na_szukajke()"
});
formatter.result({
  "duration": 4077626700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "badamy strone Media Expert",
  "description": "",
  "id": "pierwszy-test;badamy-strone-media-expert",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@scenariusz2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "daje ci otwarta strone",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "sprawdzam tytul strony",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "zamykam strone",
  "keyword": "And "
});
formatter.match({
  "location": "PierwszyTest.daje_ci_otwarta_strone()"
});
formatter.result({
  "duration": 7978948000,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.sprawdzam_tytul_strony()"
});
formatter.result({
  "duration": 8107000,
  "status": "passed"
});
formatter.match({
  "location": "PierwszyTest.zamykam_strone()"
});
formatter.result({
  "duration": 4080231800,
  "status": "passed"
});
});