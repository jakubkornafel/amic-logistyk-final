# Instrukcje deploymentu na Netlify

## Opcja 1: Drag & Drop (ZIP)

1. **Przygotuj pliki lokalnie:**
   ```bash
   npm run build
   ```

2. **Spakuj folder `dist/`** do ZIP

3. **W Netlify Dashboard:**
   - Przejdź do Sites
   - Przeciągnij ZIP z folderem `dist/` na "Deploy manually"

## Opcja 2: Połączenie z GitHub (Automatyczne)

1. **W Netlify Dashboard:**
   - New site from Git
   - Wybierz swoje repo GitHub
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Ustaw Environment Variables:**
   - Site settings → Environment variables
   - Dodaj:
     - `LOGIN_USERNAME` = `Dominik`
     - `LOGIN_PASSWORD` = `DomAmic2025`

## Uwagi
- Przy opcji 1 używane są domyślne dane logowania z `generate-config.js`
- Przy opcji 2 możesz ustawić własne credentials przez ENV variables
- Plik `config.js` jest generowany automatycznie podczas build