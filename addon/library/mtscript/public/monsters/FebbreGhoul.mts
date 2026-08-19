<!-- DEPRECATED -->
[h: source =json.get(macro.args,"source")]
[h: target =json.get(macro.args,"target")]
[h: spellName= "Lib:FebbreGhoul"]

[h: fluff = getLibProperty("nome_decorativo",spellName)]
<br>
[h: im = getImage(spellName)]
<img src='[r: im]' width="35" height="35" > </img>
[r: getSpeech(fluff)] <br>
[r: getName(source)] lancia [r: fluff]<br>
[macro("spells/FebbreGhoul/spellEffect@this"):json.set("","source",source,"target",target, "spellId", spellName)]