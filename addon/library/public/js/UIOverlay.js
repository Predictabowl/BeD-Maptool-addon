input.addEventListener('keypress', logKey);

function logKey(e) {
    console.log(e.code);
}

function toggle_show_list() {
    var eDisplay = document.getElementById('dropdown-list');
    if (eDisplay.style.display == 'none') {
        eDisplay.style.display = 'block';
    }
    else {
        eDisplay.style.display = 'none';
    }
}

function pulsanteRosso(event) {
    var elem = document.getElementById('var-input');
    if (event.button == 2) {
        // elem.setAttribute('value', 'Interrompi');
        openSubmenu(event, 'azione');
    } else {
        elem.setAttribute('value', 'Azione');
        document.getElementById('formRisolviAzione').submit();
    }
}

function pulsanteToken(event) {
    var elem = document.getElementById('var-input');
    if (event.button == 2) {
        elem.setAttribute('value', 'Equipaggiamento');
    } else {
        elem.setAttribute('value', 'FrameScheda');
    }
    document.getElementById('formRisolviAzione').submit();
}

function pulsanteBersaglio(event) {
    var elem = document.getElementById('var-input');
    if (event.button == 2) {
        //elem.setAttribute('value', 'CentraToken');
        openSubmenu(event, 'bersaglio');
        return;
    } else if (event.button == 1) {
        elem.setAttribute('value', 'DespawnTokenBersaglio');
    } else {
        elem.setAttribute('value', 'SelBersagli');
    }
    document.getElementById('formRisolviAzione').submit();
}

function pulsantePoteri(event) {
    var elem = document.getElementById('var-input');
    if (event.button == 2) {
        //elem.setAttribute('value', 'PoteriClasse');
        openSubmenu(event, 'poteri');
    } else {
        elem.setAttribute('value', 'AbilitaClasse');
        document.getElementById('formRisolviAzione').submit();
    }
}

function pulsanteLancio(event) {
    var elem = document.getElementById('var-input');
    if (event.button == 2) {
        elem.setAttribute('value', 'TogglePoteriLancio');
        document.getElementById('throw-button-id').classList.toggle('pActiveBorder');
    } else {
        elem.setAttribute('value', 'AttaccaLancio');
    }
    document.getElementById('formRisolviAzione').submit();
}

function pulsanteConsumabili(event) {
    var elem = document.getElementById('var-input');
    if (event.button == 2) {
        openSubmenu(event, 'consumabili');
    } else {
        elem.setAttribute('value', 'Consumabili');
        document.getElementById('formRisolviAzione').submit();
    }
}

function toggleNecrofuria() {
    document.getElementById('necrofuria-button').classList.toggle('pActiveBorder');
    var elem = document.getElementById('var-input');
    elem.setAttribute('value', 'ToggleNecrofuria');
    document.getElementById('formRisolviAzione').submit();
}

function toggleSovSpiritico() {
    document.getElementById('sov-spiritico-button').classList.toggle('pActiveBorder');
    var elem = document.getElementById('var-input');
    elem.setAttribute('value', 'ToggleSovSpiritico');
    document.getElementById('formRisolviAzione').submit();
}

function openSubmenu(event, templateId) {
    event.preventDefault();
    event.stopPropagation();

    var menu = document.getElementById('floatingSubmenu');
    var template = document.getElementById('submenu-' + templateId);

    // swap in the right content
    menu.innerHTML = '';
    menu.appendChild(template.content.cloneNode(true));

    // position above the clicked button, using real screen coordinates
    var rect = event.currentTarget.getBoundingClientRect();
    menu.style.left = rect.left + 'px';
    menu.style.bottom = (window.innerHeight - rect.top) + 'px'; // sits just above the button
    menu.style.display = 'flex';
}

var submenuCloseTimer = null;

function scheduleSubmenuClose() {
    cancelSubmenuClose(); // clear any existing timer first
    submenuCloseTimer = setTimeout(function() {
        document.getElementById('floatingSubmenu').style.display = 'none';
    }, 250); // tweak to taste — 200-300ms feels natural
}

function cancelSubmenuClose() {
    if (submenuCloseTimer) {
        clearTimeout(submenuCloseTimer);
        submenuCloseTimer = null;
    }
}

function scegliEvento(event, selection) {
    var elem = document.getElementById('var-input');
    elem.setAttribute('value', selection);
    document.getElementById('formRisolviAzione').submit();
    document.getElementById('floatingSubmenu').style.display = 'none';
}

function updateClassSkillNotification(peculiar, active){
    const skillButton = document.getElementById("button-class-skill");
    if(peculiar == 1) {
        if(active == 1) {
            skillButton.classList.remove("pPeculiareSkill", "pAttivaSkill");
            skillButton.classList.add("pBothSkills");
        } else {
            skillButton.classList.remove("pBothSkills", "pAttivaSkill");
            skillButton.classList.add("pPeculiareSkill");
        }
    } else if(active == 1) {
        skillButton.classList.remove("pPeculiareSkill", "pBothSkills");
        skillButton.classList.add("pAttivaSkill");
    } else {
        skillButton.classList.remove("pBothSkills", "pAttivaSkill", "pPeculiareSkill");
    }
}