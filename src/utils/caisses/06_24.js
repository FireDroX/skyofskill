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
  title: "SUPERHERO",
  items: [
    {
      name: "&r&f&kii&r&cϟ&r&9❆&r&cϟ&r&f&kii&r&9 &l A&r&c&lr&r&9&lc &r&c&lS&r&9&lu&r&c&lp&r&9&le&r&c&lr&r&f-&r&9&lH&r&c&lé&r&9&lr&r&c&lo&r&9&ls &r&f&kii&r&cϟ&r&9❆&r&cϟ&r&f&kii",
      defaultName: "Arc Super Héros",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&8&kii&r&7☣&r&f✟&r&7☣&r&8&kii&r&r &r&8&lA&r&7&lr&r&f&lm&r&8&lu&r&7&lr&r&f&le&r&8&l d&r&7&le&r&f&l B&r&8&la&r&7&lt&r&f&lm&r&8&la&r&7&ln &r&8&kii&r&7☣&r&f✟&r&7☣&r&8&kii",
      defaultName: "Armure de Batman",
      type: 0,
      enchants: ["&b&lProtection &r&3&l80&r", "&eSolidité &r&680&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&8&kii&r&7☣&r&f✟&r&7☣&r&8&kii&r&r &r&8&lA&r&7&lr&r&f&lm&r&8&lu&r&7&lr&r&f&le&r&8&l d&r&7&le&r&f&l B&r&8&la&r&7&lt&r&f&lm&r&8&la&r&7&ln &r&8&kii&r&7☣&r&f✟&r&7☣&r&8&kii",
      defaultName: "Armure de Batman",
      type: 1,
      enchants: ["&b&lProtection &r&3&l80&r", "&eSolidité &r&680&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&8&kii&r&7☣&r&f✟&r&7☣&r&8&kii&r&r &r&8&lA&r&7&lr&r&f&lm&r&8&lu&r&7&lr&r&f&le&r&8&l d&r&7&le&r&f&l B&r&8&la&r&7&lt&r&f&lm&r&8&la&r&7&ln &r&8&kii&r&7☣&r&f✟&r&7☣&r&8&kii",
      defaultName: "Armure de Batman",
      type: 2,
      enchants: ["&b&lProtection &r&3&l80&r", "&eSolidité &r&680&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&8&kii&r&7☣&r&f✟&r&7☣&r&8&kii&r&r &r&8&lA&r&7&lr&r&f&lm&r&8&lu&r&7&lr&r&f&le&r&8&l d&r&7&le&r&f&l B&r&8&la&r&7&lt&r&f&lm&r&8&la&r&7&ln &r&8&kii&r&7☣&r&f✟&r&7☣&r&8&kii",
      defaultName: "Armure de Batman",
      type: 3,
      enchants: ["&b&lProtection &r&3&l80&r", "&eSolidité &r&680&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&c&ki&r&b&ki&r&f*&r&c⚔&r&f*&r&b&ki&r&c&ki&r&b &l E&r&c&lp&r&b&lé&r&c&le&r&b&l d&r&c&le&r&b&l S&r&c&lu&r&b&lp&r&c&le&r&b&lr&r&c&lM&r&b&la&r&c&ln &r&c&ki&r&b&ki&r&f*&r&c⚔&r&f*&r&b&ki&r&c&ki",
      defaultName: "Epée de Superman",
      type: 4,
      enchants: [
        "&aTranchant &r&280&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&e&ki&r&8&ki&r&e✂&r&8&ki&r&e&ki&r&e&l G&r&8&lr&r&e&li&r&8&lf&r&e&lf&r&8&le&r&e&l d&r&8&le&r&e&l W&r&8&lo&r&e&ll&r&8&lv&r&e&le&r&8&lr&r&e&li&r&8&ln&r&e&le &r&e&ki&r&8&ki&r&e✂&r&8&ki&r&e&ki&r&e&l",
      defaultName: "Griffe de Wolverine",
      type: 7,
      enchants: [
        "&bEfficency &r&32200&r",
        "&eSolidité &r&62200&r",
        "&aFortune &r&22200&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&a&ki&r&2&ki&r&a✪&r&2&ki&r&a&ki&r&2 &l C&r&a&lo&r&2&lu&r&a&lp&r&2&le&r&a&lr&r&2&le&r&a&lt&r&2&l H&r&a&lu&r&2&ll&r&a&lk &r&a&ki&r&2&ki&r&a✪&r&2&ki&r&a&ki",
      defaultName: "Couperet Hulk",
      type: 5,
      enchants: [
        "&aTranchant &r&287&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&5&ki&r&d⁂&r&5✩&r&d⁂&r&5&ki&r&d &r&5&lA&r&d&lr&r&5&lc&r&d&l &r&5&ld&r&d&le&r&5&l l&r&f'&r&d&lO&r&5&lm&r&d&lé&r&5&lg&r&d&la &r&5&ki&r&d⁂&r&5✩&r&d⁂&r&5&ki",
      defaultName: "Arc de l'Oméga",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&kii&r&7ϟ&r&8✧&r&7ϟ&r&f&kii&r&8 &r&8&lM&r&7&la&r&f&lr&r&8&lt&r&7&le&r&f&la&r&8&lu &r&7&lP&r&f&li&r&8&lq&r&7&lu&r&f&le&r&8&lu&r&7&lr &r&f&lB&r&8&la&r&7&lt&r&f&lm&r&8&la&r&7&ln &r&f&kii&r&7ϟ&r&8✧&r&7ϟ&r&f&kii&r&8",
      defaultName: "Marteau Piqueur Batman",
      type: 7,
      enchants: [
        "&bEfficency &r&32450&r",
        "&eSolidité &r&62450&r",
        "&aFortune &r&22450&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&8&kii&r&7☣&r&f✟&r&7☣&r&8&kii&r&r &r&8&lS&r&7&lh&r&f&ll&r&8&la&r&7&ls&r&f&ls&r&8&l d&r&7&le&r&f&l B&r&8&la&r&7&lt&r&f&lm&r&8&la&r&7&ln &r&8&kii&r&7☣&r&f✟&r&7☣&r&8&kii",
      defaultName: "Shlass de Batman",
      type: 4,
      enchants: [
        "&aTranchant &r&290&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&8&kii&r&7☣&r&f⚔&r&7☣&r&8&kii&r&8 &l P&r&7&li&r&f&ls&r&8&lt&r&7&lo&r&f&ll&r&8&le&r&7&lt&r&f&l d&r&8&lu&r&7&l C&r&f&lh&r&8&le&r&7&lv&r&f&la&r&8&ll&r&7&li&r&f&le&r&8&lr &r&7&lN&r&f&lo&r&8&li&r&7&lr &r&8&kii&r&7☣&r&f⚔&r&7☣&r&8&kii",
      defaultName: "Pistolet du Chevalier Noir",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&2&kii&r&8⁂&r&a✯&r&8⁂&r&2&kii&r&r &r&a&lP&r&8&li&r&a&lo&r&8&lc&r&a&l&r&8&lh&r&a&le&r&8&l d&r&a&le&r&8&l K&r&a&lr&r&8&ly&r&a&lp&r&8&lt&r&a&lo&r&8&ln&r&a&li&r&8&lt&r&a&le &r&2&kii&r&8⁂&r&a✯&r&8⁂&r&2&kii",
      defaultName: "Pioche de Kryptonite",
      type: 7,
      enchants: [
        "&bEfficency &r&32600&r",
        "&eSolidité &r&62600&r",
        "&aFortune &r&22600&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&c&kii&r&9☀&r&e✩&r&9☀&r&c&kii&r&9 &l G&r&c&la&r&9&ln&r&c&lt&r&9&l d&r&c&le&r&9&l S&r&c&lp&r&9&li&r&c&ld&r&9&le&r&c&lr&r&9&lM&r&c&la&r&9&ln &r&c&kii&r&9☀&r&e✩&r&9☀&r&c&kii",
      defaultName: "Gant de SpiderMan",
      type: 6,
      enchants: [
        "&bPunch &r&3V&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&e&ki&r&c&ki&r&eϟ&r&c✡&r&eϟ&r&e&ki&r&c&ki&r&e &l E&r&c&lc&r&e&ll&r&c&la&r&e&li&r&c&lr&r&e&l d&r&c&le&r&e&l F&r&c&ll&r&e&la&r&c&ls&r&e&lh &r&e&ki&r&c&ki&r&eϟ&r&c✡&r&eϟ&r&e&ki&r&c&ki",
      defaultName: "Eclair de Flash",
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
