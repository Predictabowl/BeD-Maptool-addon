async function openPopup(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const trigger = event.currentTarget;
    const key = trigger.textContent.trim();

    const popup = document.getElementById("explanationPopup");
    const clickedInsidePopup = popup.contains(trigger);
    const titleEl = document.getElementById("popupTitle");
    const acronymEl = document.getElementById("popupAcronym");
    const descEl = document.getElementById("popupDescription");

    // If this exact same link is clicked while its popup is open, close it (toggle behavior)
    if (popup.hasAttribute("open") && popup.dataset.currentKey === key) {
        popup.close();
        return;
    }

    try {
        // MapTool macro path
        const response = await fetch("lib://it.aldinucci.piero.bed.maptool.ruleset/utility/getInfoBoxData", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify([key])
        });

        if (!response.ok) {
            throw new Error("Failed to fetch info box data");
        }

        const data = await response.json();

        // Populate content & track current key
        titleEl.textContent = key;
        popup.dataset.currentKey = key;

        // Handle acronym
        if (data.acronimo && data.acronimo.trim() !== "") {
            acronymEl.textContent = data.acronimo;
            acronymEl.style.display = "inline-block";
        } else {
            acronymEl.style.display = "none";
            acronymEl.textContent = "";
        }

        descEl.innerHTML = data.descrizione || "";

        // Reposition only if the clicked trigger is NOT already inside the active popup
        if (!clickedInsidePopup) {
            positionPopup(trigger, popup);
        }

        // Ensure it's open
        if (!popup.hasAttribute("open")) {
            popup.show();
        }

    } catch (error) {
        console.error("Error loading info box data:", error);
    }
}

// Helper function to handle vertical and horizontal boundary calculations
function positionPopup(trigger, popup) {
    // Ensure the popup is temporarily displayed so we can accurately measure its dimensions
    popup.style.display = "flex";
    const popupHeight = popup.offsetHeight || 150;
    const popupWidth = popup.offsetWidth || 280;
    popup.style.display = ""; // Reset display back to controlled state

    const rect = trigger.getBoundingClientRect();
    
    // --- VERTICAL POSITIONING (Bottom clipping check) ---
    const spaceBelow = window.innerHeight - rect.bottom;
    let topPosition;
    if (spaceBelow < popupHeight + 20) {
        topPosition = window.scrollY + rect.top - popupHeight - 4;
    } else {
        topPosition = window.scrollY + rect.bottom + 4;
    }

    // --- HORIZONTAL POSITIONING (Right clipping check) ---
    let leftPosition = window.scrollX + rect.left;
    const safetyMargin = 15;
    
    if (rect.left + popupWidth > window.innerWidth - safetyMargin) {
        leftPosition = window.scrollX + rect.right - popupWidth;
        if (leftPosition < window.scrollX + safetyMargin) {
            leftPosition = window.scrollX + safetyMargin;
        }
    }

    popup.style.top = `${topPosition}px`;
    popup.style.left = `${leftPosition}px`;
}

// Global click listener to close the shared popup when clicking anywhere outside
document.addEventListener("click", (e) => {
    const popup = document.getElementById("explanationPopup");
    if (popup?.hasAttribute("open")) {
        if (popup.contains(e.target) || e.target.closest(".info-trigger")) {
            return;
        }
        popup.close();
    }
});