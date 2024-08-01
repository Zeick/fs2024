```mermaid
sequenceDiagram
    participant käyttäjä
    participant selain
    participant palvelin
    
    käyttäjä->>selain: käyttäjä kirjoittaa www-osoitteen osoitekenttään ja painaa ENTER
    selain->>palvelin: GET \spa
    activate palvelin
    Note right of selain: palautetaan HTML-tiedosto
    palvelin-->>selain: status 200, HTML
    deactivate palvelin
    
    selain->>palvelin: GET /main.css
    activate palvelin
    palvelin-->>selain: status 200, CSS-tyylitiedosto
    deactivate palvelin
    
    selain->>palvelin: GET /spa.js
    activate palvelin
    palvelin-->>selain: status 200, JavaScript-tiedosto
    deactivate palvelin

    selain->>palvelin: GET /data.json
    activate palvelin
    palvelin-->>selain: status 200, JSON-tiedosto
    deactivate palvelin

    selain->>käyttäjä: selain näyttää valmiin HTML-sivun
```
