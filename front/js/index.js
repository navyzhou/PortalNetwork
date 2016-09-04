
$(function(){
	//初始化页面
	$.post("../json/frontIndexAction_getAllInfo",{},function(data){
		if(data!=null){
			var str="";
			var tongzhi="";
			var losts="";
			var gundong="";
			var gunitem="";
			if(data.rows[0].toppic!=null && data.rows[0].toppic!=""){
				$("#tpic").attr("src","../"+splitImg(data.rows[0].toppic[0].indexTopPic_name));	
			}else{
				$("#tpic").attr("src","images/01.png");
			}
			if(data.rows[0].gundong!=null && data.rows[0].gundong!=""){
				$.each(data.rows[0].gundong,function(index,item){
					if(index==0){
						gunitem+="<li data-target='#slideshow' data-slide-to="+index+" class='active'></li>";
						gundong+="<div class=\"item active\"> ";
					}else{
						gunitem+=" <li data-target='#slideshow' data-slide-to="+index+"></li>";
						gundong+="<div class=\"item\"> ";
					}
					gundong+="<img src=../"+splitImg(item.tr_pic)+">" +
					"<div class=\"carousel-caption\">" +
					"<h3>"+item.tr_title+"</h3>" +
					" <p>"+addLast(item.tr_article,19)+"<a href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\">[更多]</a></p>" +
					" </div>" +
					"</div>";
				});
			}else{
				gunitem="<li data-target='#slideshow' data-slide-to='0' class='active'></li>" +
						"<li data-target='#slideshow' data-slide-to='1' ></li>" +
						"<li data-target='#slideshow' data-slide-to='2' ></li>";
				gundong="<div class=\"item active\"><img src='images/01.png'><div class=\"carousel-caption\"><h3>示例一</h3><p>hello world</p></div></div>" +
						"<div class=\"item\"><img src='images/02.jpg'><div class=\"carousel-caption\"><h3>示例二</h3><p>hello world</p></div></div>" +
						"<div class=\"item\"><img src='images/03.png'><div class=\"carousel-caption\"><h3>示例三</h3><p>hello world</p></div></div>";
			}
			$("#gunitem").html(gunitem);
			$("#mygundong").html(gundong);
			$.each(data.rows[0].jixin,function(index,item){
				if(item.limit=="校内不公开"){
					str+=bugongkaij(item);
				}else{
					str+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+ addLast(item.tr_title,10) ;
					if(item.tr_pic!=null && item.tr_pic!=''){
						str+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
					}
					if(item.tr_file!=null && item.tr_file!=''){
						str+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
					}
					if(item.tr_video!=null && item.tr_video!=''){
						str+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
					}
					/*if(item.limit=="不公开"){
						tongzhi+="<span>[校内]</span>";
					}*/
					str+="<time class=\"mytime\">";
					if(checkTime(item.tr_time)<259200000){
						str+="<span class=\"myxinleft mystyle\">New!</span>";
					}
					str+=item.tr_time+"</time></a></li>";
				}
			});
			$("#jixin").html(str);
			
			$.each(data.rows[0].tongzhi,function(index,item){
				if(item.limit=="校内不公开"){
					tongzhi+=bugongkait(item);
				}else{
					tongzhi+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+ addLast(item.tr_title,15) ;
					if(item.tr_pic!=null && item.tr_pic!=''){
						tongzhi+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
					}
					if(item.tr_file!=null && item.tr_file!=''){
						tongzhi+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
					}
					if(item.tr_video!=null && item.tr_video!=''){
						tongzhi+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
					}
					/*if(item.limit=="不公开"){
						tongzhi+="<span>[校内]</span>";
					}*/
					tongzhi+="<time class=\"mytime\">";
					if(checkTime(item.tr_time)<259200000){
						tongzhi+="<span class=\"myxinleft mystyle\">New!</span>";
					}
					tongzhi+=item.tr_time+"</time></a></li>";
				}
				
			});
			$("#tongzhi").html(tongzhi);
			
		
			if(data.rows[0].shipin!=null && data.rows[0].shipin!=''){
				var video='';
				var playvideo='';
				var vtype=data.rows[0].shipin[0].video_name.substring(data.rows[0].shipin[0].video_name.lastIndexOf("."));
//				var vtype=".swf";
				if(vtype==".swf" || vtype==".flv"){
					video=data.rows[0].shipin[0].video_name;
					var s5 = new SWFObject("js/FlvPlayer201002.swf","playlist","240","197","7");
						s5.addParam("allowfullscreen","true"); 
						s5.addVariable("autostart","false");
						s5.addVariable("image","img/flashM-qdh.jpg");
						s5.addVariable("file","../../dataInfo/video/"+video);
						s5.addVariable("width","240");
						s5.addVariable("height","197");
						s5.write("mymedia"); 
				}else{
					video=data.rows[0].shipin[0].video_name.substring(0,data.rows[0].shipin[0].video_name.lastIndexOf("."));
//					video="fsds";
					playvideo+="<video id=\"really-cool-viode\" class=\"video-js vjs-default-skin vjs-big-play-centered\" controls preload=\"none\" width=\"230\" height=\"205\" poster=\"images/mor.png\" data-setup=\"{}\">"+
					"<source src=../../dataInfo/video/"+video+".mp4 type=\"video/mp4\" ></source>" +
					"<source src=../../dataInfo/video/"+video+".webm type=\"video/webm\"></source>" +
					"<source src=../../dataInfo/video/"+video+".ogv type=\"video/ogv\"></source>" +
					" <p class=\"vjs-no-js\">" +
					"<a href='http://video.js.com/html5-video-support/' target=\"_blank\"></a></p></video>";
					
					$("#mymedia").html(playvideo);
				}
			}else{
				$("#mymedia").html("暂无视频");
			}
	
			
			$.each(data.rows[0].losts,function(index,item){
				losts+="<li class=\"list-group-item\">"+addLast(item.lost_detail,7)+"&nbsp;<time class=\"mytime\">"+item.lost_time+"</time></li>";
			});
			$("#mylosts").html(losts);
			
			var shetuan="";
			$.each(data.rows[0].shetuan,function(index,item){
				if(item.limit=="校内不公开"){
					shetuan+=bugongkais(item);
				}else{
					shetuan+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast( item.tr_title,15) ;
					if(item.tr_pic!=null && item.tr_pic!=''){
						shetuan+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
					}
					if(item.tr_file!=null && item.tr_file!=''){
						shetuan+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
					}
					if(item.tr_video!=null && item.tr_video!=''){
						shetuan+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
					}
					/*if(item.limit=="不公开"){
						shetuan+="<span>[校内]</span>";
					}*/
					shetuan+="<time class=\"mytime\">";
					if(checkTime(item.tr_time)<259200000){
						shetuan+="<span class=\"myxinleft mystyle\">New!</span>";
					}
					shetuan+=item.tr_time+"</time></a></li>";
				}
			});
			$("#myshetuan").html(shetuan);
			
			var banji="";
			$.each(data.rows[0].banji,function(index,item){
				if(item.limit=="校内不公开"){
					banji+=bugongkaib(item);
				}else{
					banji+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast( item.tr_title,15) ;
					if(item.tr_pic!=null && item.tr_pic!=''){
						banji+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
					}
					if(item.tr_file!=null && item.tr_file!=''){
						banji+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
					}
					if(item.tr_video!=null && item.tr_video!=''){
						banji+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
					}
					/*if(item.limit=="不公开"){
						banji+="<span>[校内]</span>";
					}*/
					banji+="<time class=\"mytime\">";
					if(checkTime(item.tr_time)<259200000){
						banji+="<span class=\"myxinleft mystyle\">New!</span>";
					}
					banji+=item.tr_time+"</time></a></li>";
				}
			});
			$("#mybanji").html(banji);
			
			var jobs="";
			$.each(data.rows[0].jobs,function(index,item){
				
				jobs+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"jobcontent.html?jid="+item.job_id+"\" title="+item.job_com+">"+item.job_com;
				
				jobs+="<time class=\"mytime\">";
				if(checkTime(item.job_time)<259200000){
					jobs+="<span class=\"myxinleft mystyle\">New!</span>";
				}
				jobs+=item.job_time+"</time></a></li>";
			});
			$("#myjobs").html(jobs);
			
			var mingxing="";
			$.each(data.rows[0].mingxing,function(index,item){
				if(index<2){
					if(item.tr_pic==null){
						mingxing+="<a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+"> <img src=\"images/jiuye.png\" class=\"img-thumbnail\"> </a>";
					}else{
						mingxing+="<a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+"> <img src=../"+splitImg(item.tr_pic)+"  class=\"img-thumbnail\"> </a>";
					}
				}
			});
			$("#starStudetnt").html(mingxing);
			
			var tongbao="";
			$.each(data.rows[0].tongbao,function(index,item){
				if(item.limit=="校内不公开"){
					tongbao+=bugongkaita(item);
				}else{
					tongbao+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+addLast( item.tr_title,15) ;
					if(item.tr_pic!=null && item.tr_pic!=''){
						tongbao+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
					}
					if(item.tr_file!=null && item.tr_file!=''){
						tongbao+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
					}
					if(item.tr_video!=null && item.tr_video!=''){
						tongbao+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
					}
					/*if(item.limit=="不公开"){
						tongbao+="<span>[校内]</span>";
					}*/
					tongbao+="<time class=\"mytime\">";
					if(checkTime(item.tr_time)<259200000){
						tongbao+="<span class=\"myxinleft mystyle\">New!</span>";
					}
					tongbao+=item.tr_time+"</time></a></li>";
				}
			});
			$("#mytongbao").html(tongbao);
			
			var links="";
			var links2="";
			var links3="";
			
			$.each(data.rows[0].links,function(index,item){
				if(index%3==0){
					links+=" <li class=\"list-group-item\"><a target=\"_blank\" href="+item.link_address+">"+item.link_name+"</a></li>";
				}else if(index%3==1){
					links2+=" <li class=\"list-group-item\"><a target=\"_blank\" href="+item.link_address+">"+item.link_name+"</a></li>";
				}else{
					links3+=" <li class=\"list-group-item\"><a target=\"_blank\" href="+item.link_address+">"+item.link_name+"</a></li>";
				}
			});
			$("#mylinks").html(links);
			$("#mylinks2").html(links2);
			$("#mylinks3").html(links3);
		}
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
	//定时器
	setTimeout(function(){
		$("#topinfo").slideUp(4000);	
	},3000);
});

function bugongkaij(item){
	var str="";
	str+="<li class=\"list-group-item\"><a target=\"_blank\" href=\"content.html?tid="+item.tr_id+"&tyid="+item.types_id+"\" title="+item.tr_title+">"+ addLast(item.tr_title,8) ;
	if(item.tr_pic!=null && item.tr_pic!=''){
		str+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
	}
	if(item.tr_file!=null && item.tr_file!=''){
		str+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
	}
	if(item.tr_video!=null && item.tr_video!=''){
		str+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
	}
	/*if(item.limit=="不公开"){
		tongzhi+="<span>[校内]</span>";
	}*/
	str+="<time class=\"mytime\">";
	if(checkTime(item.tr_time)<259200000){
		str+="<span class=\"myxinleft mystyle\">New!</span>";
	}
	str+=item.tr_time+"</time></a></li>";
	return str;
}

function bugongkait(item){
	var tongzhi="";
	tongzhi+="<li class=\"list-group-item\"><a target=\"_blank\" title=\"不可访问\">"+ addLast(item.tr_title,15) ;
	if(item.tr_pic!=null && item.tr_pic!=''){
		tongzhi+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
	}
	if(item.tr_file!=null && item.tr_file!=''){
		tongzhi+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
	}
	if(item.tr_video!=null && item.tr_video!=''){
		tongzhi+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
	}
	tongzhi+="<span>[校内]</span>";
	tongzhi+="<time class=\"mytime\">";
	if(checkTime(item.tr_time)<259200000){
		tongzhi+="<span class=\"myxinleft mystyle\">New!</span>";
	}
	tongzhi+=item.tr_time+"</time></a></li>";
	return tongzhi;
}


function bugongkais(item){
	var shetuan="";
	shetuan+="<li class=\"list-group-item\"><a target=\"_blank\" title=\"不可访问\">"+addLast( item.tr_title,15) ;
	if(item.tr_pic!=null && item.tr_pic!=''){
		shetuan+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
	}
	if(item.tr_file!=null && item.tr_file!=''){
		shetuan+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
	}
	if(item.tr_video!=null && item.tr_video!=''){
		shetuan+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
	}
	shetuan+="<span>[校内]</span>";
	shetuan+="<time class=\"mytime\">";
	if(checkTime(item.tr_time)<259200000){
		shetuan+="<span class=\"myxinleft mystyle\">New!</span>";
	}
	shetuan+=item.tr_time+"</time></a></li>";
	return shetuan;
}

function bugongkaib(item){
	var banji="";
	banji+="<li class=\"list-group-item\"><a target=\"_blank\"  title=\"不可访问\">"+addLast( item.tr_title,15) ;
	if(item.tr_pic!=null && item.tr_pic!=''){
		banji+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
	}
	if(item.tr_file!=null && item.tr_file!=''){
		banji+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
	}
	if(item.tr_video!=null && item.tr_video!=''){
		banji+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
	}
	banji+="<span>[校内]</span>";
	banji+="<time class=\"mytime\">";
	if(checkTime(item.tr_time)<259200000){
		banji+="<span class=\"myxinleft mystyle\">New!</span>";
	}
	banji+=item.tr_time+"</time></a></li>";
	return banji;
}

function bugongkaita(item){
	var tongbao="";
	tongbao+="<li class=\"list-group-item\"><a target=\"_blank\"   title=\"不可访问\">"+addLast( item.tr_title,15) ;
	if(item.tr_pic!=null && item.tr_pic!=''){
		tongbao+="<span class=\"glyphicon glyphicon-picture myleft\"></span>";
	}
	if(item.tr_file!=null && item.tr_file!=''){
		tongbao+="<span class=\"glyphicon glyphicon-file myleft\"></span>";
	}
	if(item.tr_video!=null && item.tr_video!=''){
		tongbao+="<span class=\"glyphicon glyphicon-film myleft\"></span>";
	}
	tongbao+="<span>[校内]</span>";
	tongbao+="<time class=\"mytime\">";
	if(checkTime(item.tr_time)<259200000){
		tongbao+="<span class=\"myxinleft mystyle\">New!</span>";
	}
	tongbao+=item.tr_time+"</time></a></li>";
	return tongbao;
}
