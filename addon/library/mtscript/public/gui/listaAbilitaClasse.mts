[h: target = macro.args]
[frame("Abilita Classe"):{
<html>
<head> 
<link rel="stylesheet" type="text/css" href="CharSheet_css@[r: getMacroLocation()]">
[h: list =  getProperty("Abilita_Classe",target)]
<title> Abilità di Classe </title> 
</head>
<body  class="dataCentered">
<h2>[r: getName(target)]</h2>
[macro("gui/makeTabellaAbilita@this"): target]
[r: macro.return]
<br>
</body>
</html>
}]
