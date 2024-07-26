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
      name: "&r&4&kt&r&c✟&r&4&kt&r&4&l Ha&r&c&lll&r&4&low&r&c&lee&r&4&ln &r&4&kt&r&c✟&r&4&kt&r&6&l",
      defaultName: "Halloween",
      type: 4,
      enchants: [
        "&aTranchant &r&242&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&2&kt&r&a&kt&r&f&l✟&r&a&kt&r&2&kt&r&2&l Cl&r&a&low&r&2&ln T&r&a&lue&r&2&lur &r&2&kt&r&a&kt&r&f&l✟&r&a&kt&r&2&kt&r",
      defaultName: "Clown Tueur",
      type: 4,
      enchants: [
        "&aTranchant &r&246&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
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
      name: "&r&5&l&kt&r&d&kt&r&a&kt&r&f​☠&r&a&kt&r&d&kt&r&5&l&kt&r&5&l P&r&d&li&r&a&lo&r&f&lc&r&5&lh&r&d&le &r&a&lM&r&f&lo&r&5&ln&r&d&ls&r&a&lt&r&f&lr&r&5&lu&r&d&le&r&a&lu&r&f&ls&r&5&le &r&5&l&kt&r&d&kt&r&a&kt&r&f​☠&r&a&kt&r&d&kt&r&5&l&kt&r&5&l",
      defaultName: "Pioche Monstrueuse",
      type: 7,
      enchants: [
        "&bEfficency &r&3150&r",
        "&eSolidité &r&6100&r",
        "&aFortune &r&2375&r",
      ],
    },
    {
      name: "&r&f◘&r&b&kt&r&9&kt&r&3✟&r&9&kt&r&b&kt&r&f◘&r&9&l F&r&3&la&r&b&lu&r&9&lc&r&3&lh&r&b&le&r&9&lu&r&3&ls&r&b&le &r&9&lM&r&3&la&r&b&ll&r&9&lé&r&3&lf&r&b&li&r&9&lq&r&3&lu&r&b&le &r&f◘&r&b&kt&r&9&kt&r&3✟&r&9&kt&r&b&kt&r&f◘&r&9&l",
      defaultName: "Faucheuse Maléfique",
      type: 7,
      enchants: [
        "&bEfficency &r&3150&r",
        "&eSolidité &r&6100&r",
        "&aFortune &r&2400&r",
      ],
    },
    {
      defaultName: "Foreuse d'Âmes",
      type: 7,
      enchants: [
        "&bEfficency &r&3300&r",
        "&eSolidité &r&6100&r",
        "&aFortune &r&2450&r",
      ],
    },
    {
      name: "&r&4&kt&r&c✟&r&4&kt&r&4&l Ha&r&c&lll&r&4&low&r&c&lee&r&4&ln &r&4&kt&r&c✟&r&4&kt&r&6&l",
      defaultName: "Halloween",
      type: 0,
      enchants: ["&b&lProtection &r&3&l42&r", "&eSolidité &r&642&r"],
    },
    {
      name: "&r&4&kt&r&c✟&r&4&kt&r&4&l Ha&r&c&lll&r&4&low&r&c&lee&r&4&ln &r&4&kt&r&c✟&r&4&kt&r&6&l",
      defaultName: "Halloween",
      type: 1,
      enchants: ["&b&lProtection &r&3&l42&r", "&eSolidité &r&642&r"],
    },
    {
      name: "&r&4&kt&r&c✟&r&4&kt&r&4&l Ha&r&c&lll&r&4&low&r&c&lee&r&4&ln &r&4&kt&r&c✟&r&4&kt&r&6&l",
      defaultName: "Halloween",
      type: 2,
      enchants: ["&b&lProtection &r&3&l42&r", "&eSolidité &r&642&r"],
    },
    {
      name: "&r&4&kt&r&c✟&r&4&kt&r&4&l Ha&r&c&lll&r&4&low&r&c&lee&r&4&ln &r&4&kt&r&c✟&r&4&kt&r&6&l",
      defaultName: "Halloween",
      type: 3,
      enchants: ["&b&lProtection &r&3&l42&r", "&eSolidité &r&642&r"],
    },
    {
      name: "&r&b&l&kt&r&4&kt&r&c&kt&r&4✟&r&c&kt&r&4&kt&r&b&l&kt&r&4&l Ha&r&c&lch&r&4&let&r&c&lte &r&4&lC&r&c&llo&r&4&lwn&r&c&les&r&4&lqu&r&c&le &r&b&l&kt&r&4&kt&r&c&kt&r&4✟&r&c&kt&r&4&kt&r&b&l&kt&r&4&l",
      defaultName: "Hachette Clownesque",
      type: 5,
      enchants: [
        "&aTranchant &r&247&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
