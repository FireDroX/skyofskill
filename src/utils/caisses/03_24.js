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
  title: "GALAXIE",
  items: [
    {
      name: "&8⁑&r&d​☀&r&8⁑ &r&d&lA&r&8&lr&r&d&lc&r&8&l S&r&d&lp&r&8&la&r&d&lt&r&8&li&r&d&la&r&8&ll &r&8⁑&r&d​☀&r&8⁑&r",
      defaultName: "Arc Spatial",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&f&kt&r&d​♨&r&5​⚙&r&d​♨&r&f&kt&r&5&l N&r&d&la&r&5&lv&r&d&li&r&f-&r&5&lN&r&d&lé&r&5&lb&r&d&lu&r&5&ll&r&d&le&r&5&lu&r&d&ls&r&5&le &r&f&kt&r&d​♨&r&5​⚙&r&d​♨&r&f&kt&r",
      defaultName: "Navi-Nébuleuse",
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
      name: "&8&kt&r&e⭑&r&8&kt&r&e✫&r&8&kt&r&e⭑&r&8&kt&r&e&l E&r&8&lt&r&e&lo&r&8&li&r&e&ll&r&8&leM&r&e&lo&r&8&lb&r&e&li&r&8&ll&r&e&le &r&8&kt&r&e⭑&r&8&kt&r&e✫&r&8&kt&r&e⭑&r&8&kt&r",
      defaultName: "EtoileMobile",
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
      name: "&b&kt&r&8⁑&r&b​☀&r&8⁑&r&b&kt&r&b&l K&r&8&la&r&b&lt&r&8&la&r&b&ln&r&8&la&r&b&l G&r&8&la&r&b&ll&r&8&la&r&b&lc&r&8&lt&r&b&li&r&8&lq&r&b&lu&r&8&le &r&b&kt&r&8⁑&r&b​☀&r&8⁑&r&b&kt&r",
      defaultName: "Katana Galactique",
      type: 4,
      enchants: [
        "&aTranchant &r&277&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      defaultName: "???",
      type: 4,
      enchants: [
        "&aTranchant &r&286&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&b&kt&r&8⁑&r&b​☀&r&8⁑&r&b&kt&r&b&l F&r&8&lo&r&b&lr&r&8&le&r&b&lu&r&8&ls&r&b&le &r&8&lP&r&b&lu&r&8&ll&r&b&ls&r&8&la&r&b&lr &r&b&kt&r&8⁑&r&b​☀&r&8⁑&r&b&kt&r",
      defaultName: "Foreuse Pulsar",
      type: 7,
      enchants: [
        "&bEfficency &r&31650&r",
        "&eSolidité &r&61650&r",
        "&aFortune &r&21650&r",
      ],
    },
    {
      name: "&f&kt&r&b​☸&r&8࿈&r&b​☸&r&f&kt&r&b&l S&r&8&lc&r&b&la&r&8&ll&r&b&lp&r&8&le&r&b&ll&r&8&l d&r&b&le&r&8&ls&r&b&l C&r&8&lo&r&b&ln&r&8&ls&r&b&lt&r&8&le&r&b&ll&r&8&ll&r&b&la&r&8&lt&r&b&li&r&8&lo&r&b&ln &r&f&kt&r&b​☸&r&8࿈&r&b​☸&r&f&kt&r",
      defaultName: "Scalpel des Constellation",
      type: 7,
      enchants: [
        "&bEfficency &r&31900&r",
        "&eSolidité &r&61900&r",
        "&aFortune &r&21900&r",
      ],
    },
    {
      name: "&8&kt&r&aꕥ&r&8&kt&r&a⚝&r&8&kt&r&aꕥ&r&8&kt&r&a&l S&r&8&lce&r&a&lp&r&8&lt&r&a&lr&r&8&le&r&a&l C&r&8&lo&r&a&ls&r&8&lm&r&a&li&r&8&lq&r&a&lu&r&8&le &r&8&kt&r&aꕥ&r&8&kt&r&a⚝&r&8&kt&r&aꕥ&r&8&kt&r",
      defaultName: "Sceptre Cosmisque",
      type: 7,
      enchants: [
        "&bEfficency &r&32050&r",
        "&eSolidité &r&62050&r",
        "&aFortune &r&22050&r",
      ],
    },
    {
      name: "&b&kt&r&8⁑&r&b​☀&r&8⁑&r&b&kt&r&b&l A&r&8&lrm&r&b&lu&r&8&lr&r&b&le &r&8&lS&r&b&lp&r&8&la&r&b&lt&r&8&li&r&b&la&r&8&ll&r&b&le &r&b&kt&r&8⁑&r&b​☀&r&8⁑&r&b&kt&r",
      defaultName: "Armure Spatial",
      type: 0,
      enchants: ["&b&lProtection &r&3&l77&r", "&eSolidité &r&677&r"],
    },
    {
      name: "&b&kt&r&8⁑&r&b​☀&r&8⁑&r&b&kt&r&b&l A&r&8&lrm&r&b&lu&r&8&lr&r&b&le &r&8&lS&r&b&lp&r&8&la&r&b&lt&r&8&li&r&b&la&r&8&ll&r&b&le &r&b&kt&r&8⁑&r&b​☀&r&8⁑&r&b&kt&r",
      defaultName: "Armure Spatial",
      type: 1,
      enchants: ["&b&lProtection &r&3&l77&r", "&eSolidité &r&677&r"],
    },
    {
      name: "&b&kt&r&8⁑&r&b​☀&r&8⁑&r&b&kt&r&b&l A&r&8&lrm&r&b&lu&r&8&lr&r&b&le &r&8&lS&r&b&lp&r&8&la&r&b&lt&r&8&li&r&b&la&r&8&ll&r&b&le &r&b&kt&r&8⁑&r&b​☀&r&8⁑&r&b&kt&r",
      defaultName: "Armure Spatial",
      type: 2,
      enchants: ["&b&lProtection &r&3&l77&r", "&eSolidité &r&677&r"],
    },
    {
      name: "&b&kt&r&8⁑&r&b​☀&r&8⁑&r&b&kt&r&b&l A&r&8&lrm&r&b&lu&r&8&lr&r&b&le &r&8&lS&r&b&lp&r&8&la&r&b&lt&r&8&li&r&b&la&r&8&ll&r&b&le &r&b&kt&r&8⁑&r&b​☀&r&8⁑&r&b&kt&r",
      defaultName: "Armure Spatial",
      type: 3,
      enchants: ["&b&lProtection &r&3&l77&r", "&eSolidité &r&677&r"],
    },
    {
      name: "&r&8&ki&r&7⌖&r&f​✈&r&7⌖&r&8&ki&r&8&l &r&8&lG&r&7&ll&r&f&la&r&8&li&r&7&lv&r&f&le &r&8&lS&r&7&lt&r&f&le&r&8&ll&r&7&ll&r&f&la&r&8&li&r&7&lr&r&f&le &r&8&ki&r&7⌖&r&f​✈&r&7⌖&r&8&ki",
      defaultName: "Glaive Stellaire",
      type: 5,
      enchants: [
        "&aTranchant &r&283&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
