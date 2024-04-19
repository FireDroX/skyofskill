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
  title: "COWBOY",
  items: [
    {
      defaultName: "Balle de paille",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
    },
    {
      defaultName: "Flingue du Bandit",
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
      defaultName: "???",
      type: 6,
      enchants: [
        "&bPunch &r&3V&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      defaultName: "Super-Colt",
      type: 4,
      enchants: [
        "&aTranchant &r&263&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      defaultName: "Calibre .36 PN",
      type: 4,
      enchants: [
        "&aTranchant &r&272&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      defaultName: "Pioche CowBoy",
      type: 7,
      enchants: [
        "&bEfficency &r&3700&r",
        "&eSolidité &r&6700&r",
        "&aFortune &r&2700&r",
      ],
    },
    {
      defaultName: "Pioche Cactus",
      type: 7,
      enchants: [
        "&bEfficency &r&3900&r",
        "&eSolidité &r&6900&r",
        "&aFortune &r&2900&r",
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
      defaultName: "Fourrure par balle",
      type: 0,
      enchants: ["&b&lProtection &r&3&l63&r", "&eSolidité &r&663&r"],
    },
    {
      defaultName: "Fourrure par balle",
      type: 1,
      enchants: ["&b&lProtection &r&3&l63&r", "&eSolidité &r&663&r"],
    },
    {
      defaultName: "Fourrure par balle",
      type: 2,
      enchants: ["&b&lProtection &r&3&l63&r", "&eSolidité &r&663&r"],
    },
    {
      defaultName: "Fourrure par balle",
      type: 3,
      enchants: ["&b&lProtection &r&3&l63&r", "&eSolidité &r&663&r"],
    },
    {
      defaultName: "Pacificateur",
      type: 5,
      enchants: [
        "&aTranchant &r&268&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
  ],
};

export default caisse;
