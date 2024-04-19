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
  title: "GOURMANDISE",
  items: [
    {
      defaultName: "Armure Caramélisé",
      name: "&8&kt&r&8&kt&r&f&l*&r&c쓰&r&f&l*&r&8&kt&r&8&kt&r&8&l A&r&c&lr&r&8&lm&r&c&lu&r&8&lr&r&c&le &r&8&lC&r&c&la&r&8&lr&r&c&la&r&8&lm&r&c&lé&r&8&ll&r&c&li&r&8&ls&r&c&lé &r&8&kt&r&8&kt&r&f&l*&r&c쓰&r&f&l*&r&8&kt&r&8&kt&r",
      type: 0,
      enchants: ["&b&lProtection &r&3&l78&r", "&eSolidité &r&678&r"],
    },
    {
      defaultName: "Armure Caramélisé",
      name: "&8&kt&r&8&kt&r&f&l*&r&c쓰&r&f&l*&r&8&kt&r&8&kt&r&8&l A&r&c&lr&r&8&lm&r&c&lu&r&8&lr&r&c&le &r&8&lC&r&c&la&r&8&lr&r&c&la&r&8&lm&r&c&lé&r&8&ll&r&c&li&r&8&ls&r&c&lé &r&8&kt&r&8&kt&r&f&l*&r&c쓰&r&f&l*&r&8&kt&r&8&kt&r",
      type: 1,
      enchants: ["&b&lProtection &r&3&l78&r", "&eSolidité &r&678&r"],
    },
    {
      defaultName: "Armure Caramélisé",
      name: "&8&kt&r&8&kt&r&f&l*&r&c쓰&r&f&l*&r&8&kt&r&8&kt&r&8&l A&r&c&lr&r&8&lm&r&c&lu&r&8&lr&r&c&le &r&8&lC&r&c&la&r&8&lr&r&c&la&r&8&lm&r&c&lé&r&8&ll&r&c&li&r&8&ls&r&c&lé &r&8&kt&r&8&kt&r&f&l*&r&c쓰&r&f&l*&r&8&kt&r&8&kt&r",
      type: 2,
      enchants: ["&b&lProtection &r&3&l78&r", "&eSolidité &r&678&r"],
    },
    {
      defaultName: "Armure Caramélisé",
      name: "&8&kt&r&8&kt&r&f&l*&r&c쓰&r&f&l*&r&8&kt&r&8&kt&r&8&l A&r&c&lr&r&8&lm&r&c&lu&r&8&lr&r&c&le &r&8&lC&r&c&la&r&8&lr&r&c&la&r&8&lm&r&c&lé&r&8&ll&r&c&li&r&8&ls&r&c&lé &r&8&kt&r&8&kt&r&f&l*&r&c쓰&r&f&l*&r&8&kt&r&8&kt&r",
      type: 3,
      enchants: ["&b&lProtection &r&3&l78&r", "&eSolidité &r&678&r"],
    },
    {
      defaultName: "Sabre Caramélisé",
      name: "&8&kt&r&8&kt&r&f&l*&r&c쓰&r&f&l*&r&8&kt&r&8&kt&r&c&l S&r&8&la&r&c&lb&r&8&lr&r&c&le &r&8&lC&r&c&la&r&8&lr&r&c&la&r&8&lm&r&c&lé&r&8&ll&r&c&li&r&8&ls&r&c&lé &r&8&kt&r&8&kt&r&f&l*&r&c쓰&r&f&l*&r&8&kt&r&8&kt&r",
      type: 4,
      enchants: [
        "&aTranchant &r&278&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      defaultName: "Katana Sucré",
      name: "&f&kt&r&a&l❣&r&f&l✡&r&a&l❣&r&f&kt&r&a&l K&r&f&la&r&a&lt&r&f&la&r&a&ln&r&f&la &r&a&lS&r&f&lu&r&a&lc&r&f&lr&r&a&lé &r&f&kt&r&a&l❣&r&f&l✡&r&a&l❣&r&f&kt&r",
      type: 4,
      enchants: [
        "&aTranchant &r&287&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      defaultName: "Couteau à Beurre",
      name: "&8&kt&r&e&l⏏&r&f&l♾&r&e&l⏏&r&8&kt&r&e&l C&r&f&lo&r&e&lu&r&f&lt&r&e&le&r&f&la&r&e&lu&r&f&l à&r&e&l B&r&f&le&r&e&lu&r&f&lr&r&e&lr&r&f&le &r&8&kt&r&e&l⏏&r&f&l♾&r&e&l⏏&r&8&kt&r",
      type: 5,
      enchants: [
        "&aTranchant &r&284&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      defaultName: "Arc Caramélisé",
      name: "&8&kt&r&8&kt&r&f&l*&r&c쓰&r&f&l*&r&8&kt&r&8&kt&r&c&l A&r&8&lr&r&c&lc &r&8&lC&r&c&la&r&8&lr&r&c&la&r&8&lm&r&c&lé&r&8&ll&r&c&li&r&8&ls&r&c&lé &r&8&kt&r&8&kt&r&f&l*&r&c쓰&r&f&l*&r&8&kt&r&8&kt&r",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      defaultName: "Lanceur de Réglisse",
      name: "&8&kt&r&f&l♡&r&d&l❤&r&f&l♡&r&8&kt&r&d&l L&r&f&la&r&d&ln&r&f&lc&r&d&le&r&f&lu&r&d&lr &r&f&ld&r&d&le &r&f&lR&r&d&lé&r&f&lg&r&d&ll&r&f&li&r&d&ls&r&f&ls&r&d&le &r&8&kt&r&f&l♡&r&d&l❤&r&f&l♡&r&8&kt&r",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      defaultName: "Carabine à Bonbons",
      name: "&2&kt&r&a&kt&r&e&l⚡&r&a&l⚠&r&e&l⚡&r&a&kt&r&2&kt&r&a&l C&r&2&la&r&a&lr&r&2&la&r&a&lb&r&2&li&r&a&ln&r&2&le &r&a&là &r&2&lB&r&a&lo&r&2&ln&r&a&lb&r&2&lo&r&a&ln&r&2&ls &r&2&kt&r&a&kt&r&e&l⚡&r&a&l⚠&r&e&l⚡&r&a&kt&r&2&kt&r",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      defaultName: "Skateboard Cookie",
      name: "&4&kt&r&c&kt&r&4&l⭑&r&c&l✥&r&4&l⭑&r&c&kt&r&4&kt&r&4&l S&r&c&lk&r&4&la&r&c&lt&r&4&le&r&c&lb&r&4&lo&r&c&la&r&4&lr&r&c&ld &r&4&lC&r&c&lo&r&4&lo&r&c&lk&r&4&li&r&c&le &r&4&kt&r&c&kt&r&4&l⭑&r&c&l✥&r&4&l⭑&r&c&kt&r&4&kt&r",
      type: 6,
      enchants: [
        "&bPunch &r&3V&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      defaultName: "Arc à Sucettes",
      name: "&e&kt&r&6&kt&r&e&l⭑&r&6&l✧&r&e&l⭑&r&6&kt&r&e&kt&r&6&l A&r&e&lr&r&6&lc &r&e&là &r&6&lS&r&e&lu&r&6&lc&r&e&le&r&6&lt&r&e&lt&r&6&le&r&e&ls &r&e&kt&r&6&kt&r&e&l⭑&r&6&l✧&r&e&l⭑&r&6&kt&r&e&kt&r",
      type: 6,
      enchants: [
        "&bPunch &r&3VI&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      defaultName: "Binette Nougatine",
      name: "&2&kt&r&a&l☸&r&2&l✵&r&a&l☸&r&2&kt&r&2&l B&r&a&li&r&2&ln&r&a&le&r&2&lt&r&a&lt&r&2&le &r&a&lN&r&2&lo&r&a&lu&r&2&lg&r&a&la&r&2&lt&r&a&li&r&2&ln&r&a&le &r&2&kt&r&a&l☸&r&2&l✵&r&a&l☸&r&2&kt&r",
      type: 7,
      enchants: [
        "&bEfficency &r&31800&r",
        "&eSolidité &r&61800&r",
        "&aFortune &r&21800&r",
      ],
    },
    {
      defaultName: "Sucre d'Orge",
      name: "&4&kt&r&c&l☾&r&4&l❀&r&c&l☽&r&4&kt&r&4&l S&r&c&lu&r&4&lc&r&c&lr&r&4&le &r&c&ld&r&4&l'&r&c&lO&r&4&lr&r&c&lg&r&4&le &r&4&kt&r&c&l☾&r&4&l❀&r&c&l☽&r&4&kt&rx",
      type: 7,
      enchants: [
        "&bEfficency &r&32050&r",
        "&eSolidité &r&62050&r",
        "&aFortune &r&22050&r",
      ],
    },
    {
      defaultName: "Foreuse Guimauve",
      name: "&c&kt&r&e&l⁑&r&b&kt&r&a&l✽&r&b&kt&r&e&l⁑&r&c&kt&r&a&l F&r&b&lo&r&c&lr&r&d&le&r&e&lu&r&f&ls&r&a&le &r&b&lG&r&c&lu&r&d&li&r&e&lm&r&f&la&r&a&lu&r&b&lv&r&c&le &r&c&kt&r&e&l⁑&r&b&kt&r&a&l✽&r&b&kt&r&e&l⁑&r&c&kt&r",
      type: 7,
      enchants: [
        "&bEfficency &r&32200&r",
        "&eSolidité &r&62200&r",
        "&aFortune &r&22200&r",
      ],
    },
  ],
};

export default caisse;
