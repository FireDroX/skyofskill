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
  title: "POKEMON",
  items: [
    {
      name: "&r&4&kt&r&f&kt&r&c​☀&r&f&kt&r&4&kt&r&b &r&c&lP&r&f&lo&r&c&lk&r&f&lé&r&c&lB&r&f&lo&r&c&lw &r&4&kt&r&f&kt&r&c​☀&r&f&kt&r&4&kt&r&b",
      defaultName: "PokéBow",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&r&f&kt&r&7&kt&r&f☫&r&7&kt&r&f&kt&r&f&l R&r&7&lE&r&f&lS&r&7&lH&r&f&lI&r&7&lR&r&f&lA&r&7&lM &r&f&kt&r&7&kt&r&f☫&r&7&kt&r&f&kt&r&5",
      defaultName: "RESHIRAM",
      type: 6,
      enchants: [
        "&bPunch &r&3IV&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      name: "&r&8&kt&r&f✰&r&8&kt&r&b&l&r&8&l S&r&7&la&r&8&lb&r&7&lr&r&8&le &r&7&lS&r&8&lm&r&7&lo&r&8&lg&r&7&lo &r&8&kt&r&f✰&r&8&kt&r&b&l",
      defaultName: "Sabre Smogo",
      type: 4,
      enchants: [
        "&aTranchant &r&260&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&f&kt&r&8&kt&r&7×&r&f✩&r&7×&r&8&kt&r&f&kt&r&8&l &r&8&lK&r&7&la&r&f&lt&r&8&la&r&7&ln&r&f&la &r&8&lN&r&7&le&r&f&lc&r&8&lr&r&7&lo&r&f&lz&r&8&lm&r&7&la &r&f&kt&r&8&kt&r&7×&r&f✩&r&7×&r&8&kt&r&f&kt&r&8&l",
      defaultName: "Katana Nekrozma",
      type: 4,
      enchants: [
        "&aTranchant &r&269&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&4&kt&r&c​✡&r&4&kt&r&4&l P&r&c&li&r&4&lo&r&c&lc&r&4&lh&r&c&le &r&4&lY&r&c&lV&r&4&lE&r&c&lL&r&4&lT&r&c&lA&r&4&lL &r&4&kt&r&c​✡&r&4&kt&r&4&l",
      defaultName: "Pioche YVELTAL",
      type: 7,
      enchants: [
        "&bEfficency &r&3650&r",
        "&eSolidité &r&6650&r",
        "&aFortune &r&2650&r",
      ],
    },
    {
      name: "&r&f&kt&r&e⋆&r&6✩&r&e⋆&r&f&kt&r&6&l &r&6&lP&r&e&li&r&6&lo&r&e&lc&r&6&lh&r&e&le &r&6&lDé&r&e&lm&r&6&lé&r&e&lt&r&6&lé&r&e&lr&r&6&lo&r&e&ls &r&f&kt&r&e⋆&r&6✩&r&e⋆&r&f&kt",
      defaultName: "Pioche Démétéros",
      type: 7,
      enchants: [
        "&bEfficency &r&3750&r",
        "&eSolidité &r&6750&r",
        "&aFortune &r&2750&r",
      ],
    },
    {
      name: "&r&f&kt&r&7&kt&r&b✥&r&7&kt&r&f&kt&r&2&l &r&7&lP&r&b&li&r&7&lo&r&b&lc&r&7&lh&r&b&le &r&7&lK&r&b&ly&r&7&lu&r&b&lr&r&7&le&r&b&lm &r&f&kt&r&7&kt&r&b✥&r&7&kt&r&f&kt&r&2&l",
      defaultName: "Pioche Kyurem",
      type: 7,
      enchants: [
        "&bEfficency &r&3860&r",
        "&eSolidité &r&6860&r",
        "&aFortune &r&2860&r",
      ],
    },
    {
      name: "&r&f&kt&r&a✛&r&2​☸&r&a✛&r&f&kt&r&2&l &r&2&lA&r&a&lr&r&2&lm&r&a&lu&r&2&lr&r&a&le&r&2&l A&r&a&lr&r&2&lc&r&a&le&r&2&lu&r&a&ls &r&f&kt&r&a✛&r&2​☸&r&a✛&r&f&kt&r&2&l",
      defaultName: "Armure Arceus",
      type: 0,
      enchants: ["&b&lProtection &r&3&l60&r", "&eSolidité &r&660&r"],
    },
    {
      name: "&r&f&kt&r&a✛&r&2​☸&r&a✛&r&f&kt&r&2&l &r&2&lA&r&a&lr&r&2&lm&r&a&lu&r&2&lr&r&a&le&r&2&l A&r&a&lr&r&2&lc&r&a&le&r&2&lu&r&a&ls &r&f&kt&r&a✛&r&2​☸&r&a✛&r&f&kt&r&2&l",
      defaultName: "Armure Arceus",
      type: 1,
      enchants: ["&b&lProtection &r&3&l60&r", "&eSolidité &r&660&r"],
    },
    {
      name: "&r&f&kt&r&a✛&r&2​☸&r&a✛&r&f&kt&r&2&l &r&2&lA&r&a&lr&r&2&lm&r&a&lu&r&2&lr&r&a&le&r&2&l A&r&a&lr&r&2&lc&r&a&le&r&2&lu&r&a&ls &r&f&kt&r&a✛&r&2​☸&r&a✛&r&f&kt&r&2&l",
      defaultName: "Armure Arceus",
      type: 2,
      enchants: ["&b&lProtection &r&3&l60&r", "&eSolidité &r&660&r"],
    },
    {
      name: "&r&f&kt&r&a✛&r&2​☸&r&a✛&r&f&kt&r&2&l &r&2&lA&r&a&lr&r&2&lm&r&a&lu&r&2&lr&r&a&le&r&2&l A&r&a&lr&r&2&lc&r&a&le&r&2&lu&r&a&ls &r&f&kt&r&a✛&r&2​☸&r&a✛&r&f&kt&r&2&l",
      defaultName: "Armure Arceus",
      type: 3,
      enchants: ["&b&lProtection &r&3&l60&r", "&eSolidité &r&660&r"],
    },
    {
      name: "&r&f&kt&r&5&kt&r&d❁&r&5&kt&r&f&kt&r&5&l H&r&d&la&r&f&lc&r&5&lh&r&d&le &r&f&lP&r&5&la&r&d&ll&r&f&lk&r&5&li&r&d&la &r&f&kt&r&5&kt&r&d❁&r&5&kt&r&f&kt&r&5&l",
      defaultName: "Hache Palkia",
      type: 5,
      enchants: [
        "&aTranchant &r&265&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
