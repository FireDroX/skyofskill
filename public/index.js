document.addEventListener("DOMContentLoaded", function () {
  const queryParams = new URLSearchParams(document.location.search);
  switch (queryParams.get("page")) {
    case "caisses":
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute("content", "Items du serveur");
      document
        .querySelector('meta[property="og:description"]')
        .setAttribute(
          "content",
          "Trouvez votre item en couleur dans la plus grande liste du serveur 📦"
        );
      break;

    case "colors":
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute("content", "Générer des textes en couleur");
      document
        .querySelector('meta[property="og:description"]')
        .setAttribute(
          "content",
          "Générer des noms d'items en couleur pour Minecraft (couleurs en &4) 🎨"
        );
      break;

    case "minage":
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute("content", "Rendement de la mine");
      document
        .querySelector('meta[property="og:description"]')
        .setAttribute(
          "content",
          "Calculez votre rendement dans la mine en fonction de votre pioche 💵"
        );
      break;

    case "prestiges":
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute("content", "Calculez vos prestiges");
      document
        .querySelector('meta[property="og:description"]')
        .setAttribute(
          "content",
          "Calculez le prix de vos prestiges d'un seul coup 📈"
        );
      break;

    default:
      break;
  }
});
