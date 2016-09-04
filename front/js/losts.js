$(function() {
	$.post("../json/lostAction_frontLeftLostsInfo",{},function(data) {
		totalPage = data.total;
		$('#page1').bootpag({
		total : totalPage,
		page : 1,
		maxVisible : 10
		});
		if (data.rows != null) {
			var leftLost = "";
			$.each(data.rows[0].leftlost,function(index, item) {
				leftLost += "<table class=\"table table-bordered\"><tr><td>联系电话："
				+ item.lost_relation
				+ "</td>"
				+ "<td>捡到地点："
				+ item.lost_place
				+ "</td><td>捡到时间："
				+ item.lost_time
				+ "</td> </tr><tr>"
				+ "<td colspan=\"3\">"
				+ item.lost_detail
				+ "</td> </tr></table>";
			});
			$("#leftLost").html(leftLost);
		}

	$.post("../json/lostAction_frontRightsLostsInfo",{},function(data) {
		totalPage = data.total;
		$('#page2').bootpag({
			total : totalPage,
			 page : 1,
			 maxVisible : 10
		});
		if (data.rows != null) {
			var rightLost = "";
			$.each(data.rows[0].rightlost,function(index,item) {
				rightLost += "<table class=\"table table-bordered\"><tr><td>联系电话："
				+ item.lost_relation
				+ "</td>"
				+ "<td>捡到地点："
				+ item.lost_place
				+ "</td><td>捡到时间："
				+ item.lost_time
				+ "</td> </tr><tr>"
				+ "<td colspan=\"3\">"
				+ item.lost_detail
				+ "</td> </tr></table>";
			});
			$("#rightLost").html(rightLost);
		}
	});
	$(".progressBar").hide(); //页面加载完毕后即将DIV隐藏
});

	$('#lost_time').datetimepicker({
		locale : 'zh-cn'
	});
	$("#lost_time").on(
			"dp.change",
			function(e) {
				if (checkTime($("#lost_time").val()) < 0) {
					alert("选择时间有误");
					var ntime = new Date();
					var mytime = ntime.getFullYear() + "-"
							+ (ntime.getMonth() + 1) + "-" + ntime.getDate()
							+ " " + ntime.getHours() + "点" + ntime.getMinutes()
							+ "分";
					$("#lost_time").val(mytime);
				}
				;
			});

	$('#lost_time2').datetimepicker({
		locale : 'zh-cn'
	});
	$("#lost_time2").on(
			"dp.change",
			function(e) {
				if (checkTime($("#lost_time2").val()) < 0) {
					alert("选择时间有误");
					var ntime = new Date();
					var mytime = ntime.getFullYear() + "-"
							+ (ntime.getMonth() + 1) + "-" + ntime.getDate()
							+ " " + ntime.getHours() + "点" + ntime.getMinutes()
							+ "分";
					$("#lost_time2").val(mytime);
				}
				;
			});
});

$('#page1')
		.bootpag()
		.on(
				'page',
				function(event, num) {
					$
							.post(
									"../json/lostAction_frontLeftLostsPage",
									{
										'page' : num
									},
									function(data) {
										if (data.rows != null) {
											var leftLost = "";
											$
													.each(
															data.rows[0].leftlost,
															function(index,
																	item) {
																leftLost += "<table class=\"table table-bordered\"><tr><td>联系电话："
																		+ item.lost_relation
																		+ "</td>"
																		+ "<td>捡到地点："
																		+ item.lost_place
																		+ "</td><td>捡到时间："
																		+ item.lost_time
																		+ "</td> </tr><tr>"
																		+ "<td colspan=\"3\">"
																		+ item.lost_detail
																		+ "</td> </tr></table>";
															});
											$("#leftLost").html(leftLost);
										}
									});
				});

$('#page2')
		.bootpag()
		.on(
				'page',
				function(event, num) {
					$
							.post(
									"../json/lostAction_frontRightsLostsPage",
									{
										'page' : num
									},
									function(data) {
										if (data.rows != null) {
											var rightLost = "";
											$
													.each(
															data.rows[0].rightlost,
															function(index,
																	item) {
																rightLost += "<table class=\"table table-bordered\"><tr><td>联系电话："
																		+ item.lost_relation
																		+ "</td>"
																		+ "<td>捡到地点："
																		+ item.lost_place
																		+ "</td><td>捡到时间："
																		+ item.lost_time
																		+ "</td> </tr><tr>"
																		+ "<td colspan=\"3\">"
																		+ item.lost_detail
																		+ "</td> </tr></table>";
															});
											$("#rightLost").html(rightLost);
										}
									});
				});

function checkTime(time) {
	var ntime = new Date();
	var mytime = ntime.getFullYear() + "-" + (ntime.getMonth() + 1) + "-"
			+ ntime.getDate();
	var arr = mytime.split("-");
	var nowtime = new Date(arr[0], arr[1], arr[2]);
	var nowtimes = nowtime.getTime();

	var inarr = time.split("-");
	var inputtime = new Date(inarr[0], inarr[1], inarr[2].substring(0, 2));
	var inputtimes = inputtime.getTime();
	return nowtimes - inputtimes;
}
var MyValidator = function() {
	var handleSubmit = function() {
		$('.myform').validate({
			errorElement : 'span',
			errorClass : 'help-block',
			focusInvalid : false,
			rules : {
				isPhone : { // 验证邮箱
					isPhone : true,
					required : true
				},
				lost_place : {
					required : true
				},
				lost_relation : {
					required : true,
					digits : true
				},
				lost_email : {
					required : true,
					email : true
				},
				lost_pwd : {
					required : true
				},
				lost_detail : {
					required : true,
					maxlength : 100
				}

			},
			messages : {
				lost_place : {
					required : "不能为空."
				},

				lost_relation : {
					required : "不能为空.",
					digits : "格式不对"
				},
				lost_email : {
					required : "不能为空.",
					email : "邮箱格式不对"
				},
				lost_pwd : {
					required : "不能为空."
				},
				lost_detail : {
					required : "不能为空.",
					maxlength : "最多输入100个字."
				},
				isPhone : {
					required : "不能为空."
				},
			},

			highlight : function(element) {
				$(element).closest('.form-group').addClass('has-error');
			},

			success : function(label) {
				label.closest('.form-group').removeClass('has-error');
				label.remove();
			},

			errorPlacement : function(error, element) {
				element.parent('div').append(error);
			},

			submitHandler : function(form) {
				form.submit();
			}
		});

		$('.myform input').keypress(function(e) {
			if (e.which == 13) {
				if ($('.myform').validate().form()) {
					$('.myform').submit();
				}
				return false;
			}
		});

		$('.myform2').validate({
			errorElement : 'span',
			errorClass : 'help-block',
			focusInvalid : false,
			rules : {
				isPhone2 : { // 验证邮箱
					isPhone : true,
					required : true
				},
				lost_place2 : {
					required : true
				},

				lost_relation2 : {
					required : true,
					digits : true
				},
				lost_email2 : {
					required : true,
					email : true
				},
				lost_pwd2 : {
					required : true
				},
				lost_detail2 : {
					required : true,
					maxlength : 100
				}

			},
			messages : {
				lost_place2 : {
					required : "不能为空."
				},

				lost_relation2 : {
					required : "不能为空.",
					digits : "格式不对"
				},
				lost_email2 : {
					required : "不能为空.",
					email : "邮箱格式不对"
				},
				lost_pwd2 : {
					required : "不能为空."
				},
				lost_detail2 : {
					required : "不能为空.",
					maxlength : "最多输入100个字."
				},
				isPhone2 : { // 验证邮箱
					required : "不能为空."
				},
			},

			highlight : function(element) {
				$(element).closest('.form-group').addClass('has-error');
			},

			success : function(label) {
				label.closest('.form-group').removeClass('has-error');
				label.remove();
			},

			errorPlacement : function(error, element) {
				element.parent('div').append(error);
			},

			submitHandler : function(form) {
				form.submit();
			}
		});

		$('.myform2 input').keypress(function(e) {
			if (e.which == 13) {
				if ($('.myform2').validate().form()) {
					$('.myform2').submit();
				}
				return false;
			}
		});
	};
	return {
		init : function() {
			handleSubmit();
		}
	};

}();
jQuery.validator
		.addMethod(
				"isPhone",
				function(value, element) {
					var tel = /^(0\d{2,3}-)?\d{7,8}(-\d{3,4})?$|(^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$)/;
					return this.optional(element) || (tel.test(value));
				}, "请正确填写您的电话号码");

// 监听邮箱事件
$('#lost_email')
		.keyup(
				function() {
					var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
					var mycode = $('#lost_email').val();
					if (mycode == '') {
						$("#mycode").addClass("disabled");
					} else {
						if (myreg.test(mycode)) {
							$("#mycode").removeClass("disabled");
						} else {
							$("#mycode").addClass("disabled");
						}
					}
				});

$('#lost_email')
		.change(
				function() {
					var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
					var mycode = $('#lost_email').val();
					if (mycode == '') {
						$("#mycode").addClass("disabled");
					} else {
						if (myreg.test(mycode)) {
							$("#mycode").removeClass("disabled");
						} else {
							$("#mycode").addClass("disabled");
						}
					}
				});

// 监听邮箱事件
$('#lost_email2')
		.keyup(
				function() {
					var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
					var mycode = $('#lost_email2').val();
					if (mycode == '') {
						$("#mycode2").addClass("disabled");
					} else {
						if (myreg.test(mycode)) {
							$("#mycode2").removeClass("disabled");
						} else {
							$("#mycode2").addClass("disabled");
						}
					}
				});

// 监听邮箱事件
$('#lost_email2')
		.change(
				function() {
					var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
					var mycode = $('#lost_email2').val();
					if (mycode == '') {
						$("#mycode2").addClass("disabled");
					} else {
						if (myreg.test(mycode)) {
							$("#mycode2").removeClass("disabled");
						} else {
							$("#mycode2").addClass("disabled");
						}
					}
				});

// 发送验证码
function sendCode() {
	var lost_email = $("#lost_email").val();
	$.post("../json/lostAction_sendCode", {
		'lost_email' : lost_email
	}, function(data) {
		if (data.total == 10000) {
			$("#helpcode").html("&nbsp;验证码发送成功.");
			$("#helpcode").css("color", "blue");
			$("#mycode").addClass("disabled");
			$("#helpcode").removeClass("glyphicon glyphicon-remove");
			$("#helpcode").addClass("glyphicon glyphicon-ok");
			$("#newcode").show();
		} else {
			$("#helpcode").html("&nbsp;验证码发送失败.");
			$("#helpcode").css("color", "red");
			$("#helpcode").removeClass("glyphicon glyphicon-ok");
			$("#helpcode").addClass("glyphicon glyphicon-remove");
			$("#mycode").html("重新发送验证码");
		}
	});
}

//发送验证码
var count=0;
function sendCode3() {
	count++;
	var lost_email = $("#lost_email").val();
	$.post("../json/lostAction_sendCode", {
		'lost_email' : lost_email
	}, function(data) {
		if (data.total == 10000) {
			$("#helpcode").html("&nbsp;验证码第"+count+"次重新发送成功 15秒后才能再次发送.");
			$("#helpcode").css("color", "blue");
			$("#mycode").addClass("disabled");
			$("#helpcode").removeClass("glyphicon glyphicon-remove");
			$("#helpcode").addClass("glyphicon glyphicon-ok");
			$("#newcode").addClass("disabled");
			shownewcode();
		} else {
			$("#helpcode").html("&nbsp;验证码重新发送失败.");
			$("#helpcode").css("color", "red");
			$("#helpcode").removeClass("glyphicon glyphicon-ok");
			$("#helpcode").addClass("glyphicon glyphicon-remove");
			$("#mycode").html("重新发送验证码");
			$("#newcode").addClass("disabled");
			shownewcode();
		}
	});
}
function shownewcode(){
	setTimeout(function(){
		$("#newcode").removeClass("disabled");	
	},15000);
}


// 发送验证码
function sendCode2() {
	var lost_email = $("#lost_email2").val();
	$.post("../json/lostAction_sendCode2", {
		'lost_email' : lost_email
	}, function(data) {
		if (data.total == 10000) {
			$("#helpcode2").html("&nbsp;验证码发送成功.");
			$("#helpcode2").css("color", "blue");
			$("#helpcode").removeClass("glyphicon glyphicon-remove");
			$("#helpcode2").addClass("glyphicon glyphicon-ok");
			$("#mycode2").addClass("disabled");
			$("#newcode2").show();
		} else {
			$("#helpcode2").html("&nbsp;验证码重新发送失败.");
			$("#helpcode2").css("color", "red");
			$("#helpcode").removeClass("glyphicon glyphicon-ok");
			$("#helpcode2").addClass("glyphicon glyphicon-remove");
			$("#mycode2").html("重新发送验证码");
		}
	});
}

//发送验证码
var count2=0;
function sendCode4() {
	count2++;
	var lost_email = $("#lost_email2").val();
	$.post("../json/lostAction_sendCode2", {
		'lost_email' : lost_email
	}, function(data) {
		if (data.total == 10000) {
			$("#helpcode2").html("&nbsp;验证码第"+count2+"次重新发送成功 15秒后才能再次发送.");
			$("#helpcode2").css("color", "blue");
			$("#helpcode").removeClass("glyphicon glyphicon-remove");
			$("#helpcode2").addClass("glyphicon glyphicon-ok");
			$("#mycode2").addClass("disabled");
			$("#newcode2").addClass("disabled");
			shownewcode2();
		} else {
			$("#helpcode2").html("&nbsp;验证码发送失败.");
			$("#helpcode2").css("color", "red");
			$("#helpcode").removeClass("glyphicon glyphicon-ok");
			$("#helpcode2").addClass("glyphicon glyphicon-remove");
			$("#mycode2").html("重新发送验证码");
			$("#newcode2").addClass("disabled");
			shownewcode2();

		}
	});
}
function shownewcode2(){
	setTimeout(function(){
		$("#newcode2").removeClass("disabled");	
	},15000);
}

function submitForm() {
	var lost_detail = $.trim($("#lost_detail").val());
	var lost_email = $.trim($("#lost_email").val());
	var lost_place = $.trim($("#lost_place").val());
	var lost_pwd = $.trim($("#lost_pwd").val());
	var isPhone = $.trim($("#isPhone").val());
	var lost_time = $.trim($("#lost_time").val());
	$.post("../json/lostAction_frontLeftAdd", {
		'lost_detail' : lost_detail,
		'lost_email' : lost_email,
		'lost_place' : lost_place,
		'lost_pwd' : lost_pwd,
		'isPhone' : isPhone,
		'lost_time' : lost_time
	}, function(data) {
		if (data.total == 10000) {// 添加成功
			window.location.reload();
			$("#lost_detail").val("");
			$("#lost_email").val("");
			$("#lost_place").val("");
			$("#lost_pwd").val("");
			$("#isPhone").val("");
			$("#lost_time").val("");
		} else if (data.total == 10002) {// 验证失败
			$("#checkcodes").html("&nbsp;验证码错误");
			$("#checkcodes").addClass("glyphicon glyphicon-remove");
			$("#checkcodes").css("color", 'red');
		} else {// 添加失败

		}
	});
}

function submitForm2() {
	var lost_detail = $.trim($("#lost_detail2").val());
	var lost_email = $.trim($("#lost_email2").val());
	var lost_place = $.trim($("#lost_place2").val());
	var lost_pwd = $.trim($("#lost_pwd2").val());
	var isPhone = $.trim($("#isPhone2").val());
	var lost_time = $.trim($("#lost_time2").val());
	$.post("../json/lostAction_frontRightAdd", {
		'lost_detail2' : lost_detail,
		'lost_email2' : lost_email,
		'lost_place2' : lost_place,
		'lost_pwd2' : lost_pwd,
		'isPhone2' : isPhone,
		'lost_time2' : lost_time
	}, function(data) {
		if (data.total == 10000) {// 添加成功
			window.location.reload();
			$("#lost_detail2").val("");
			$("#lost_email2").val("");
			$("#lost_place2").val("");
			$("#lost_pwd2").val("");
			$("#isPhone2").val("");
			$("#lost_time2").val("");
		} else if (data.total == 10002) {// 验证失败
			$("#checkcode2").html("&nbsp;验证码错误");
			$("#checkcode2").addClass("glyphicon glyphicon-remove");
			$("#checkcode2").css("color", 'red');
		} else {// 添加失败

		}
	});
}
