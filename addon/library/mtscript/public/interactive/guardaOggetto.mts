[h: source = json.get(macro.args,"source")]
[h: oInterattivo = json.get(macro.args,"interattivo")]

[h: switchToken(oInterattivo)]

[dialog("Handout"):{
<html>
<head>
<title> Handout </title>
</head>
<body>
<img src='[r:getTokenHandout()]'></img>
</body>
</html>
}]