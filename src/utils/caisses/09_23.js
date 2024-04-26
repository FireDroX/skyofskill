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
  title: "FARWEST",
  items: [
    {
      name: "&r&f&kt&r&4​♨&r&c*&r&4​♨&r&f&kt&r&b&l &r&4&lC&r&c&la&r&4&ln&r&c&lo&r&4&ln&r&c&l à &r&4&lS&r&c&li&r&4&lx&r&c&l C&r&4&lo&r&c&lu&r&4&lp&r&c&ls &r&f&kt&r&4​♨&r&c*&r&4​♨&r&f&kt&r&b&l",
      defaultName: "Canon à Six Coups",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&r&a&kt&r&f*&r&a❈&r&f*&r&a&kt&r&a &r&a&lC&r&2&la&r&f&lr&r&a&la&r&2&lb&r&f&li&r&a&ln&r&2&le&r&f&l I&r&a&ln&r&2&lf&r&f&le&r&a&lr&r&2&ln&r&f&la&r&a&ll&r&2&le &r&a&kt&r&f*&r&a❈&r&f*&r&a&kt",
      defaultName: "Carabine Infernale",
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
      defaultName: "Derringer Légendaire",
      type: 6,
      enchants: [
        "&bPunch &r&3V&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&f&kt&r&4​♨&r&c*&r&4​♨&r&f&kt&r&b&l &r&4&lC&r&c&la&r&4&ln&r&c&lo&r&4&ln&r&c&l à &r&4&lS&r&c&li&r&4&lx&r&c&l C&r&4&lo&r&c&lu&r&4&lp&r&c&ls &r&f&kt&r&4​♨&r&c*&r&4​♨&r&f&kt&r&b&l",
      defaultName: "Canon à Six Coups",
      type: 4,
      enchants: [
        "&aTranchant &r&265&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      defaultName: "Canon du Jugement",
      type: 4,
      enchants: [
        "&aTranchant &r&274&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&6&kt&r&e⁂&r&6✬&r&e⁂&r&6&kt&r&6&l &r&6&lT&r&e&lr&r&6&lo&r&e&lu&r&6&lv&r&e&le&r&6&lu&r&e&ls&r&6&le&r&e&l d&r&f'&r&6&lO&r&e&lr &r&6&kt&r&e⁂&r&6✬&r&e⁂&r&6&kt&r&6&l",
      defaultName: "Trouveuse d'Or",
      type: 7,
      enchants: [
        "&bEfficency &r&3850&r",
        "&eSolidité &r&6850&r",
        "&aFortune &r&2850&r",
      ],
    },
    {
      name: "&r&e&kt&r&f&kt&r&e▲&r&6$&r&e▲&r&f&kt&r&e&kt&r&2&l &r&6&lE&r&e&lx&r&6&lc&r&e&la&r&6&lv&r&e&la&r&6&lt&r&e&le&r&6&lu&r&e&lr &r&6&ld&r&e&le&r&6&l l&r&f'&r&e&lO&r&6&lu&r&e&le&r&6&ls&r&e&lt &r&e&kt&r&f&kt&r&e▲&r&6$&r&e▲&r&f&kt&r&e&kt",
      defaultName: "Excavateur de l'Ouest",
      type: 7,
      enchants: [
        "&bEfficency &r&31000&r",
        "&eSolidité &r&61000&r",
        "&aFortune &r&21000&r",
      ],
    },
    {
      name: "&r&f&ki&r&7&ki&r&8x&r&b​♻&r&8x&r&7&ki&r&f&ki&r&8&l &r&8&lP&r&7&li&r&b&lo&r&8&lc&r&7&lh&r&b&le&r&8&l C&r&7&lr&r&b&li&r&8&lm&r&7&li&r&b&ln&r&8&le&r&7&ll&r&b&ll&r&8&le &r&f&ki&r&7&ki&r&8x&r&b​♻&r&8x&r&7&ki&r&f&ki&r&8&l",
      defaultName: "Pioche Criminelle",
      type: 7,
      enchants: [
        "&bEfficency &r&31200&r",
        "&eSolidité &r&61200&r",
        "&aFortune &r&21200&r",
      ],
    },
    {
      name: "&r&f&kt&r&4​♨&r&c*&r&4​♨&r&f&kt&r&b&l&r&6&l &r&4&lH&r&c&lo&r&4&lr&r&c&ls&r&f-&r&4&ll&r&c&la&r&f-&r&4&lL&r&c&lo&r&4&li &r&f&kt&r&4​♨&r&c*&r&4​♨&r&f&kt&r&b&l",
      defaultName: "Hors-la-Loi",
      type: 0,
      enchants: ["&b&lProtection &r&3&l65&r", "&eSolidité &r&665&r"],
    },
    {
      name: "&r&f&kt&r&4​♨&r&c*&r&4​♨&r&f&kt&r&b&l&r&6&l &r&4&lH&r&c&lo&r&4&lr&r&c&ls&r&f-&r&4&ll&r&c&la&r&f-&r&4&lL&r&c&lo&r&4&li &r&f&kt&r&4​♨&r&c*&r&4​♨&r&f&kt&r&b&l",
      defaultName: "Hors-la-Loi",
      type: 1,
      enchants: ["&b&lProtection &r&3&l65&r", "&eSolidité &r&665&r"],
    },
    {
      name: "&r&f&kt&r&4​♨&r&c*&r&4​♨&r&f&kt&r&b&l&r&6&l &r&4&lH&r&c&lo&r&4&lr&r&c&ls&r&f-&r&4&ll&r&c&la&r&f-&r&4&lL&r&c&lo&r&4&li &r&f&kt&r&4​♨&r&c*&r&4​♨&r&f&kt&r&b&l",
      defaultName: "Hors-la-Loi",
      type: 2,
      enchants: ["&b&lProtection &r&3&l65&r", "&eSolidité &r&665&r"],
    },
    {
      name: "&r&f&kt&r&4​♨&r&c*&r&4​♨&r&f&kt&r&b&l&r&6&l &r&4&lH&r&c&lo&r&4&lr&r&c&ls&r&f-&r&4&ll&r&c&la&r&f-&r&4&lL&r&c&lo&r&4&li &r&f&kt&r&4​♨&r&c*&r&4​♨&r&f&kt&r&b&l",
      defaultName: "Hors-la-Loi",
      type: 3,
      enchants: ["&b&lProtection &r&3&l65&r", "&eSolidité &r&665&r"],
    },
    {
      name: "&r&f&kt&r&7&kt&r&8w&r&f✽&r&8w&r&7&kt&r&f&kt&r&8&l &r&8&lR&r&7&lé&r&f&lv&r&8&lo&r&7&ll&r&f&lv&r&8&le&r&7&lr&r&f&l D&r&8&le&r&7&lr&r&f&ln&r&8&li&r&7&le&r&f&lr &r&8&lS&r&7&lo&r&f&lu&r&8&lf&r&7&lf&r&f&ll&r&8&le &r&f&kt&r&7&kt&r&8w&r&f✽&r&8w&r&7&kt&r&f&kt&r&8&l",
      defaultName: "Révolver Dernier Souffle",
      type: 5,
      enchants: [
        "&aTranchant &r&270&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
