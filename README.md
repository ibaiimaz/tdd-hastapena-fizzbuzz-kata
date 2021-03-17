# Eskakizunak

Idatzi programa bat 1 eta 100 arteko zenbakiak itzuliko dituena baina ondorengo baldintzak betez:
- 3ren multiploen kasuan, zenbakiaren ordez Fizz itzuliko du
- 5en multiploen kasuan, zenbakiaren ordez Buzz itzuliko du
- 3 eta 5en multiploen kasuan, zenbakiaren ordez FizzBuzz itzuliko du

<br>

### Emaitza adibidea
[ "1", "2", "Fizz", "4", "Buzz", "6", ... , "14", "FizzBuzz", "16" ... , 100 ]

<br>
<br>
<br>

## Mocha testak

### Instalazioa

Joan jatorrizko direktoriora (`package.json` dagoen tokira) eta exekutatu:

```bash
npm install
```

### Testak exekutatzen

Testak behin exekutatzeko:

```bash
npm test
```

Testak exekutatu eta aldaketa bakoitzaren ondoren automatikoki berriz exekutatzeko:

```bash
npm run tdd
```

Testak kode estaldurarekin exekutatzeko:

```bash
npm run coverage
```

#### Zer dakar

* Mocha testak exekutatzeko
* [Sinon JS](http://sinonjs.org/)  stub, spy eta mock-ak behar direnerako
* [Chai](http://chaijs.com/api/bdd) asertzioetarako,
  [`sinon-chai` plugin](https://github.com/domenic/sinon-chai) bidez hedaturik.
  * Defektuz `Expect` estiloa erabiltzen du baina honen ordez `Should` erabil daiteke `test/common.js` fitxategian aldaketa eginez
