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
  title: "TENUE DE SOIREE",
  items: [
    {
      name: "&r&f&kt&r&6✯&r&f&kt&r&d&l &r&e&lPaille &r&f&len&r&e&l Or &r&f&kt&r&6✯&r&f&kt&r&d&l",
      defaultName: "Paille en Or",
      type: 4,
      enchants: [
        "&aTranchant &r&245&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&6&l&kt&r&e&ktt&r&b✯&r&e&ktt&r&6&l&kt&r&6&l B&r&e&louteille &r&6&lde C&r&e&lhampagne &r&6&l&kt&r&e&ktt&r&b✯&r&e&ktt&r&6&l&kt&r&6&l",
      defaultName: "Bouteille de Champagne",
      type: 4,
      enchants: [
        "&aTranchant &r&250&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&a&l&ki&r&f&kt&r&a✯&r&f&kt&r&a&l&kt&r&a&l P&r&f&li&r&a&lo&r&f&lc&r&a&lh&r&f&le &r&a&ld&r&f&le &r&a&l2023 &r&a&l&ki&r&f&kt&r&a✯&r&f&kt&r&a&l&kt&r&a&l",
      defaultName: "Pioche de 2023",
      type: 7,
      enchants: [
        "&bEfficency &r&3150&r",
        "&eSolidité &r&650&r",
        "&aFortune &r&2350&r",
      ],
    },
    {
      name: "&r&f◘&r&d&kt&r&5&kt&r&d​❤&r&5&kt&r&d&kt&r&f◘&r&5&l &r&5&lA&r&d&ls&r&5&lp&r&d&li&r&5&lr&r&d&la&r&5&lt&r&d&le&r&5&lu&r&d&lr&r&5&l à &r&d&lC&r&5&la&r&d&ld&r&5&le&r&d&la&r&5&lu&r&d&lx &r&f◘&r&d&kt&r&5&kt&r&d​❤&r&5&kt&r&d&kt&r&f◘&r&5&l",
      defaultName: "Aspirateur à Cadeaux",
      type: 7,
      enchants: [
        "&bEfficency &r&3150&r",
        "&eSolidité &r&6100&r",
        "&aFortune &r&2450&r",
      ],
    },
    {
      defaultName: "???",
      type: 7,
      enchants: [
        "&bEfficency &r&3???&r",
        "&eSolidité &r&6???&r",
        "&aFortune &r&2???&r",
      ],
    },
    {
      name: "&r&6&kt&r&f&kt&r&e✮&r&f&kt&r&6&kt&r&6&l P&r&e&le&r&6&lr&r&e&lc&r&6&le&r&e&lu&r&6&ls&r&e&le &r&6&ld&r&e'&r&6&lé&r&e&lt&r&6&lo&r&e&li&r&6&ll&r&e&le&r&6&ls &r&6&kt&r&f&kt&r&e✮&r&f&kt&r&6&kt&r&6&l",
      defaultName: "Perceuse d'étoiles",
      type: 7,
      enchants: [
        "&bEfficency &r&3500&r",
        "&eSolidité &r&6100&r",
        "&aFortune &r&2500&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&kt&r&5✯&r&f&kt&r&d&l T&r&f&lenue &r&d&lde S&r&f&loirée &r&f&kt&r&5✯&r&f&kt&r&d&l",
      defaultName: "Tenue de Soirée",
      type: 0,
      enchants: ["&b&lProtection &r&3&l45&r", "&eSolidité &r&645&r"],
    },
    {
      name: "&r&f&kt&r&5✯&r&f&kt&r&d&l T&r&f&lenue &r&d&lde S&r&f&loirée &r&f&kt&r&5✯&r&f&kt&r&d&l",
      defaultName: "Tenue de Soirée",
      type: 1,
      enchants: ["&b&lProtection &r&3&l45&r", "&eSolidité &r&645&r"],
    },
    {
      name: "&r&f&kt&r&5✯&r&f&kt&r&d&l T&r&f&lenue &r&d&lde S&r&f&loirée &r&f&kt&r&5✯&r&f&kt&r&d&l",
      defaultName: "Tenue de Soirée",
      type: 2,
      enchants: ["&b&lProtection &r&3&l45&r", "&eSolidité &r&645&r"],
    },
    {
      name: "&r&f&kt&r&5✯&r&f&kt&r&d&l T&r&f&lenue &r&d&lde S&r&f&loirée &r&f&kt&r&5✯&r&f&kt&r&d&l",
      defaultName: "Tenue de Soirée",
      type: 3,
      enchants: ["&b&lProtection &r&3&l45&r", "&eSolidité &r&645&r"],
    },
    {
      name: "&r&9&l&kt&r&3&kt&r&b&kt&r&f✯&r&b&kt&r&3&kt&r&9&l&kt&r&9&l L&r&3&la &r&b&lH&r&9&la&r&3&lc&r&b&lh&r&9&le &r&b&ld&r&3&le &r&9&l2&r&3&l0&r&b&l2&r&9&l3 &r&9&l&kt&r&3&kt&r&b&kt&r&f✯&r&b&kt&r&3&kt&r&9&l&kt&r&9&l",
      defaultName: "La Hache de 2023",
      type: 5,
      enchants: [
        "&aTranchant &r&250&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
