$(function(){
	var totalPage=1;
	$.post("../json/frontInitAction_initDormInfo",{"rows":10},function(data){
		totalPage=data.total;
		$('#mypages').bootpag({
			total: totalPage,
			page:1,
			maxVisible: 10
		});
		if(data.rows!=null){
			var aixin='';
			var xinsheng='';
			
			var listdorm="";
			$.each(data.rows[0].listdorm,function(index,item){
				listdorm+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"dcontent.html?pid="+item.public_id+" \" title="+item.public_week+">"+item.public_week+"</a></li>";
			});
			$("#mylistdorm").html(listdorm);

			$.each(data.rows[0].aixin,function(index,item){
				aixin+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\">"+item.tr_title.substring(0,10);
				if(item.tr_pic!=null && item.tr_pic!=''){
					aixin+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
				}
				if(item.tr_file!=null && item.tr_file!=''){
					aixin+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
				}
				aixin+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
			});
			$("#myaixin").html(aixin);
			
			$.each(data.rows[0].xinsheng,function(index,item){
				xinsheng+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\">"+item.tr_title.substring(0,10);
				if(item.tr_pic!=null && item.tr_pic!=''){
					xinsheng+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
				}
				if(item.tr_file!=null && item.tr_file!=''){
					xinsheng+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
				}
				xinsheng+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
			});
			$("#myxinsheng").html(xinsheng);
		}
	});
	
	$('#mypages').bootpag().on('page', function(event, num){
		$.post("../json/frontInitAction_initDormInfoPage",{"page":num,"rows":10},function(data){
			if(data!==null){
				var listdorm="";
				$.each(data.rows[0].listdorm,function(index,item){
					listdorm+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"dcontent.html?pid="+item.public_id+" \" title="+item.public_week+">"+item.public_week+"</a></li>";
				});
				$("#mylistdorm").html(listdorm);
			}
		});
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
});

//获取请求参数
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
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
