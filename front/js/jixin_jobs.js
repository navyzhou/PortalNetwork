$(function(){
	var totalPage=1;
	$.post("../json/frontInitAction_initJobInfo",{"rows":10},function(data){
		totalPage=data.total;
		$('#mypages').bootpag({
			total: totalPage,
			page:1,
			maxVisible: 10
		});
		if(data.rows!=null){
			var shengya='';
			var jiuye='';
			
			var jobs="";
			$.each(data.rows[0].jobs,function(index,item){
				jobs+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"jobcontent.html?jid="+item.job_id+"\" title="+item.job_com+">"+item.job_com;
				if(checkTime(item.job_time)<259200000){
					jobs+="<span class=\"myxinleft mystyle\">New!</span>";
				}
				jobs+="<time class=\"mytime\">"+item.job_time+"</time></a></li>";
			});
			$("#myjobs").html(jobs);

			$.each(data.rows[0].shengya,function(index,item){
				shengya+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\">"+item.tr_title.substring(0,10);
				if(item.tr_pic!=null && item.tr_pic!=''){
					shengya+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
				}
				if(item.tr_file!=null && item.tr_file!=''){
					shengya+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
				}
				shengya+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
			});
			$("#myshengya").html(shengya);
			
			$.each(data.rows[0].jiuye,function(index,item){
				jiuye+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\">"+item.tr_title.substring(0,10);
				if(item.tr_pic!=null && item.tr_pic!=''){
					jiuye+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
				}
				if(item.tr_file!=null && item.tr_file!=''){
					jiuye+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
				}
				jiuye+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
			});
			$("#myjiuye").html(jiuye);
		}
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
	$('#mypages').bootpag().on('page', function(event, num){
		$.post("../json/frontInitAction_initJobInfoPage",{"page":num,"rows":10},function(data){
			if(data!==null){

				var jobs="";
				$.each(data.rows[0].jobs,function(index,item){
					jobs+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"jobcontent.html?jid="+item.job_id+"\" title="+item.job_com+">"+item.job_com;
					if(checkTime(item.job_time)<259200000){
						jobs+="<span class=\"myxinleft mystyle\">New!</span>";
					}
					jobs+="<time class=\"mytime\">"+item.job_time+"</time></a></li>";
				});
				$("#myjobs").html(jobs);
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
