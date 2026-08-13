let selectedSortilegio = 0;

function selectSortilegio(index) {
    document.getElementById("spell_item_" + selectedSortilegio).classList.remove("active");
    const spellTarget = document.getElementById("spell_item_" + index);
    document.getElementById("spell_item_" + index).classList.add("active");
    selectedSortilegio = index;

    // Parse the stringified JSON
    const sortilegioData = JSON.parse(spellTarget.dataset.sortilegio);
    
    // Update the details-pane with the spell data
    updateDetailsPane(sortilegioData);
}

function updateDetailsPane(spell) {
    // Update title
    document.getElementById("name-value").textContent = spell.nome_descrittivo;
    
    // Update stats
    document.getElementById("school-value").textContent = spell.school;
    document.getElementById("level-value").textContent = spell.level;
    document.getElementById("time-value").textContent = spell.time;
    document.getElementById("range-value").textContent = spell.range;
    document.getElementById("duration-value").textContent = spell.duration;
    document.getElementById("area-value").textContent = spell.area;
    
    // Update description (array of paragraphs)
    const descriptionDiv = document.getElementById("description-value");
    descriptionDiv.innerHTML = spell.description
        .map(par => `<p>${par}</p>`)
        .join("");
}

let knownFilter = false;

function filterByKnown(isKnown) {
    if(isKnown) {
        document.getElementById("filter-known").classList.add("active");
        document.getElementById("filter-all").classList.remove("active");
        knownFilter = true;
    } else {
        document.getElementById("filter-known").classList.remove("active");
        document.getElementById("filter-all").classList.add("active");
        knownFilter = false;
    }
    filterByName(document.getElementById("filter-name").value);
}

function filterByName(nameInitials) {
    const spellItems = document.querySelectorAll(".spell-item");
    
    spellItems.forEach(item => {
        const spellNameElement = item.querySelector(".spell-info span");
        const spellName = spellNameElement ? spellNameElement.textContent : "";
        const statusDot = item.querySelector(".status-dot");
        
        // Check if name matches (case-insensitive)
        const nameMatches = spellName.toLowerCase().includes(nameInitials.toLowerCase());
        
        // Check if known filter is applied
        const isKnown = statusDot?.classList.contains("known");
        
        // Show item if:
        // - Name matches AND
        // - (knownFilter is false OR item is known)
        if(nameMatches && (!knownFilter || isKnown)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}