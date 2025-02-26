# Shorts Tracker - Strona Internetowa

To jest projekt strony internetowej dla aplikacji Shorts Tracker, która pomaga kontrolować czas spędzany na oglądaniu krótkich filmów w mediach społecznościowych.

## 📱 Co to jest?

Strona składa się z dwóch podstron:
- **Strona główna** - przedstawia aplikację i zachęca do pobrania
- **O nas** - opisuje projekt i jego cele

## 📂 Pliki w projekcie

Żeby strona działała, potrzebujesz tych plików:

```
shorts-tracker-web/
├── public/
│   ├── index.html       # Główny plik HTML
│   ├── favicon.ico      # Ikonka strony w przeglądarce
│   └── _redirects       # Ważny plik dla Netlify!
├── src/
│   ├── index.js         # Plik startowy
│   ├── index.css        # Style CSS i konfiguracja Tailwind
│   ├── App.js           # Główny komponent aplikacji
│   ├── components/      # Folder z komponentami
│   │   ├── HomePage.js  # Strona główna
│   │   └── AboutPage.js # Strona O nas
│   └── assets/          # Obrazki i ikony
│       └── icon.png     # Ikona aplikacji (512x512 pikseli)
├── package.json         # Lista zależności i skryptów
├── tailwind.config.js   # Konfiguracja Tailwind CSS
├── postcss.config.js    # Konfiguracja PostCSS
└── README.md            # Ten plik, który czytasz
```

## 🚀 Jak to uruchomić lokalnie?

### Krok 1: Otwórz Terminal

- Jeśli jesteś w VS Code i otworzyłeś ten projekt, to wciśnij Ctrl + Shift + ` i przejdź do kroku 3
- Na Windows: Naciśnij `Win + R`, wpisz `cmd` i naciśnij Enter
- Na Mac: Naciśnij `Cmd + Spacja`, wpisz `terminal` i naciśnij Enter

### Krok 2: Przejdź do folderu projektu

Wpisz:
```
cd ścieżka/do/twojego/folderu/Strona
```

### Krok 3: Zainstaluj potrzebne rzeczy

Wpisz:
```
npm install
```
i poczekaj, aż się skończy.

### Krok 4: Uruchom stronę

Wpisz:
```
npm start
```

Powinna otworzyć się przeglądarka z Twoją stroną pod adresem `http://localhost:3000`

## 🌍 Jak działa wdrażanie strony na Netlify?

Nasza strona jest już połączona z Netlify poprzez GitHub! Za każdym razem, gdy ktoś zrobi push do repozytorium, Netlify automatycznie:

1. Pobiera najnowszą wersję kodu
2. Uruchamia `npm run build`
3. Wdraża nową wersję strony

### Jak to działa?

1. Pracujesz nad zmianami lokalnie
2. Robisz commit i push do GitHub
3. Czekasz około 1-2 minuty
4. Twoje zmiany są już na żywo!

### Ważne - Utwórz plik _redirects

Aby strona działała poprawnie na Netlify, utwórz plik `public/_redirects` z treścią:
```
/*  /index.html  200
```

## Co za co odpowiada?

- **index.js** - uruchamia całą aplikację
- **App.js** - zarządza przełączaniem między podstronami
- **HomePage.js** - pokazuje stronę główną
- **AboutPage.js** - pokazuje podstronę "O nas"
- **package.json** - zawiera listę potrzebnych programów
- **_redirects** - sprawia, że działa przełączanie podstron na Netlify

## 🎨 Jak zmienić wygląd?

- Kolory, czcionki i wygląd możesz zmienić w plikach **HomePage.js** i **AboutPage.js**
- Aby dodać swoją ikonę, zastąp plik w `src/assets/icon.png` (użyj obrazka o wymiarach 512x512 pikseli)

## 🆘 Potrzebujesz pomocy?

Jeśli coś nie działa, sprawdź:
1. Czy wszystkie pliki są na swoim miejscu
2. Czy uruchomiłeś `npm install`
3. Czy nie ma błędów w terminalu

### Typowe problemy:

- **Brak stylów Tailwind**: Upewnij się, że masz pliki `tailwind.config.js` i `postcss.config.js` w głównym folderze projektu. Po dodaniu tych plików uruchom `npm install` i `npm start` ponownie.
- **Błąd importu komponentów**: Upewnij się, że w plikach `HomePage.js` i `AboutPage.js` używasz `export default`, a w `App.js` importujesz bez nawiasów klamrowych.
- **Brak modułów**: Uruchom `npm install` aby zainstalować wszystkie zależności.
- **Problem z routingiem**: Sprawdź, czy plik `_redirects` jest w folderze `public`.

To wszystko! Twoja strona powinna działać i wyglądać super! 😎