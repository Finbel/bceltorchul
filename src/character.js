const name = "Benoit Cantor Eltorchul";

const race = {
  name: "Half-Elf",
  ability_bonus: {
    str: 0,
    dex: 0,
    con: 0,
    int: 1,
    wis: 1,
    cha: 2,
  },
  size: "Medium",
  speed: 30,
  traits: [
    {
      name: "Darkvision",
      description:
        "See in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.",
    },
    {
      name: "Fey Ancestry",
      description:
        "Advantage on saving throws against being charmed, and magic can’t put you to sleep.",
    },
  ],
  languages: ["Common", "Elvish"],
  extra_language: 1,
  selected_languages: ["Dwarven"],
  extra_proficiency: 2,
  selected_proficiencies: ["Arcana", "Perception"],
};

const ability_score = {
  str: 8,
  dex: 12,
  con: 12,
  int: 15,
  wis: 13,
  cha: 13,
};

const attributes = {
  str: race.ability_bonus.str + ability_score.str,
  dex: race.ability_bonus.dex + ability_score.dex,
  con: race.ability_bonus.con + ability_score.con,
  int: race.ability_bonus.int + ability_score.int,
  wis: race.ability_bonus.wis + ability_score.wis,
  cha: race.ability_bonus.cha + ability_score.cha,
};

const get_modifier = (attribute) => Math.floor((attribute - 10) / 2);

const modifiers = {
  str: get_modifier(attributes.str),
  dex: get_modifier(attributes.dex),
  con: get_modifier(attributes.con),
  int: get_modifier(attributes.int),
  wis: get_modifier(attributes.wis),
  cha: get_modifier(attributes.cha),
};

const WIZARD_LEVEL = 3;
const proficiency_bonus = 2;

const scholars_pack = [
  "Backpack",
  "Bottle of ink",
  "Book of lore",
  "Ink pen",
  "10 sheets of parchment",
  "Little bag of sand",
  "Small knife",
];

const character_class = {
  class: "Wizard",
  level: WIZARD_LEVEL,
  saving_throws: ["Intelligence", "Wisdom"],
  proficient_skills: ["Insight", "Investigation"],
  hit_dice: `1d6 * ${WIZARD_LEVEL}`,
  hit_points: 6 + 1 + 5 + 5,
  spellcasting_ability: "Intelligence",
  spell_save_dc: 8 + proficiency_bonus + modifiers.int,
  equipment: ["Quarterstaff", ...scholars_pack, "Spellbook"],
  cantrips_known: [
    {
      name: "Minor Illusion",
      casting_time: "1 action",
      range: 30,
      components: ["S", "M (a bit of fleece)"],
      duration: "1 minute",
      description: `You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.

If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else’s voice, a lion’s roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.
      
If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can’t create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.
      
If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.`,
      arcane_tradition:
        "When you cast Minor Illusion, you can create both a sound and an image with a single casting of the spell.",
    },
    {
      name: "Message",
      casting_time: "1 action",
      range: 120,
      components: ["V", "S", "M (a short piece of copper wire)"],
      duration: "1 round",
      description: `You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.

You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn’t have to follow a straight line and can travel freely around corners or through openings.`,
    },
    {
      name: "Prestidigitation",
      casting_time: "1 action",
      range: 10,
      components: ["V", "S"],
      duration: "Up to 1 hour",
      description: `This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:

* You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.
* You instantaneously light or snuff out a candle, a torch, or a small campfire.
* You instantaneously clean or soil an object no larger than 1 cubic foot.
* You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.
* You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.
* You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.
      
If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.`,
    },
    {
      name: "Fire Bolt",
      casting_time: "1 action",
      range: 120,
      components: ["V", "S"],
      duration: "Instantaneous",
      description: `You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes **1d10 fire damage.** A flammable object hit by this spell ignites if it isn’t being worn or carried.
        
This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).`,
      combat_text: `* Make a ranged spell attack against the target.
   * d20 + ${proficiency_bonus + modifiers.int} against the target’s AC.
* On hit deal 1d10 fire damage.
* On miss, any flammable object hit catches fire`,
    },
  ],
  spells_in_spellbook: [
    {
      level: 1,
      name: "Detect Magic",
      ritual: true,
      casting_time: "1 action",
      range: "Self",
      components: ["V", "S"],
      duration: "Concentration, up to 10 minutes",
      description: `For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.

The spell can penetrate most barriers, but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.`,
    },
    {
      level: 1,
      name: "Magic Missile",
      ritual: false,
      casting_time: "1 action",
      range: 120,
      components: ["V", "S"],
      duration: "Instantaneous",
      description: `You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously and you can direct them to hit one creature or several.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.`,
      combat_text: `* Select three targets within range.
* Each missile deals 1d4 + 1 force damage to its target.`,
    },
    {
      level: 1,
      name: "Chromatic Orb",
      ritual: false,
      casting_time: "1 action",
      range: 90,
      components: ["V", "S", "M (a diamond worth at least 50 gp)"],
      duration: "Instantaneous",
      description: `You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.`,
      combat_text: `* Choose acid, cold, fire, lightning, poison, or thunder.
* Make a ranged spell attack against the target.
   * d20 + ${proficiency_bonus + modifiers.int} against the target’s AC.
* On hit, the target takes 3d8 damage of the type you chose.`,
    },
    {
      level: 1,
      name: "Unseen Servant",
      ritual: true,
      casting_time: "1 action",
      range: 60,
      components: ["V", "S", "M (a piece of string and a bit of wood)"],
      duration: "1 hour",
      description: `This spell creates an invisible, mindless, shapeless, Medium force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can’t attack. If it drops to 0 hit points, the spell ends.

Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.
      
If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.`,
    },
    {
      level: 1,
      name: "Comprehend Languages",
      ritual: true,
      casting_time: "1 action",
      range: "self",
      components: ["V", "S", "M (a pinch of soot and salt)"],
      duration: "1 hour",
      description: `For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.

This spell doesn’t decode secret messages in a text or glyph, such as an arcane sigil, that isn’t part of a written language.`,
    },
    {
      level: 1,
      name: "Tenser's Floating Disc",
      ritual: true,
      casting_time: "1 action",
      range: 30,
      components: ["V", "S", "M (a drop of mercury)"],
      duration: "1 hour",
      description: `This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.

The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can move across uneven terrain, up or down stairs, slopes, and the like, but it can’t cross an elevation change of 10 feet or more. For example, the disk can’t move across a 10-foot-deep pit, nor could it leave such a pit if it were created at the bottom.
      
      If you move more than 100 feet from the disk (typically because it can’t move around an obstacle to follow you), the spell ends.`,
    },
    {
      level: 1,
      name: "Charm Person",
      ritual: false,
      casting_time: "1 action",
      range: 30,
      components: ["V", "S"],
      duration: "1 hour",
      description: `You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.`,
    },
    {
      level: 1,
      name: "Feather Fall",
      ritual: false,
      casting_time:
        "1 reaction, which you take when you or a creature within 60 feet of you falls",
      range: 60,
      components: ["V", "M (a small feather or piece of down)"],
      duration: "1 minute",
      description: `Choose up to five falling creatures within range. A falling creature’s rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.`,
    },
    {
      level: 2,
      name: "Invisibility",
      ritual: false,
      casting_time: "1 action",
      range: "Touch",
      components: ["V", "M (an eyelash encased in gum arabic)"],
      duration: "Concentration, up to 1 hour",
      description: `A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target’s person. The spell ends for a target that attacks or casts a spell.

At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.`,
    },
    {
      level: 2,
      name: "Phantasmal Force",
      ritual: false,
      casting_time: "1 action",
      range: 60,
      components: ["V", "S", "M (a bit of fleece)"],
      duration: "Concentration, up to 1 minute",
      description: `You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs.

The phantasm includes sound, temperature, and other stimuli, also evident only to the creature.
      
The target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends.
      
While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fall; it was pushed, it slipped, or a strong wind might have knocked it off.
      
An affected target is so convinced of the phantasm’s reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target. Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasm’s area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion.`,
      combat_text: `* Select a target within range.
* The target must make an Intelligence saving throw vs (${
        8 + proficiency_bonus + modifiers.int
      }).
* On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs.
* The target can use its action to examine the phantasm with an Investigation-check against ${
        8 + proficiency_bonus + modifiers.int
      }. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends.
* Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasm’s area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking.`,
    },
  ],
  features: [
    {
      name: "Spellcasting",
      description:
        "You have a spellbook containing spells that show the first glimmerings of your true power.",
    },
    {
      name: "Ritual Casting",
      description:
        "You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don’t need to have the spell prepared.",
    },
    {
      name: "Spellcasting Focus",
      description:
        "You can use an arcane focus as a spellcasting focus for your wizard spells.",
    },
    {
      name: "Arcane Recovery",
      description:
        "Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up)",
      combined_spell_slots_level: Math.ceil(WIZARD_LEVEL / 2),
    },
    {
      name: "Arcane Tradition",
      description:
        "You choose an arcane tradition, shaping your practice of magic.",
      school: {
        name: "Illusion",
        traits: [
          {
            name: "Illusion Savant",
            description:
              "The gold and time you must spend to copy a Illusion spell into your spellbook is halved.",
          },
          {
            name: "Improved Minor Illusion",
            description: `you learn the Minor Illusion cantrip. If you already know this cantrip, you learn a different wizard cantrip of your choice. The cantrip doesn't count against your number of cantrips known.

        When you cast Minor Illusion, you can create both a sound and an image with a single casting of the spell.`,
          },
        ],
      },
    },
  ],
  spell_slots: {
    1: 4,
    2: 2,
  },
  prepared_lvl_1_spells: [
    "Magic Missile",
    "Magic Missile",
    "Feather Fall",
    "Charm Person",
  ],
  prepared_lvl_2_spells: ["Invisibility", "Phantasmal Force"],
};

const background = {
  name: "Noble",
  skill_proficiencies: ["History", "Persuasion"],
  tool_proficiency: "One type of gaming set",
  extra_languages: 1,
  selected_languages: ["Celestial"],
  equipment: ["Set of fine clothes", "Signet ring", "Scroll of pedigree"],
  gold: 25,
  features: [
    {
      name: "Position of Privilege",
      description:
        "Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.",
    },
  ],
  characteristics: {
    personality_trait:
      "I don’t like to get my hands dirty, and I won’t be caught dead in unsuitable accommodations.",
    ideal: "I love the problem, not the solution.",
    bond: "Find great magical artifacts for the family collection.",
    flaw: "Doesn't want anyone to know how the family has fallen on financial hart times.",
  },
  flavour: "Studied at Eltorchul Academy.",
};

const inspiration = 0;

const alignment = "Neutral";

const height = 5.3;

const ac = 10 + modifiers.dex;

const initiative = modifiers.dex;

const level_up_gold = 200;
const starting_gold = 150 + level_up_gold + background.gold;

const total_starting_gold = starting_gold + background.gold;

const starting_equipment = [
  ...background.equipment,
  ...character_class.equipment,
];

const languages = [
  ...background.selected_languages,
  ...race.selected_languages,
  ...race.languages,
];

const proficiencies = [
  ...character_class.proficient_skills,
  ...background.skill_proficiencies,
  ...race.selected_proficiencies,
].sort();

const combat_options = [
  character_class.cantrips_known.find((spell) => spell.name === "Fire Bolt"),
  character_class.spells_in_spellbook.find(
    (spell) => spell.name === "Chromatic Orb"
  ),
  character_class.spells_in_spellbook.find(
    (spell) => spell.name === "Magic Missile"
  ),
  character_class.spells_in_spellbook.find(
    (spell) => spell.name === "Phantasmal Force"
  ),
];

export const character = {
  name,
  race,
  height,
  proficiency_bonus,
  attributes,
  modifiers,
  background,
  character_class,
  inspiration,
  alignment,
  ac,
  initiative,
  starting_gold,
  languages,
  total_starting_gold,
  starting_equipment,
  proficiencies,
  combat_options,
};
