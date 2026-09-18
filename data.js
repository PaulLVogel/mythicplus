const DUNGEONS = [
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
          all: [
            "Spread for Triple Shot \u2014 two players get a circle; standing stacked double-hits the group.",
            "Dodge Regurgitate wave cones. Anyone hit needs a disease dispel.",
            "During Ssscavenging she shields and drops Messy Eater puddles. Every puddle must be soaked or Carrion Burst wipes."
          ],
          tank: [
            "Ravenous Stomp drops Fresh Meat on two of three carrion piles. Drag her to the pile that did NOT get meat before Ssscavenging or she Frenzies.",
            "Defensive for Hydrastrike. Melee range is brutal if you eat it unmitigated."
          ],
          heal: [
            "Top everyone before Ravenous Stomp.",
            "Disease-dispel Regurgitate. Plan a CD for the scavenging shield window."
          ],
          dps: [
            "Burn the scavenging shield immediately. Soaks are the healer's job only if puddles are covered."
          ]
        }
      },
      {
        name: "The Writhing Coil",
        blurb: "If even one player fails Death Rattle, the group wipes.",
        roles: {
          all: [
            "Toxic Atrophy is three kicks in a row. Miss one and the group loses 15% damage and 10% movespeed per stack.",
            "Dodge Burrowing Charge. Point the following Venom Jet frontal off the stack.",
            "Death Rattle tethers everyone. Sprint out until every tether snaps. If anyone stays close, the channel never ends."
          ],
          tank: [
            "Tail Scythe is the tank buster.",
            "After Uncoil, stack the five Uncoiled Writhes so cleave hits all of them."
          ],
          heal: [
            "Synchronized Venom ticks the whole fight. Pre-hot Death Rattle.",
            "Poison-dispel Spiteful Venom on writhe targets."
          ],
          dps: [
            "Uncoil splits her into five writhes. Remaining HP on the writhes becomes her HP again \u2014 this is the burn.",
            "CC fixating writhes so they stop meleeing and applying poison."
          ]
        }
      },
      {
        name: "Zul'jan",
        blurb: "Four beams, then dump Ritual Venom or you die to the expire.",
        roles: {
          all: [
            "Ritual of the Fang: four beams race to him. Pre-assign soaks. A beam that hits him empowers Fang and starts group-wide pulsing damage.",
            "Soaking a beam applies Ritual Venom. If that debuff expires, it kills you.",
            "Clear every Venom stack by soaking one Boneslicer line (one soak clears all stacks). Dodge bouncing Axegrinder blades unless you need the clear."
          ],
          tank: ["Hold him center so beam paths are readable. Call soak sides before pull."],
          heal: ["CD the beam-soak window. Watch stacked Venom players who have not found a Boneslicer yet."],
          dps: ["Assigned beam first, boss second. Do not greed through an unsoked beam."]
        }
      }
    ]
  }
];
