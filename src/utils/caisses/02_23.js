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
  title: "SAINT-VALENTIN",
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
      defaultName: "???",
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
      name: "&r&c&kt&r&4​❤&r&c&kt&r&4&l &r&4&lSa&r&c&lbr&r&4&le e&r&c&ln C&r&4&lho&r&c&lco&r&4&lla&r&c&lt &r&c&kt&r&4​❤&r&c&kt&r&4&l",
      defaultName: "Sabre en Chocolat",
      type: 4,
      enchants: [
        "&aTranchant &r&248&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&5&l&kt&r&f&ktt&r&d​❤&r&f&ktt&r&5&l&kt&r&5&l &r&5&lL&r&d&la&r&5&lm&r&d&le &r&5&ld&r&d&le &r&a&lC&r&b&lo&r&c&le&r&d&lu&r&e&lr &r&5&l&kt&r&f&ktt&r&d​❤&r&f&ktt&r&5&l&kt&r&5&l",
      defaultName: "Lame de Coeur",
      type: 4,
      enchants: [
        "&aTranchant &r&253&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&9&l&ki&r&b&kt&r&f​❤&r&b&kt&r&9&l&kt&r &r&9&l&nP&r&b&l&nioche&r &r&b&l&nde&r &r&9&l&nV&r&b&l&nalentine&r&b &r&9&l&ki&r&b&kt&r&f​❤&r&b&kt&r&9&l&kt&r&9&l",
      type: 7,
      defaultName: "Pioche de Valentine",
      enchants: [
        "&bEfficency &r&3200&r",
        "&eSolidité &r&6200&r",
        "&aFortune &r&2400&r",
      ],
    },
    {
      name: "&r&6&l&kt&r&6&kt&r&e&kt&r&a​❤&r&e&kt&r&6&kt&r&e&l&kt&r&6&l Ma&r&e&lst&r&6&lic&r&e&lat&r&6&leu&r&e&lr d&r&6&le L&r&e&lov&r&6&lés &r&6&l&kt&r&6&kt&r&e&kt&r&a​❤&r&e&kt&r&6&kt&r&e&l&kt&r&6&l",
      type: 7,
      defaultName: "Masticateur de Lovés",
      enchants: [
        "&bEfficency &r&3300&r",
        "&eSolidité &r&6300&r",
        "&aFortune &r&2450&r",
      ],
    },
    {
      defaultName: "???",
      type: 7,
      enchants: [
        "&bEfficency &r&3???&r",
        "&eSolidité &r&6???&r",
        "&aFortune &r&2???&r",
      ],
    },
    {
      name: "&r&c&kt&r&4​❤&r&c&kt&r&4&l C&r&c&lo&r&4&ls&r&c&lt&r&4&lu&r&c&lm&r&4&le &r&c&ld&r&4&le &r&c&lM&r&4&la&r&c&lr&r&4&li&r&c&la&r&4&lg&r&c&le &r&c&kt&r&4​❤&r&c&kt&r&4&l",
      defaultName: "Costume de Mariage",
      type: 0,
      enchants: ["&b&lProtection &r&3&l48&r", "&eSolidité &r&648&r"],
    },
    {
      name: "&r&c&kt&r&4​❤&r&c&kt&r&4&l C&r&c&lo&r&4&ls&r&c&lt&r&4&lu&r&c&lm&r&4&le &r&c&ld&r&4&le &r&c&lM&r&4&la&r&c&lr&r&4&li&r&c&la&r&4&lg&r&c&le &r&c&kt&r&4​❤&r&c&kt&r&4&l",
      defaultName: "Costume de Mariage",
      type: 1,
      enchants: ["&b&lProtection &r&3&l48&r", "&eSolidité &r&648&r"],
    },
    {
      name: "&r&c&kt&r&4​❤&r&c&kt&r&4&l C&r&c&lo&r&4&ls&r&c&lt&r&4&lu&r&c&lm&r&4&le &r&c&ld&r&4&le &r&c&lM&r&4&la&r&c&lr&r&4&li&r&c&la&r&4&lg&r&c&le &r&c&kt&r&4​❤&r&c&kt&r&4&l",
      defaultName: "Costume de Mariage",
      type: 2,
      enchants: ["&b&lProtection &r&3&l48&r", "&eSolidité &r&648&r"],
    },
    {
      name: "&r&c&kt&r&4​❤&r&c&kt&r&4&l C&r&c&lo&r&4&ls&r&c&lt&r&4&lu&r&c&lm&r&4&le &r&c&ld&r&4&le &r&c&lM&r&4&la&r&c&lr&r&4&li&r&c&la&r&4&lg&r&c&le &r&c&kt&r&4​❤&r&c&kt&r&4&l",
      defaultName: "Costume de Mariage",
      type: 3,
      enchants: ["&b&lProtection &r&3&l48&r", "&eSolidité &r&648&r"],
    },
    {
      defaultName: "???",
      type: 5,
      enchants: [
        "&aTranchant &r&2??&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
