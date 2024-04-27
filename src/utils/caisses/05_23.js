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
  title: "BONBON",
  items: [
    {
      name: "&r&d&kt&r&f&kt&r&d✯&r&f&kt&r&d&kt&r&b &r&d&lC&r&f&lh&r&d&la&r&f&lm&r&d&la&r&f&ll&r&d&ll&r&f&lo&r&d&lw&r&f&ls &r&d&kt&r&f&kt&r&d✯&r&f&kt&r&d&kt&r&b",
      defaultName: "Chamallows",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&r&5&kt&r&f&kt&r&d✿&r&f&kt&r&5&kt&r&5&l A&r&f&lr&r&d&lc &r&f&lT&r&5&la&r&f&lg&r&d&la&r&f&ld&r&5&la &r&5&kt&r&f&kt&r&d✿&r&f&kt&r&5&kt&r&5",
      defaultName: "Arc Tagada",
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
      name: "&r&f&kt&r&b☉&r&f&kt&r&b&l L&r&f&la&r&b&lm&r&f&le &r&a&lD&r&b&lr&r&c&la&r&d&lg&r&e&li&r&f&lb&r&a&lu&r&b&ls &r&f&kt&r&b☉&r&f&kt&r&b&l",
      defaultName: "Lame Dragibus",
      type: 4,
      enchants: [
        "&aTranchant &r&255&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&d&kt&r&f&kt&r&b〠&r&f&kt&r&d&kt&r&8&l &r&b&lB&r&f&lo&r&d&lu&r&f&lf&r&b&lt&r&f&lo&r&d&lu &r&d&kt&r&f&kt&r&b〠&r&f&kt&r&d&kt&r&8&l",
      defaultName: "Bouftou",
      type: 4,
      enchants: [
        "&aTranchant &r&263&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&f&kt&r&b☉&r&f&kt&r&b&l P&r&f&li&r&b&lo&r&f&lc&r&b&lh&r&f&le &r&a&lD&r&b&lr&r&c&la&r&d&lg&r&e&li&r&f&lb&r&a&lu&r&b&ls &r&f&kt&r&b☉&r&f&kt&r&b&l",
      defaultName: "Pioche Dragibus",
      type: 7,
      enchants: [
        "&bEfficency &r&3550&r",
        "&eSolidité &r&6550&r",
        "&aFortune &r&2550&r",
      ],
    },
    {
      name: "&r&f&kt&r&e✤&r&f&kt&r&6&l &r&6&lF&r&e&lo&r&6&lr&r&e&le&r&6&lu&r&e&ls&r&6&le&r&e&l d&r&6&le &r&e&lB&r&6&lo&r&e&ln&r&6&lB&r&e&lo&r&6&ln&r&e&ls &r&f&kt&r&e✤&r&f&kt&r&6&l",
      defaultName: "Foreuse de BonBons",
      type: 7,
      enchants: [
        "&bEfficency &r&3650&r",
        "&eSolidité &r&6650&r",
        "&aFortune &r&2650&r",
      ],
    },
    {
      name: "&r&2&kt&r&aϟ&r&f❃&r&aϟ&r&2&kt&r&2&l P&r&a&li&r&f&lo&r&2&lc&r&a&lh&r&f&le &r&2&lS&r&a&lc&r&2&lo&r&a&lu&r&2&lb&r&a&li&r&2&ld&r&a&lo&r&2&lu&r&a&ls &r&2&kt&r&aϟ&r&f❃&r&aϟ&r&2&kt&r&2&l",
      defaultName: "Pioche Scoubidous",
      type: 7,
      enchants: [
        "&bEfficency &r&3750&r",
        "&eSolidité &r&6750&r",
        "&aFortune &r&2750&r",
      ],
    },
    {
      name: "&r&f&kt&r&b☉&r&f&kt&r&b&l A&r&f&lr&r&b&lm&r&f&lu&r&b&lr&r&f&le &r&a&lD&r&b&lr&r&c&la&r&d&lg&r&e&li&r&f&lb&r&a&lu&r&b&ls &r&f&kt&r&b☉&r&f&kt&r&b&l",
      defaultName: "Armure Dragibus",
      type: 0,
      enchants: ["&b&lProtection &r&3&l55&r", "&eSolidité &r&655&r"],
    },
    {
      name: "&r&f&kt&r&b☉&r&f&kt&r&b&l A&r&f&lr&r&b&lm&r&f&lu&r&b&lr&r&f&le &r&a&lD&r&b&lr&r&c&la&r&d&lg&r&e&li&r&f&lb&r&a&lu&r&b&ls &r&f&kt&r&b☉&r&f&kt&r&b&l",
      defaultName: "Armure Dragibus",
      type: 1,
      enchants: ["&b&lProtection &r&3&l55&r", "&eSolidité &r&655&r"],
    },
    {
      name: "&r&f&kt&r&b☉&r&f&kt&r&b&l A&r&f&lr&r&b&lm&r&f&lu&r&b&lr&r&f&le &r&a&lD&r&b&lr&r&c&la&r&d&lg&r&e&li&r&f&lb&r&a&lu&r&b&ls &r&f&kt&r&b☉&r&f&kt&r&b&l",
      defaultName: "Armure Dragibus",
      type: 2,
      enchants: ["&b&lProtection &r&3&l55&r", "&eSolidité &r&655&r"],
    },
    {
      name: "&r&f&kt&r&b☉&r&f&kt&r&b&l A&r&f&lr&r&b&lm&r&f&lu&r&b&lr&r&f&le &r&a&lD&r&b&lr&r&c&la&r&d&lg&r&e&li&r&f&lb&r&a&lu&r&b&ls &r&f&kt&r&b☉&r&f&kt&r&b&l",
      defaultName: "Armure Dragibus",
      type: 3,
      enchants: ["&b&lProtection &r&3&l55&r", "&eSolidité &r&655&r"],
    },
    {
      name: "&r&f&kt&r&b&kt&r&9✹&r&b&kt&r&f&kt&r&b&l H&r&f&la&r&b&lc&r&f&lh&r&b&le &r&f&le&r&b&ln &r&f&lL&r&b&lo&r&f&lu&r&b&lk&r&f&lo&r&b&lu&r&f&lm &r&f&kt&r&b&kt&r&9✹&r&b&kt&r&f&kt",
      defaultName: "Hache en Loukoum",
      type: 5,
      enchants: [
        "&aTranchant &r&260&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
