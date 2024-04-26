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
      name: "&r&f&ki&r&b&ki&r&f⁂&r&b​❄&r&f⁂&r&b&ki&r&f&ki&r&8&l &r&b&lA&r&f&lr&r&b&lc &r&f&ld&r&b&le&r&f&l N&r&b&le&r&f&li&r&b&lg&r&f&le &r&f&ki&r&b&ki&r&f⁂&r&b​❄&r&f⁂&r&b&ki&r&f&ki",
      defaultName: "Arc de Neige",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&r&a&ki&r&f✦&r&a​☃&r&f✦&r&a&ki&r&a &r&a&lM&r&f&lo&r&a&lt&r&f&lo&r&a&l d&r&f&lu&r&a&l L&r&f&lu&r&a&lt&r&f&li&r&a&ln &r&a&ki&r&f✦&r&a​☃&r&f✦&r&a&ki",
      defaultName: "Moto du Lutin",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      defaultName: "Fusée de Noël",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      defaultName: "Traineau Père Noël",
      type: 6,
      enchants: [
        "&bPunch &r&3V&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&f&ki&r&b&ki&r&f⁂&r&b​❄&r&f⁂&r&b&ki&r&f&ki&r&8&l &r&b&lS&r&f&la&r&b&lb&r&f&lr&r&b&le&r&f&l d&r&b&le&r&f&l N&r&b&le&r&f&li&r&b&lg&r&f&le &r&f&ki&r&b&ki&r&f⁂&r&b​❄&r&f⁂&r&b&ki&r&f&ki",
      defaultName: "Sabre de Neige",
      type: 4,
      enchants: [
        "&aTranchant &r&271&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&4&ki&r&f&ki&r&c⁑&r&4​☃&r&c⁑&r&f&ki&r&4&ki&r&4&l &r&4&lS&r&f&la&r&4&lb&r&f&lr&r&4&le&r&f&l P&r&4&lè&r&f&lr&r&4&le&r&f&l N&r&4&lo&r&f&lë&r&4&ll &r&4&ki&r&f&ki&r&c⁑&r&4​☃&r&c⁑&r&f&ki&r&4&ki&r&4&l",
      defaultName: "Sabre Père Noël",
      type: 4,
      enchants: [
        "&aTranchant &r&280&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&f&ki&r&b&ki&r&f⁂&r&b​❄&r&f⁂&r&b&ki&r&f&ki&r&8&l &r&b&lP&r&f&li&r&b&lo&r&f&lc&r&b&lh&r&f&le&r&b&l d&r&f&le&r&b&l N&r&f&le&r&b&li&r&f&lg&r&b&le &r&f&ki&r&b&ki&r&f⁂&r&b​❄&r&f⁂&r&b&ki&r&f&ki",
      defaultName: "Pioche de Neige",
      type: 7,
      enchants: [
        "&bEfficency &r&31250&r",
        "&eSolidité &r&61250&r",
        "&aFortune &r&21250&r",
      ],
    },
    {
      name: "&r&d&ki&r&f&ki&r&d​❤&r&f&ki&r&d&ki&r&8&l &r&d&lP&r&f&li&r&d&lo&r&f&lc&r&d&lh&r&f&le&r&d&l M&r&f&lè&r&d&lr&r&f&le&r&d&l N&r&f&lo&r&d&lë&r&f&ll &r&d&ki&r&f&ki&r&d​❤&r&f&ki&r&d&ki",
      defaultName: "Pioche Mère Noël",
      type: 7,
      enchants: [
        "&bEfficency &r&31500&r",
        "&eSolidité &r&61500&r",
        "&aFortune &r&21500&r",
      ],
    },
    {
      defaultName: "Foreuse Père Noël",
      type: 7,
      enchants: [
        "&bEfficency &r&31650&r",
        "&eSolidité &r&61650&r",
        "&aFortune &r&21650&r",
      ],
    },
    {
      name: "&r&f&ki&r&b&ki&r&f⁂&r&b​❄&r&f⁂&r&b&ki&r&f&ki&r&8&l &r&b&lA&r&f&lr&r&b&lm&r&f&lu&r&b&lr&r&f&le &r&f&ld&r&b&le&r&f&l N&r&b&le&r&f&li&r&b&lg&r&f&le &r&f&ki&r&b&ki&r&f⁂&r&b​❄&r&f⁂&r&b&ki&r&f&ki",
      defaultName: "Armure de Neige",
      type: 0,
      enchants: ["&b&lProtection &r&3&l71&r", "&eSolidité &r&671&r"],
    },
    {
      name: "&r&f&ki&r&b&ki&r&f⁂&r&b​❄&r&f⁂&r&b&ki&r&f&ki&r&8&l &r&b&lA&r&f&lr&r&b&lm&r&f&lu&r&b&lr&r&f&le &r&f&ld&r&b&le&r&f&l N&r&b&le&r&f&li&r&b&lg&r&f&le &r&f&ki&r&b&ki&r&f⁂&r&b​❄&r&f⁂&r&b&ki&r&f&ki",
      defaultName: "Armure de Neige",
      type: 1,
      enchants: ["&b&lProtection &r&3&l71&r", "&eSolidité &r&671&r"],
    },
    {
      name: "&r&f&ki&r&b&ki&r&f⁂&r&b​❄&r&f⁂&r&b&ki&r&f&ki&r&8&l &r&b&lA&r&f&lr&r&b&lm&r&f&lu&r&b&lr&r&f&le &r&f&ld&r&b&le&r&f&l N&r&b&le&r&f&li&r&b&lg&r&f&le &r&f&ki&r&b&ki&r&f⁂&r&b​❄&r&f⁂&r&b&ki&r&f&ki",
      defaultName: "Armure de Neige",
      type: 2,
      enchants: ["&b&lProtection &r&3&l71&r", "&eSolidité &r&671&r"],
    },
    {
      name: "&r&f&ki&r&b&ki&r&f⁂&r&b​❄&r&f⁂&r&b&ki&r&f&ki&r&8&l &r&b&lA&r&f&lr&r&b&lm&r&f&lu&r&b&lr&r&f&le &r&f&ld&r&b&le&r&f&l N&r&b&le&r&f&li&r&b&lg&r&f&le &r&f&ki&r&b&ki&r&f⁂&r&b​❄&r&f⁂&r&b&ki&r&f&ki",
      defaultName: "Armure de Neige",
      type: 3,
      enchants: ["&b&lProtection &r&3&l71&r", "&eSolidité &r&671&r"],
    },
    {
      name: "&r&e&ki&r&f&ki&r&e⁂&r&f​☃&r&e⁂&r&f&ki&r&e&ki&r&8&l &r&e&lK&r&f&la&r&e&lt&r&f&la&r&e&ln&r&f&la &r&e&lC&r&f&la&r&e&ld&r&f&le&r&e&la&r&f&lu &r&e&ki&r&f&ki&r&e⁂&r&f​☃&r&e⁂&r&f&ki&r&e&ki",
      defaultName: "Katana Cadeau",
      type: 5,
      enchants: [
        "&aTranchant &r&277&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
