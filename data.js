const DUNGEONS = [
  {
    id: "altar",
    name: "Altar of Fangs",
    zone: "Vaults of Atal'Utek",
    timer: "29:00",
    note: "Hardest healer check in the pool. Poison, soaks, and interrupt chains.",
    bosses: [
      {
        name: "Rav'i",
        blurb: "Hydra that feeds on carrion piles.",
        roles: {
          all: [
            "Spread for Triple Shot; dodge Regurgitate wave cones.",
            "During Ssscavenging, soak Messy Eater puddles or Carrion Burst can wipe."
          ],
          tank: [
            "Keep the boss off Fresh Meat piles after Ravenous Stomp.",
            "Move toward the pile without a Twinfang corpse before Ssscavenging to avoid Feeding Frenzy.",
            "Defensive for Hydrastrike melee spikes."
          ],
          heal: [
            "Top the group before Ravenous Stomp.",
            "Disease-dispel Regurgitate hits.",
            "Big heals while the scavenging shield is up."
          ],
          dps: [
            "Burn the Ssscavenging shield immediately.",
            "Do not stand in leftover meat puddles."
          ]
        }
      },
      {
        name: "The Writhing Coil",
        blurb: "Serpent mass that splits on Death Rattle.",
        roles: {
          all: [
            "Interrupt every Toxic Atrophy — three casts in a row.",
            "Dodge Burrowing Charge; point Venom Jet away from the group.",
            "On Death Rattle, sprint out to snap tethers."
          ],
          tank: ["Defensive for Tail Scythe.", "Help stack Uncoiled Writhes after Uncoil."],
          heal: ["Heal through ticking Synchronized Venom the whole fight.", "Poison-dispel Spiteful Venom on writhes."],
          dps: [
            "Cleave the five Uncoiled Writhes; remaining HP becomes the boss again.",
            "CC fixating writhes so they stop applying poison."
          ]
        }
      },
      {
        name: "Zul'jan",
        blurb: "Amani warlord finishing the Ritual of the Fang.",
        roles: {
          all: [
            "Soak all four Ritual of the Fang beams before they hit the boss.",
            "Clear Ritual Venom stacks by soaking Boneslicer / Axegrinder — do not let the debuff expire."
          ],
          tank: ["Hold him centered for beam soaks.", "Call soak assignments before pull."],
          heal: ["Cooldown the beam-soak window.", "Watch stacked Ritual Venom players."],
          dps: ["Assigned beam soaks beat extra DPS.", "Stagger Living Venom deaths on trash into this room."]
        }
      }
    ]
  },
  {
    id: "murder",
    name: "Murder Row",
    zone: "Silvermoon City",
    timer: "32:00",
    note: "Four bosses. Easiest completion rate in S2. Fel smuggling alley.",
    bosses: [
      {
        name: "Kystia Manaheart",
        blurb: "Fel magister shielded behind Nibbles.",
        roles: {
          all: [
            "Boss takes 80% less damage until Nibbles is at 20%.",
            "When Chaotic Burst starts she takes extra damage and pulses AoE — blow cooldowns."
          ],
          tank: ["Face Nibbles away; pick her up when the wyrm drops."],
          heal: ["Dispel Corroding Spittle immediately.", "Plan CDs for each Chaotic Burst."],
          dps: ["Ignore Kystia until Nibbles is low.", "Interrupt Felstorm / Fel Missiles on nearby trash."]
        }
      },
      {
        name: "Zaen Bladesorrow",
        blurb: "Rogue-style blade master.",
        roles: {
          all: ["Drop Murder in a Row / poison pools on the edges.", "Don't stack Killing Spree splash."],
          tank: ["Dispel or defensive Heartstop Poison.", "Keep him out of leftover barrels/pools."],
          heal: ["Poison dispel the tank.", "Top the group through Killing Spree."],
          dps: ["Stay spread unless stacking a planned soak.", "Kick anything left from the RP hallway."]
        }
      },
      {
        name: "Xathuux the Annihilator",
        blurb: "Fel annihilator brute.",
        roles: {
          all: ["Dodge ground slams and fel swirls.", "Break or burn add waves quickly."],
          tank: ["Kite if armor melts; face frontal away from the group."],
          heal: ["Anticipate slam + add overlap.", "Dispel curses from the hallway pack if they leak in."],
          dps: ["Cleave adds, then boss. Save a defensive for annihilate hits."]
        }
      },
      {
        name: "Lithiel Cinderfury",
        blurb: "Final fel warlock of the Row.",
        roles: {
          all: [
            "Interrupt Chaos Bolt.",
            "When the ring of fire splits the room, use the Demonic Gateway to cross."
          ],
          tank: ["Hold her near the gateway side before the ring.", "Swap if a big curse lands."],
          heal: ["Dispel Curse of Doom leftovers.", "Heal the dash through the ring."],
          dps: ["Kick Chaos Bolt on cooldown.", "Do not stand in fel fire after the teleport."]
        }
      }
    ]
  },
  {
    id: "nalorakk",
    name: "Den of Nalorakk",
    zone: "Zul'Aman",
    timer: "32:00",
    note: "Bear loa trial. Echo soaks on the last boss decide the key.",
    bosses: [
      {
        name: "The Hoardmonger",
        blurb: "Greedy troll who steals pile buffs.",
        roles: {
          all: ["At 90/70/40% he runs to an unused resource pile and empowers an ability."],
          tank: ["Drag him to a pile you want him to use — or away from a dangerous one.", "Defensive after each empower."],
          heal: ["Damage pattern changes after every pile. Pre-hot the empower."],
          dps: ["Burn during movement so the next pile comes later.", "Kill totems/adds he pulls from stockpiles."]
        }
      },
      {
        name: "Sentinel of Winter",
        blurb: "Frost avatar with tombs and roars.",
        roles: {
          all: ["Break or avoid Glacial Tomb.", "Don't stand in Frigid Roar cones."],
          tank: ["Kite if you are entombed; keep the boss off the group."],
          heal: ["Spot-heal tomb targets the instant they break.", "Watch stacking chill."],
          dps: ["Swap to tombs immediately.", "Soothe enrages on nearby matriarch trash."]
        }
      },
      {
        name: "Nalorakk",
        blurb: "Loa of War. Protect Zul'jarra in the center.",
        roles: {
          all: [
            "Drop Echoing Maul echoes in one corner.",
            "During Fury of the War God, form a wall so echoes cannot reach Zul'jarra."
          ],
          tank: ["Run back after knockback and soak Forceful Slam.", "Help intercept charging echoes."],
          heal: ["Three large hits during the fury phase — plan CDs.", "Each intercepted echo deals Echoing Fury."],
          dps: ["Do not cleave allies when dropping echoes.", "Stand in echo paths; a small hit beats a wipe."]
        }
      }
    ]
  },
  {
    id: "vale",
    name: "The Blinding Vale",
    zone: "Harandar",
    timer: "33:00",
    note: "Lightbloom jungle. Bleeds, poisons, and stacked DoTs on trash are the real wipe.",
    bosses: [
      {
        name: "Lightblossom Trinity",
        blurb: "Three linked light-bloom spirits.",
        roles: {
          all: ["Kill or CC the active sister; don't let all three cast together.", "Move out of bloom zones."],
          tank: ["Pick up swaps when a sister phases.", "Face blooms away."],
          heal: ["Dispel stacked poisons/bleeds between blooms.", "The pack-wide pulse is the check."],
          dps: ["Focus the called target. Soft-CC the others."]
        }
      },
      {
        name: "Ikuzz the Light Hunter",
        blurb: "Hunter that marks the party with light.",
        roles: {
          all: ["Drop hunter marks / traps at the edge.", "Don't bait charges through the group."],
          tank: ["Sidestep the aimed shot frontal."],
          heal: ["HoT marked players before the shot lands."],
          dps: ["Spread marks. Kick any accompanying mystic."]
        }
      },
      {
        name: "Lightwarden Ruia",
        blurb: "Warden of the vale light.",
        roles: {
          all: ["Soak or dodge warding beams as called.", "Leave the blinding burst circle."],
          tank: ["Hold her still for predictable beams."],
          heal: ["Group heal the beam soaks."],
          dps: ["Assigned soaks first, then boss damage."]
        }
      },
      {
        name: "Ziekket",
        blurb: "Final vale spirit.",
        roles: {
          all: ["Thrasher-style stacked bleeds — reset by moving or using immunities.", "Kick nature bolts."],
          tank: ["Kite if bleed stacks get high on you."],
          heal: ["This is a DoT check. Dispel what you can; CD the bloom."],
          dps: ["Personal defensives when you are targeted. Don't greed casts in flowers."]
        }
      }
    ]
  },
  {
    id: "voidscar",
    name: "Voidscar Arena",
    zone: "Voidstorm",
    timer: "30:00",
    note: "Gladiator pit. Movement bosses and hungry adds.",
    bosses: [
      {
        name: "Taz'Rah",
        blurb: "Opening pit fighter.",
        roles: {
          all: ["Keep moving through void swirls.", "Don't stand in champion spears."],
          tank: ["Face Brutal Slams away from the raid."],
          heal: ["Slam + spear overlap is the spike."],
          dps: ["Cleave pit adds, then boss."]
        }
      },
      {
        name: "Atroxus",
        blurb: "Sickening mid-fight gladiator.",
        roles: {
          all: ["Drop disease / armor-melt zones out of the middle.", "Interrupt volleys."],
          tank: ["Defensive when Melt Armor stacks.", "Kite if needed."],
          heal: ["Disease dispel on cooldown.", "Watch the tank's armor stacks."],
          dps: ["Purge or kick casters on the edges."]
        }
      },
      {
        name: "Charonus",
        blurb: "Void executioner, last of the triad.",
        roles: {
          all: ["Dodge singularity pulls and slicer lines.", "Burn Devouring Brutalizer adds before they Devour."],
          tank: ["Hold Charonus off the add spawn.", "Taunt devourers if they fixate a squishy."],
          heal: ["Big heal on Devour attempts.", "Group damage during void tentacles."],
          dps: ["Swap to Brutalizers instantly.", "Save a mobility for the pull-in."]
        }
      }
    ]
  },
  {
    id: "kingsrest",
    name: "King's Rest",
    zone: "Zuldazar · BFA",
    timer: "38:00",
    note: "Returning. Hard tank fight on Dazar. Mind the ancestor council.",
    bosses: [
      {
        name: "The Golden Serpent",
        blurb: "Animated gold guardian.",
        roles: {
          all: ["Don't stand in spit. Hide behind a pillar for Tail Lash if needed."],
          tank: ["Face away. Move out of gold pools."],
          heal: ["Spit + smash overlap."],
          dps: ["Stay behind the head. Soak orbs if they spawn."]
        }
      },
      {
        name: "Mchimba the Embalmer",
        blurb: "Tomb embalmer.",
        roles: {
          all: ["Free the entombed player immediately.", "Drop burning ground at the edge."],
          tank: ["Hold him still so the cage is easy to reach."],
          heal: ["The caged player ticks hard."],
          dps: ["Swap to the crypt cage. Kick Drain Fluids."]
        }
      },
      {
        name: "Council of Tribes",
        blurb: "Aka'ali, Zanazal, and Kula in sequence.",
        roles: {
          all: ["Kick Zanazal totems / heals.", "Dodge Aka'ali charges and Kula axes."],
          tank: ["Pick up each chief as they jump in."],
          heal: ["Charge + axe overlap is nasty."],
          dps: ["Kill totems first. Don't cleave the wrong chief if one is phased."]
        }
      },
      {
        name: "King Dazar",
        blurb: "Hardest tank boss in the season for many groups.",
        roles: {
          all: ["Dodge Quaking Leap. Kill raptor adds.", "When he mounts, move out of the charge."],
          tank: ["Constant movement plus heavy melee — plan defensives on a rotation.", "Face him away from the group."],
          heal: ["Tank can spike with no cast bar. Keep him topped."],
          dps: ["Cleave raptors. Save a defensive for Impaling Spear."]
        }
      }
    ]
  },
  {
    id: "rlp",
    name: "Ruby Life Pools",
    zone: "Waking Shores · Dragonflight",
    timer: "30:00",
    note: "Returning. Interrupt checklist dungeon. Kyrakka is a knock-off check.",
    bosses: [
      {
        name: "Melidrussa Chillworn",
        blurb: "Frost dragonspawn with awakened adds.",
        roles: {
          all: ["Kick Frostbolt / Ice Barrage. CC awakened whelps."],
          tank: ["Don't tank in hailstorms."],
          heal: ["Chill stacks. Dispel if you can."],
          dps: ["AoE the awakened, then boss."]
        }
      },
      {
        name: "Kokia Blazehoof",
        blurb: "Fire ritualist.",
        roles: {
          all: ["Kick ritualists. Soak or kill Blazebound Firestorms."],
          tank: ["Drag her off fire patches."],
          heal: ["Firestorm soaks hurt — CD if two overlap."],
          dps: ["Interrupts on ritualists beat boss damage."]
        }
      },
      {
        name: "Kyrakka and Erkhart Stormvein",
        blurb: "Dragon + rider. Winds flip the room.",
        roles: {
          all: ["When winds change, don't get knocked into fire or off the platform.", "Kick Erkhart's Roaring Firebreath if possible."],
          tank: ["Swap between rider and dragon as they land.", "Face fire breath away."],
          heal: ["Flames + winds = chaos. Pre-hot before a knock."],
          dps: ["Cleave both. Stop casting if a knock is incoming."]
        }
      }
    ]
  },
  {
    id: "sethraliss",
    name: "Temple of Sethraliss",
    zone: "Vol'dun · BFA",
    timer: "36:00",
    note: "Returning. Lightning orbs and the avatar heal race.",
    bosses: [
      {
        name: "Adderis and Aspix",
        blurb: "Paired sethrak. One shielded at a time.",
        roles: {
          all: ["Attack the unshielded one. Dodge gusts and lightning."],
          tank: ["Split or stack as called when Cyclone Strike goes out."],
          heal: ["Static shock on the group."],
          dps: ["Swap the instant the shield flips."]
        }
      },
      {
        name: "Merektha",
        blurb: "Sand-buried hydra.",
        roles: {
          all: ["Kill hatchlings / eggs. Blind soak or turn for the dust.", "Don't stand in toxin pools."],
          tank: ["Move her off nests after a burrow."],
          heal: ["Poison dispel. Hatchling melee on whoever is targeted."],
          dps: ["Eggs first. Kick what you can."]
        }
      },
      {
        name: "Galvazzt",
        blurb: "Lightning construct.",
        roles: {
          all: ["Soak orbs before they reach the boss or he wipes you.", "Don't soak with too many stacks."],
          tank: ["Hold him center so orbs have a long path."],
          heal: ["Orb soaks chunk people."],
          dps: ["Assigned soaks. Never let an orb land."]
        }
      },
      {
        name: "Avatar of Sethraliss",
        blurb: "Heal the avatar while adds try to kill it.",
        roles: {
          all: ["This is a heal-the-boss fight. Kite or kill Energy Fragments.", "Don't stand in thunder."],
          tank: ["Pick up all adds off the avatar."],
          heal: ["Your heals on the avatar are the win condition.", "People still need topping."],
          dps: ["Adds and orbs over avatar HP. Interrupt healers."]
        }
      }
    ]
  }
];
