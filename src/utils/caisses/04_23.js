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
  title: "MAGICAL",
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
      name: "&r&d&kt&r&f&kt&r&5✯&r&f&kt&r&d&kt&r&5&l W&r&f&li&r&d&ln&r&f&lg&r&5&la&r&f&lr&r&d&ld&r&f&li&r&5&lu&r&f&lm&r&d&l L&r&f&le&r&5&lv&r&f&li&r&d&lo&r&f&ls&r&5&la &r&d&kt&r&f&kt&r&5✯&r&f&kt&r&d&kt&r&5",
      defaultName: "Wingardium Leviosa",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&r&d&kt&r&f✠&r&d&kt&r&6&l &r&5&lM&r&d&la&r&f&lg&r&5&li&r&d&lc&r&f&la&r&5&ll &r&d&lS&r&f&lw&r&5&lo&r&d&lr&r&f&ld &r&d&kt&r&f✠&r&d&kt&r&6&l",
      defaultName: "Magical Sword",
      type: 4,
      enchants: [
        "&aTranchant &r&252&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&7&kt&r&f&kt&r&8✚&r&f&kt&r&7&kt&r&8&l &r&8&lL&r&7&la&r&f&lm&r&8&le&r&7&l à &r&f&lM&r&8&la&r&7&lg&r&f&li&r&8&le &r&7&lN&r&f&lo&r&8&li&r&7&lr&r&f&le &r&7&kt&r&f&kt&r&8✚&r&f&kt&r&7&kt&r&8&l",
      defaultName: "Lame à Magie Noire",
      type: 4,
      enchants: [
        "&aTranchant &r&260&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&f&kt&r&b✡&r&f&kt&r&6&l &r&b&lP&r&f&le&r&b&lr&r&f&lc&r&b&le&r&f&lu&r&b&ls&r&f&le &r&b&lS&r&f&lu&r&b&lr&r&f&ln&r&b&la&r&f&lt&r&b&lu&r&f&lr&r&b&le&r&f&ll&r&b&ll&r&f&le &r&f&kt&r&b✡&r&f&kt&r&6&l",
      defaultName: "Perceuse Surnaturelle",
      type: 7,
      enchants: [
        "&bEfficency &r&3600&r",
        "&eSolidité &r&6600&r",
        "&aFortune &r&2600&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&7&kt&r&fϟ&r&8☣&r&fϟ&r&7&kt&r&8&l F&r&7&lo&r&f&lr&r&8&le&r&7&lu&r&f&ls&r&8&le&r&7&l S&r&f&li&r&8&ln&r&7&li&r&f&ls&r&8&lt&r&7&lr&r&f&le &r&7&kt&r&fϟ&r&8☣&r&fϟ&r&7&kt&r&8&l",
      defaultName: "Foreuse Sinistre",
      type: 7,
      enchants: [
        "&bEfficency &r&3700&r",
        "&eSolidité &r&6700&r",
        "&aFortune &r&2700&r",
      ],
    },
    {
      name: "&r&e&kt&r&bϟ&r&a✧&r&bϟ&r&e&kt&r&e&l &r&a&lS&r&b&lu&r&c&lp&r&d&le&r&e&lr&r&f&lM&r&a&le&r&b&lg&r&c&la&r&d&lP&r&e&li&r&f&lo&r&a&lc&r&b&lh&r&c&le &r&e&kt&r&bϟ&r&a✧&r&bϟ&r&e&kt&r&e&l",
      defaultName: "SuperMegaPioche",
      type: 7,
      enchants: [
        "&bEfficency &r&3750&r",
        "&eSolidité &r&6750&r",
        "&aFortune &r&2750&r",
      ],
    },
    {
      name: "&r&d&kt&r&f✠&r&d&kt&r&6&l &r&5&lM&r&d&la&r&f&lg&r&5&li&r&d&lc&r&f&la&r&5&ll &r&d&kt&r&f✠&r&d&kt&r&6&l",
      defaultName: "Magical",
      type: 0,
      enchants: ["&b&lProtection &r&3&l53&r", "&eSolidité &r&653&r"],
    },
    {
      name: "&r&d&kt&r&f✠&r&d&kt&r&6&l &r&5&lM&r&d&la&r&f&lg&r&5&li&r&d&lc&r&f&la&r&5&ll &r&d&kt&r&f✠&r&d&kt&r&6&l",
      defaultName: "Magical",
      type: 1,
      enchants: ["&b&lProtection &r&3&l53&r", "&eSolidité &r&653&r"],
    },
    {
      name: "&r&d&kt&r&f✠&r&d&kt&r&6&l &r&5&lM&r&d&la&r&f&lg&r&5&li&r&d&lc&r&f&la&r&5&ll &r&d&kt&r&f✠&r&d&kt&r&6&l",
      defaultName: "Magical",
      type: 2,
      enchants: ["&b&lProtection &r&3&l53&r", "&eSolidité &r&653&r"],
    },
    {
      name: "&r&d&kt&r&f✠&r&d&kt&r&6&l &r&5&lM&r&d&la&r&f&lg&r&5&li&r&d&lc&r&f&la&r&5&ll &r&d&kt&r&f✠&r&d&kt&r&6&l",
      defaultName: "Magical",
      type: 3,
      enchants: ["&b&lProtection &r&3&l53&r", "&eSolidité &r&653&r"],
    },
    {
      name: "&r&9&kt&r&b&kt&r&1​♨&r&b&kt&r&9&kt&r&1&l P&r&9&lo&r&b&li&r&f&ls&r&1&ls&r&9&lo&r&b&ln &r&f&lM&r&1&la&r&9&lg&r&b&li&r&f&lq&r&1&lu&r&9&le &r&9&kt&r&b&kt&r&1​♨&r&b&kt&r&9&kt&r&1&l",
      defaultName: "Poisson Magique",
      type: 5,
      enchants: [
        "&aTranchant &r&258&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
