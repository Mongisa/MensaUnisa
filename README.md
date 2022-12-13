# MensaUnisa
Pacchetto **non ufficiale** che permette di ottenere il link del menù del giorno della mensa UNISA (in formato pdf).

Usa `npm install @mongisa/mensaunisa` per installare il pacchetto.

⚠️ **ATTENZIONE** ⚠️

Non essendo un pacchetto ufficiale dell'Università è possibile che possano verificarsi dei malfunzionamenti.

## Funzioni disponibili

### ```getLunch()```
Questa funzione permette di ottenere il link al pdf del pranzo.

**Input**: nessuno

**Output**: oggetto (segue un esempio)

```javascript
//Esempio output funzione getLunch()
{
  type: "Pranzo",
  link: "..."
}
//Con ... si intende il link del file pdf
```

#### Esempio di codice

```javascript
const mensaUnisa = require('@mongisa/mensaunisa')

mensaUnisa.getLunch().then((result) => {
    console.log(result.type);
    console.log(result.link);
}).catch((err) => {
    console.error(err);
});
/*
  Se non si verificano errori dovrebbe restituire due stringhe in output:
  Pranzo
  ...
*/
```

### ```getDinner()```
Questa funzione permette di ottenere il link al pdf della cena (se disponibile).

**Input**: nessuno

**Output**: oggetto (segue un esempio)

```javascript
//Esempio output funzione getDinner()
{
  type: "Cena",
  link: "..."
}
//Con ... si intende il link del file pdf
```

#### Esempio di codice

```javascript
const mensaUnisa = require('@mongisa/mensaunisa')

mensaUnisa.getDinner().then((result) => {
    console.log(result.type);
    console.log(result.link);
}).catch((err) => {
    console.error(err);
});
/*
  Se non si verificano errori dovrebbe restituire due stringhe in output:
  Cena
  ...
*/
```