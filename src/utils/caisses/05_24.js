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
      name: "&r&e&k&l|&r&r&r&f★&r&b☭&r&f★&r&e&k&l|&r&r &r&5&lL&l&r&7A&r&5&lM&r&7&lE &r&5&lV&r&7&lI&r&5&lB&r&7&lR&r&5&lA&r&7&lN&r&5&lI&r&7&lU&r&5&lM &r&e&k&l|&r&r&r&f★&r&b☭&r&f★&r&e&k&l|",
      defaultName: "Lame Vibranium",
      type: 4,
      enchants: [
        "&aTranchant &r&288&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
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
      name: "&r&e&k&l|&r&a★&r&2☭&r&a★&r&e&k&l|&r&r &r&b&lB&r&f&lR&r&b&lO&r&f&lY&r&b&lE&r&f&lU&r&b&lR &r&f&lD&r&b&lE &r&f&lT&r&b&lE&r&f&lS&r&b&lS&r&f&lE&r&b&lR&r&f&lA&r&b&lC&r&f&lT &r&e&k&l|&r&a★&r&2☭&r&a★&r&e&k&l|",
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
      name: "&r&e&k&l|&r&7★&r&c☭&r&7★&r&e&k&l|&r&r &r&4&lM&r&7&lJ&r&4&lO&r&7&lL&r&4&lN&r&7&lI&r&4&lR &r&e&k&l|&r&7★&r&c☭&r&7★&r&e&k&l|&r&7",
      defaultName: "Mjolnir",
      type: 7,
      enchants: [
        "&bEfficency &r&32400&r",
        "&eSolidité &r&62400&r",
        "&aFortune &r&22400&r",
      ],
      dontLeaveOnDeath: false,
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
      name: "&r&1&k&l|&r&f★&r&e☭&r&f★&r&1&k&l|&r&r &r&4&lL&r&e&lA&r&4&lS&r&e&lE&r&4&lR &r&e&lD&r&4&lE &r&e&lV&r&4&lI&r&e&lS&r&4&lI&r&e&lO&r&4&lN &r&1&k&l|&r&r&r&f★&r&e☭&r&f★&r&1&k|",
      defaultName: "Laser de vision",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&1&k&l|&r&r&r&3★&r&f☭&r&3★&r&1&k&l|&r&r &r&9&lA&r&3&lR&r&9&lC &r&3&lD&r&9&lE &r&3&lY&r&9&lO&r&3&lN&r&9&lD&r&3&lU &r&1&k&l|&r&r&r&3★&r&f☭&r&3★&r&1&k|",
      defaultName: "Arc de Yondu",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&9&k&l|&r&r&r&4★&r&c☭&r&4★&r&9&k&l|&r&r &r&4&lL&r&1&lA&r&f&lN&r&4&lC&r&1&lE &r&f&lT&r&4&lO&r&1&lI&r&f&lL&r&4&lE &r&9&k&l|&r&r&r&4★&r&c☭&r&4★&r&9&k|&r&7",
      defaultName: "Lance Toile",
      type: 6,
      enchants: [
        "&bPunch &r&3V&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&f&k&l|&r&r&r&d★&r&5☭&r&d★&r&f&k&l|&r&r &r&8&lA&r&f&lR&r&5&lC &r&8D&r&f&lE &r&5&lH&r&8&lA&r&f&lW&r&5&lK&r&8&lE&r&f&lY&r&5&lE &r&f&k&l|&r&r&r&d★&r&5☭&r&d★&r&f&k&l|&r&7",
      defaultName: "Lance Toile",
      type: 6,
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
