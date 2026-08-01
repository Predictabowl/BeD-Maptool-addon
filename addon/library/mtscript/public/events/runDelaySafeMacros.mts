[h: switchToken("MapVar")]

[h, foreach(jItem,Delayed_Run_Macros), code:{
	[sMacro = json.get(jItem,"macroName")]
	[oParams = json.get(jItem,"macroParam")]
	[macro(sMacro): oParams]
}]
[macro("events/clearDelayedSafeMacros@this"): 0]
