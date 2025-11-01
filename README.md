# Procesverslag FED


## Lisa Mandemakers

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
Lisa Mandemakers

  #### Je startniveau:
Rood

  #### Je focus:
responsive
 
</details>


## Je website

<details open>
  <summary>Website informatie</summary>

  ### Je opdracht:
  Ik heb gekozen voor de [Framer Website](https://www.framer.com/?via=quy-vu-manh&dub_id=lDEqkcLfbW2z5nyH&gad_source=1).

  #### Screenshot(s) van de eerste pagina (small screen): 
 [De home page](https://www.framer.com/?via=quy-vu-manh&dub_id=lDEqkcLfbW2z5nyH&gad_source=1)
 
  <img src="/assets/read-me-img/Framer-Home-Phone.png"  width="375px" alt="omschrijving van de pagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  De Enterprise page
  
  <img src="/assets/read-me-img/Framer-Enterprise-Phone.png"  width="375px" alt="omschrijving van de pagina">
 
</details>


## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen

  #### Kansen voor verbetering Framer voor de screenreader:
* Hij ziet wel de links maar niet de images of logo’s 
* Je krijgt bij de text blokken met knoppen “learn more” alleen dat te horen, je weet dus helemaal niet waar dat naar verwijst
* Bij sommige links leest die de hele https request voor, dit kan best verwarrend zijn 
* Hij slaat een hele sectie over die met alleen teksten 
* Ze maken alleen maar gebruik van divs, classes, I D’s ipv gewone semantics zoals “main” “footer” “header”
* Sanne gaat letten op de structuur en de koppen en de alt teksten 

#### Wat wel goed is:
* Consistente opbouw met herbruikbare componenten: De site is duidelijk modulair opgebouwd, waardoor onderdelen visueel en technisch herkenbaar zijn. Dit helpt bij onderhoud en uitbreiding.

* Heldere hiërarchie van contentblokken: Hoewel er weinig semantische tags zijn, is de volgorde van de secties logisch en voorspelbaar. Dit geeft een zekere consistentie.

* Responsiviteit goed uitgewerkt: De site past zich netjes aan verschillende schermgroottes aan. Voor screenreaders is dit indirect gunstig, omdat content op mobiel niet ineens verdwijnt of verkeerd wordt ingeladen.
</details>


## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### 1. De home pagina: 
  <img src="/assets/read-me-img/Framer-Home-Phone-1-breakdownschets.jpg" width="375px" alt="breakdown van de hele pagina">

  ### 2. De enterprise pagina: 
  <img src="/assets/read-me-img/Framer-Home-Phone-1-breakdownschets.jpg" width="375px" alt="breakdown van de hele pagina">
    
  <!-- ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel"> -->
</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
Mijn Framer-website is sinds gisteren veranderd, wat een tegenvaller is, maar ik heb gelukkig nog wel screenshots die ik kan gebruiken. Hierdoor kan ik niet alles meer precies nachecken, maar ik wil alsnog bespreken hoe ik mijn code kan vereenvoudigen door minder te nesten en onnodige divs te vermijden, terwijl ik de HTML semantisch correct houd. Ook wil ik de aanpak van de slider op de homepage bekijken, mijn breakdownschets nagaan en controleren of ik divs en classes op de juiste manier heb gebruikt. Daarnaast wil ik de opzet van mijn CSS doornemen om te zorgen dat deze overzichtelijk en logisch is.

#### Werken met Grid
Deze week gingen we aan de slag met grid, wat ik zeker ook in mijn website ga toepassen, hier heb even een overzicht voor mezelf geschetst zodat ik weet wat voor grid layout ik moet maken:

  <img src="/assets/read-me-img/gridphone.png" width="375px" alt="Grid on homepage">
  <img src="/assets/read-me-img/grid-drawing.png" width="375px" alt="Grid drawing">

  

  

  ### Agenda voor meeting
  samen met je groepje opstellen

  | Robin Yildiz   | Kaa Leung Ho         | Kaj-Benjamin Sitanala    | Lisa Mandemakers (ik)       |
  | ---            | ---                  | ---          | ---              |
  | Breakdownschets nakijken | Breakdownschets nakijken          | Breakdownschets nakijken    |  Ik wil minder gaan nesten en onnodige divs gbruiken, hoe pak ik dit aan   |
  | Html structuur controleren of het matcht met breakdownschets | Html structuur controleren of het matcht met breakdownschets | Html structuur controleren of het matcht met breakdownschets | Kijken of mijn Html semantisch correct is |  Hoe ga ik de slider op de homepage aanpakken?
  | Groenlicht krijgen voor css          | Groenlicht krijgen voor css               | Groenlicht krijgen voor css           | Breakdownschets nagaan          |
|| | een erg volle css | De divs / classes op sommige plekken, correct gebruikt of niet?| 
| | | | Css  opzet checken |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Zorg dat de taal goed klopt
- Weten hoe je in javascript zonder id en classes kan selecteren ?
    - Je tikt letterlijk gewoon:  document.queryselector(“header nav button”)
- Hamburger menu mag in een button
- Link voor carrousel met css: https://chrome.dev/carousel-configurator/
    - Werk alleen in Chrome

- Ik moet nog letten op de volgorde van de heading
- Svg’s zijn goed om te gebruiken
    - En makkelijk stijlbaar 

- Webarchive.org om oude webversies te kunnen bekijken

- Je kunt met de screenreader alle html elementen checken, lanmarks: voor navigatie
- Ctrl opt U en met pijltjes links rechts en boven naar beneden om dingen te selecteren

- Je moet a links die telkens het zelfde zijn aanpassen door er onzichtare span zin te zetten en hier de verduidelijkte naam in


</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Robin Yildiz    | Kaa Leung Ho          | Kaj-Benjamin Sitanala     | Lisa Mandemakers (ik)        |
  | ---            | ---                | ---          | ---              |
  | HTML controleren  | De verbeterde html van de 1e webpagina nakijken             |  HTML controleren  | Hoe pak ik de grid layout aan want er zit een hele kleine schaduw in    |
  | CSS controleren | Flexbox in de eerste en tweede navigatie controleren | CSS controleren | Waarom werkt een scrollstate wel op `<img>` en niet op `<li>`
  |             | Hero-section controleren                | ...          | ...              | Hoe kan ik mijn ticker, smooth maken |
 | ...            | Hamburger menu: css of javascript                | ...          | ...              |Mag je bij onzichtbare tekst: display none doen of visibility hidden? | 
 | ...            | Vraag bij uitklapbare dropdown menu :hover - hoe uitwerken in javascript?                 | Eerste opzet html van de tweede webpagina controleren (met name webshop gedeelte)          | ...              |
 | ...            | ...                | ...          | ...              |
 | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Robin Yildiz     | Kaa Leung Ho         | Kaj-Benjamin Sitanala    | Lisa Mandemakers (ik)        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>