function findDungeon(id) {
  return DUNGEONS.find((d) => d.id === id);
}
function findBoss(dungeonId, name) {
  const d = findDungeon(dungeonId);
  return d && d.bosses.find((b) => b.name === name);
}
function setTimer(id, timer) {
  const d = findDungeon(id);
  if (d) d.timer = timer;
}

setTimer("altar", "30:00");
setTimer("vale", "31:00");
setTimer("sethraliss", "33:00");
setTimer("rlp", "28:00");

const nalorakk = findBoss("nalorakk", "Nalorakk");
if (nalorakk) {
  nalorakk.roles.all = [
    "Echoing Maul marks three players. Drop all echoes in the same corner, not on allies.",
    "Fury of the War God: form a body wall so echoes cannot reach Zul'jarra in the center.",
    "During Overwhelming Onslaught, stand behind Nalorakk's shield or the hit is lethal.",
    "If an echo tags Zul'jarra, the attempt collapses."
  ];
  nalorakk.roles.tank = [
    "After Overwhelming Onslaught / knockback, soak Forceful Slam.",
    "Help intercept the closest echoes."
  ];
}

const meli = findBoss("rlp", "Melidrussa Chillworn");
if (meli) {
  meli.blurb = "Hailbombs, Chillstorm knock, kick Frigid Shard, break Frost Overload.";
  meli.roles.all = [
    "Dodge Hailburst impacts. They leave Hailbombs on the floor — in S2 a bomb mostly applies a huge Haste slow instead of killing you, but Chillstorm will still knock you into them.",
    "Chillstorm pulls inward then knocks. Stay off the very center and do not get thrown into bombs.",
    "Kick Frigid Shard (tank hit). At 66% and 33% she Ice Bulwarks / Frost Overload — break the shield so kicks work again.",
    "CC and cleave Awakened whelps."
  ];
  meli.roles.tank = ["Kick or call Frigid Shard. Do not tank in hail / Chillstorm center."];
  meli.roles.heal = ["Chill stacks and Frost Overload are the spikes. Dispel if you can."];
  meli.roles.dps = ["Burn the Frost Overload shield immediately. AoE whelps first."];
}

const kyrakka = findBoss("rlp", "Kyrakka and Erkhart Stormvein");
if (kyrakka) {
  kyrakka.roles.all = [
    "Kyrakka's Roaring Firebreath is a cone — dodge it. Inferno Spit on two players: drop the fire puddles on an edge that the next wind will push farther away, not into the group.",
    "Winds of Change always cycle NW → SW → SE → NE. Walk against the push. Fire plus a knock is off the platform.",
    "Erkhart's Interrupting Cloudburst lockouts casters — stop casting as it finishes.",
    "Dispel / clear Stormslam stacks on the tank. Prioritize Kyrakka when she is in range."
  ];
  kyrakka.roles.tank = [
    "Pick up whoever just landed. Face fire breath away from the fire side of the room.",
    "Call Stormslam so it can be dispelled before it stacks."
  ];
}
