[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]
[h: tx = getTokenX(0,target)]
[h: ty = getTokenY(0,target)]
[h: sx = getTokenX(0,source)]
[h: sy = getTokenY(0,source)]
[h: X = tx-sx]
[h: Y = ty-sy]
[h, if (abs(X)>abs(Y)), code: {
	[if (X>0): alfa = 0; alfa = 180]
};{
	[if (Y>0): alfa = -90; alfa = 90]
}]
[h: setTokenFacing(alfa,source)]