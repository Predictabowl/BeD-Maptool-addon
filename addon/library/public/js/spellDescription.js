/*TODO da implementare al posto di tutte le altre copie
 anche l'input andrebbe fattorizzato
*/
function apri_dialog_descrizione(event, sLibName) {
    document.getElementById('input_lib_spell').setAttribute('value', sLibName);
    document.getElementById('dialogDescrizioneForm').submit();
}