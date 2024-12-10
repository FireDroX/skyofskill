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
  title: "PIRATE",
  items: [
    {
      name: "&r&f&ki&r&7*&r&8​⚔&r&7*&r&f&ki&r&4&l &r&8&lP&r&7&li&r&f&lr&r&8&la&r&7&lt&r&f&le &r&f&ki&r&7*&r&8​⚔&r&7*&r&f&ki",
      defaultName: "Pirate",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&r&d&ki&r&7❈&r&8☫&r&7❈&r&d&ki&r&a &r&d&lF&r&8&ll&r&7&li&r&d&ln&r&8&lg&r&7&lu&r&d&le&r&8&l d&r&7&lu&r&d&l B&r&8&la&r&7&ln&r&d&ld&r&8&li&r&7&lt &r&d&ki&r&7❈&r&8☫&r&7❈&r&d&ki",
      defaultName: "Flingue du Bandit",
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
      defaultName: "WINCHESTER",
      type: 6,
      enchants: [
        "&bPunch &r&3V&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&f&ki&r&7*&r&8⚔&r&7*&r&f&ki&r&4&l &r&8&lP&r&7&li&r&f&lr&r&8&la&r&7&lt&r&f&le &r&f&ki&r&7*&r&8⚔&r&7*&r&f&ki",
      defaultName: "Pirate",
      type: 4,
      enchants: [
        "&aTranchant &r&267&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&ki&r&7&ki&r&8*&r&b⚖&r&8*&r&7&ki&r&f&ki&r&8&l &r&b&lS&r&8&la&r&7&lb&r&b&lr&r&8&le &r&7&ld&r&b&lu&r&8&l F&r&7&la&r&b&ln&r&8&lt&r&7&lô&r&b&lm&r&8&le &r&f&ki&r&7&ki&r&8*&r&b⚖&r&8*&r&7&ki&r&f&ki",
      defaultName: "Sabre du Fantôme",
      type: 4,
      enchants: ["&aTranchant &r&275&r","&eSolidité &r&610&r","&dAura de Feu &r&510&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&ki&r&9​↕&r&f​⚠&r&9​↕&r&f&ki&r&6&l &r&9&lS&r&f&lc&r&9&li&r&f&le&r&9&l d&r&f&lu&r&9&l C&r&f&la&r&9&lm&r&f&lb&r&9&lr&r&f&li&r&9&lo&r&f&ll&r&9&le&r&f&lu&r&9&lr &r&f&ki&r&9​↕&r&f​⚠&r&9​↕&r&f&ki&r&6&l",
      defaultName: "Scie du Cambrioleur",
      type: 7,
      enchants: [
        "&bEfficency &r&3950&r",
        "&eSolidité &r&6950&r",
        "&aFortune &r&2950&r",
      ],
    },
    {
      defaultName: "???",
      type: 7,
      enchants: [
        "&bEfficency &r&3????&r",
        "&eSolidité &r&6????&r",
        "&aFortune &r&2????&r",
      ],
    },
    {
      name: "&r&8&ki&r&f✩&r&7☫&r&f✩&r&8&ki&r&4&l &r&8&lF&r&7&lo&r&f&lr&r&8&le&r&7&lu&r&f&ls&r&8&le&r&7&l T&r&f&lh&r&8&le&r&7&lr&r&f&lm&r&8&li&r&7&lq&r&f&lu&r&8&le &r&8&ki&r&f✩&r&7☫&r&f✩&r&8&ki&r&4&l",
      defaultName: "Foreuse Thermique",
      type: 7,
      enchants: [
        "&bEfficency &r&31350&r",
        "&eSolidité &r&61350&r",
        "&aFortune &r&21350&r",
      ],
    },
    {
      name: "&r&f&ki&r&7*&r&8​⚔&r&7*&r&f&ki&r&4&l &r&8&lP&r&7&li&r&f&lr&r&8&la&r&7&lt&r&f&le &r&f&ki&r&7*&r&8​⚔&r&7*&r&f&ki",
      defaultName: "Pirate",
      type: 0,
      enchants: ["&b&lProtection &r&3&l67&r", "&eSolidité &r&667&r"],
    },
    {
      name: "&r&f&ki&r&7*&r&8​⚔&r&7*&r&f&ki&r&4&l &r&8&lP&r&7&li&r&f&lr&r&8&la&r&7&lt&r&f&le &r&f&ki&r&7*&r&8​⚔&r&7*&r&f&ki",
      defaultName: "Pirate",
      type: 1,
      enchants: ["&b&lProtection &r&3&l67&r", "&eSolidité &r&667&r"],
    },
    {
      name: "&r&f&ki&r&7*&r&8​⚔&r&7*&r&f&ki&r&4&l &r&8&lP&r&7&li&r&f&lr&r&8&la&r&7&lt&r&f&le &r&f&ki&r&7*&r&8​⚔&r&7*&r&f&ki",
      defaultName: "Pirate",
      type: 2,
      enchants: ["&b&lProtection &r&3&l67&r", "&eSolidité &r&667&r"],
    },
    {
      name: "&r&f&ki&r&7*&r&8​⚔&r&7*&r&f&ki&r&4&l &r&8&lP&r&7&li&r&f&lr&r&8&la&r&7&lt&r&f&le &r&f&ki&r&7*&r&8​⚔&r&7*&r&f&ki",
      defaultName: "Pirate",
      type: 3,
      enchants: ["&b&lProtection &r&3&l67&r", "&eSolidité &r&667&r"],
    },
    {
      name: "&r&f&ki&r&a&ki&r&2⚗&r&a⚛&r&2⚗&r&a&ki&r&f&ki&r&8&l &r&2&lC&r&a&lo&r&2&lu&r&a&lt&r&2&le&r&a&la&r&2&lu&r&a&l d&r&2&le &r&a&lT&r&2&lo&r&a&lx&r&2&li&r&a&lq&r&2&lu&r&a&le &r&f&ki&r&a&ki&r&2⚗&r&a⚛&r&2⚗&r&a&ki&r&f&ki",
      defaultName: "Couteau de Toxique",
      type: 5,
      enchants: [
        "&aTranchant &r&272&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
  ],
};

export default caisse;
