[h: source = macro.args]

[macro("powers/isMalato@this"): source]
[h: result = macro.return]
[macro("powers/isMaledetto@this"): source]
[h: result = bor(result,macro.return)]

[h: macro.return = result]