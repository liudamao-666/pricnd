zych_kf=function (id,_top,_left){
var me=id.charAt?document.getElementById(id):id, d1=document.body, d2=document.documentElement;
d1.style.height=d2.style.height='100%';me.style.top=_top?_top+'px':0;me.style.left=_left+"px";
me.style.position='absolute';
setInterval(function (){me.style.top=parseInt(me.style.top)+(Math.max(d1.scrollTop,d2.scrollTop)+_top-parseInt(me.style.top))*0.1+'px';},10+parseInt(Math.random()*20));
return arguments.callee;
};
window.onload=function (){
zych_kf
('qq_zych',120,-154)
}

lastScrollY=0; 
var InterTime = 1;
var maxWidth=-1;
var minWidth=-153;
var numInter = 8;
var BigInter ;
var SmallInter ;

var o =  document.getElementById("qq_zych");
	var i = parseInt(o.style.left);
	function Big()
	{
		if(parseInt(o.style.left)<maxWidth)
		{
			i = parseInt(o.style.left);
			i += numInter;	
			o.style.left=i+"px";	
			if(i==maxWidth)
				clearInterval(BigInter);
		}
	}
	function toBig()
	{
		clearInterval(SmallInter);
		clearInterval(BigInter);
			BigInter = setInterval(Big,InterTime);
	}
	function Small()
	{
		if(parseInt(o.style.left)>minWidth)
		{
			i = parseInt(o.style.left);
			i -= numInter;
			o.style.left=i+"px";
			
			if(i==minWidth)
				clearInterval(SmallInter);
		}
	}
	function toSmall()
	{
		clearInterval(SmallInter);
		clearInterval(BigInter);
		SmallInter = setInterval(Small,InterTime);
		
	}
