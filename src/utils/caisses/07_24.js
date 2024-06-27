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
  title: "POSEIDON",
  items: [
    {
      name: "&r&2&kii&r&a⌨&r&2⚗&r&a⌨&r&2&kii&r&2 &l A&r&a&lr&r&2&lc &r&a&ld&r&2&le&r&a&ls&r&2&l a&r&a&ll&r&2&lg&r&a&lu&r&2&le&r&a&ls &r&2&kii&r&a⌨&r&2⚗&r&a⌨&r&2&kii",
      defaultName: "Arc des algues",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&ki&r&e&ki&r&bϟ&r&e⚠&r&bϟ&r&e&ki&r&f&ki&r&e &l A&r&b&lr&r&e&lm&r&b&lu&r&e&lr&r&b&le&r&e&l d&r&b&le&r&e&l P&r&b&lo&r&e&ls&r&b&lé&r&e&li&r&b&ld&r&e&lo&r&b&ln &r&f&ki&r&e&ki&r&bϟ&r&e⚠&r&bϟ&r&e&ki&r&f&ki&r&e",
      defaultName: "Armure de Poséidon",
      type: 0,
      enchants: ["&b&lProtection &r&3&l82&r", "&eSolidité &r&682&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&ki&r&e&ki&r&bϟ&r&e⚠&r&bϟ&r&e&ki&r&f&ki&r&e &l A&r&b&lr&r&e&lm&r&b&lu&r&e&lr&r&b&le&r&e&l d&r&b&le&r&e&l P&r&b&lo&r&e&ls&r&b&lé&r&e&li&r&b&ld&r&e&lo&r&b&ln &r&f&ki&r&e&ki&r&bϟ&r&e⚠&r&bϟ&r&e&ki&r&f&ki&r&e",
      defaultName: "Armure de Poséidon",
      type: 1,
      enchants: ["&b&lProtection &r&3&l82&r", "&eSolidité &r&682&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&ki&r&e&ki&r&bϟ&r&e⚠&r&bϟ&r&e&ki&r&f&ki&r&e &l A&r&b&lr&r&e&lm&r&b&lu&r&e&lr&r&b&le&r&e&l d&r&b&le&r&e&l P&r&b&lo&r&e&ls&r&b&lé&r&e&li&r&b&ld&r&e&lo&r&b&ln &r&f&ki&r&e&ki&r&bϟ&r&e⚠&r&bϟ&r&e&ki&r&f&ki&r&e",
      defaultName: "Armure de Poséidon",
      type: 2,
      enchants: ["&b&lProtection &r&3&l82&r", "&eSolidité &r&682&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&ki&r&e&ki&r&bϟ&r&e⚠&r&bϟ&r&e&ki&r&f&ki&r&e &l A&r&b&lr&r&e&lm&r&b&lu&r&e&lr&r&b&le&r&e&l d&r&b&le&r&e&l P&r&b&lo&r&e&ls&r&b&lé&r&e&li&r&b&ld&r&e&lo&r&b&ln &r&f&ki&r&e&ki&r&bϟ&r&e⚠&r&bϟ&r&e&ki&r&f&ki&r&e",
      defaultName: "Armure de Poséidon",
      type: 3,
      enchants: ["&b&lProtection &r&3&l82&r", "&eSolidité &r&682&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&d&kii&r&f&ki&r&d✒&r&f&ki&r&d&kii&r&d &l S&r&f&la&r&d&lb&r&f&lr&r&d&le&r&f&l M&r&d&lé&r&f&ld&r&d&lu&r&f&ls&r&d&le &r&d&kii&r&f&ki&r&d✒&r&f&ki&r&d&kii",
      defaultName: "Sabre Méduse",
      type: 4,
      enchants: [
        "&aTranchant &r&282&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&e&ki&r&6&ki&r&e⚝&r&6&ki&r&e&ki&r&e&l T&r&6&lr&r&e&lé&r&6&ls&r&e&lo&r&6&lr&r&e&l M&r&6&la&r&e&lr&r&6&li&r&e&ln &r&e&ki&r&6&ki&r&e⚝&r&6&ki&r&e&ki&r&e&l",
      defaultName: "Trésor Marin",
      type: 7,
      enchants: [
        "&bEfficency &r&32400&r",
        "&eSolidité &r&62400&r",
        "&aFortune &r&22400&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&e&ki&r&6&ki&r&e‼&r&6Ⓜ&r&e‼&r&6&ki&r&e&ki&r&6 &l F&r&e&lo&r&6&lu&r&e&le&r&6&lt&r&e&l d&r&6&lu&r&e&l C&r&6&lo&r&e&lu&r&6&lr&r&e&la&r&6&ln&r&e&lt&r&6&l M&r&e&la&r&6&lr&r&e&li&r&6&ln &r&e&ki&r&6&ki&r&e‼&r&6Ⓜ&r&e‼&r&6&ki&r&e&ki",
      defaultName: "Fouet du Courant Marin",
      type: 5,
      enchants: [
        "&aTranchant &r&289&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&d&ki&r&d★&r&f☄&r&d★&r&d&ki&r&d &r&d&lL&r&f&la&r&d&ln&r&f&lc&r&d&le&r&f&lu&r&d&lr&r&f&l d&r&d&le&r&f&l M&r&d&lé&r&f&ld&r&d&lu&r&f&ls&r&d&le&r&f&ls &r&d&ki&r&d★&r&f☄&r&d★&r&d&ki",
      defaultName: "Lanceur de Méduses",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&kii&r&b♗&r&8✹&r&b♗&r&f&kii&r&8 &r&8&lS&r&b&lc&r&8&le&r&b&lp&r&8&lt&r&b&lr&r&8&le&r&b&l d&r&8&le&r&b&l l&r&8'&r&b&lA&r&8&lt&r&b&ll&r&8&la&r&b&ln&r&8&lt&r&b&li&r&8&ld&r&b&le &r&f&kii&r&b♗&r&8✹&r&b♗&r&f&kii",
      defaultName: "Sceptre de l'Atlantide",
      type: 7,
      enchants: [
        "&bEfficency &r&32650&r",
        "&eSolidité &r&62650&r",
        "&aFortune &r&22650&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&ki&r&e&ki&r&bϟ&r&e⚠&r&bϟ&r&e&ki&r&f&ki&r&e &l T&r&b&lr&r&e&li&r&b&ld&r&e&le&r&b&ln&r&e&lt &r&b&ld&r&e&le&r&b&l P&r&e&lo&r&b&ls&r&e&lé&r&b&li&r&e&ld&r&b&lo&r&e&ln &r&f&ki&r&e&ki&r&bϟ&r&e⚠&r&bϟ&r&e&ki&r&f&ki",
      defaultName: "Trident de Poséidon",
      type: 4,
      enchants: [
        "&aTranchant &r&292&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&c&kii&r&c↩&r&f☦&r&c↪&r&c&kii&r&c &l F&r&f&lu&r&c&ls&r&f&li&r&c&ll&r&f&l à&r&c&l H&r&f&la&r&c&lr&r&f&lp&r&c&lo&r&f&ln &r&c&kii&r&c↩&r&f☦&r&c↪&r&c&kii&r&c",
      defaultName: "Fusil à Harpon",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&8&kii&r&cꗃ&r&4⎈&r&cꗃ&r&8&kii&r&r &r&4&lF&r&c&lo&r&4&lr&r&c&le&r&4&lu&r&c&ls&r&4&le&r&c&l d&r&4&lu&r&c&l K&r&4&lr&r&c&la&r&4&lk&r&c&le&r&4&ln &r&8&kii&r&cꗃ&r&4⎈&r&cꗃ&r&8&kii&r&r",
      defaultName: "Foreuse du Kraken",
      type: 7,
      enchants: [
        "&bEfficency &r&32800&r",
        "&eSolidité &r&62800&r",
        "&aFortune &r&22800&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&1&kii&r&9⏏&r&3⇧&r&9⏏&r&1&kii&r&9 &l J&r&3&la&r&1&lv&r&9&le&r&3&ll&r&1&lo&r&9&lt&r&3&l d&r&1&le&r&9&ls&r&3&l A&r&1&lb&r&9&ly&r&3&ls&r&1&ls&r&9&le&r&3&ls &r&1&kii&r&9⏏&r&3⇧&r&9⏏&r&1&kii&r&9",
      defaultName: "Javelot des Abyses",
      type: 6,
      enchants: [
        "&bPunch &r&3V&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&8&kii&r&eϟ&r&b⚙&r&eϟ&r&8&kii&r&r &r&8&lS&r&b&lc&r&8&lu&r&e&ll&r&8&lp&r&b&lt&r&8&le&r&e&lu&r&8&lr&r&b&l P&r&8&lo&r&e&ls&r&8&lé&r&b&li&r&8&ld&r&e&lo&r&8&ln &r&8&kii&r&eϟ&r&b⚙&r&eϟ&r&8&kii",
      defaultName: "Sculpteur Poséidon",
      type: 7,
      enchants: [
        "&bEfficency &r&33000&r",
        "&eSolidité &r&63000&r",
        "&aFortune &r&23000&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&ki&r&e&ki&r&bϟ&r&e⚠&r&bϟ&r&e&ki&r&f&ki&r&e &l B&r&b&lo&r&e&lo&r&b&lm&r&e&le&r&b&lr&r&e&la&r&b&ln&r&e&lg&r&b&l &r&b&lP&r&e&lo&r&b&ls&r&e&lé&r&b&li&r&e&ld&r&b&lo&r&e&ln &r&f&ki&r&e&ki&r&bϟ&r&e⚠&r&bϟ&r&e&ki&r&f&ki",
      defaultName: "Boomerang Poséidon",
      type: 6,
      enchants: [
        "&bPunch &r&3VII&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
  ],
};

export default caisse;
