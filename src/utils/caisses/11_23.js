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
  title: "HALLOWEEN",
  items: [
    {
      name: "&r&8&ki&r&f​▶&r&8​⚜&r&f​◀&r&8&ki&r&4&l &r&8&lQ&r&f&lu&r&8&la&r&f&ld&r&8&l d&r&f&le&r&8&ls &r&f&lT&r&8&lé&r&f&ln&r&8&lè&r&f&lb&r&8&lr&r&f&le&r&8&ls &r&8&ki&r&f​▶&r&8​⚜&r&f​◀&r&8&ki&r&4&l",
      defaultName: "Quad des Ténèbres",
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
      name: "&r&f&l&ki&r&c​↪&r&4​⚖&r&c​↩&r&f&l&ki&r&4&l &r&4&lC&r&c&la&r&4&lr&r&c&lr&r&4&lo&r&c&ls&r&4&ls&r&c&le&r&4&l d&r&c&le&r&4&ls &r&c&lT&r&4&lé&r&c&ln&r&4&lè&r&c&lb&r&4&lr&r&c&le&r&4&ls &r&f&l&ki&r&c​↪&r&4​⚖&r&c​↩&r&f&l&ki&r&4&l",
      defaultName: "Carrosse des Ténèbres",
      type: 6,
      enchants: [
        "&bPunch &r&3V&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&6&ki&r&f​⬆&r&6​⚙&r&f​⬆&r&6&ki&r&6&l &r&6&lL&r&f&la&r&6&lm&r&f&le C&r&6&li&r&f&lt&r&6&lr&r&f&lo&r&6&lu&r&f&li&r&6&ll&r&f&ll&r&6&le &r&6&ki&r&f​⬆&r&6​⚙&r&f​⬆&r&6&ki&r&6&l",
      defaultName: "Lame Citrouille",
      type: 4,
      enchants: [
        "&aTranchant &r&269&r",
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
      name: "&r&6&ki&r&f​⬆&r&6​⚙&r&f​⬆&r&6&ki&r&6&l &r&6&lF&r&f&lo&r&6&lr&r&f&le&r&6&lu&r&f&ls&r&6&le&r&f&l C&r&6&li&r&f&lt&r&6&lr&r&f&lo&r&6&lu&r&f&li&r&6&ll&r&f&ll&r&6&le &r&6&ki&r&f​⬆&r&6​⚙&r&f​⬆&r&6&ki&r&6&l",
      defaultName: "Foreuse Citrouille",
      type: 7,
      enchants: [
        "&bEfficency &r&31100&r",
        "&eSolidité &r&61100&r",
        "&aFortune &r&21100&r",
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
      defaultName: "Tronçonneuse Zombie",
      type: 7,
      enchants: [
        "&bEfficency &r&31500&r",
        "&eSolidité &r&61500&r",
        "&aFortune &r&21500&r",
      ],
    },
    {
      name: "&r&8&ki&r&f​▶&r&8​⚜&r&f​◀&r&8&ki&r&4&l &r&8&lC&r&f&lo&r&8&ls&r&f&lt&r&8&lu&r&f&lm&r&8&le&r&f&l d&r&8&le&r&f&ls &r&8&lT&r&f&lé&r&8&ln&r&f&lè&r&8&lb&r&f&lr&r&8&le&r&f&ls &r&8&ki&r&f​▶&r&8​⚜&r&f​◀&r&8&ki&r&4&l",
      defaultName: "Costume des Ténèbres",
      type: 0,
      enchants: ["&b&lProtection &r&3&l69&r", "&eSolidité &r&669&r"],
    },
    {
      name: "&r&8&ki&r&f​▶&r&8​⚜&r&f​◀&r&8&ki&r&4&l &r&8&lC&r&f&lo&r&8&ls&r&f&lt&r&8&lu&r&f&lm&r&8&le&r&f&l d&r&8&le&r&f&ls &r&8&lT&r&f&lé&r&8&ln&r&f&lè&r&8&lb&r&f&lr&r&8&le&r&f&ls &r&8&ki&r&f​▶&r&8​⚜&r&f​◀&r&8&ki&r&4&l",
      defaultName: "Costume des Ténèbres",
      type: 1,
      enchants: ["&b&lProtection &r&3&l69&r", "&eSolidité &r&669&r"],
    },
    {
      name: "&r&8&ki&r&f​▶&r&8​⚜&r&f​◀&r&8&ki&r&4&l &r&8&lC&r&f&lo&r&8&ls&r&f&lt&r&8&lu&r&f&lm&r&8&le&r&f&l d&r&8&le&r&f&ls &r&8&lT&r&f&lé&r&8&ln&r&f&lè&r&8&lb&r&f&lr&r&8&le&r&f&ls &r&8&ki&r&f​▶&r&8​⚜&r&f​◀&r&8&ki&r&4&l",
      defaultName: "Costume des Ténèbres",
      type: 2,
      enchants: ["&b&lProtection &r&3&l69&r", "&eSolidité &r&669&r"],
    },
    {
      name: "&r&8&ki&r&f​▶&r&8​⚜&r&f​◀&r&8&ki&r&4&l &r&8&lC&r&f&lo&r&8&ls&r&f&lt&r&8&lu&r&f&lm&r&8&le&r&f&l d&r&8&le&r&f&ls &r&8&lT&r&f&lé&r&8&ln&r&f&lè&r&8&lb&r&f&lr&r&8&le&r&f&ls &r&8&ki&r&f​▶&r&8​⚜&r&f​◀&r&8&ki&r&4&l",
      defaultName: "Costume des Ténèbres",
      type: 3,
      enchants: ["&b&lProtection &r&3&l69&r", "&eSolidité &r&669&r"],
    },
    {
      name: "&r&f&ki&r&6&ki&r&e⟨&r&6​✡&r&e⟩&r&6&ki&r&f&ki&r&8&l &r&6&lL&r&e&la&r&6&lm&r&e&le &r&6&ld&r&e&lu&r&6&l J&r&e&lu&r&6&lg&r&e&le&r&6&lm&r&e&le&r&6&ln&r&e&lt &r&f&ki&r&6&ki&r&e⟨&r&6​✡&r&e⟩&r&6&ki&r&f&ki&r&8&l",
      defaultName: "Lame du Jugement",
      type: 5,
      enchants: [
        "&aTranchant &r&274&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
