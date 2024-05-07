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
  title: "POKEBALL",
  items: [
    {
      name: "&r&b&kt&r&f&kt&r&b✱&r&f&kt&r&b&kt&r&b &r&b&lP&r&f&li&r&b&lx&r&f&le&r&b&ll&r&f&lm&r&b&lo&r&f&ln&r&b&lB&r&f&lo&r&b&lw &r&b&kt&r&f&kt&r&b✱&r&f&kt&r&b&kt&r&b",
      defaultName: "PixelmonBow",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&r&c&kt&r&f&kt&r&4​✡&r&f&kt&r&c&kt&r&4&l S&r&f&lU&r&4&lL&r&f&lF&r&4&lU&r&f&lR&r&4&lA &r&c&kt&r&f&kt&r&4​✡&r&f&kt&r&c&kt&r&4",
      defaultName: "SULFURA",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&r&f&kt&r&9‡&r&f&kt&r&9&l G&r&f&lr&r&9&li&r&f&lf&r&9&lf&r&f&le&r&9&l d&r&f&le &r&9&lL&r&f&lu&r&9&lc&r&f&la&r&9&lr&r&f&li&r&9&lo &r&f&kt&r&9‡&r&f&kt&r&b&l",
      defaultName: "Griffe de Lucario",
      type: 4,
      enchants: [
        "&aTranchant &r&258&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&c&kt&r&f&kt&r&4❱❰&r&f&kt&r&c&kt&r&8&l &r&4&lS&r&c&la&r&4&lb&r&c&lr&r&4&le&r&c&l G&r&4&lR&r&c&lO&r&4&lU&r&c&lD&r&4&lO&r&c&lN &r&c&kt&r&f&kt&r&4❱❰&r&f&kt&r&c&kt&r&8&l",
      defaultName: "Sabre GROUDON",
      type: 4,
      enchants: [
        "&aTranchant &r&266&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&d&kt&r&c​❤&r&d&kt&r&5&l P&r&d&li&r&5&lo&r&d&lc&r&5&lh&r&d&le &r&5&lR&r&d&lo&r&5&ln&r&d&ld&r&5&lo&r&d&lu&r&5&ld&r&d&lo&r&5&lu &r&d&kt&r&c​❤&r&d&kt&r&b&l",
      defaultName: "Pioche Rondoudou",
      type: 7,
      enchants: [
        "&bEfficency &r&3600&r",
        "&eSolidité &r&6600&r",
        "&aFortune &r&2600&r",
      ],
    },
    {
      name: "&r&1&kt&r&b​♦&r&9❃&r&b​♦&r&1&kt&r&6&l &r&3&lP&r&9&li&r&b&lo&r&3&lc&r&9&lh&r&b&le &r&3&lK&r&9&ly&r&b&lo&r&3&lg&r&9&lr&r&b&le &r&1&kt&r&b​♦&r&9❃&r&b​♦&r&1&kt",
      defaultName: "Pioche Kyogre",
      type: 7,
      enchants: [
        "&bEfficency &r&3700&r",
        "&eSolidité &r&6700&r",
        "&aFortune &r&2700&r",
      ],
    },
    {
      name: "&r&8&kt&r&7&kt&r&8✠&r&7&kt&r&8&kt&r&2&l &r&7&lP&r&8&li&r&7&lo&r&8&lc&r&7&lh&r&8&le &r&7&lZ&r&8&le&r&7&lk&r&8&lr&r&7&lo&r&8&lm &r&8&kt&r&7&kt&r&8✠&r&7&kt&r&8&kt&r&2&l",
      defaultName: "Pioche Zekrom",
      type: 7,
      enchants: [
        "&bEfficency &r&3800&r",
        "&eSolidité &r&6800&r",
        "&aFortune &r&2800&r",
      ],
    },
    {
      name: "&r&f&kt&r&c|&r&4☣&r&c|&r&f&kt&r&e&l &r&4&lP&r&c&li&r&4&lo&r&c&lc&r&4&lh&r&c&le &r&4&lD&r&c&lr&r&4&la&r&c&lk&r&4&la&r&c&lu&r&4&lf&r&c&le&r&4&lu &r&f&kt&r&c|&r&4☣&r&c|&r&f&kt",
      defaultName: "Pioche Drakaufeu",
      type: 7,
      enchants: [
        "&bEfficency &r&3850&r",
        "&eSolidité &r&6850&r",
        "&aFortune &r&2850&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&kt&r&e&kt&r&6​✡&r&e&kt&r&f&kt&r&b&l &r&6&lA&r&e&lr&r&f&lm&r&6&lu&r&e&lr&r&f&le&r&6&l R&r&e&lh&r&f&li&r&6&ln&r&e&lo&r&f&lf&r&6&lé&r&e&lr&r&f&lo&r&6&ls &r&f&kt&r&e&kt&r&6​✡&r&e&kt&r&f&kt&r&b&l",
      defaultName: "Armure Rhinoféros",
      type: 0,
      enchants: ["&b&lProtection &r&3&l58&r", "&eSolidité &r&658&r"],
    },
    {
      name: "&r&f&kt&r&e&kt&r&6​✡&r&e&kt&r&f&kt&r&b&l &r&6&lA&r&e&lr&r&f&lm&r&6&lu&r&e&lr&r&f&le&r&6&l R&r&e&lh&r&f&li&r&6&ln&r&e&lo&r&f&lf&r&6&lé&r&e&lr&r&f&lo&r&6&ls &r&f&kt&r&e&kt&r&6​✡&r&e&kt&r&f&kt&r&b&l",
      defaultName: "Armure Rhinoféros",
      type: 1,
      enchants: ["&b&lProtection &r&3&l58&r", "&eSolidité &r&658&r"],
    },
    {
      name: "&r&f&kt&r&e&kt&r&6​✡&r&e&kt&r&f&kt&r&b&l &r&6&lA&r&e&lr&r&f&lm&r&6&lu&r&e&lr&r&f&le&r&6&l R&r&e&lh&r&f&li&r&6&ln&r&e&lo&r&f&lf&r&6&lé&r&e&lr&r&f&lo&r&6&ls &r&f&kt&r&e&kt&r&6​✡&r&e&kt&r&f&kt&r&b&l",
      defaultName: "Armure Rhinoféros",
      type: 2,
      enchants: ["&b&lProtection &r&3&l58&r", "&eSolidité &r&658&r"],
    },
    {
      name: "&r&f&kt&r&e&kt&r&6​✡&r&e&kt&r&f&kt&r&b&l &r&6&lA&r&e&lr&r&f&lm&r&6&lu&r&e&lr&r&f&le&r&6&l R&r&e&lh&r&f&li&r&6&ln&r&e&lo&r&f&lf&r&6&lé&r&e&lr&r&f&lo&r&6&ls &r&f&kt&r&e&kt&r&6​✡&r&e&kt&r&f&kt&r&b&l",
      defaultName: "Armure Rhinoféros",
      type: 3,
      enchants: ["&b&lProtection &r&3&l58&r", "&eSolidité &r&658&r"],
    },
    {
      name: "&r&f&kt&r&a&kt&r&2⨷&r&a&kt&r&f&kt&r&2&l H&r&a&la&r&2&lc&r&a&lh&r&2&le &r&a&lR&r&2&lA&r&a&lY&r&2&lQ&r&a&lU&r&2&lA&r&a&lZ&r&2&lA &r&f&kt&r&a&kt&r&2⨷&r&a&kt&r&f&kt&r&2&l",
      defaultName: "Hache RAYQUAZA",
      type: 5,
      enchants: [
        "&aTranchant &r&263&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
