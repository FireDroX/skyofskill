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
  title: "FIREWORK",
  items: [
    {
      name: "&f&kt&r&e&kt&r&f☉&r&e​☄&r&f☉&r&e&kt&r&f&kt&r&e&l A&r&f&lr&r&e&lc &r&f&lF&r&e&li&r&f&lr&r&e&le&r&f&lW&r&e&lo&r&f&lr&r&e&lk &r&f&kt&r&e&kt&r&f☉&r&e​☄&r&f☉&r&e&kt&r&f&kt&r",
      defaultName: "Arc FireWork",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&r&d&ki&r&f&ki&r&dϟ&r&f✩&r&dϟ&r&f&ki&r&d&ki&r&8&l &r&d&lA&r&f&lr&r&d&lc&r&f&l d&r&d&le&r&f&ls&r&d&l C&r&f&lé&r&d&ll&r&f&lé&r&d&lb&r&f&lr&r&d&la&r&f&lt&r&d&li&r&f&lo&r&d&ln&r&f&ls &r&d&ki&r&f&ki&r&dϟ&r&f✩&r&dϟ&r&f&ki&r&d&ki",
      defaultName: "Arc des Célébrations",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&r&c&ki&r&f​☄&r&c​⚠&r&f​☄&r&c&ki&r&c &l C&r&f&la&r&c&ln&r&f&lo&r&c&ln&r&f&l à&r&c&l C&r&f&lo&r&c&ln&r&f&lf&r&c&le&r&f&lt&r&c&lt&r&f&li&r&c&ls &r&c&ki&r&f​☄&r&c​⚠&r&f​☄&r&c&ki",
      defaultName: "Canon à Confettis",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      defaultName: "???",
      type: 6,
      enchants: [
        "&bPunch &r&3V&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      defaultName: "???",
      type: 6,
      enchants: [
        "&bPunch &r&3VI&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&f&kt&r&e&kt&r&f☉&r&e​☄&r&f☉&r&e&kt&r&f&kt&r&e&l S&r&f&lc&r&e&lh&r&f&ll&r&e&la&r&f&ls&r&e&ls&r&f&l F&r&e&li&r&f&lr&r&e&le&r&f&lW&r&e&lo&r&f&lr&r&e&lk &r&f&kt&r&e&kt&r&f☉&r&e​☄&r&f☉&r&e&kt&r&f&kt&r",
      defaultName: "Schlass FireWork",
      type: 4,
      enchants: [
        "&aTranchant &r&273&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      defaultName: "???",
      type: 4,
      enchants: [
        "&aTranchant &r&2??&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&f&kt&r&e&kt&r&f☉&r&e​☄&r&f☉&r&e&kt&r&f&kt&r&e&l F&r&f&lo&r&e&lr&r&f&le&r&e&lu&r&f&ls&r&e&le&r&f&l F&r&e&li&r&f&lr&r&e&le&r&f&lW&r&e&lo&r&f&lr&r&e&lk &r&f&kt&r&e&kt&r&f☉&r&e​☄&r&f☉&r&e&kt&r&f&kt&r",
      defaultName: "Foreuse FireWork",
      type: 7,
      enchants: [
        "&bEfficency &r&31400&r",
        "&eSolidité &r&61400&r",
        "&aFortune &r&21400&r",
      ],
    },
    {
      name: "&c&kt&r&f&kt&r&c✩&r&f&kt&r&c&kt&r&c&l F&r&f&lo&r&c&lr&r&f&le&r&c&lu&r&f&ls&r&c&le &r&f&lC&r&c&lh&r&f&la&r&c&lm&r&f&lp&r&c&la&r&f&lg&r&c&ln&r&f&le &r&c&kt&r&f&kt&r&c✩&r&f&kt&r&c&kt&r",
      defaultName: "Foreuse Champagne",
      type: 7,
      enchants: [
        "&bEfficency &r&31650&r",
        "&eSolidité &r&61650&r",
        "&aFortune &r&21650&r",
      ],
    },
    {
      name: "&r&b&ki&r&f*&r&b❄&r&f*&r&b&ki&r&4&l &r&b&lB&r&f&la&r&b&lg&r&f&lu&r&b&le&r&f&lt&r&b&lt&r&f&le &r&b&ld&r&f&le &r&b&ll&r&f&la&r&b&l F&r&f&lo&r&b&lr&r&f&lt&r&b&lu&r&f&ln&r&b&le &r&b&ki&r&f*&r&b❄&r&f*&r&b&ki",
      defaultName: "Baguette de la Fortune",
      type: 7,
      enchants: [
        "&bEfficency &r&31800&r",
        "&eSolidité &r&61800&r",
        "&aFortune &r&21800&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&f&kt&r&e&kt&r&f☉&r&e​☄&r&f☉&r&e&kt&r&f&kt&r&f&l A&r&e&lr&r&f&lm&r&e&lu&r&f&lr&r&e&le&r&f&l F&r&e&li&r&f&lr&r&e&le&r&f&lW&r&e&lo&r&f&lr&r&e&lk &r&f&kt&r&e&kt&r&f☉&r&e​☄&r&f☉&r&e&kt&r&f&kt&r",
      defaultName: "Armure FireWork",
      type: 0,
      enchants: ["&b&lProtection &r&3&l73&r", "&eSolidité &r&673&r"],
    },
    {
      name: "&f&kt&r&e&kt&r&f☉&r&e​☄&r&f☉&r&e&kt&r&f&kt&r&f&l A&r&e&lr&r&f&lm&r&e&lu&r&f&lr&r&e&le&r&f&l F&r&e&li&r&f&lr&r&e&le&r&f&lW&r&e&lo&r&f&lr&r&e&lk &r&f&kt&r&e&kt&r&f☉&r&e​☄&r&f☉&r&e&kt&r&f&kt&r",
      defaultName: "Armure FireWork",
      type: 1,
      enchants: ["&b&lProtection &r&3&l73&r", "&eSolidité &r&673&r"],
    },
    {
      name: "&f&kt&r&e&kt&r&f☉&r&e​☄&r&f☉&r&e&kt&r&f&kt&r&f&l A&r&e&lr&r&f&lm&r&e&lu&r&f&lr&r&e&le&r&f&l F&r&e&li&r&f&lr&r&e&le&r&f&lW&r&e&lo&r&f&lr&r&e&lk &r&f&kt&r&e&kt&r&f☉&r&e​☄&r&f☉&r&e&kt&r&f&kt&r",
      defaultName: "Armure FireWork",
      type: 2,
      enchants: ["&b&lProtection &r&3&l73&r", "&eSolidité &r&673&r"],
    },
    {
      name: "&f&kt&r&e&kt&r&f☉&r&e​☄&r&f☉&r&e&kt&r&f&kt&r&f&l A&r&e&lr&r&f&lm&r&e&lu&r&f&lr&r&e&le&r&f&l F&r&e&li&r&f&lr&r&e&le&r&f&lW&r&e&lo&r&f&lr&r&e&lk &r&f&kt&r&e&kt&r&f☉&r&e​☄&r&f☉&r&e&kt&r&f&kt&r",
      defaultName: "Armure FireWork",
      type: 3,
      enchants: ["&b&lProtection &r&3&l73&r", "&eSolidité &r&673&r"],
    },
    {
      name: "&r&d&ki&r&f&ki&r&dϟ&r&f✩&r&dϟ&r&f&ki&r&d&ki&r&8&l &r&d&lS&r&f&lc&r&d&le&r&f&lp&r&d&lt&r&f&lr&r&d&le&r&f&l d&r&d&le&r&f&ls&r&d&l C&r&f&lé&r&d&ll&r&f&lé&r&d&lb&r&f&lr&r&d&la&r&f&lt&r&d&li&r&f&lo&r&d&ln&r&f&ls &r&d&ki&r&f&ki&r&dϟ&r&f✩&r&dϟ&r&f&ki&r&d&ki",
      defaultName: "Sceptre des Célébrations",
      type: 5,
      enchants: [
        "&aTranchant &r&279&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
