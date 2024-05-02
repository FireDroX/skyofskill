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
  title: "COWBOY",
  items: [
    {
      name: "&r&f&kt&r&e∨&r&6∫&r&e∨&r&f&kt&r&b &r&6&lB&r&e&la&r&6&ll&r&e&ll&r&6&le &r&6&ld&r&e&le &r&6&lp&r&e&la&r&6&li&r&e&ll&r&6&ll&r&e&le &r&f&kt&r&e∨&r&6∫&r&e∨&r&f&kt&r&b",
      defaultName: "Balle de paille",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&r&f&kt&r&a​▶&r&b➽&r&a​▶&r&f&kt&r&a&l C&r&b&lh&r&a&le&r&b&lv&r&a&la&r&b&ll&r&a&l d&r&b&le&r&a&l c&r&b&lo&r&a&lu&r&b&lr&r&a&ls&r&b&le &r&f&kt&r&a​▶&r&b➽&r&a​▶&r&f&kt&r&a",
      type: 6,
      defaultName: "Cheval de course",
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&r&f&kt&r&b✥&r&f&kt&r&b&l&r&b&l S&r&f&lu&r&b&lp&r&f&le&r&b&lr&r&7-&r&f&lC&r&b&lo&r&f&ll&r&b&lt &r&f&kt&r&b✥&r&f&kt&r&b&l&r&b&l",
      defaultName: "Super-Colt",
      type: 4,
      enchants: [
        "&aTranchant &r&263&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&f&kt&r&c&kt&r&f★&r&4ψ&r&f★&r&c&kt&r&f&kt&r&8&l &r&4&lC&r&c&la&r&4&ll&r&c&li&r&4&lb&r&c&lr&r&4&le &r&c.&r&4&l3&r&c&l6 &r&4&lP&r&c&lN &r&f&kt&r&c&kt&r&f★&r&4ψ&r&f★&r&c&kt&r&f&kt&r&8&l",
      defaultName: "Calibre .36PN",
      type: 4,
      enchants: [
        "&aTranchant &r&272&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&d&kt&r&5✷&r&d&kt&r&d&l P&r&f&li&r&d&lo&r&f&lc&r&d&lh&r&f&le &r&d&lC&r&f&lo&r&d&lw&r&f&lB&r&d&lo&r&f&ly &r&d&kt&r&5✷&r&d&kt&r&d&l",
      defaultName: "Pioche CowBoy",
      type: 7,
      enchants: [
        "&bEfficency &r&3700&r",
        "&eSolidité &r&6700&r",
        "&aFortune &r&2700&r",
      ],
    },
    {
      name: "&r&8&kt&r&f⋆&r&e​⚓&r&f⋆&r&8&kt&r&6&l &r&8&lF&r&7&lo&r&e&lr&r&8&le&r&7&lu&r&e&ls&r&8&le &r&7&lL&r&e&la&r&8&ls&r&7&ls&r&e&lo &r&8&kt&r&f⋆&r&e​⚓&r&f⋆&r&8&kt&r&6&l",
      defaultName: "Foreuse Lasso",
      type: 7,
      enchants: [
        "&bEfficency &r&3800&r",
        "&eSolidité &r&6800&r",
        "&aFortune &r&2800&r",
      ],
    },
    {
      name: "&r&a&kt&r&f&kt&r&2✕&r&a​✖&r&2✕&r&f&kt&r&a&kt&r&2&l &r&2&lP&r&a&li&r&2&lo&r&a&lc&r&2&lh&r&a&le &r&f&lC&r&a&la&r&f&lc&r&a&lt&r&f&lu&r&a&ls &r&a&kt&r&f&kt&r&2✕&r&a​✖&r&2✕&r&f&kt&r&a&kt",
      defaultName: "Pioche Cactus",
      type: 7,
      enchants: [
        "&bEfficency &r&3900&r",
        "&eSolidité &r&6900&r",
        "&aFortune &r&2900&r",
      ],
    },
    {
      name: "&r&f&kt&r&6❰&r&e✰&r&6❱&r&f&kt&r&6&l &r&6&lF&r&f&lo&r&6&lu&r&f&lr&r&6&lr&r&f&lu&r&6&lr&r&f&le &r&6&lp&r&f&la&r&6&lr &r&f&lb&r&6&la&r&f&ll&r&6&ll&r&f&le &r&f&kt&r&6❰&r&e✰&r&6❱&r&f&kt&r&6&l",
      defaultName: "Fourrure par balle",
      type: 0,
      enchants: ["&b&lProtection &r&3&l63&r", "&eSolidité &r&663&r"],
    },
    {
      name: "&r&f&kt&r&6❰&r&e✰&r&6❱&r&f&kt&r&6&l &r&6&lF&r&f&lo&r&6&lu&r&f&lr&r&6&lr&r&f&lu&r&6&lr&r&f&le &r&6&lp&r&f&la&r&6&lr &r&f&lb&r&6&la&r&f&ll&r&6&ll&r&f&le &r&f&kt&r&6❰&r&e✰&r&6❱&r&f&kt&r&6&l",
      defaultName: "Fourrure par balle",
      type: 1,
      enchants: ["&b&lProtection &r&3&l63&r", "&eSolidité &r&663&r"],
    },
    {
      name: "&r&f&kt&r&6❰&r&e✰&r&6❱&r&f&kt&r&6&l &r&6&lF&r&f&lo&r&6&lu&r&f&lr&r&6&lr&r&f&lu&r&6&lr&r&f&le &r&6&lp&r&f&la&r&6&lr &r&f&lb&r&6&la&r&f&ll&r&6&ll&r&f&le &r&f&kt&r&6❰&r&e✰&r&6❱&r&f&kt&r&6&l",
      defaultName: "Fourrure par balle",
      type: 2,
      enchants: ["&b&lProtection &r&3&l63&r", "&eSolidité &r&663&r"],
    },
    {
      name: "&r&f&kt&r&6❰&r&e✰&r&6❱&r&f&kt&r&6&l &r&6&lF&r&f&lo&r&6&lu&r&f&lr&r&6&lr&r&f&lu&r&6&lr&r&f&le &r&6&lp&r&f&la&r&6&lr &r&f&lb&r&6&la&r&f&ll&r&6&ll&r&f&le &r&f&kt&r&6❰&r&e✰&r&6❱&r&f&kt&r&6&l",
      defaultName: "Fourrure par balle",
      type: 3,
      enchants: ["&b&lProtection &r&3&l63&r", "&eSolidité &r&663&r"],
    },
    {
      name: "&r&6&kt&r&e&kt&r&f✵&r&e&kt&r&6&kt&r&6&l P&r&e&la&r&f&lc&r&6&li&r&e&lf&r&f&li&r&6&lc&r&e&la&r&f&lt&r&6&le&r&e&lu&r&f&lr &r&6&kt&r&e&kt&r&f✵&r&e&kt&r&6&kt&r&6&l",
      defaultName: "Pacificateur",
      type: 5,
      enchants: [
        "&aTranchant &r&268&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
