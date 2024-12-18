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
  title: "MILLIONNAIRE",
  items: [
    {
      name: "&8&kt&r&f☾&r&a۞&r&f☽&r&8&kt&r&8&l A&r&a&lr&r&8&lc &r&a&lS&r&8&lu&r&a&lp&r&8&lr&r&a&lê&r&8&lm&r&a&le &r&8&kt&r&f☾&r&a۞&r&f☽&r&8&kt&r",
      defaultName: "Arc Suprême",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&f&kt&r&4​☸&r&c࿊&r&4​☸&r&f&kt&r&4&l P&r&c&lr&r&4&lo&r&c&lp&r&4&lu&r&c&ll&r&4&ls&r&c&le&r&4&lu&r&c&lr&r&4&l d&r&c&le&r&4&l R&r&c&lu&r&4&lb&r&c&li&r&4&ls &r&f&kt&r&4​☸&r&c࿊&r&4​☸&r&f&kt&r",
      defaultName: "Propulseur de Rubis",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&r&f&ki&r&e&l◊&r&f⿴&r&e&l◊&r&f&ki&r&f &l R&r&e&lecurve &r&f&lR&r&e&loyale &r&f&ki&r&e&l◊&r&f⿴&r&e&l◊&r&f&ki&r&f",
      defaultName: "Recurve Royale",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&f&kt&r&a◧&r&f❖&r&a◧&r&f&kt&r&a&l C&r&f&lo&r&a&lu&r&f&lr&r&a&lb&r&f&le&r&a&l d&r&f&le&r&a&l S&r&f&la&r&a&lp&r&f&lh&r&a&li&r&f&lr &r&f&kt&r&a◧&r&f❖&r&a◧&r&f&kt&r",
      defaultName: "Courbe de Saphir",
      type: 6,
      enchants: [
        "&bPunch &r&3V&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&f&ki&r&6⊹&r&e⛃&r&6⊹&r&f&ki&r&6 &l A&r&e&lr&r&6&lc&r&e&l d&r&6&le&r&e&l M&r&6&li&r&e&ld&r&6&la&r&e&ls &r&f&ki&r&6⊹&r&e⛃&r&6⊹&r&f&ki",
      defaultName: "Arc de Midas",
      type: 6,
      enchants: [
        "&bPunch &r&3VI&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&8&kt&r&f☾&r&e۞&r&f☽&r&8&kt&r&e&l L&r&8&la&r&e&lm&r&8&le &r&e&lS&r&8&lu&r&e&lp&r&8&lr&r&e&lê&r&8&lm&r&e&le &r&8&kt&r&f☾&r&e۞&r&f☽&r&8&kt&r",
      defaultName: "Lame Suprême",
      type: 4,
      enchants: [
        "&aTranchant &r&275&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&8&kt&r&f​‼&r&a​❇&r&f​‼&r&8&kt&r&a&l S&r&8&la&r&a&lb&r&8&lr&r&a&le&r&8&l d&r&a&le&r&8&l l&r&a'&r&8&lO&r&a&ll&r&8&li&r&a&lg&r&8&la&r&a&lr&r&8&lq&r&a&lu&r&8&le &r&8&kt&r&f​‼&r&a​❇&r&f​‼&r&8&kt&r",
      defaultName: "Sabre de l'Oligarque",
      type: 4,
      enchants: [
        "&aTranchant &r&284&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&8&kt&r&f☾&r&e۞&r&f☽&r&8&kt&r&e&l P&r&8&le&r&e&lr&r&8&lc&r&e&le&r&8&lu&r&e&ls&r&8&le &r&e&lS&r&8&lu&r&e&lp&r&8&lr&r&e&lê&r&8&lm&r&e&le &r&8&kt&r&f☾&r&e۞&r&f☽&r&8&kt&r",
      defaultName: "Perceuse Suprême",
      type: 7,
      enchants: [
        "&bEfficency &r&31500&r",
        "&eSolidité &r&61500&r",
        "&aFortune &r&21500&r",
      ],
    },
    {
      name: "&c&kt&r&4۞&r&c&kt&r&4&l M&r&c&la&r&4&lr&r&c&lt&r&4&le&r&c&la&r&4&lu&r&c-&r&4&lp&r&c&li&r&4&lq&r&c&lu&r&4&le&r&c&lu&r&4&lr&r&c&l d&r&4&le&r&c&l l&r&4'&r&c&lE&r&4&lm&r&c&lp&r&4&li&r&c&lr&r&4&le &r&c&kt&r&4۞&r&c&kt&r",
      defaultName: "Marteau-piqueur de l'Empire",
      type: 7,
      enchants: [
        "&bEfficency &r&31750&r",
        "&eSolidité &r&61750&r",
        "&aFortune &r&21750&r",
      ],
    },
    {
      name: "&f&kt&r&6⋱&r&e$&r&6⋰&r&f&kt&r&6&l F&r&e&lo&r&6&lr&r&e&le&r&6&lu&r&e&ls&r&6&le&r&e&l d&r&6&lu&r&e&l C&r&6&la&r&e&lp&r&6&li&r&e&lt&r&6&la&r&e&ll&r&6&li&r&e&ls&r&6&lt&r&e&le &r&f&kt&r&6⋱&r&e$&r&6⋰&r&f&kt&r",
      defaultName: "Foreuse du Capitaliste",
      type: 7,
      enchants: [
        "&bEfficency &r&31900&r",
        "&eSolidité &r&61900&r",
        "&aFortune &r&21900&r",
      ],
    },
    {
      name: "&8&kt&r&f☾&r&e۞&r&f☽&r&8&kt&r&e&l A&r&8&lr&r&e&lm&r&8&lu&r&e&lr&r&8&le&r&e&l S&r&8&lu&r&e&lp&r&8&lr&r&e&lê&r&8&lm&r&e&le &r&8&kt&r&f☾&r&e۞&r&f☽&r&8&kt&r",
      defaultName: "Armure Suprême",
      type: 0,
      enchants: ["&b&lProtection &r&3&l75&r", "&eSolidité &r&675&r"],
    },
    {
      name: "&8&kt&r&f☾&r&e۞&r&f☽&r&8&kt&r&e&l A&r&8&lr&r&e&lm&r&8&lu&r&e&lr&r&8&le&r&e&l S&r&8&lu&r&e&lp&r&8&lr&r&e&lê&r&8&lm&r&e&le &r&8&kt&r&f☾&r&e۞&r&f☽&r&8&kt&r",
      defaultName: "Armure Suprême",
      type: 1,
      enchants: ["&b&lProtection &r&3&l75&r", "&eSolidité &r&675&r"],
    },
    {
      name: "&8&kt&r&f☾&r&e۞&r&f☽&r&8&kt&r&e&l A&r&8&lr&r&e&lm&r&8&lu&r&e&lr&r&8&le&r&e&l S&r&8&lu&r&e&lp&r&8&lr&r&e&lê&r&8&lm&r&e&le &r&8&kt&r&f☾&r&e۞&r&f☽&r&8&kt&r",
      defaultName: "Armure Suprême",
      type: 2,
      enchants: ["&b&lProtection &r&3&l75&r", "&eSolidité &r&675&r"],
    },
    {
      name: "&8&kt&r&f☾&r&e۞&r&f☽&r&8&kt&r&e&l A&r&8&lr&r&e&lm&r&8&lu&r&e&lr&r&8&le&r&e&l S&r&8&lu&r&e&lp&r&8&lr&r&e&lê&r&8&lm&r&e&le &r&8&kt&r&f☾&r&e۞&r&f☽&r&8&kt&r",
      defaultName: "Armure Suprême",
      type: 3,
      enchants: ["&b&lProtection &r&3&l75&r", "&eSolidité &r&675&r"],
    },
    {
      name: "&f&kt&r&b✙&r&f&kt&r&b&l C&r&f&li&r&b&lm&r&f&le&r&b&lt&r&f&le&r&b&lr&r&f&lr&r&b&le&r&f&l d&r&b&lu&r&f&l S&r&b&lu&r&f&ll&r&b&lt&r&f&la&r&b&ln &r&f&kt&r&b✙&r&f&kt&r",
      defaultName: "Cimeterre du Sultan",
      type: 5,
      enchants: [
        "&aTranchant &r&281&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
