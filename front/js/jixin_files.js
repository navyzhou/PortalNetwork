$(function(){
	var totalPage=1;
	$.post("../json/frontJixinFilesAction_getFilesInfo",{"rows":10},function(data){
		totalPage=data.total;
		$('#mypages').bootpag({
			total: totalPage,
			page:1,
			maxVisible: 10
		});
		if(data.rows!==null){
			var filesInfo='';
			var remen='';
			var losts='';
			
			$.each(data.rows[0].files,function(index,item){
				filesInfo+="<li class=\"list-group-item\"><a target=\"_blank\" href=../../dataInfo/file/"+item.file_name+" title=\"点击下载\">"+item.file_savename+"</a></li>";
			});
			$("#myfilesInfo").html(filesInfo);

			$.each(data.rows[0].remen,function(index,item){
				if(item.limit=="校内不公开"){
					remen+=bugongkai(item);
				}else{
					remen+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\">"+item.tr_title.substring(0,10);
					if(item.tr_pic!=null && item.tr_pic!=''){
						remen+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
					}
					if(item.tr_file!=null && item.tr_file!=''){
						remen+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
					}
					/*if(item.limit=="不公开"){
					remen+="<span>[校内]</span>";
					}*/
					remen+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
				}
			});
			$("#myremen").html(remen);
			
			$.each(data.rows[0].losts,function(index,item){
				losts+="<li class=\"list-group-item\">"+addLast( item.lost_detail,7)+"&nbsp;<time class=\"mytime\">"+item.lost_time+"</time></li>";
			});
			$("#mylosts").html(losts);
		}
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
	$('#mypages').bootpag().on('page', function(event, num){
		$.post("../json/frontJixinFilesAction_getFilespage",{"page":num,"rows":10},function(data){
			if(data!==null){
				var filesInfo='';
				$.each(data.rows[0].files,function(index,item){
					filesInfo+="<li class=\"list-group-item\"><a target=\"_blank\" href=../../dataInfo/file/"+item.file_name+" title=\"点击下载\">"+item.file_savename+"</a></li>";
				});
				$("#myfilesInfo").html(filesInfo);
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

function bugongkai(item){
	var remen="";
	remen+="<li class=\"list-group-item\"><a target=\"_blank\" title=\"不可访问\">"+item.tr_title.substring(0,10);
	if(item.tr_pic!=null && item.tr_pic!=''){
		remen+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
	}
	if(item.tr_file!=null && item.tr_file!=''){
		remen+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
	}
	remen+="<span>[校内]</span>";
	remen+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
	return remen;
}