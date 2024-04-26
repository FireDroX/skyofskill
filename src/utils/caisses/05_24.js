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
  title: "HEROS",
  items: [
    {
      name: "&r&e&k&l|&r&r&r&f★&r&b☭&r&f★&r&e&k&l|&r&r &r&b&lS&r&4&lA&r&b&lB&r&4&lR&r&b&lE &r&4&lD&r&b&lE &r&4&lR&r&b&lO&r&4&lN&r&b&lI&r&4&lN &r&e&k&l|&r&r&r&f★&r&b☭&r&f★&r&e&k&l|",
      defaultName: "Sabre de Ronin",
      type: 4,
      enchants: [
        "&aTranchant &r&279&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      defaultName: "Lame Vibranium",
      type: 4,
      enchants: [
        "&aTranchant &r&288&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&e&k&l|&r&r&r&f★&r&b☭&r&f★&r&e&k&l|&r&r &r&4&lA&r&b&lR&r&4&lM&r&b&lU&r&4&lR&r&b&lE &r&4&lD&r&b&lE &r&4&lT&r&b&lH&r&4&lO&r&b&lR &r&e&k&l|&r&r&r&f★&r&b☭&r&f★&r&e&k&l|",
      defaultName: "Armure de Thor",
      type: 0,
      enchants: ["&b&lProtection &r&3&l79&r", "&eSolidité &r&679&r"],
    },
    {
      name: "&r&e&k&l|&r&r&r&f★&r&b☭&r&f★&r&e&k&l|&r&r &r&4&lA&r&b&lR&r&4&lM&r&b&lU&r&4&lR&r&b&lE &r&4&lD&r&b&lE &r&4&lT&r&b&lH&r&4&lO&r&b&lR &r&e&k&l|&r&r&r&f★&r&b☭&r&f★&r&e&k&l|",
      defaultName: "Armure de Thor",
      type: 1,
      enchants: ["&b&lProtection &r&3&l79&r", "&eSolidité &r&679&r"],
    },
    {
      name: "&r&e&k&l|&r&r&r&f★&r&b☭&r&f★&r&e&k&l|&r&r &r&4&lA&r&b&lR&r&4&lM&r&b&lU&r&4&lR&r&b&lE &r&4&lD&r&b&lE &r&4&lT&r&b&lH&r&4&lO&r&b&lR &r&e&k&l|&r&r&r&f★&r&b☭&r&f★&r&e&k&l|",
      defaultName: "Armure de Thor",
      type: 2,
      enchants: ["&b&lProtection &r&3&l79&r", "&eSolidité &r&679&r"],
    },
    {
      name: "&r&e&k&l|&r&r&r&f★&r&b☭&r&f★&r&e&k&l|&r&r &r&4&lA&r&b&lR&r&4&lM&r&b&lU&r&4&lR&r&b&lE &r&4&lD&r&b&lE &r&4&lT&r&b&lH&r&4&lO&r&b&lR &r&e&k&l|&r&r&r&f★&r&b☭&r&f★&r&e&k&l|",
      defaultName: "Armure de Thor",
      type: 3,
      enchants: ["&b&lProtection &r&3&l79&r", "&eSolidité &r&679&r"],
    },
    {
      name: "&r&e&k&l|&r&r&r&4★&r&c☭&r&4★&r&e&k&l|&r&r &r&c&lS&r&7&lT&r&c&lO&r&7&lR&r&c&lM&r&7&lB&r&c&lR&r&7&lE&r&c&lA&r&7&lK&r&c&lE&r&7&lR &r&e&k&l|&r&r&r&4★&r&c☭&r&4★&r&e&k&l|",
      defaultName: "Stormbreaker",
      type: 5,
      enchants: [
        "&aTranchant &r&285&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      defaultName: "Broyeur de Tesseract",
      type: 7,
      enchants: [
        "&bEfficency &r&32000&r",
        "&eSolidité &r&62000&r",
        "&aFortune &r&22000&r",
      ],
    },
    {
      name: "&r&e&k&l|&r&f★&r&6☭&r&f★&r&e&k&l|&r&r &r&2&lB&r&6&lR&r&2&lA&r&6&lS &r&2&lD&r&6&lE &r&2&lG&r&6&lR&r&2&lO&r&6&lO&r&2&lT &r&e&k&l|&r&f★&r&6☭&r&f★&r&e&k&l|",
      defaultName: "Bras de Groot",
      type: 7,
      enchants: [
        "&bEfficency &r&32250&r",
        "&eSolidité &r&62250&r",
        "&aFortune &r&22250&r",
      ],
    },
    {
      defaultName: "Mjolnir",
      type: 7,
      enchants: [
        "&bEfficency &r&32400&r",
        "&eSolidité &r&62400&r",
        "&aFortune &r&22400&r",
      ],
    },
    {
      name: "&r&e&k&l|&r&r&r&f★&r&b☭&r&f★&r&e&k&l|&r&r &r&b&lA&r&4&lR&r&b&lC &r&4&lD&r&b&lE &r&4&lT&r&b&lH&r&4&lO&r&b&lR &r&e&k&l|&r&r&r&f★&r&b☭&r&f★&r&e&k&l|",
      type: 6,
      defaultName: "Arc de Thor",
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      type: 6,
      defaultName: "Laser de Vision",
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      type: 6,
      defaultName: "Arc de Yondu",
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      type: 6,
      defaultName: "Lance Toile",
      enchants: [
        "&bPunch &r&3V&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      type: 6,
      defaultName: "Arc de Hawkeye",
      enchants: [
        "&bPunch &r&3VI&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
  ],
};

export default caisse;
