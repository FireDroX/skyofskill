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
  title: "NOEL",
  items: [
    {
      defaultName: "???",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      defaultName: "???",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      defaultName: "???",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&b&kt&r&3​☃&r&b&kt&r&b&l Pè&r&f&lre &r&b&lNo&r&f&lël &r&b&kt&r&3​☃&r&b&kt&r&6&l",
      defaultName: "Père Noël",
      type: 4,
      enchants: [
        "&aTranchant &r&244&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      defaultName: "???",
      type: 4,
      enchants: [
        "&aTranchant &r&2??&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&b&l&ki&r&f&kt&r&b​☃&r&f&kt&r&b&l&kt&r&b&l P&r&f&li&r&b&lo&r&f&lc&r&b&lh&r&f&le &r&b&lA&r&f&lv&r&b&la&r&f&ll&r&b&la&r&f&ln&r&b&lc&r&f&lh&r&b&le &r&b&l&ki&r&f&kt&r&b​☃&r&f&kt&r&b&l&kt&r&b&l",
      defaultName: "Pioche Avalanche",
      type: 7,
      enchants: [
        "&bEfficency &r&3150&r",
        "&eSolidité &r&650&r",
        "&aFortune &r&2325&r",
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
      name: "&r&b&kt&r&f&kt&r&b​⚓&r&f&kt&r&b&kt&r&1&l &r&3&lP&r&b&le&r&f&lr&r&3&lc&r&b&le&r&f&lu&r&3&ls&r&b&le&r&f&l d&r&3&lu &r&b&lP&r&f&lè&r&3&lr&r&b&le &r&f&lN&r&3&lo&r&b&lë&r&f&ll &r&b&kt&r&f&kt&r&b​⚓&r&f&kt&r&b&kt&r&1&l",
      defaultName: "Perceuse du Père Noël",
      type: 7,
      enchants: [
        "&bEfficency &r&3300&r",
        "&eSolidité &r&6100&r",
        "&aFortune &r&2500&r",
      ],
    },
    {
      name: "&r&b&kt&r&3​☃&r&b&kt&r&b&l Pè&r&f&lre &r&b&lNo&r&f&lël &r&b&kt&r&3​☃&r&b&kt&r&6&l",
      defaultName: "Père Noël",
      type: 0,
      enchants: ["&b&lProtection &r&3&l44&r", "&eSolidité &r&644&r"],
    },
    {
      name: "&r&b&kt&r&3​☃&r&b&kt&r&b&l Pè&r&f&lre &r&b&lNo&r&f&lël &r&b&kt&r&3​☃&r&b&kt&r&6&l",
      defaultName: "Père Noël",
      type: 1,
      enchants: ["&b&lProtection &r&3&l44&r", "&eSolidité &r&644&r"],
    },
    {
      name: "&r&b&kt&r&3​☃&r&b&kt&r&b&l Pè&r&f&lre &r&b&lNo&r&f&lël &r&b&kt&r&3​☃&r&b&kt&r&6&l",
      defaultName: "Père Noël",
      type: 2,
      enchants: ["&b&lProtection &r&3&l44&r", "&eSolidité &r&644&r"],
    },
    {
      name: "&r&b&kt&r&3​☃&r&b&kt&r&b&l Pè&r&f&lre &r&b&lNo&r&f&lël &r&b&kt&r&3​☃&r&b&kt&r&6&l",
      defaultName: "Père Noël",
      type: 3,
      enchants: ["&b&lProtection &r&3&l44&r", "&eSolidité &r&644&r"],
    },
    {
      name: "&r&a&l&kt&r&2&kt&r&a&kt&r&f​☃&r&a&kt&r&2&kt&r&a&l&kt&r&2&l M&r&a&la&r&2&lr&r&a&lt&r&2&li&r&a&ln&r&2&le&r&a&lt &r&2&ld&r&a&le &r&2&lM&r&a&lè&r&2&lr&r&a&le &r&2&lN&r&a&lo&r&2&lë&r&a&ll &r&a&l&kt&r&2&kt&r&a&kt&r&f​☃&r&a&kt&r&2&kt&r&a&l&kt&r&2&l",
      defaultName: "Martinet de la Mère Noël",
      type: 5,
      enchants: [
        "&aTranchant &r&249&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
