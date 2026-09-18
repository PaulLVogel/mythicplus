const DUNGEONS_B = [
  {
    id: "voidscar",
    name: "Voidscar Arena",
    zone: "Voidstorm",
    timer: "30:00",
    note: "Charonus orbs must be kited into singularities or Condensed Mass kills you.",
    bosses: [
      {
        name: "Taz'Rah",
        blurb: "Spread for dash lines, rotate out of Dark Bloom orbs.",
        roles: {
          all: ["Nether Dash: each shade draws a line through a player. Loose-spread on the edge so lines do not cleave two people.", "Umbral Rupture drops a void fissure. Place them on one edge and rotate.", "Dark Bloom fires orbs out of existing puddles. Keep moving after each rupture or there is no gap.", "Dark Rift pulls the group in. Do not fall into the center."],
          tank: ["Void Blast is the buster. Start on a wall and rotate so fissures stay behind you."],
          heal: ["Dash DoT on anyone who eats a line. Bloom + rupture overlap is the spike."],
          dps: ["Movement first. No add swap on this boss."]
        }
      },
      {
        name: "Atroxus",
        blurb: "Swap to the Toxic Creeper on every roar or its aura ticks the whole room.",
        roles: {
          all: ["Sidestep Noxious Breath (random frontal). Stay close so the cone is easy to walk.", "Poison Splash drops lingering pools + Mind-Numbing Poison (-Haste). Do not stand in them.", "Monstrous Roar summons a Toxic Creeper. It fixates, stacks Sickening Bite (Nature taken), and pulses Toxic Aura until it dies. All DPS swap."],
          tank: ["Hulking Claw is the Nature buster. Mitigate every one. Poison on you can be dispelled."],
          heal: ["Poison-dispel the tank and Creeper targets. Aura ticks until the add is dead."],
          dps: ["Creeper the instant it spawns. Do not finish a boss cast first."]
        }
      },
      {
        name: "Charonus",
        blurb: "Kite Gravitic Orbs into Unstable Singularities. Touching a star without an orb Atomizes you.",
        roles: {
          all: ["Unstable Singularities pulse and pull. Do not walk into one or you are Atomized (can't attack or heal).", "Spread for Cosmic Crash so your circle does not clip an ally.", "Gravitic Orbs fixate three players and stack Condensed Mass. Each orb player kites their orb into a different singularity \u2014 that destroys both.", "Pre-position next to a star before Gravitic Orbs so the run is short."],
          tank: ["Hold him off the star field so kite lanes stay open."],
          heal: ["Singularities pulse while they live. Late kites need a defensive."],
          dps: ["If you have an orb, that is your only job until it dies in a star."]
        }
      }
    ]
  },
  {
    id: "kingsrest",
    name: "King's Rest",
    zone: "Zuldazar \u00b7 BFA",
    timer: "33:00",
    note: "Gold adds must die before they touch the Serpent. Council is Kula then Aka'ali then Zanazal every week.",
    bosses: [
      {
        name: "The Golden Serpent",
        blurb: "Spit Gold puddles spawn adds. Those adds empower the boss if they reach her.",
        roles: {
          all: ["Spit Gold: afflicted players drop a molten puddle when it expires. Stack puddles on one edge, not under the boss.", "Lucre's Call animates gold from puddles. Kill Animated Gold before they touch the Serpent.", "Serpentine Gust is a group damage spike."],
          tank: ["Tail Thrash is the buster. Face her away. Puddles expire now but still do not tank in them."],
          heal: ["Gust + spit expire is the overlap. Top spit targets before they drop."],
          dps: ["Adds over boss. An add that reaches her is how this pull gets away from you."]
        }
      },
      {
        name: "Mchimba the Embalmer",
        blurb: "Open the crypt the instant someone is entombed. Embalm ticks much harder in S2.",
        roles: {
          all: ["Entomb traps a player in a crypt. Click the crypt immediately or they die to Embalm.", "Drop burning ground on the edge.", "Kick Drain Fluids."],
          tank: ["Hold him still so the crypt is always in reach. Awakening Slam hits harder than the old version."],
          heal: ["The entombed player ticks 66% harder than before. They are the priority the whole time they are inside."],
          dps: ["Swap to the crypt. Nothing else matters for those two seconds."]
        }
      },
      {
        name: "Council of Tribes",
        blurb: "Fixed order: Kula the Butcher, then Aka'ali, then Zanazal.",
        roles: {
          all: ["Kula: axes / bleeds. Do not stand in butchering swirls.", "Aka'ali: Barrel Through is a group soak now. Soak together.", "Zanazal: kick heals and Explosive Totem. Totem explodes in 9s in S2 (was 16). No Earthwall Totem.", "Only one chief is active at a time."],
          tank: ["Pick up each chief as they jump in."],
          heal: ["Barrel Through soak plus Kula bleed overlap."],
          dps: ["Totem the instant it lands. Then the active chief."]
        }
      },
      {
        name: "King Dazar",
        blurb: "S2 redesign. Movement tank fight plus raptor adds.",
        roles: {
          all: ["Dodge Quaking Leap landings.", "Kill raptor adds. They wreck whoever they fixate if ignored.", "When he mounts, leave the charge / impale path."],
          tank: ["He hits constantly while you are moving. Plan a defensive rotation, not a single wall.", "Face him away. Re-establish after every leap."],
          heal: ["Tank spikes have almost no cast bar. Keep him topped."],
          dps: ["Cleave raptors. Personal defensive for Impaling Spear."]
        }
      }
    ]
  },
  {
    id: "rlp",
    name: "Ruby Life Pools",
    zone: "Waking Shores \u00b7 Dragonflight",
    timer: "30:00",
    note: "Interrupt dungeon. Winds on the last boss knock you into fire or off the platform.",
    bosses: [
      {
        name: "Melidrussa Chillworn",
        blurb: "Kick the mage, CC the awakened, do not stand in hail.",
        roles: {
          all: ["Kick Frostbolt and Ice Barrage every time.", "Awakened whelps must be CC'd and cleaved.", "Move out of Chillstorm / hail."],
          tank: ["Do not tank in hail."],
          heal: ["Chill stacks. Dispel if you can."],
          dps: ["AoE awakened first, then boss."]
        }
      },
      {
        name: "Kokia Blazehoof",
        blurb: "Ritualists heal her and spawn Firestorms. Kick them or soak the orb.",
        roles: {
          all: ["Blazebound Firestorms / ritualists are the real target. Kick their casts.", "If a Firestorm finishes, soak or kill the orb before it hits the group.", "Burning ground expands under her \u2014 drag her off it."],
          tank: ["Move her after every fire patch."],
          heal: ["Two Firestorm soaks overlapping need a CD."],
          dps: ["A kicked ritualist is worth more than a global on Kokia."]
        }
      },
      {
        name: "Kyrakka and Erkhart Stormvein",
        blurb: "Winds flip. Getting knocked into fire or off the edge is the wipe.",
        roles: {
          all: ["When the wind direction changes, walk against it immediately. Fire plus a knock = off the platform.", "Kick Roaring Firebreath if Erkhart is casting into the group.", "Cleave both targets."],
          tank: ["Pick up whoever just landed. Face fire breath away from the fire side of the room."],
          heal: ["Pre-hot before a known knock."],
          dps: ["Stop a cast if a knock is incoming."]
        }
      }
    ]
  },
  {
    id: "sethraliss",
    name: "Temple of Sethraliss",
    zone: "Vol'dun \u00b7 BFA",
    timer: "32:00",
    note: "S2 Avatar: missed Lifeforce orbs explode. Galvazzt still wipes if a spire reaches him.",
    bosses: [
      {
        name: "Adderis and Aspix",
        blurb: "Hit the one without the shield. Stack for Thunder and Lightning after Gale Force.",
        roles: {
          all: ["Storm Blessed swaps which one is shielded. Swap targets the instant it moves.", "Gale Force knocks the group apart. Collapse back into melee for Thunder and Lightning so the hit is shared.", "Dodge gusts and lightning circles."],
          tank: ["Keep both in cleave range when possible."],
          heal: ["Top before Thunder and Lightning."],
          dps: ["Wrong-target time during the shield is how this fight goes long."]
        }
      },
      {
        name: "Merektha",
        blurb: "Stack so one stun breaks both Knot of Snakes victims. Kill what she hatches while burrowed.",
        roles: {
          all: ["A Knot of Snakes wraps two players. Stack them so one AoE stun frees both.", "Burrow: she Hatches eggs. Kill hatchlings before she surfaces.", "Turn away from dust. Do not stand in toxin pools."],
          tank: ["Move her off the nest after each burrow."],
          heal: ["Poison-dispel. Wrapped players tick until freed."],
          dps: ["Eggs and hatchlings first."]
        }
      },
      {
        name: "Galvazzt",
        blurb: "A non-tank body-blocks every Lightning Spire. Consume Charge at 100 energy is a wipe.",
        roles: {
          all: ["Lightning Spires crawl toward him. A player (not the tank) must stand between the spire and Galvazzt.", "Soaking applies Galvanized \u2014 rotate soakers. Never let the beam touch him.", "If he reaches 100 energy he casts Consume Charge. That is the wipe.", "Induction pulses the group and drops a puddle under him. Tank moves him immediately."],
          tank: ["Hold center so spires have a long path. Sidestep the Induction puddle."],
          heal: ["Soak ticks plus Induction. Call the next soaker if someone is already Galvanized."],
          dps: ["If you are the assigned soaker, that beam is your only job until it dies."]
        }
      },
      {
        name: "Avatar of Sethraliss",
        blurb: "Phase 1: kill Defilers, soak three Lifeforce orbs or they explode. Phase 2: heal the Avatar while kiting Tormentors.",
        roles: {
          all: ["Essence Defilers channel Defiling Taint \u2014 the Avatar cannot be healed until they die.", "Corrupted Guardian drops three Corrupted Lifeforce orbs on death. They explode after ~6s (Corruption Burst) if nobody soaks. A soaked orb later lets the Avatar Consume Lifeforce (~8% HP + HoT).", "Name three soakers before pull. Soaking applies Corruption (healing done down, Physical taken up) \u2014 DPS or a defensived tank, not the healer.", "Twisted Hexxer: kick Flame Shock. Drop Latent Hex puddles on the edge.", "When Defilers die, the healer slams the Avatar. Faithless Tormentors fixate the healer for 30s. Melee applies stacking Shadowlash (healing down). CC and AoE them."],
          tank: ["Tainted Strike on the Guardian needs a defensive every time.", "Hold the Guardian off soak lanes. Grab Tormentors off the healer in phase 2."],
          heal: ["Do not try to heal the Avatar during Taint.", "Kite Tormentors. If they melee you, your heals collapse."],
          dps: ["Guardian and Defilers first. Soak the three orbs within 6 seconds.", "Phase 2: CC / AoE Tormentors so the healer can pump the Avatar to 100%."]
        }
      }
    ]
  }
];
