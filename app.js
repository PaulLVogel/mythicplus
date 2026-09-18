const app = document.getElementById("app");
const nav = document.querySelector(".filters");
const search = document.getElementById("search");

DUNGEONS.forEach((d) => {
  const btn = document.createElement("button");
  btn.className = "chip";
  btn.dataset.dungeon = d.id;
  btn.textContent = d.name;
  nav.appendChild(btn);
});

let active = "all";
let query = "";

nav.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  active = btn.dataset.dungeon;
  nav.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === btn));
  render();
});

search.addEventListener("input", () => {
  query = search.value.trim().toLowerCase();
  render();
});

function roleBlock(key, label, items) {
  if (!items || !items.length) return "";
  return `<div class="role ${key}"><b>${label}</b><ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul></div>`;
}

function matches(dungeon) {
  if (active !== "all" && dungeon.id !== active) return false;
  if (!query) return true;
  const blob = [
    dungeon.name,
    dungeon.zone,
    dungeon.note,
    ...dungeon.bosses.flatMap((b) => [
      b.name,
      b.blurb,
      ...Object.values(b.roles).flat()
    ])
  ]
    .join(" ")
    .toLowerCase();
  return blob.includes(query);
}

function render() {
  const list = DUNGEONS.filter(matches);
  if (!list.length) {
    app.innerHTML = `<p class="empty">No bosses match that filter.</p>`;
    return;
  }
  app.innerHTML = list
    .map(
      (d) => `
      <section class="dungeon" id="${d.id}">
        <div class="dungeon-head">
          <div>
            <h2>${d.name}</h2>
            <div class="meta">${d.zone}${d.timer ? ` · ${d.timer} timer` : ""}</div>
          </div>
          <div class="meta">${d.note}</div>
        </div>
        <div class="bosses">
          ${d.bosses
            .map(
              (b) => `
            <article class="boss">
              <h3>${b.name}</h3>
              <p class="tagline">${b.blurb}</p>
              <div class="roles">
                ${roleBlock("all", "All", b.roles.all)}
                ${roleBlock("tank", "Tank", b.roles.tank)}
                ${roleBlock("heal", "Healer", b.roles.heal)}
                ${roleBlock("dps", "DPS", b.roles.dps)}
              </div>
            </article>`
            )
            .join("")}
        </div>
      </section>`
    )
    .join("");
}

render();
