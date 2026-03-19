# Teknisk dokumentation – backup

## Om projektet

Dette projekt er lavet som en del af Tema 8.
Vi har lavet et dynamisk website med HTML, CSS og JavaScript, hvor indholdet bliver hentet fra et Rest API.

Sitet består af flere sider, hvor brugeren kan:

- se en liste med indhold
- klikke sig videre til en detaljeside
- bruge filtrering
- udfylde en formular

## Links

- GitHub repository: https://github.com/Lo-fi-High-Standards/backup
- GitHub Pages: https://lo-fi-high-standards.github.io/backup/
- Figma: https://www.figma.com/design/1ZTOnBOrKk1LYN0q92WDmA/Tema-8--LoFi-High-Standard?m=auto&t=FYVAAIfckzNSNhI7-1
- Trello: https://trello.com/b/qhID39fl/backup-lo-fi-high-standards

---

## Projektstruktur

Projektet er opdelt i HTML, CSS og JavaScript-filer.

```
project/
├── index.html
├── companions.html
│   └── profile.html
├── about.html
├── book.html
├── pricing.html


├── css/
│   └── about.css
│   └── companions.css
│   └── custom.css
│   └── general.css
│   └── index.css
│   └── pricing.css
│   └── profile.css
├── js/
│   ├── idex.js
│   ├── about.js
│   ├── profile.js
│   └── book.js
└── README.md
```

### Filbeskrivelser

- **index.html** – fordien
- **companions.html** – viser forskellige kort med data fra API'et
- **profile.html** – viser detaljer, når man klikker ind på kort med data fra API'et
- **about.html** – fortæller om konceptet
- **book.html** – indeholder formularen
- **pricing.html** – fortæller om priserne
- **style.css** – styrer designet
- **JavaScript-filer** – styrer det dynamiske indhold på de forskellige sider

---

## Hvordan koden fungerer

Vi har opdelt JavaScript, så hver side, der skulle bruge det har sin egen fil. 

### index.js

Bruges på alle sider. Indeholder burgermenu.

### companions.js

Henter data fra Rest API'et og viser en liste med companions, som kan filtreres efter køn og sorteres efter alder, by, alfabetisk.

**Flow:**

1. Siden loader
2. JavaScript kører
3. Data hentes fra Rest API
4. Data bliver gennemgået med loop
5. HTML bliver indsat i DOM'en
6. Brugeren kan klikke på en companion

### profile.js

Bruges til detaljesiden. Den læser et id fra URL'en og henter derefter den rigtige companion-profil fra Rest API'et.

Det gør det muligt at genbruge den samme HTML-side til mange companion-profiler. I stedet for at lave én side per companion, bruger vi ét id i URL'en til at vise det rigtige indhold.

### book.js

Styrer formularen og validering af inputfelter.

Denne fil bruges til at sikre, at brugeren udfylder formularen korrekt. Det gør formularen mere brugervenlig og mindsker fejl.

---

## Navngivning

Vi har navngivet vores filer, variabler og funktioner så de så tydeligt som muligt er selvforklarende.

### Eksempler på variabler

```javascript
const userContainer;
const idContainer;
let ageData;
```

### Eksempler på funktioner

```javascript
getData();
sorter();
burgerClick();
validateForm();
```

Vi har brugt camelCase i JavaScript, fordi det gør koden mere ensartet og lettere at læse.

---

## Kommentarer i koden

Vi har kommenteret de steder i koden, hvor det giver mening.
Fx ved funktioner, fetch-kald og steder hvor der sker DOM-manipulation.

**Eksempel:**

```javascript
 .filter((user) => idContainer.includes(user.id)) //*includes = check if value exists//*

```

Vi har prøvet ikke at skrive kommentarer til helt åbenlyse ting, men kun dér hvor det hjælper forståelsen. I vores cssfiler har vi brugt det til bedre at kunne overskue hvor forskellige elementers styling ligger, da vi genbruger flere elementer på siderne.

---

## Data og JSON-struktur

Vi henter data fra et API i JSON-format.

**Et objekt kan fx se sådan ud:**

```json
{
  "id": 1,
  "firstName": "Emily",
  "lastName": "Johnson",
  "maidenName": "Smith",
  "age": 28,
  "gender": "female",
  "email": "emily.johnson@x.dummyjson.com",
  "phone": "+81 965-431-3024",
  "username": "emilys",
  "password": "emilyspass",
  "birthDate": "1996-5-30",
  "image": "...",
  "bloodGroup": "O-",
  "height": 193.24,
  "weight": 63.16,
  "eyeColor": "Green",
  "hair": {
    "color": "Brown",
    "type": "Curly"
  }
```

### Felter vi bruger

- **name** – companion navn
- **age** – alder på companion
- **city** - til at vise hvor companionen befinder sig
- **id** – bruges til at sende brugeren videre til detaljesiden, vi har desuden tilknyttet billeder til id'er, så den loader billedet når det specifikke id vælges - dette gjorde vi da der kun fandtes ikoner i API'et.
- **gender** – til at vise kønnet på companions, men også til at filtrere efter
- **height** - til at vise højden på companions
- **title** – jobtitel på companion
- **hair** – til at vise hvilken type hår companionen har


---

## Formular og validering

Vi har lavet en formular, hvor brugeren kan indtaste oplysninger.

**HTML-validering:**

- `required` – feltet skal udfyldes
- `type="email"` – validerer email-format
- `type="number"` – accepterer kun tal

Det sikrer, at brugeren ikke kan sende formularen, hvis felterne ikke er udfyldt korrekt.

---

## Git og branches

Vi har brugt GitHub til at samarbejde om projektet.

Vi har arbejdet med branches, så vi ikke sad og ændrede i det samme på samme tid.

Vi navngav branches alt efter hvilke elementer/funktioner der blev lavet.


### Eksempler på branches

- `about-desktop`
- `companions-filter-json`
- `header-styling`
- `custom-img`

### Workflow

1. Lave en branch
2. Kode en feature
3. Committe ændringer
4. Pushe til GitHub
5. Merge til main når det virkede

Det gjorde det nemmere at holde styr på, hvem der lavede hvad.

---

## Bæredygtighed

Vi har tænkt bæredygtighed ind i projektet ved at holde page weight under 250 kb samt en enkel informationasarkitektur.

**Tiltag:**

- Ingen videoer
- Ingen tunge frameworks
- Genbruge kode så meget som muligt
- Optimerede billeder i webp

---

## Udfordringer undervejs

En af vores udfordringer var at få data fra Rest API’et vist korrekt på siderne.
Det var også lidt svært at få id med videre i URL’en til detaljesiden.

**Løsninger:**

- Console.logge data undervejs
- Teste fetch-kald separat
- Bruge URLSearchParams
- Dele opgaverne mere tydeligt i gruppen

---

## Mulige forbedringer

Hvis vi skulle arbejde videre med projektet, kunne vi forbedre det ved at tilføje:

- Søgefunktion
- Error handling
- Loading state

---

## Gruppemedlemmer

- Annebeth Faurby Hansen
- Caroline Amalie Schytte Hemmingsen
- Julie Petersen Bosch
- Katrine Therkildsen Madsen
- Patricia Klindt Brokholm
