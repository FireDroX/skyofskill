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
      name: "&r&6&l&kt&r&8&kt&r&6&kt&r&e​☠&r&6&kt&r&8&kt&r&6&l&kt&r&6&l L&r&8&le &r&6&lC&r&8&le&r&6&lr&r&8&lc&r&6&lu&r&8&le&r&6i&r&8&ll &r&6&l&kt&r&8&kt&r&6&kt&r&e​☠&r&6&kt&r&8&kt&r&6&l&kt&r&6&l",
      defaultName: "Le Cercueil",
      type: 4,
      enchants: [
        "&aTranchant &r&240&r",
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
      name: "&r&6&l&ki&r&8&l&kii&r&6&l&ki&r&f​☠&r&6&l&ki&r&8&l&kii&r&6&l&ki&r&6&l H&r&8&lA&r&6&lL&r&8&lL&r&6&lO&r&8&lW&r&6&lE&r&8&lE&r&6&lN &r&6&l&ki&r&8&l&kii&r&6&l&ki&r&f​☠&r&6&l&ki&r&8&l&kii&r&6&l&ki&r&6",
      defaultName: "HALLOWEEN",
      type: 7,
      enchants: [
        "&bEfficency &r&3150&r",
        "&eSolidité &r&650&r",
        "&aFortune &r&2300&r",
      ],
    },
    {
      name: "&r&4&l&kt&r&c&kt&r&d&kt&r&4✟&r&d&kt&r&c&kt&r&4&l&kt&r&4&l P&r&c&li&r&d&lo&r&4&lc&r&c&lh&r&d&le &r&4&lZ&r&c&lo&r&d&lm&r&4&lb&r&c&li&r&d&lf&r&4&li&r&c&lé&r&d&le &r&4&l&kt&r&c&kt&r&d&kt&r&4✟&r&d&kt&r&c&kt&r&4&l&kt&r&4&l",
      defaultName: "Pioche Zombifiée",
      type: 7,
      enchants: [
        "&bEfficency &r&3150&r",
        "&eSolidité &r&6100&r",
        "&aFortune &r&2350&r",
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
      defaultName: "???",
      type: 7,
      enchants: [
        "&bEfficency &r&3???&r",
        "&eSolidité &r&6???&r",
        "&aFortune &r&2???&r",
      ],
    },
    {
      name: "&r&6&l&kt&r&8&kt&r&e&kt&r&6​☠&r&e&kt&r&8&kt&r&6&l&kt&r&6&l C&r&e&lh&r&6&la&r&e&lp&r&6&le&r&e&la&r&6&lu&r&e&l P&r&6&lo&r&e&li&r&6&ln&r&e&lt&r&6&lu &r&6&l&kt&r&8&kt&r&e&kt&r&6​☠&r&e&kt&r&8&kt&r&6&l&kt&r&6&l",
      defaultName: "Chapeau Pointu",
      type: 0,
      enchants: ["&b&lProtection &r&3&l40&r", "&eSolidité &r&640&r"],
    },
    {
      name: "&r&6&l&kt&r&8&kt&r&e&kt&r&6​☠&r&e&kt&r&8&kt&r&6&l&kt&r&6&l V&r&e&le&r&6&ls&r&e&lt&r&6&le &r&e&ld&r&6&lu&r&e&l D&r&6&li&r&e&la&r&6&lb&r&e&ll&r&6&le &r&6&l&kt&r&8&kt&r&e&kt&r&6​☠&r&e&kt&r&8&kt&r&6&l&kt&r&6&l",
      defaultName: "Veste du Diable",
      type: 1,
      enchants: ["&b&lProtection &r&3&l40&r", "&eSolidité &r&640&r"],
    },
    {
      name: "&r&6&l&kt&r&8&kt&r&e&kt&r&6​☠&r&e&kt&r&8&kt&r&6&l&kt&r&6&l R&r&e&lo&r&6&lb&r&e&le&r&6&l d&r&e&le &r&6&lS&r&e&lo&r&6&lr&r&e&lc&r&6&li&r&e&lè&r&6&lr&r&e&le &r&6&l&kt&r&8&kt&r&e&kt&r&6​☠&r&e&kt&r&8&kt&r&6&l&kt&r&6&l",
      defaultName: "Robe de Sorcière",
      type: 2,
      enchants: ["&b&lProtection &r&3&l40&r", "&eSolidité &r&640&r"],
    },
    {
      name: "&r&6&l&kt&r&8&kt&r&e&kt&r&6​☠&r&e&kt&r&8&kt&r&6&l&kt&r&6&l B&r&e&lo&r&6&lt&r&e&lt&r&6&le&r&e&ls&r&6&l V&r&e&li&r&6&ln&r&e&ly&r&6&ll&r&e&le &r&6&l&kt&r&8&kt&r&e&kt&r&6​☠&r&e&kt&r&8&kt&r&6&l&kt&r&6&l",
      defaultName: "Bottes Vinyle",
      type: 3,
      enchants: ["&b&lProtection &r&3&l40&r", "&eSolidité &r&640&r"],
    },
    {
      name: "&r&b&l&kt&r&4&kt&r&c&kt&r&4​☠&r&c&kt&r&4&kt&r&b&l&kt&r&4&l H&r&c&la&r&4&lc&r&c&lh&r&4&le&r&c&l d&r&4&lu&r&c&l C&r&4&ll&r&c&lo&r&4&lw&r&c&ln &r&b&l&kt&r&4&kt&r&c&kt&r&4​☠&r&c&kt&r&4&kt&r&b&l&kt&r&4&l",
      defaultName: "Hache du Clown",
      type: 5,
      enchants: [
        "&aTranchant &r&245&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
