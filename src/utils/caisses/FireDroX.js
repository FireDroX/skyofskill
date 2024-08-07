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
  title: "FireDroX",
  items: [
    {
      name: "&r&b&kt&r&f&kt&r&r&r&9☛&r&b​❤&r&9☚&r&f&kt&r&b&kt&r&r &r&r &r&9╭∩╮(・,・)╭∩╮ &r&r &r&b&kt&r&f&kt&r&r&r&9☛&r&b​❤&r&9☚&r&f&kt&r&b&kt&r&r",
      type: 4,
      defaultName: "Double Fuck Kaaris",
      enchants: [
        "&aTranchant &r&258&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&7&kt&r&f&kt&r&r&r&d❰&r&f​⚔&r&d❱&r&f&kt&r&7&kt&r&r &r&r &r&r &r&d&l天羽々斬 &r&r &r&r &r&7&kt&r&f&kt&r&r&r&d❰&r&f​⚔&r&d❱&r&f&kt&r&7&kt&r&r",
      type: 4,
      defaultName: "Ame no Habakiri",
      enchants: [
        "&aTranchant &r&267&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&4&kt&r&c&kt&r&f✯&r&c&kt&r&4&kt&r&c&l S&r&4&la&r&c&lb&r&4&lr&r&c&le L&r&4&la&r&c&ls&r&4&le&r&c&lr &r&4&kt&r&c&kt&r&f✯&r&c&kt&r&4&kt&r&r",
      type: 4,
      defaultName: "Sabre Laser",
      enchants: [
        "&aTranchant &r&272&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
    },
    {
      name: "&r&7&kt&r&f&kt&r&a&l​☕&r&f&kt&r&7&kt&r&r",
      type: 7,
      defaultName: "Jump Jump Jump",
      enchants: [
        "&aJump &r&23&r",
        "&aJump &r&21&r",
        "&aJump &r&21&r",
        "&aJump &r&21&r",
        "&aJump &r&21&r",
        "&aJump &r&21&r",
        "&aJump &r&21&r",
        "&aJump &r&21&r",
        "&aJump &r&21&r",
        "&aJump &r&21&r",
      ],
    },
    {
      name: "&r&7&kt&r&f&kt&r&e$&r&f&kt&r&7&kt&r&6&l L&r&e&la&r&6&l F&r&e&lraude&r&6&l F&r&e&liscale &r&7 &kt&r&f&kt&r&e$&r&f&kt&r&7&kt&r&r",
      type: 7,
      defaultName: "La Fraude Fiscale",
      enchants: [
        "&bEfficency &r&3950&r",
        "&eSolidité &r&6950&r",
        "&aFortune &r&21999&r",
      ],
    },
    {
      name: "&r&7&kt&r&f&kt&r&e$&r&f&kt&r&7&kt&r&6&l L&r&e&la&r&6&l F&r&e&lraude&r&6&l F&r&e&liscale &r&7 &kt&r&f&kt&r&e$&r&f&kt&r&7&kt&r&r",
      type: 6,
      defaultName: "La Fraude Fiscale",
      enchants: [
        "&bPunch &r&3VI&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&c&kI&r&r&r&4ゼ&r&cニ&r&4ス&r&cブ&r&4レ&r&cイ&r&4ド&r&c&kI",
      defaultName: "Jsp",
      type: 5,
      enchants: [
        "&aTranchant &r&240&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
        "",
        "",
        "",
        "",
        "",
        "&a0,75%&r",
      ],
    },
    {
      name: "&r&4&l&kt&r&c&l Couteau &r&4&l&kt",
      defaultName: "Couteau",
      type: 4,
      enchants: [
        "&aTranchant &r&270&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
        "",
        "",
        "",
        "",
        "",
        "&b&l⚔ &r&f&lArme indestructible.",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&f&l⚔ &r&b&l&nPistolet de Pablo&r&f &l ⚔",
      defaultName: "Pistolet de Pablo",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&9&l&kt&r&b&l Arc de l'infini &r&9&l&kt",
      defaultName: "Arc de l'infini",
      type: 6,
      enchants: [
        "&bPunch &r&3II&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&4☣ &r&c&lL’arbalète du Gardien &r&4☣",
      defaultName: "L'arbalète du gardien",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&bPower &r&3X&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&c&kt&r&f&l⚔&r&c&kt &r&r &r&c &l&nPistolet de Pablo&r&r &r&c &kt&r&f&l⚔&r&c&kt",
      defaultName: "Pistolet de Pablo",
      type: 6,
      enchants: [
        "&bPunch &r&3III&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: true,
    },
    {
      name: "&r&6&l&kt&r&e&l La Promenade &r&6&l&kt",
      defaultName: "La Promenade",
      type: 6,
      enchants: [
        "&bPunch &r&3II&r",
        "&eSolidité &r&610&r",
        "&bInfinity &r&3I&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&b&kt&r&9✯&r&b&kt&r&b &l P&r&f&lr&r&b&le&r&f&ls&r&b&lt&r&f&li&r&b&lg&r&f&le&r&c&l+ &r&b&kt&r&9✯&r&b&kt&r&e",
      defaultName: "Prestige +",
      type: 7,
      enchants: [
        "&bEfficency &r&3250&r",
        "&eSolidité &r&6100&r",
        "&aFortune &r&2250&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&d&l&kt&r&5&l Pioche INFINITY &r&d&l&kt&r&e",
      defaultName: "Pioche INFINITY",
      type: 7,
      enchants: [
        "&bEfficency &r&3800&r",
        "&eSolidité &r&6800&r",
        "&aFortune &r&2800&r",
        "",
        "",
        "",
        "",
        "",
        "&6♚ &r&fPropriétaire: &r&eTamarixe&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&c&l&kt&r&4&l Pioche ULTRA &r&c&l&kt&r&e",
      defaultName: "Pioche ULTRA",
      type: 7,
      enchants: [
        "&bEfficency &r&3700&r",
        "&eSolidité &r&6700&r",
        "&aFortune &r&2700&r",
        "",
        "",
        "",
        "",
        "",
        "&6♚ &r&fPropriétaire: &r&eyoann71C&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&d&l&kt&r&b&l Pioche MEGA &r&d&l&kt&r&e",
      defaultName: "Pioche MEGA",
      type: 7,
      enchants: [
        "&bEfficency &r&3600&r",
        "&eSolidité &r&6600&r",
        "&aFortune &r&2600&r",
        "",
        "",
        "",
        "",
        "",
        "&6♚ &r&fPropriétaire: &r&eHDIFOX302&r",
        "&a&lProtégé &r&a✔&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&6&l&kt&r&e&l Pioche OP &r&6&l&kt&r&e",
      defaultName: "Pioche OP",
      type: 7,
      enchants: [
        "&bEfficency &r&3500&r",
        "&eSolidité &r&6500&r",
        "&aFortune &r&2500&r",
        "",
        "",
        "",
        "",
        "",
        "&6♚ &r&fPropriétaire: &r&esilexspagna&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&4&l&kt&r&c &l ARMURE OP &r&4&l&kt&r&c",
      defaultName: "Armure OP",
      type: 0,
      enchants: [
        "&b&lProtection &r&3&l60&r",
        "&eSolidité &r&660&r",
        "",
        "",
        "",
        "",
        "",
        "&6♚ &r&fPropriétaire: &r&eFireDroX&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&4&l&kt&r&c &l ARMURE OP &r&4&l&kt&r&c",
      defaultName: "Armure OP",
      type: 1,
      enchants: [
        "&b&lProtection &r&3&l60&r",
        "&eSolidité &r&660&r",
        "",
        "",
        "",
        "",
        "",
        "&6♚ &r&fPropriétaire: &r&e_Kaede_&r",
        "&a&lProtégé &r&a✔&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&4&l&kt&r&c &l ARMURE OP &r&4&l&kt&r&c",
      defaultName: "Armure OP",
      type: 2,
      enchants: [
        "&b&lProtection &r&3&l60&r",
        "&eSolidité &r&660&r",
        "",
        "",
        "",
        "",
        "",
        "&6♚ &r&fPropriétaire: &r&eTryToKnowMe_&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&4&l&kt&r&c &l ARMURE OP &r&4&l&kt&r&c",
      defaultName: "Armure OP",
      type: 3,
      enchants: [
        "&b&lProtection &r&3&l60&r",
        "&eSolidité &r&660&r",
        "",
        "",
        "",
        "",
        "",
        "&6♚ &r&fPropriétaire: &r&eOverRhity&r",
        "&a&lProtégé &r&a✔&r",
      ],
      dontLeaveOnDeath: false,
    },
    {
      name: "&r&0&kt&r&r&r&4❰&r&c⚔&r&4❱&r&0&kt &r&r &r&r &r&4秋水 &r&r &r&0&k t&r&r&r&4❰&r&c⚔&r&4❱&r&0&kt",
      defaultName: "Shusui",
      type: 4,
      enchants: [
        "&aTranchant &r&265&r",
        "&eSolidité &r&610&r",
        "&dAura de Feu &r&510&r",
      ],
      dontLeaveOnDeath: false,
    },
  ],
};

export default caisse;
