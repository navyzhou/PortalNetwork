function previewMultipleImage(file, id) {
	var listid="#"+id;
	$(listid).dialog('open').dialog('setTitle', '上传图片列表');
	var MAXWIDTH = 100;
	var MAXHEIGHT = 100;
	var div = document.getElementById(id);
	div.innerHTML="";
	
	if (file.files && file.files[0]) {
		if(file.files.length>100){
			alert("上传图片不得多于20张...");
			return;
		}
		for(var i=0;i<file.files.length;i++){
			var reader = new FileReader();
			reader.onload = function(evt) {
				div.innerHTML+='<img  id="img"'+i+' src='+ evt.target.result
				+' style="float:left; margin:10px 0px 0px 10px;"  width="168px" height="168px"  />';	
			};
			reader.readAsDataURL(file.files[i]);
		}
		$(listid).css("overflow","scroll");
	} else {
		// 运用IE滤镜获取数据;
		var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
		file.select();// /选定程序
		var src = document.selection.createRange().text;
		div.innerHTML = '<img id=imghead>';
		var img = document.getElementById('imghead');
		img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
		var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth,
				img.offsetHeight);
		//状态值
		status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
		div.innerHTML = "<div id=divhead style='width:" + rect.width
				+ "px;height:" + rect.height + "px;margin-top:" + rect.top
				+ "px;margin-left:" + rect.left + "px;" + sFilter + src
				+ "\"'></div>";
	}
}