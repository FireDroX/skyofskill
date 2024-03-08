<div align="center">
  <img src="src/assets/logo.png" alt="Logo" width="80" height="80">
  <h3 align="center">A <u>SkyOfSkill</u> WebPage</h3>
</div>

<br />

<ol>
  <li>
    <a href="#features">Features</a>
    <ul>
      <li><a href="#minage">Minage</a></li>
      <li><a href="#prestige">Prestiges</a></li>
      <li><a href="#colored-text">Colored Text</a></li>
    </ul>
  </li>
</ol>

<br />

[![React][React.js]][React-url]

## Features

---

### Minage

_Formule du calcul théorique de combien chaque bloc de votre mine vous donne en fonction de votre pioche ainsi que du boost que vous allez utiliser._

```js
const blocValue = mineValue * (picFortune + 1) * multiplyBoost;
```

Avec ce calcul nous pouvons estimer combien faisons nous toute les 30 secondes et toutes les 15 minutes.

---

### Prestiges

Permet de calculer le prix du passage de un ou de plusieurs prestiges, ainsi que de visionner l'évolution des prix.
<br />
_PS : Les prix peuvent changer dans le temps._

```js
export const prestiges = [
  ...
  { name: "P69", prix: 55000000000000 },
  { name: "P70", prix: 150000000000000 },
  ...
]
```

---

### Colored Text

Formate un texte que tu souhaites avec des couleurs et des modifications infinie !

```
Hello World
&fHello&r&4&l World&r
```
```
Hi There
§2§nHi§r§b§l There§r
```

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
