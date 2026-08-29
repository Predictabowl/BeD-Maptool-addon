// WIP !!! 

const SKILLS = {
    "Acrobazia": 2,
    "Arcanologia": 0,
    "Atletica": 3,
    "Autorità": -1,
    "Erudizione": 1,
    "Fitness": 2,
    "Furtività": 4,
    "Intrattenimento": 0,
    "Lotta": 1,
    "Manualità": 0,
    "Medicina": -1,
    "Percezione": 3,
    "Perspicacia": 1,
    "Persuasione": 0,
    "Resilienza": 2,
    "Sociologia": -1,
    "Sopravvivenza": 1,
    "Tenacia": 2
};

let visibility = "secret"; // "secret" | "public"

function setVisibility(mode) {
    visibility = mode;
    document.getElementById("btn-secret").classList.toggle("active", mode === "secret");
    document.getElementById("btn-public").classList.toggle("active", mode === "public");
}

function modClass(v) {
    if (v > 0) return "positive";
    if (v < 0) return "negative";
    return "";
}

function buildSkillList() {
    const list = document.getElementById("skill-list");
    list.innerHTML = "";
    Object.entries(SKILLS).forEach(([name, mod]) => {
        const row = document.createElement("div");
        row.className = "skill-row";
        row.innerHTML = `
                <span class="skill-name">${name}</span>
                <span class="skill-mod ${modClass(mod)}">${mod >= 0 ? "+" : ""}${mod}</span>
                <button class="roll-btn" title="Tira ${name}" onclick="rollSkill('${name}', ${mod})">🎲</button>
            `;
        list.appendChild(row);
    });
}

function rollSkill(name, mod) {
    const circostanza = parseInt(document.getElementById("circostanza").value, 10) || 0;

    const d20 = Math.floor(Math.random() * 20) + 1;
    const total = d20 + mod + circostanza;

    const resultEl = document.getElementById("last-roll-result");
    resultEl.classList.remove("empty");
    resultEl.textContent = `${name}: ${d20} + ${mod}${circostanza !== 0 ? (circostanza > 0 ? " +" : " ") + circostanza : ""} = ${total} (${visibility === "secret" ? "Segreto" : "Pubblico"})`;

    // Circumstance modifier is consumed after one roll, per spec
    document.getElementById("circostanza").value = 0;
}

buildSkillList();