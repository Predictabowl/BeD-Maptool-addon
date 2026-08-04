[h: oToken = findToken(arg(0))]

[h: jSonate = getDaMemoria(oToken,"Sonate-Data")]
[h, if(json.isEmpty(jSonate)): return(0,"[]")]

[h, macro("class_skills/chooseEffettoSonata@this"): oToken]
[h: sMotivo = macro.return]

[h, if(sMotivo == 0): return(0,"")]
[h, if(sMotivo == -1), code:{
	[h: jSonate = json.remove(jSonate, "MotivoAttivo")]
};{	
	[h: jSonate = json.set(jSonate, "MotivoAttivo", sMotivo)]
}]

[h: setInMemoria(oToken, "Sonate-Data", jSonate)]

[h: macro.return = ""]