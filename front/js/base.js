$(document).ready(function(){
	var s=$("html").height();
	$(".progressBar").height(s) ;
	var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    if (window.ActiveXObject){
        Sys.ie = ua.match(/msie ([\d.]+)/)[1];
        if (Sys.ie<9){
	        alert('你目前的IE版本为'+Sys.ie+'版本太低，请升级！');
	      //  location.href="http://windows.microsoft.com/zh-CN/internet-explorer/downloads/ie";
        }
    }	
});

$("#mysearchInfo").keyup(function(){
	var search=$.trim($("#mysearchInfo").val());
	//search=uniencode(search);
	//search=encodeURI(encodeURI(search));
	if(search!='' && search!=null){
		$("#mysearch").attr("href","jixin_find.html?tit="+search);
	}
});

function js_method(){
	var reg = /[<>&"'~@()\/]/g;     
    var r = search.match(reg);     
    if(r!=null) {   
        alert('请输入有效字符!');
        return;
    }
}


//
//$(function(){
//	var bool=false;
//	document.onkeydown = function (e) {
//		var theEvent = window.event || e;
//		var code = theEvent.keyCode || theEvent.which;
//		if (code == 13 ) {
//			if(check()){
//				var href=$("#mysearch").attr("href");
//		        window.open(href);
//			}else{
//				alert("dddd");
//			}
//			
//		}
//	};
//	function check(){
//		$("#mysearchInfo").focus(function(){
//			bool=true;	
//		});
//		$("#mysearchInfo").blur(function(){
//			bool=false;	
//		});
//		return bool;
//	}; 
//	
//});

//将地址栏的中文字符转化
function uniencode(text){
	text = escape(text.toString()).replace(/\+/g, "%2B");
	var matches = text.match(/(%([0-9A-F]{2}))/gi);
	if (matches){
		for (var matchid = 0; matchid < matches.length; matchid++) {
			var code = matches[matchid].substring(1,3);
			if (parseInt(code, 16) >= 128){
				text = text.replace(matches[matchid], '%u00' + code);
			}
		}
	}
	text = text.replace('%25', '%u0025');
	return text;
}

function ascii(str){
	return str.replace(/[^\u0000-\u00FF]/g,function($0){return escape($0).replace(/(%u)(\w{4})/gi,"\&#x$2;")});
	}

//检查时间  如果动态的时间小于三天则动态显示为新
function checkTime(time){
	var ntime=new Date();
	var mytime=ntime.getFullYear()+"-"+(ntime.getMonth()+1)+"-"+ntime.getDate();
	var arr=mytime.split("-");
	var nowtime=new Date(arr[0],arr[1],arr[2]);
    var nowtimes = nowtime.getTime();
    
    var inarr=time.split("-");
    var inputtime=new Date(inarr[0],inarr[1],inarr[2]);
    var inputtimes=inputtime.getTime();
    return nowtimes-inputtimes;
}

function addLast(val,lenth){
	if(delHtmlTag(val).length>lenth){
		return $.trim(delHtmlTag(val.substring(0,lenth)))+" ...";
	}else{
		return $.trim(delHtmlTag(val))+"   ";
	}
}
//取出文章中标签
function delTag(s){
	var dd=s.replace(/<\/?.+?>/g,"");
	return dds=dd.replace(/&nbsp;/g,"");
}
function delHtmlTag(str){
	  str= str.replace(/<[^>]+>/g,"");//去掉所有的html标记
     return str.replace(/(^\s*)|(\s*$)/g, ""); 
}

//截取图片返回第一张图片
function splitImg(image){
	if(image!=null && image!=""){
		var images=image.split(";");
		return images[0];
	}else{
		return "front/images/01.png";
	}
}