  $(function(){
	$.post("../json/frontInitAction_initParty",{},function(data){
		if(data!=null){
			if(data.rows[0]!=null){
				if(data.rows[0].gaikuang[0]!=null && data.rows[0].gaikuang[0]!=""){
					if(data.rows[0].gaikuang[0].tr_pic!=null ){
						$("#gaikuangimg").attr("src","../"+splitImg(data.rows[0].gaikuang[0].tr_pic));
					}else{
						$("#gaikuangimg").attr("src","images/combat-training.jpg");
					}
				}
				var gaikuang="";
				$.each(data.rows[0].gaikuang,function(index,item){
					gaikuang+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast(item.tr_title,30); ;
					if(item.tr_pic!=null && item.tr_pic!=''){
						gaikuang+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
					}
					if(item.tr_file!=null && item.tr_file!=''){
						gaikuang+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
					}
					gaikuang+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
				});
				$("#gaikuang").html(gaikuang);
				
				
				if(data.rows[0].tongzhi[0]!=null && data.rows[0].tongzhi[0]!=""){
					if(data.rows[0].tongzhi[0].tr_pic!=null ){
						$("#tongzhiimg").attr("src","../"+splitImg(data.rows[0].tongzhi[0].tr_pic));
					}else{
						$("#tongzhiimg").attr("src","images/combat-training.jpg");
					}
				}
				var tongzhi="";
				$.each(data.rows[0].tongzhi,function(index,item){
					tongzhi+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast(item.tr_title,30);;
					if(item.tr_pic!=null && item.tr_pic!=''){
						tongzhi+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
					}
					if(item.tr_file!=null && item.tr_file!=''){
						tongzhi+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
					}
					tongzhi+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
				});
				$("#tongzhi").html(tongzhi);
				
				
				
				var fencai="";
				$.each(data.rows[0].fencai,function(index,item){
					fencai+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast(item.tr_title,30);;
					if(item.tr_pic!=null && item.tr_pic!=''){
						fencai+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
					}
					if(item.tr_file!=null && item.tr_file!=''){
						fencai+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
					}
					fencai+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
				});
				$("#fencai").html(fencai);
				
				
				var huodong="";
				$.each(data.rows[0].huodong,function(index,item){
					huodong+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast(item.tr_title,30); ;
					if(item.tr_pic!=null && item.tr_pic!=''){
						huodong+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
					}
					if(item.tr_file!=null && item.tr_file!=''){
						huodong+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
					}
					huodong+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
				});
				$("#huodong").html(huodong);
				
				
				var dangzhi="";
				$.each(data.rows[0].dangzhi,function(index,item){
					dangzhi+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast(item.tr_title,30); ;
					if(item.tr_pic!=null && item.tr_pic!=''){
						dangzhi+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
					}
					if(item.tr_file!=null && item.tr_file!=''){
						dangzhi+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
					}
					tongzhi+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
				});
				$("#dangzhi").html(dangzhi);
				
				var lilun="";
				$.each(data.rows[0].lilun,function(index,item){
					lilun+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast(item.tr_title,30); ;
					if(item.tr_pic!=null && item.tr_pic!=''){
						lilun+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
					}
					if(item.tr_file!=null && item.tr_file!=''){
						lilun+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
					}
					lilun+="<time class=\"mytime\">"+item.tr_time+"</time></a></li>";
				});
				$("#lilun").html(lilun);
				
			}
		}
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
});