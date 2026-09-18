const DUNGEONS_A = [
  {
    id: "altar",
    name: "Altar of Fangs",
    zone: "Vaults of Atal'Utek",
    timer: "29:00",
    note: "Hardest healer check in the pool. Pre-assign Zul'jan beam soaks. Click the first-room totems or you never reach Rav'i.",
    bosses: [
      {
        name: "Rav'i",
        blurb: "Three-headed hydra that eats carrion piles. Bad pile choice is a wipe.",
        roles: {
          all: ["Spread for Triple Shot \u2014 two players get a circle; standing stacked double-hits the group.", "Dodge Regurgitate wave cones. Anyone hit needs a disease dispel.", "During Ssscavenging she shields and drops Messy Eater puddles. Every puddle must be soaked or Carrion Burst wipes."],
          tank: ["Ravenous Stomp drops Fresh Meat on two of three carrion piles. Drag her to the pile that did NOT get meat before Ssscavenging or she Frenzies.", "Defensive for Hydrastrike."],
          heal: ["Top everyone before Ravenous Stomp.", "Disease-dispel Regurgitate. Plan a CD for the scavenging shield window."],
          dps: ["Burn the scavenging shield immediately."]
        }
      },
      {
        name: "The Writhing Coil",
        blurb: "If even one player fails Death Rattle, the group wipes.",
        roles: {
          all: ["Toxic Atrophy is three kicks in a row. Miss one and the group loses 15% damage and 10% movespeed per stack.", "Dodge Burrowing Charge. Point Venom Jet off the stack.", "Death Rattle tethers everyone. Sprint out until every tether snaps. If anyone stays close, the channel never ends."],
          tank: ["Tail Scythe is the tank buster.", "After Uncoil, stack the five Uncoiled Writhes so cleave hits all of them."],
          heal: ["Synchronized Venom ticks the whole fight. Pre-hot Death Rattle.", "Poison-dispel Spiteful Venom."],
          dps: ["Uncoil splits her into five writhes. Remaining HP becomes her HP again \u2014 this is the burn.", "CC fixating writhes."]
        }
      },
      {
        name: "Zul'jan",
        blurb: "Four beams, then dump Ritual Venom or you die to the expire.",
        roles: {
          all: ["Ritual of the Fang: four beams race to him. Pre-assign soaks. A beam that hits him empowers Fang and starts group-wide pulsing damage.", "Soaking a beam applies Ritual Venom. If that debuff expires, it kills you.", "Clear every Venom stack by soaking one Boneslicer line (one soak clears all stacks). Dodge Axegrinder unless you need the clear."],
          tank: ["Hold him center. Call soak sides before pull."],
          heal: ["CD the beam-soak window. Watch stacked Venom players."],
          dps: ["Assigned beam first, boss second."]
        }
      }
    ]
  },
  {
    id: "murder",
    name: "Murder Row",
    zone: "Silvermoon City",
    timer: "34:00",
    note: "Four bosses. Lithiel wipes if imps are left alive into the wave.",
    bosses: [
      {
        name: "Kystia Manaheart",
        blurb: "Felshield until Nibbles is broken. Then a 20-second burn.",
        roles: {
          all: ["She takes 80% less damage while Nibbles is above 20%.", "Push Nibbles to 20% to open Destabilized: bonus damage for ~20s and AoE pulses. Lust here.", "Dodge Fel Spray. Run out of Fel Nova after she teleports.", "CC / kick Mirror Images before they Felstorm."],
          tank: ["Stack Kystia and Nibbles for cleave. Face Nibbles spray away."],
          heal: ["Magic-dispel Corroding Spittle instantly.", "Major CD on each Destabilized window."],
          dps: ["Ignore Kystia until Nibbles is low. Save CDs for Destabilized."]
        }
      },
      {
        name: "Zaen Bladesorrow",
        blurb: "Line-of-sight Murder in a Row behind freight or you eat a shot plus a bleed.",
        roles: {
          all: ["Same-Day Delivery drops Forbidden Freight crates. These are your cover.", "At 100 energy he aims Murder in a Row at every player in LOS. Get a crate between you and him.", "A crate hit by the shot or Fire Bomb explodes 5s later. Do not blow every crate before the next shot.", "Fel-Infused Freight pulses until detonated. Bomb the fel crate, hide behind a clean one."],
          tank: ["Heartstop Poison / Envenom cuts max HP. Defensive + instant poison dispel."],
          heal: ["Poison-dispel the tank. Killing Spree is a 3-second group machine-gun."],
          dps: ["Spread Fire Bombs off the hide crate."]
        }
      },
      {
        name: "Xathuux the Annihilator",
        blurb: "Drop the axe in melee, then burn Demonic Rage.",
        roles: {
          all: ["Axe Toss lands an add that pulses stacking Fel Lightning. Drop it next to the boss and kill it.", "Demonic Rage: group hit, 75% attack speed on him, 30% more damage taken for 15s.", "Dodge Burning Steps puddles."],
          tank: ["Legion Strike is a cone with 80% healing reduction. Face away and mitigate.", "Kite the edge during Rage so puddles do not trap melee."],
          heal: ["Tank healing is terrible during Legion Strike. Top the group before Rage."],
          dps: ["Axe first. Offensive CDs when Rage starts."]
        }
      },
      {
        name: "Lithiel Cinderfury",
        blurb: "Stack so Fingers of Gul'dan imps clump, AoE them before the wave, then take the gateway.",
        roles: {
          all: ["Fingers of Gul'dan drops a Wild Imp on every player. Stand close enough that imps pile, but do not overlap the 8-yard impact circles.", "AoE / CC the imp clump immediately. They spam Felfire Burst if they cast.", "Kill the Furious Vilefiend before Malefic Wave. Any demon the wave touches gains 100% Haste and will wipe you.", "She opens a Demonic Gateway then casts Malefic Wave. Wait until the far gate is on the safe side, then click it. Walking the wave applies a 1-minute 100% Fire vulnerability.", "Kick every Chaos Bolt."],
          tank: ["An Infernal fixates you all fight and cannot be killed. Keep it off the group and off the gateways.", "Pick up the Vilefiend instantly so melee can cleave it with the imps."],
          heal: ["Searing Fel Flame pulses all fight. Anyone who eats the wave needs a hard save."],
          dps: ["Imps and Vilefiend die before you touch the gateway.", "Do not take the gateway early \u2014 the far side is still inside the wave until it finishes expanding."]
        }
      }
    ]
  },
  {
    id: "nalorakk",
    name: "Den of Nalorakk",
    zone: "Zul'Aman",
    timer: "32:00",
    note: "Pick up the six offerings on the way in or the first boss never spawns.",
    bosses: [
      {
        name: "The Hoardmonger",
        blurb: "Soak every mushroom. At 90/70/40 he permanently steals a pile buff.",
        roles: {
          all: ["Spoiled Supplies throws Rotten Mushrooms. Step on every mushroom before 12s or they Putrid Burst the group.", "Each soak applies stacking Toxic Spores. Dispel between waves.", "He runs to the nearest unused pile and keeps that upgrade. Preferred order: meat, bones, mushrooms last.", "Dodge Earthshatter Slam frontal."],
          tank: ["Drag him toward the pile you want next.", "Meat pile adds knockback to Bellow. Bones pile adds ground spikes."],
          heal: ["Poison-dispel Toxic Spores. Pre-hot after the meat pile."],
          dps: ["Help soak. Stay out of bone spikes."]
        }
      },
      {
        name: "Sentinel of Winter",
        blurb: "Kill shivercores one at a time, soak Rimeshatter, stand in Snowdrift for Eternal Winter.",
        roles: {
          all: ["Frostspike spawns two Fractured Shivercores. Kick Winter's Shroud.", "When a shivercore dies, soak each Rimeshatter shard or it Rime Detonates (damage + root).", "Dead shivercores leave Snowdrift. Standing in it grants knockback immunity.", "Eternal Winter: he shields and pushes the group. Stand in Snowdrift and break the shield.", "Dodge Raging Squall tornadoes."],
          tank: ["Drag him onto each shivercore for cleave."],
          heal: ["Dispel Glacial Torment. Shield-break is the spike."],
          dps: ["Do not kill both shivercores at once. Kill one, soak, then the other into Eternal Winter."]
        }
      },
      {
        name: "Nalorakk",
        blurb: "Echoes that reach Zul'jarra in the center wipe the attempt.",
        roles: {
          all: ["Echoing Maul marks three players. Drop all echoes in the same corner, not on allies.", "Fury of the War God: form a body wall so echoes cannot reach Zul'jarra. Soaking the path deals Echoing Fury but stops the charge.", "If an echo tags Zul'jarra, the attempt collapses."],
          tank: ["After knockback, soak Forceful Slam.", "Help intercept the closest echoes."],
          heal: ["Three large hits in the fury phase. Each intercepted echo also damages the soaker."],
          dps: ["Stand in the charge lane \u2014 a small hit beats a wipe."]
        }
      }
    ]
  },
  {
    id: "vale",
    name: "The Blinding Vale",
    zone: "Harandar",
    timer: "33:00",
    note: "Split path: Trinity left, Ikuzz right. Do not let Essence orbs reach Ziekket.",
    bosses: [
      {
        name: "Lightblossom Trinity",
        blurb: "Shared HP. Soak the flowers or Light-Gorged turns Overgrowth lethal.",
        roles: {
          all: ["Damage is shared. Nuke one target.", "Step INTO the blossom to soak Lightblossom Beam. Standing in front of it does nothing.", "Unsoaked blossoms stack Light-Gorged. Overgrowth scales with those stacks.", "Dodge Fertile Loam. Spread for Thornblade.", "Kick Kezkitt's Light Bolt."],
          tank: ["Bedrock Slam creates Loam and a group Surge. Mitigate and move him off the patch."],
          heal: ["Surge + Overgrowth is the check."],
          dps: ["Assigned blossom soaks beat extra boss damage."]
        }
      },
      {
        name: "Ikuzz the Light Hunter",
        blurb: "Break roots, then kite the fixate through roots to clear the floor.",
        roles: {
          all: ["Bloodthorn Roots root the party. Break them before he stomps.", "Verdant Stomp knocks back. Stay off the platform edge.", "Bloodthirsty Gaze fixates one player. That player kites. His footfalls crush roots \u2014 drag him across roots to clear the floor.", "If he reaches the fixate target, Incise is huge."],
          tank: ["Pick him up the instant the fixate ends."],
          heal: ["Dispel roots if you can. Top the fixate target."],
          dps: ["Root add first. The fixate player stops DPS and kites."]
        }
      },
      {
        name: "Lightwarden Ruia",
        blurb: "Moonkin / bear swap. At 40% he channels everything at once.",
        roles: {
          all: ["Lightfire expires into silencing beams \u2014 drop it away from the group.", "Dodge Lightfall. Kick Warden's Wrath in moonkin.", "Pulverizing Strikes locks cones onto marked players. You cannot dodge the lock. Spread so cones do not overlap, then stand still.", "At 40% Spirits of the Vale rotates all abilities until death. This is the burn."],
          tank: ["Moonkin melee is replaced by Warden's Wrath bolts."],
          heal: ["Heal Grievous Thrash stacks off. 40% is a CD dump."],
          dps: ["Lust at 40% if the group is stable."]
        }
      },
      {
        name: "Ziekket",
        blurb: "Soak Essence orbs yourself. If they reach her she shields and pulses the group.",
        roles: {
          all: ["Kill Lightspawn Lashers immediately.", "Aim Concentrated Lightbeam through lasher corpses so they cannot respawn, then move out of Lightsap.", "Lightbloom's Essence orbs drift toward Ziekket. Soak them. Each soak buffs you but increases damage taken. If an orb hits her she shields and AoEs.", "Kick Lightspore Shot."],
          tank: ["Hold her still so beam players have a clean line through corpses."],
          heal: ["Stop soaking orbs if the taken-damage buff is about to kill you."],
          dps: ["Lashers first, then orbs, then boss. Do not let an orb walk into her."]
        }
      }
    ]
  }
];
