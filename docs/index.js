const queryParams = new URLSearchParams(document.location.search);
switch (queryParams.get("page")) {
  case "caisses":
    document
      .getElementById("ogTitle")
      .setAttribute("content", "Items du serveur");
    document
      .getElementById("ogDescription")
      .setAttribute(
        "content",
        "Trouvez votre item en couleur dans la plus grande liste du serveur 📦"
      );
    break;

  case "colors":
    document
      .getElementById("ogTitle")
      .setAttribute("content", "Générer des textes en couleur");
    document
      .getElementById("ogDescription")
      .setAttribute(
        "content",
        "Générer des noms d'items en couleur pour Minecraft (couleurs en &4) 🎨"
      );
    break;

  case "minage":
    document
      .getElementById("ogTitle")
      .setAttribute("content", "Rendement de la mine");
    document
      .getElementById("ogDescription")
      .setAttribute(
        "content",
        "Calculez votre rendement dans la mine en fonction de votre pioche 💵"
      );
    break;

  case "prestiges":
    document
      .getElementById("ogTitle")
      .setAttribute("content", "Calculez vos prestiges");
    document
      .getElementById("ogDescription")
      .setAttribute(
        "content",
        "Calculez le prix de vos prestiges d'un seul coup 📈"
      );
    break;

  default:
    break;
}
