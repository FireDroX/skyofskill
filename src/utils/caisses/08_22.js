/**
 * HELMET : 0
 * CHESTPLATE : 1
 * LEGGINGS : 2
 * BOOTS : 3
 * SWORD : 4
 * AXE : 5
 * BOW : 6
 * PICKAXE : 7
 */

const caisse = {
  title: "CANICULE",
  items: [
    {
      name: "&r&a&kt&r&e&kt&r&6❂&r&e&kt&r&a&kt&r&6&l K&r&e&la&r&6&lt&r&e&la&r&6&ln&r&e&la  &r&a&kt&r&e&kt&r&6❂&r&e&kt&r&a&kt&r&6",
      defaultName: "Katana",
      type: 4,
      enchants: [
        "&aTranchant &r&237&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&f&kt&r&c&kt&r&4❂&r&c&kt&r&f&kt&r&4&l S&r&c&la&r&4&lb&r&c&lr&r&4&le &r&c&lE&r&4&ln&r&c&lf&r&4&ll&r&c&la&r&4&lm&r&c&lm&r&4&lé  &r&f&kt&r&c&kt&r&4❂&r&c&kt&r&f&kt&r&4",
      defaultName: "Sabre Enflammé",
      type: 4,
      enchants: [
        "&aTranchant &r&240&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&a&kt&r&e&kt&r&6❂&r&e&kt&r&a&kt&r&6&l P&r&e&li&r&6&lo&r&e&lc&r&6&lh&r&e&le &r&6&lF&r&e&lo&r&6&ll&r&e&ll&r&6&le  &r&a&kt&r&e&kt&r&6❂&r&e&kt&r&a&kt&r&6",
      defaultName: "Pioche Folle",
      type: 7,
      enchants: [
        "&bEfficency &r&3150&r",
        "&eSolidité &r&650&r",
        "&aFortune &r&2150&r",
      ],
    },
    {
      name: "&r&e&kt&r&b&kt&r&9❂&r&b&kt&r&e&kt&r&9&l M&r&b&la&r&9&lr&r&b&lt&r&9&le&r&b&la&r&9&lu &r&b&ld&r&9&le &r&b&ll&r&9&la&r&b&lv&r&9&le &r&e&kt&r&b&kt&r&9❂&r&b&kt&r&e&kt&r&9",
      defaultName: "Marteau de lave",
      type: 7,
      enchants: [
        "&bEfficency &r&3150&r",
        "&eSolidité &r&6100&r",
        "&aFortune &r&2180&r",
      ],
    },
    {
      name: "&r&b&kt&r&d&kt&r&5❂&r&d&kt&r&b&kt&r&5&l M&r&d&la&r&5&li&r&d&ll&r&5&ll&r&d&le&r&5&lt &r&d&lB&r&5&lo&r&d&lu&r&5&li&r&d&ll&r&5&ll&r&d&la&r&5&ln&r&d&lt  &r&b&kt&r&d&kt&r&5❂&r&d&kt&r&b&kt&r&5",
      defaultName: "Maillet Bouillant",
      type: 7,
      enchants: [
        "&bEfficency &r&3150&r",
        "&eSolidité &r&6100&r",
        "&aFortune &r&2220&r",
      ],
    },
    {
      name: "&r&f&kt&r&c&kt&r&4❂&r&c&kt&r&f&kt&r&4&l M&r&c&la&r&4&lr&r&c&lt&r&4&le&r&c&la&r&4&lu &r&c&lP&r&4&li&r&c&lq&r&4&lu&r&c&le&r&4&lu&r&c&lr  &r&f&kt&r&c&kt&r&4❂&r&c&kt&r&f&kt&r&4",
      defaultName: "Marteau Piqueur",
      type: 7,
      enchants: [
        "&bEfficency &r&3250&r",
        "&eSolidité &r&6100&r",
        "&aFortune &r&2280&r",
      ],
    },
    {
      name: "&r&f&kt&r&c&kt&r&4❂&r&c&kt&r&f&kt&r&4&l B&r&c&lo&r&4&lb &r&c&lG&r&4&lu&r&c&ls&r&4&lh&r&c&li &r&f&kt&r&c&kt&r&4❂&r&c&kt&r&f&kt&r&4",
      defaultName: "Bob Gushi",
      type: 0,
      enchants: ["&b&lProtection &r&3&l35&r", "&eSolidité &r&635&r"],
    },
    {
      name: "&r&f&kt&r&c&kt&r&4❂&r&c&kt&r&f&kt&r&4&l D&r&c&lé&r&4&lb&r&c&la&r&4&lr&r&c&ld&r&4&le&r&c&lu&r&4&lr  &r&f&kt&r&c&kt&r&4❂&r&c&kt&r&f&kt&r&4",
      defaultName: "Débardeur",
      type: 1,
      enchants: ["&b&lProtection &r&3&l35&r", "&eSolidité &r&635&r"],
    },
    {
      name: "&r&f&kt&r&c&kt&r&4❂&r&c&kt&r&f&kt&r&4&l S&r&c&lh&r&4&lo&r&c&lr&r&4&lt &r&c&ld&r&4&le &r&c&lb&r&4&la&r&c&li&r&4&ln  &r&f&kt&r&c&kt&r&4❂&r&c&kt&r&f&kt&r&4",
      defaultName: "Short de bain",
      type: 2,
      enchants: ["&b&lProtection &r&3&l35&r", "&eSolidité &r&635&r"],
    },
    {
      name: "&r&f&kt&r&c&kt&r&4❂&r&c&kt&r&f&kt&r&4&l C&r&c&ll&r&4&la&r&c&lq&r&4&lu&r&c&le&r&4&lt&r&c&lt&r&4&le  &r&f&kt&r&c&kt&r&4❂&r&c&kt&r&f&kt&r&4",
      defaultName: "Claquette",
      type: 3,
      enchants: ["&b&lProtection &r&3&l35&r", "&eSolidité &r&635&r"],
    },
    {
      name: "&r&b&kt&r&d&kt&r&5❂&r&d&kt&r&b&kt&r&5&l M&r&d&la&r&5&lc&r&d&lh&r&5&le&r&d&lt&r&5&lt&r&d&le &r&5&lV&r&d&li&r&5&lo&r&d&ll&r&5&le&r&d&ln&r&5&lt&r&d&le  &r&b&kt&r&d&kt&r&5❂&r&d&kt&r&b&kt&r&5",
      defaultName: "Machette Violente",
      type: 5,
      enchants: [
        "&aTranchant &r&240&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
