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
  title: "OLYMPE",
  items: [
    {
      name: "&r&f&kii&r&e&ki&r&c⊹&r&e✧&r&c⊹&r&e&ki&r&f&kii&r&c &l F&r&e&lu&r&c&ls&r&e&li&r&c&ll&r&e&ls&r&c&l d&r&e&l'A&r&c&lr&r&e&lè&r&c&ls &r&f&kii&r&e&ki&r&c⊹&r&e✧&r&c⊹&r&e&ki&r&f&kii",
      defaultName: "Fusils d'Arès",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&kii&r&e&ki&r&c⊹&r&e✧&r&c⊹&r&e&ki&r&f&kii&r&c &l A&r&e&lr&r&c&lm&r&e&lu&r&c&lr&r&e&le&r&c&l d&r&e&l'A&r&c&lr&r&e&lè&r&c&ls &r&f&kii&r&e&ki&r&c⊹&r&e✧&r&c⊹&r&e&ki&r&f&kii",
      defaultName: "Armure d'Arès",
      type: 0,
      enchants: ["&b&lProtection &r&3&l84&r", "&eSolidité &r&684&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&kii&r&e&ki&r&c⊹&r&e✧&r&c⊹&r&e&ki&r&f&kii&r&c &l A&r&e&lr&r&c&lm&r&e&lu&r&c&lr&r&e&le&r&c&l d&r&e&l'A&r&c&lr&r&e&lè&r&c&ls &r&f&kii&r&e&ki&r&c⊹&r&e✧&r&c⊹&r&e&ki&r&f&kii",
      defaultName: "Armure d'Arès",
      type: 1,
      enchants: ["&b&lProtection &r&3&l84&r", "&eSolidité &r&684&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&kii&r&e&ki&r&c⊹&r&e✧&r&c⊹&r&e&ki&r&f&kii&r&c &l A&r&e&lr&r&c&lm&r&e&lu&r&c&lr&r&e&le&r&c&l d&r&e&l'A&r&c&lr&r&e&lè&r&c&ls &r&f&kii&r&e&ki&r&c⊹&r&e✧&r&c⊹&r&e&ki&r&f&kii",
      defaultName: "Armure d'Arès",
      type: 2,
      enchants: ["&b&lProtection &r&3&l84&r", "&eSolidité &r&684&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&kii&r&e&ki&r&c⊹&r&e✧&r&c⊹&r&e&ki&r&f&kii&r&c &l A&r&e&lr&r&c&lm&r&e&lu&r&c&lr&r&e&le&r&c&l d&r&e&l'A&r&c&lr&r&e&lè&r&c&ls &r&f&kii&r&e&ki&r&c⊹&r&e✧&r&c⊹&r&e&ki&r&f&kii",
      defaultName: "Armure d'Arès",
      type: 3,
      enchants: ["&b&lProtection &r&3&l84&r", "&eSolidité &r&684&r"],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&kii&r&e&ki&r&c⊹&r&e✧&r&c⊹&r&e&ki&r&f&kii&r&c &l G&r&e&ll&r&c&la&r&e&li&r&c&lv&r&e&le&r&c&l d&r&e&l'A&r&c&lr&r&e&lè&r&c&ls &r&f&kii&r&e&ki&r&c⊹&r&e✧&r&c⊹&r&e&ki&r&f&kii",
      defaultName: "Glaive d'Arès",
      type: 4,
      enchants: [
        "&aTranchant &r&283&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&e&ki&r&f&ki&r&7*&r&e⚘&r&7*&r&f&ki&r&e&ki&r&f &l P&r&7&li&r&e&lo&r&f&lc&r&7&lh&r&e&le &r&f&l d&r&7&l'A&r&e&lp&r&f&lo&r&7&ll&r&e&ll&r&f&lo&r&7&ln &r&e&ki&r&f&ki&r&7*&r&e⚘&r&7*&r&f&ki&r&e&ki",
      defaultName: "Pioche d'Apollon",
      type: 7,
      enchants: [
        "&bEfficency &r&32600&r",
        "&eSolidité &r&62600&r",
        "&aFortune &r&22600&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&e&ki&r&f&ki&r&7*&r&e⚘&r&7*&r&f&ki&r&e&ki&r&f &l B&r&7&lâ&r&e&lt&r&f&lo&r&7&ln&r&e&l d&r&f&l'A&r&7&lp&r&e&lo&r&f&ll&r&7&ll&r&e&lo&r&f&ln &r&e&ki&r&f&ki&r&7*&r&e⚘&r&7*&r&f&ki&r&e&ki",
      defaultName: "Bâton d'Aplollon",
      type: 5,
      enchants: [
        "&aTranchant &r&290&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&a&ki&r&2⁂&r&a＊&r&2⁂&r&a&ki&r&d &r&2&lC&r&a&la&r&2&lr&r&a&lq&r&2&lu&r&a&lo&r&2&li&r&a&ls&r&2&l d&r&a'&r&2&lA&r&a&lr&r&2&lt&r&a&lé&r&2&lm&r&a&li&r&2&ls &r&a&ki&r&2⁂&r&a＊&r&2⁂&r&a&ki&r&d",
      defaultName: "Carquois d'Artémis",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&kii&r&e꙳&r&6⟡&r&e꙳&r&f&kii&r&8 &r&6&lM&r&e&la&r&6&lr&r&e&lt&r&6&le&r&e&la&r&6&lu&r&e&l d&r&6&l'H&r&e&le&r&6&lr&r&e&lm&r&6&lè&r&e&ls &r&f&kii&r&e꙳&r&6⟡&r&e꙳&r&f&kii",
      defaultName: "Marteau d'Hermès",
      type: 7,
      enchants: [
        "&bEfficency &r&32850&r",
        "&eSolidité &r&62850&r",
        "&aFortune &r&22850&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&8&kii&r&e⚡&r&6✩&r&e⚡&r&8&kii&r&r &r&e&lS&r&6&la&r&e&lb&r&7&lr&r&f&le&r&7&l d&r&e&le&r&6&l Z&r&e&le&r&7&lu&r&f&ls &r&8&kii&r&e⚡&r&6✩&r&e⚡&r&8&kii",
      defaultName: "Sabre de Zeus",
      type: 4,
      enchants: [
        "&aTranchant &r&294&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&8&kii&r&7☦&r&f✝&r&7☦&r&8&kii&r&8 &l C&r&7&la&r&8&ln&r&7&lo&r&8&ln &r&7&ld&r&8&le&r&7&l D&r&8&li&r&7&lo&r&8&ln&r&7&ly&r&8&ls&r&7&lo&r&8&ls &r&8&kii&r&7☦&r&f✝&r&7☦&r&8&kii",
      defaultName: "Canon de Dionysos",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&c&kii&r&4⚡&r&c☣&r&4⚡&r&c&kii&r&r &r&8&lF&r&7&lo&r&f&lr&r&4&le&r&c&lu&r&4&ls&r&8&le&r&7&l d&r&f&l'&r&4&lH&r&c&la&r&4&ld&r&8&le&r&7&ls &r&c&kii&r&4⚡&r&c☣&r&4⚡&r&c&kii",
      defaultName: "Foreuse d'Hades",
      type: 7,
      enchants: [
        "&bEfficency &r&33050&r",
        "&eSolidité &r&63050&r",
        "&aFortune &r&23050&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&kii&r&9⫷&r&b∆&r&9⫸&r&f&kii&r&9 &l H&r&b&la&r&f&lr&r&9&lp&r&b&lo&r&f&ln&r&9&l d&r&b&le&r&f&l P&r&9&lo&r&b&ls&r&f&lé&r&9&li&r&b&ld&r&f&lo&r&9&ln &r&f&kii&r&9⫷&r&b∆&r&9⫸&r&f&kii&r&9",
      defaultName: "Harpon de Poséidon",
      type: 6,
      enchants: [
        "&bPunch &r&3V&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&8&kii&r&e⚡&r&6✩&r&e⚡&r&8&kii&r&r &r&e&lS&r&6&lc&r&e&le&r&7&lp&r&f&lt&r&7&lr&r&e&le&r&6&l d&r&e&le&r&7&l Z&r&f&le&r&7&lu&r&e&ls &r&8&kii&r&e⚡&r&6✩&r&e⚡&r&8&kii&r&r",
      defaultName: "Sceptre de Zeus",
      type: 7,
      enchants: [
        "&bEfficency &r&33250&r",
        "&eSolidité &r&63250&r",
        "&aFortune &r&23250&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&8&ki&r&7&ki&r&5▮&r&d&l⿻&r&5▮&r&7&ki&r&8&ki&r&8 &l R&r&7&la&r&f&ly&r&d&lo&r&5&ln &r&d&ld&r&f'&r&8&lA&r&7&lt&r&f&lh&r&d&lé&r&5&ln&r&d&la &r&8&ki&r&7&ki&r&5▮&r&d&l⿻&r&5▮&r&7&ki&r&8&ki",
      defaultName: "Rayon d'Athéna",
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
