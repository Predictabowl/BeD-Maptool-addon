[h: target = arg(0)]
[h: iUsedPP = arg(1)]
[h: switchToken(target)]

[h: iPPcons = 0]
[h: iPAcons = 0]

[h, if(PP < iUsedPP && iUsedPP != 0), code:{
	[h: iPPtodo = iUsedPP - PP] 
	[h: iPAcons = iPPtodo]
	[h: iPPcons = PP]
};{
	[h: iPPcons = iUsedPP]
}]

[h: macro.return = json.append(iPPcons,iPAcons)]