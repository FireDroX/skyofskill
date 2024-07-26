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
  title: "PIRATE",
  items: [
    {
      name: "&r&4&l&kt&r&c&kt&r&7&kt&r&8⚔&r&7&kt&r&c&kt&r&4&l&kt&r&4&l D&r&c&la&r&7&lg&r&8&lu&r&4&le&r&c&l d&r&7&le&r&8&l P&r&4&li&r&c&lr&r&7&la&r&8&lt&r&4&le &r&4&l&kt&r&c&kt&r&7&kt&r&8⚔&r&7&kt&r&c&kt&r&4&l&kt&r&4&l",
      defaultName: "Dague de Pirate",
      type: 4,
      enchants: [
        "&aTranchant &r&239&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&5&kt&r&d&kt&r&d&kt&r&b&l​⚔&r&d&kt&r&d&kt&r&5&kt&r&5&l La&r&d&lme &r&5&ldu &r&d&lCa&r&5&lpi&r&d&lta&r&5&lin&r&d&le &r&5&kt&r&d&kt&r&d&kt&r&b&l​⚔&r&d&kt&r&d&kt&r&5&kt&r",
      defaultName: "Lame du Capitaine",
      type: 4,
      enchants: [
        "&aTranchant &r&242&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&4&l&kt&r&c&kt&r&7&kt&r&8⚔&r&7&kt&r&c&kt&r&4&l&kt&r&4&l P&r&c&li&r&7&lo&r&8&lc&r&4&lh&r&c&le &r&7&lS&r&8&lo&r&4&lm&r&c&lb&r&7&lr&r&8&le &r&4&l&kt&r&c&kt&r&7&kt&r&8⚔&r&7&kt&r&c&kt&r&4&l&kt&r&4&l",
      defaultName: "Pioche Sombre",
      type: 7,
      enchants: [
        "&bEfficency &r&3150&r",
        "&eSolidité &r&650&r",
        "&aFortune &r&2180&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&9&kt&r&3&kt&r&b&kt&r&f&l​⚔&r&b&kt&r&3&kt&r&9&kt&r&9&l P&r&3&li&r&b&lo&r&f&lc&r&9&lh&r&3&le&r&b&l P&r&f&li&r&9&ls&r&3&lt&r&b&lo&r&f&ll&r&9&le&r&3&lt &r&9&kt&r&3&kt&r&b&kt&r&f&l​⚔&r&b&kt&r&3&kt&r&9&kt&r",
      defaultName: "Pioche Pistolet",
      type: 7,
      enchants: [
        "&bEfficency &r&3150&r",
        "&eSolidité &r&6100&r",
        "&aFortune &r&2225&r",
      ],
    },
    {
      name: "&r&6&l&kt&r&e&kt&r&b&kt&r&e​⚔&r&b&kt&r&e&kt&r&6&l&kt&r&6&l D&r&e&lé&r&6&lt&r&e&le&r&6&lc&r&e&lt&r&6&le&r&e&lu&r&6&lr &r&e&ld&r&6'&r&e&lO&r&6&lr &r&6&l&kt&r&e&kt&r&b&kt&r&e​⚔&r&b&kt&r&e&kt&r&6&l&kt&r&6&l",
      defaultName: "Détecteur d'Or",
      type: 7,
      enchants: [
        "&bEfficency &r&3250&r",
        "&eSolidité &r&6100&r",
        "&aFortune &r&2300&r",
      ],
    },
    {
      name: "&1&kt&r&9&kt&r&3&kt&r&b&kt&r&d&l​⚔&r&b&kt&r&3&kt&r&9&kt&r&1&kt&r&1&l M&r&9&la&r&3&ls&r&b&ls&r&1&lu&r&9&le &r&3&ld&r&b&lu &r&1&lC&r&9&la&r&3&lp&r&b&li&r&1&lt&r&9&la&r&3&li&r&b&ln&r&1&le &r&1&kt&r&9&kt&r&3&kt&r&b&kt&r&d&l​⚔&r&b&kt&r&3&kt&r&9&kt&r&1&kt&r",
      defaultName: "Massue du Capitaine",
      type: 7,
      enchants: [
        "&bEfficency &r&3300&r",
        "&eSolidité &r&6100&r",
        "&aFortune &r&2350&r",
      ],
    },
    {
      name: "&r&4&l&kt&r&c&kt&r&7&kt&r&8​⚔&r&7&kt&r&c&kt&r&4&l&kt&r&4&l B&r&c&la&r&7&ln&r&8&ld&r&4&la&r&c&ln&r&7&la &r&8&ld&r&4&le &r&c&lP&r&7&li&r&8&lr&r&4&la&r&c&lt&r&7&le &r&4&l&kt&r&c&kt&r&7&kt&r&8​⚔&r&7&kt&r&c&kt&r&4&l&kt&r&4&l",
      defaultName: "Bandana de Pirate",
      type: 0,
      enchants: ["&b&lProtection &r&3&l37&r", "&eSolidité &r&637&r"],
    },
    {
      name: "&r&4&l&kt&r&c&kt&r&7&kt&r&8​⚔&r&7&kt&r&c&kt&r&4&l&kt&r&4&l P&r&c&ll&r&7&la&r&8&ls&r&4&lt&r&c&lr&r&7&lo&r&8&ln &r&4&lD&r&c&lr&r&7&la&r&8&lp&r&4&le&r&c&la&r&7&lu &r&4&l&kt&r&c&kt&r&7&kt&r&8​⚔&r&7&kt&r&c&kt&r&4&l&kt&r&4&l",
      defaultName: "Plastron Drapeau",
      type: 1,
      enchants: ["&b&lProtection &r&3&l37&r", "&eSolidité &r&637&r"],
    },
    {
      defaultName: "Pantalon de Pirate",
      type: 2,
      enchants: ["&b&lProtection &r&3&l37&r", "&eSolidité &r&637&r"],
    },
    {
      name: "&r&4&l&kt&r&c&kt&r&7&kt&r&8​⚔&r&7&kt&r&c&kt&r&4&l&kt&r&4&l P&r&c&li&r&7&lr&r&8&la&r&4&lt&r&c&le&r&7&lr&r&8&li&r&4&le &r&4&l&kt&r&c&kt&r&7&kt&r&8​⚔&r&7&kt&r&c&kt&r&4&l&kt&r&4&l",
      defaultName: "Piraterie",
      type: 3,
      enchants: ["&b&lProtection &r&3&l37&r", "&eSolidité &r&637&r"],
    },
    {
      defaultName: "???",
      type: 5,
      enchants: [
        "&aTranchant &r&2??&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
