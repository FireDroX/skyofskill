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
  title: "SUPREME - LASER",
  items: [
    {
      name: "&r&4&kt&r&c&kt&r&4⚔&r&c⚙&r&4⚔&r&c&kt&r&4&kt&r&4&l P&r&c&li&r&4&ls&r&c&lt&r&4&lo&r&c&ll&r&4&le&r&c&lt &r&4&lK&r&c&ly&r&4&ll&r&c&lo&r&4&l R&r&c&le&r&4&ln &r&4&kt&r&c&kt&r&4⚔&r&c⚙&r&4⚔&r&c&kt&r&4&kt",
      defaultName: "Pistolet Kylo Ren",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&4&kt&r&c&kt&r&4⚔&r&c⚙&r&4⚔&r&c&kt&r&4&kt&r&4&l A&r&c&lr&r&4&lm&r&c&lu&r&4&lr&r&c&le &r&4&lK&r&c&ly&r&4&ll&r&c&lo&r&4&l R&r&c&le&r&4&ln &r&4&kt&r&c&kt&r&4⚔&r&c⚙&r&4⚔&r&c&kt&r&4&kt",
      defaultName: "Armure Kylo Ren",
      type: 0,
      enchants: ["&b&lProtection &r&3&l86&r", "&eSolidité &r&686&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&4&kt&r&c&kt&r&4⚔&r&c⚙&r&4⚔&r&c&kt&r&4&kt&r&4&l A&r&c&lr&r&4&lm&r&c&lu&r&4&lr&r&c&le &r&4&lK&r&c&ly&r&4&ll&r&c&lo&r&4&l R&r&c&le&r&4&ln &r&4&kt&r&c&kt&r&4⚔&r&c⚙&r&4⚔&r&c&kt&r&4&kt",
      defaultName: "Armure Kylo Ren",
      type: 1,
      enchants: ["&b&lProtection &r&3&l86&r", "&eSolidité &r&686&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&4&kt&r&c&kt&r&4⚔&r&c⚙&r&4⚔&r&c&kt&r&4&kt&r&4&l A&r&c&lr&r&4&lm&r&c&lu&r&4&lr&r&c&le &r&4&lK&r&c&ly&r&4&ll&r&c&lo&r&4&l R&r&c&le&r&4&ln &r&4&kt&r&c&kt&r&4⚔&r&c⚙&r&4⚔&r&c&kt&r&4&kt",
      defaultName: "Armure Kylo Ren",
      type: 2,
      enchants: ["&b&lProtection &r&3&l86&r", "&eSolidité &r&686&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&4&kt&r&c&kt&r&4⚔&r&c⚙&r&4⚔&r&c&kt&r&4&kt&r&4&l A&r&c&lr&r&4&lm&r&c&lu&r&4&lr&r&c&le &r&4&lK&r&c&ly&r&4&ll&r&c&lo&r&4&l R&r&c&le&r&4&ln &r&4&kt&r&c&kt&r&4⚔&r&c⚙&r&4⚔&r&c&kt&r&4&kt",
      defaultName: "Armure Kylo Ren",
      type: 3,
      enchants: ["&b&lProtection &r&3&l86&r", "&eSolidité &r&686&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&9&kt&r&7&kt&r&9↪&r&7!&r&9↩&r&7&kt&r&9&kt&r&7&l L&r&9&la&r&7&mm&r&9&le&r&7&l D&r&9&lr&r&7&lo&r&9&lï&r&7&ld&r&9&le &r&9&kt&r&7&kt&r&9↪&r&7!&r&9↩&r&7&kt&r&9&kt&r&9&l",
      defaultName: "Lame Droide",
      type: 4,
      enchants: [
        "&aTranchant &r&285&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&9&kt&r&7&kt&r&9↪&r&7!&r&9↩&r&7&kt&r&9&kt&r&9&l F&r&7&lo&r&9&lr&r&7&le&r&9&lu&r&7&ls&r&9&le&r&7&l D&r&9&lr&r&7&lo&r&9&lï&r&7&ld&r&9&le &r&9&kt&r&7&kt&r&9↪&r&7!&r&9↩&r&7&kt&r&9&kt&r&9&l",
      defaultName: "Foreuse Droide",
      type: 7,
      enchants: [
        "&bEfficency &r&33050&r",
        "&eSolidité &r&63050&r",
        "&aFortune &r&23050&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&d&ki&r&5&ki&r&d▪&r&5◼&r&d㊙&r&5◼&r&d▪&r&5&ki&r&d&ki&r&5&l H&r&d&la&r&5&lc&r&d&lh&r&5&le&r&d&lt&r&5&lt&r&d&le&r&5&l d&r&d&le&r&5&l C&r&d&lh&r&5&le&r&d&lw&r&5&lb&r&d&la&r&5&lc&r&d&lc&r&5&la &r&d&ki&r&5&ki&r&d▪&r&5◼&r&d㊙&r&5◼&r&d▪&r&5&ki&r&d&ki",
      defaultName: "Hachette de Chewbacca",
      type: 5,
      enchants: [
        "&aTranchant &r&292&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&7&ki&r&e⊹&r&6⌖&r&e⊹&r&6⌖&r&e⊹&r&7&ki&r&6&l P&r&e&li&r&7&ls&r&6&lt&r&e&lo&r&7&ll&r&6&le&r&e&lt&r&7&l S&r&6&la&r&e&lb&r&f&ll&r&6&le&r&e&lu&r&7&lr&r&6&l L&r&e&le&r&7&li&r&6&la &r&7&ki&r&e⊹&r&6⌖&r&e⊹&r&6⌖&r&e⊹&r&7&ki",
      defaultName: "Pistolet Sableur Leia",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&a&kt&r&7&kt&r&a&l❞&r&b❄&r&a❞&r&7&kt&r&a&kt&r&b&l P&r&7&le&r&a&lr&r&7&lf&r&b&lo&r&7&lr&r&a&la&r&7&lt&r&b&le&r&7&lu&r&a&lr&r&7&l A&r&b&ll&r&7&ld&r&a&le&r&7&lr&r&b&la&r&7&la&r&a&ln &r&a&kt&r&7&kt&r&a&l❞&r&b❄&r&a❞&r&7&kt&r&a&kt",
      defaultName: "Perforateur Alderaan",
      type: 7,
      enchants: [
        "&bEfficency &r&33250&r",
        "&eSolidité &r&63250&r",
        "&aFortune &r&23250&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&8&ki&r&8&ki&r&4✞&r&4⚔&r&4✞&r&8&ki&r&8&ki&r&4&l B&r&8&lr&r&4&lo&r&8&ly&r&4&le&r&8&lu&r&4&lr&r&8&l P&r&4&la&r&8&ll&r&4&lp&r&8&la&r&4&lt&r&8&li&r&4&ln&r&8&le &r&8&ki&r&8&ki&r&4✞&r&4⚔&r&4✞&r&8&ki&r&8&ki",
      defaultName: "Broyeur Palpatine",
      type: 4,
      enchants: [
        "&aTranchant &r&296&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&a&ki&r&7&ki&r&a&ki&r&a✩&r&7☄&r&a✩&r&a&ki&r&7&ki&r&a&ki&r&a&l T&r&7&li&r&a&lr&r&7&le&r&a&lu&r&7&lr&r&a&l d&r&7'&r&a&lÉ&r&7&ll&r&a&li&r&7&lt&r&a&le&r&7&l Y&r&a&lo&r&7&ld&r&a&la &r&a&ki&r&7&ki&r&a&ki&r&a✩&r&7☄&r&a✩&r&a&ki&r&7&ki&r&a&ki",
      defaultName: "Tireur d'Elite Yoda",
      type: 6,
      enchants: [
        "&bPunch &r&3V&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&e&kt&r&f&kt&r&b&l✦&r&e⚛&r&b✦&r&f&kt&r&e&kt&r&e&l F&r&b&lo&r&f&lr&r&e&le&r&b&lu&r&f&ls&r&e&le&r&b&l S&r&f&lu&r&e&lp&r&b&le&r&f&lr&r&e&ls&r&b&lo&r&f&ln&r&e&li&r&b&lq&r&f&lu&r&e&le &r&e&kt&r&f&kt&r&b&l✦&r&e⚛&r&b✦&r&f&kt&r&e&kt&r&e&l",
      defaultName: "Foreuse Supersonique",
      type: 7,
      enchants: [
        "&bEfficency &r&33550&r",
        "&eSolidité &r&63550&r",
        "&aFortune &r&23550&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&e&kt&r&f&kt&r&e✡&r&6❁&r&e✡&r&f&kt&r&e&kt&r&6&l F&r&e&lr&r&f&la&r&6&lp&r&e&lp&r&f&le&r&6&l O&r&e&lr&r&f&lb&r&6&li&r&e&lt&r&f&la&r&6&ll&r&e&le&r&f&l H&r&6&la&r&e&ln&r&f&l S&r&6&lo&r&e&ll&r&f&lo &r&e&kt&r&f&kt&r&e✡&r&6❁&r&e✡&r&f&kt&r&e&kt",
      defaultName: "Frappe Orbitale Han Solo",
      type: 6,
      enchants: [
        "&bPunch &r&3VI&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&8&ki&r&8&ki&r&4✞&r&4⚔&r&4✞&r&8&ki&r&8&ki&r&r &r&4&lD&r&8&lé&r&4&lm&r&8&le&r&4&lm&r&8&lb&r&4&lr&r&8&le&r&4&lu&r&8&lr&r&4&l P&r&8&la&r&4&ll&r&8&lp&r&4&la&r&8&lt&r&4&li&r&8&ln&r&4&le &r&8&ki&r&8&ki&r&4✞&r&4⚔&r&4✞&r&8&ki&r&8&ki",
      defaultName: "Démembreur Palpatine",
      type: 7,
      enchants: [
        "&bEfficency &r&33750&r",
        "&eSolidité &r&63750&r",
        "&aFortune &r&23750&r",
        "",
        "",
        "&8▶ &r&fSupplément &r&aTranchant &r&2100&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&8&kt&r&4&kt&r&c░&r&8✟&r&c░&r&4&kt&r&8&kt&r&4&l&r&r &r&8&lD&r&c&lé&r&8&lt&r&4&lo&r&8&ln&r&c&la&r&8&lt&r&4&le&r&8&lu&r&c&lr&r&8&l T&r&4&lh&r&8&le&r&c&lr&r&8&lm&r&4&li&r&8&lq&r&c&lu&r&8&le&r&4&l V&r&8&la&r&c&ld&r&8&lo&r&4&lr &r&8&kt&r&4&kt&r&c░&r&8✟&r&c░&r&4&kt&r&8&kt&r&4&l&r&r",
      defaultName: "Détonateur Thermique Vador",
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
