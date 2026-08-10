function toggle_visibility(sId) {
    var elem=document.getElementById(sId);
    if(elem.style.display=='none') elem.style.display='block';
    else elem.style.display='none';
}


function toggle_visibility_name(sName) {
    var cElem=document.getElementsByName(sName);
    var i;

    for (i=0; i < cElem.length; i++) {
        if(cElem[i].style.display=='none') cElem[i].style.display='block';
        else cElem[i].style.display='none';
    }
}

function loadParams(elem) {
    document.getElementById('spell_Macro').setAttribute('value', elem.dataset.macro);
    document.getElementById('spell_SpellName').setAttribute('value', elem.dataset.spellname);
    document.getElementById('spell_Azione').setAttribute('value', 'lancio');
    document.getElementById('form_table_spell').submit();
}

function apri_dialog_descrizione(sLibName) {
    document.getElementById('input_lib_spell').setAttribute('value', sLibName);
    document.getElementById('dialogDescrizioneForm').submit();
}