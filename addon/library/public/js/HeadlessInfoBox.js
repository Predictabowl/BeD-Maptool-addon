function openHeadlessPopup(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const trigger = event.currentTarget;
    const popup = document.getElementById("headless-explanationPopup");
    const textArray = JSON.parse(trigger.dataset.text_popup);
    const descEl = document.getElementById("headless-popupDescription");

    // If this exact same link is clicked while its popup is open, close it (toggle behavior)
    if (popup.hasAttribute("open") && descEl.textContent === text) {
        popup.close();
        return;
    }

    descEl.innerHTML = textArray.map(row => `<p>${row}</p>`).join('');
    positionHeadlessPopup(trigger, popup);

    if (!popup.hasAttribute("open")) {
        popup.show();
    }

}

function closeHeadlessPopup(){
    document.getElementById("headless-explanationPopup").close();
}

// Helper function to handle vertical and horizontal boundary calculations
function positionHeadlessPopup(trigger, popup) {
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
    const popup = document.getElementById("headless-explanationPopup");
    if (popup?.hasAttribute("open")) {
        popup.close();
    }
});