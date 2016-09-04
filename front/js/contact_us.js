$(function(){
	$.post("../json/frontContactUsAction_getPhoneInfo",{},function(data){
		if(data!=null){
			if(data.rows!=null && data.rows!=""){
				var telInfo="";
				$.each(data.rows,function(index,item){
					telInfo+="<tr><td>"+(index+1)+"</td><td>"+item.pho_addr+"</td><td>"+item.pho_tel+"</td></tr>";
				});
				$("#telInfo").html(telInfo);
			}else{
				$("#telInfo").html("暂无数据");
			}
		}
		$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
	});
	
});



function outputcontact(){
	var mes_content=$("#mycontactus").val();
	var mes_pub=$("#contactname").val();
	var code=$("#contactcode").val();
	if(mes_content==""){
		Modal.confirm( {
		    msg: "留言内容不能为空",
		    title:"错误提示"
		});
		return ;
	}
	if(mes_pub==""){
		Modal.confirm( {
		    msg: "留言名不能为空",
		    title:"错误提示"
		});
		return ;
	}
	if(code==""){
		Modal.confirm( {
		    msg: "验证码不能为空",
		    title:"错误提示"
		});
		return ;
	}
	$.post("../json/messagesAction_addMessages",{"mes_content":html2Escape(mes_content),"mes_pub":mes_pub,"code":code},function(data){
		if(data.total==10000){
			Modal.confirm( {
			    msg: "留言成功",
			    title:"成功提示"
			});
			$("#mycontactus").val("");
			$("#contactname").val("匿名");
			$("#contactcode").val("");
			showCodeAgain();
		}else if(data.total==10002){
//			// 四个选项都是可选参数
//			Modal.alert( {
//			    msg: '内容',
//			    title: '标题',
//			    btnok: '确定',
//			    btncl:'取消'
//			});

			// 如需增加回调函数，后面直接加 .on( function(e){} );
			// 点击“确定” e: true
			// 点击“取消” e: false
			Modal.confirm( {
			    msg: "验证码错误",
			    title:"错误提示"
			});
//			  .on( function (e) {
//			    alert("返回结果：" + e);
//			  });
			showCodeAgain();
		}else{
			Modal.confirm( {
			    msg: "留言失败",
			    title:"错误提示",
			});
			showCodeAgain();
		};
	});
	
}

function showCodeAgain(){
	var r=new Date();
	var img=document.getElementById("showcode");
	img.src="code.jsp?d="+r;
}

//普通字符转换成符
function html2Escape(sHtml) {
 return sHtml.replace(/[<>&"]/g,function(c){return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];});
}