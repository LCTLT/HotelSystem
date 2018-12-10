var xcts = isNaN("6") ? 0 : parseInt("6");
var mdjc = "", mdsj = "";
var tc_sykc = 0;
var timer = "";
var ydclick = true;
var DDGL = {
		init : function() {
			var jsonstr = '[';
			if ('' != '1' && '' != '1' && "false" == "false") {
				$
				.each(
						$
						.parseJSON('[{"crscj":3990.0,"cpid":"b210ea079b7b4f4a9e2632b04426fb5c","sykc":2.0,"cfrq":"2018-11-27","etscj":3990.0},{"crscj":3990.0,"cpid":"b210ea079b7b4f4a9e2632b04426fb5c","sykc":2.0,"cfrq":"2018-11-28","etscj":3990.0},{"crscj":3990.0,"cpid":"b210ea079b7b4f4a9e2632b04426fb5c","sykc":2.0,"cfrq":"2018-11-29","etscj":3990.0},{"crscj":3990.0,"cpid":"b210ea079b7b4f4a9e2632b04426fb5c","sykc":2.0,"cfrq":"2018-11-30","etscj":3990.0}]'),
						function(n, value) {
							jsonstr += (n == 0 ? '' : ',')
							+ '{"SYKC":"' + value.sykc
							+ '","DEPARTUREDATE":"'
							+ value.cfrq + '","CRSCJ":"'
							+ value.crscj + '","ETSCJ":"'
							+ value.etscj + '"}';
						});
			}
			jsonstr += ']';
			var data = $.parseJSON(jsonstr);
			DDGL.createCalendarData(data);
			Calendar.Init(data.length ? data[0].DEPARTUREDATE : null); //载入日历
		},
		createCalendarData : function(data) {
			CalendarData = new Object();
			for (var i = 0, t = data.length; i < t; i++) {
				if (parseInt(data[i].SYKC) > 0) {
					CalendarData[data[i].DEPARTUREDATE] = {
							"CRSCJ" : data[i].CRSCJ,
							"ETSCJ" : data[i].ETSCJ
					};
				}
			}
		},
		getTc : function(date, menPrice, kidsPrice, obj) {
			$.ajax({
				type : "POST",
				url : "/module/ddgl/selectCpTc.do",
				data : {
					cpid : 'b210ea079b7b4f4a9e2632b04426fb5c',
					cfrq : date
				},
				dataType : "json",
				async : true,
				success : function(result) {
					if (result.key == "1") {
						$("#tcid").empty();
						var data = $.parseJSON(result.value);
						var isgetprice = true;
						for (var i = 0; i < data.length; i++) {
							if (Number(data[i].sykc) > 0) {
								$("#tcid").append(
										"<option value='"+data[i].tcid+"'>"
										+ data[i].tcmc + "</option>");
								if (isgetprice) {
									MenPrice = Number(data[i].crscj);
									KidsPrice = Number(data[i].etscj);
									MenJsj = Number(data[i].crjsj);
									KidsJsj = Number(data[i].etjsj);
									$("#crjg").html(data[i].crscj);
									$("#etjg").html(data[i].etscj);
									isgetprice = false;
									$("#sykc_label").html(data[i].sykc);
									tc_sykc = Number(data[i].sykc);
								}
							}
						}
						DDGL.calcPrice();
					}
				},
				error : function(result) {
					toast("系统繁忙，请稍后重试");
				}
			});
			$("#cfrq").val(date);
			$("#htrq").val(getDateAndWeek(date, xcts - 1, false));
			$("#calendar_input").html('<b>' + date + '</b>');
			$('#dayhtml a').removeClass('selected');
			$(obj).addClass('selected');
		},
		calcPrice : function() {
			if (typeof (MenPrice) == 'undefined')
				return;
			var totalMens = MenPrice
			* parseInt($("#crrs").val() != "" ? $("#crrs").val() : "0");
			var totalKids = KidsPrice
			* parseInt($("#etrs").val() != "" ? $("#etrs").val() : "0");
			$("#totalPrice").html((totalMens + totalKids).toFixed(2));
			$("#zje").val((totalMens + totalKids).toFixed(2));
		}
};
var islogin = false;
var dxfsxz = false;
var handlerflag = true;

$(function() {
	$(".cpdh ul li").click(
			function(e) {
				if ($("#" + $(this).attr("class"))) {
					window.scroll(0, $("#" + $(this).attr("class"))
							.offset().top - 45);
					$(this).addClass("current").siblings().removeClass(
					"current");
				}
			});

	//收藏
	$("#sc")
	.on(
			"click",
			function() {
				if (handlerflag) {
					handlerflag = false;
					$
					.ajax({
						type : "POST",
						url : "/module/scgl/edit.do",
						data : {
							cpid : "b210ea079b7b4f4a9e2632b04426fb5c",
							cplx : "01"
						},
						dataType : "json",
						async : false,
						success : function(result) {
							if (result.key == "1") {
								$("#sc").removeClass("sc")
								.addClass("ysc");
								toast("收藏成功");
							} else if (result.key == "2") {
								$("#sc").removeClass("ysc")
								.addClass("sc");
								toast("取消收藏");
							} else if (result.key == "3") {
								window.location.href = "/module/hygl/login.do?fromUrl="
									+ escape(window.location.href);
							}
						},
						error : function(result) {
							toast('系统繁忙，请稍后重试');
						}
					});
					handlerflag = true;
				}
			});

	var height = $('.cpdh').offset().top;
	$(window).on(
			'scroll',
			function() {
				if (height <= $(document).scrollTop() - 30) {
					$('.cpdh').addClass('fixed_top');
					$("#yccpdh").show();
					if ($("#cpmd").length > 0
							&& $("#cpmd").offset().top
							+ $("#cpmd").height() - 45 >= $(
									document).scrollTop())
						$(".cpmd").addClass("current").siblings()
						.removeClass("current");
					else if ($("#cxhd").length > 0
							&& $("#cxhd").offset().top
							+ $("#cxhd").height() - 45 >= $(
									document).scrollTop())
						$(".cxhd").addClass("current").siblings()
						.removeClass("current");
					else if ($("#xxxc").length > 0
							&& $("#xxxc").offset().top
							+ $("#xxxc").height() - 45 >= $(
									document).scrollTop())
						$(".xxxc").addClass("current").siblings()
						.removeClass("current");
					else if ($("#fyh").length > 0
							&& $("#fyh").offset().top + $("#fyh").height()
							- 45 >= $(document).scrollTop())
						$(".fyh").addClass("current").siblings()
						.removeClass("current");
					else if ($("#fybh").length > 0
							&& $("#fybh").offset().top
							+ $("#fybh").height() - 45 >= $(
									document).scrollTop())
						$(".fybh").addClass("current").siblings()
						.removeClass("current");
					else if ($("#qzxz").length > 0
							&& $("#qzxz").offset().top
							+ $("#qzxz").height() - 45 >= $(
									document).scrollTop())
						$(".qzxz").addClass("current").siblings()
						.removeClass("current");
					else if ($("#wxts").length > 0
							&& $("#wxts").offset().top
							+ $("#wxts").height() - 45 >= $(
									document).scrollTop())
						$(".wxts").addClass("current").siblings()
						.removeClass("current");
					else if ($("#bcxy").length > 0
							&& $("#bcxy").offset().top
							+ $("#bcxy").height() - 45 >= $(
									document).scrollTop())
						$(".bcxy").addClass("current").siblings()
						.removeClass("current");
				} else {
					$('.cpdh').removeClass('fixed_top').find("li").eq(0)
					.addClass("current").siblings().removeClass(
					"current")
					$("#yccpdh").hide();
				}
				isclick = false;
			});

	DDGL.init();

	//加载图片模块
	var tpmap = new Map();

	tpmap
	.put(
			"0",
	"http://sc-fx-fxtfsq.cloudtravel.net/fxtfsq/xltt/2018/10/25/9fd1ee780a7c4d539322c7ea1d79c0a4.jpg");

	tpmap
	.put(
			"1",
	"http://sc-fx-fxtfsq.cloudtravel.net/fxtfsq/jdtp/2017/09/20/c30b7ec8931f40d70be2e4a9326bee78.jpg");

	tpmap
	.put(
			"2",
	"http://sc-fx-fxtfsq.cloudtravel.net/fxtfsq/jdtp/2015/10/04/13b7d47309e51fc2d25cab25b7456813.jpg");

	tpmap
	.put(
			"3",
	"http://sc-fx-fxtfsq.cloudtravel.net/fxtfsq/jdtp/2017/09/20/ccdefe1d7909f45468b5b9bfa3eb8d28.jpg");

	tpmap
	.put(
			"4",
	"http://sc-fx-fxtfsq.cloudtravel.net/fxtfsq/jdtp/2015/10/04/50767b73827a06a319019667106b80ac.jpg");

	tpmap
	.put(
			"5",
	"http://sc-fx-fxtfsq.cloudtravel.net/fxtfsq/jdtp/2015/10/04/52c4850ffdd5d3f9547bb6c34c72bed9.jpg");

	tpmap
	.put(
			"6",
	"http://sc-fx-fxtfsq.cloudtravel.net/fxtfsq/jdtp/2015/10/04/a6cd4c70017ea9421c945cc92cd39137.jpg");

	tpmap
	.put(
			"7",
	"http://sc-fx-fxtfsq.cloudtravel.net/fxtfsq/jdtp/2015/10/04/de05f6d3345cf6abb035c558efc8c3b1.jpg");

	var len = tpmap.size();
	var i = 0
	if (len > 1) {
		$(".right_button").click(function(e) {
			i++;
			if (i > len - 1) {
				i = 0;
			}
			$(".tp img").attr("src", tpmap.get(i));
		});
		$(".left_button").click(function(e) {
			i--;
			if (i < 0) {
				i = len - 1;
			}
			$(".tp img").attr("src", tpmap.get(i));
		});
	}

	$("#tcid").on("change", function() {
		$.ajax({
			type : "POST",
			url : "/module/ddgl/selectCpTc.do",
			data : {
				cpid : 'b210ea079b7b4f4a9e2632b04426fb5c',
				cfrq : $("#cfrq").val(),
				tcid : $(this).val()
			},
			dataType : "json",
			async : true,
			success : function(result) {
				if (result.key == "1") {
					var data = $.parseJSON(result.value);
					MenPrice = data[0].crscj;
					KidsPrice = data[0].etscj;
					$("#crjg").html(data[0].crscj);
					$("#etjg").html(data[0].etscj);
					$("#sykc_label").html(data[0].sykc);
					tc_sykc = Number(data[0].sykc);
					DDGL.calcPrice();
				}
			},
			error : function(result) {
				toast("系统繁忙，请稍后重试");
			}
		});
	});

	$("#cfrq")
	.on(
			"change",
			function() {
				if ($(this).val() == '') {
					$("#dayhtml a").removeClass("selected");
					$("#tcid")
					.html("")
					.append(
					"<option value='' selected='selected'>请选择</option>")
				} else {
					Calendar
					.setCurMonth((new Date($(this).val()
							.replace(/-/ig, '/'))
					.getFullYear() - Calendar.CurTime.Year)
					* 12
					+ (new Date($(this).val()
							.replace(/-/ig, '/'))
					.getMonth() - Calendar.CurTime.Month));
					Calendar.RenderCalendar();
					$("a[cfrq=" + $(this).val() + "]").click();
				}
			});

	//选择省份事件
	$("#lygw_province")
	.on(
			"change",
			function() {
				if ($(this).val() != "") {
					$
					.ajax({
						type : "POST",
						url : "/module/ddgl/selectSzd2.do",
						data : {
							qyid : $(this).val(),
							cpid : 'b210ea079b7b4f4a9e2632b04426fb5c'
						},
						dataType : "json",
						async : false,
						success : function(result) {
							if (result.key == "1") {
								$("#lygw_city").empty();
								var data = $
								.parseJSON(result.value);
								$("#lygw_city")
								.append(
								"<option value=''>请选择</option>");
								for (var i = 0; i < data.length; i++) {
									$("#lygw_city")
									.append(
											"<option value='"+data[i].qyid+"'>"
											+ data[i].qyzw
											+ "</option>");
								}
								//$("#city").trigger("change");
							}
						},
						error : function(result) {
							toast("系统繁忙，请稍后重试");
						}
					});
				} else {
					$("#lygw_city").empty();
					$("#lygw_city").append(
					"<option value=''>请选择</option>");
					$("#lygw_mdid").empty();
					$("#lygw_mdid").append(
					"<option value=''>请选择</option>");
				}
			});

	//选择城市事件
	$("#lygw_city").on(
			"change",
			function() {
				$.ajax({
					type : "POST",
					url : "/module/ddgl/selectFwwd.do",
					data : {
						qyid : $(this).val(),
						cpid : 'b210ea079b7b4f4a9e2632b04426fb5c'
					},
					dataType : "json",
					async : false,
					success : function(result) {
						if (result.key == "1") {
							$("#lygw_mdid").empty();
							var data = $.parseJSON(result.value);
							$("#lygw_mdid").append(
							"<option value=''>请选择</option>");
							for (var i = 0; i < data.length; i++) {
								$("#lygw_mdid").append(
										"<option value='"+data[i].jgid+"'>"
										+ data[i].jgjc
										+ "</option>");
							}
						}
					},
					error : function(result) {
						toast("系统繁忙，请稍后重试");
					}
				});
			});

	//选择城市事件
	$("#lygw_mdid").on("change", function() {
		mdjc = $(this).text();
		$.ajax({
			type : "POST",
			url : "/module/ddgl/cxzfzh.do",
			data : {
				mdid : $("#lygw_mdid").val()
			},
			dataType : "json",
			async : true,
			success : function(result) {
				if (result.key == "1")
					$("#zflx").prop("disabled", false);
				else if (result.key == "2")
					$("#zflx").val("02").prop("disabled", true);
			},
			error : function() {
				toast("系统繁忙，请稍后重试");
			}
		})
	});

	$("#crrs").on(
			"change",
			function() {
				if ($.trim($("#cfrq").val()) == '')
					toast('请选择出发日期');
				else if (Number($("#crrs").val())
						+ Number($("#etrs").val()) > tc_sykc)
					toast('报名人数不能大于剩余库存');
				DDGL.calcPrice();
			});

	$("#etrs").on(
			"change",
			function() {
				if ($.trim($("#cfrq").val()) == '')
					toast('请选择出发日期');
				else if (Number($("#crrs").val())
						+ Number($("#etrs").val()) > tc_sykc)
					toast('报名人数不能大于剩余库存');
				DDGL.calcPrice();
			});

	islogin = "false" == "true" ? true : false;//true-登录

	$("#submitOrder").on("click", function() {
		if (!ydclick)
			return;
		if (handlerflag) {
			handlerflag = false;
			submitOrder();
			handlerflag = true;
		}
	});

	if ('' == '1') {
		$("#submitOrder").unbind("click").html("产品不存在").click(
				function(event) {
					toast("产品不存在")
				});
		toast("产品不存在");
	} else if ('' == '1') {
		$("#submitOrder").unbind("click").html("产品已售罄").click(
				function(event) {
					toast("产品已售罄")
				});
		toast("产品已售罄");
	} else if ("false" == "true") {
		$("#submitOrder").unbind("click").html("产品已过期").click(
				function(event) {
					toast("产品已过期")
				});
		toast("产品已过期");
	} else if ("01" == '02') {
		getqgsj();
		timer = setInterval(getqgsj, 1000);
	}

	//微店二维码
	$("#qrcode")
	.qrcode(
			{
				render : "canvas",
				background : '#FFFFFF',
				size : 150,
				quiet : 1,
				text : "http://wd.loyoyo.com/weixin/cpgl/view.do?cpid=b210ea079b7b4f4a9e2632b04426fb5c"
			});

	//分享产品二维码
	$("#qrcode2")
	.qrcode(
			{
				render : "canvas",
				background : '#FFFFFF',
				size : 220,
				quiet : 1,
				text : "http://wd.loyoyo.com/weixin/cpgl/view.do?cpid=b210ea079b7b4f4a9e2632b04426fb5c"
			});

	//验证码登录页面初始化
	$("#yzmdldxyzm").on("keyup", function(e) {
		var tmptxt = $(this).val();
		$(this).val(tmptxt.replace(/\D/g, ''));
	});
	$("#cancle").click(function() {
		$(".zz,.hy").hide();
		$(".yzmdl input[type=reset]").trigger("click");
		$(".yzmdl").hide();
	});
});

function submitOrder() {
	if ($("#lygw_mdid option").length == 0) {
		toast("产品已过期");
	} else if ($.trim($("#cfrq").val()) == '') {
		toast("请选择出发日期")
	} else if (Number($("#crrs").val()) + Number($("#etrs").val()) <= 0) {
		toast('请选择报名人数');
	} else if (Number($("#crrs").val()) + Number($("#etrs").val()) > tc_sykc) {
		toast('报名人数不能大于剩余库存');
	} else if (typeof $('input:radio[name="bxgmfs"]:checked').val() == 'undefined'
		|| $('input:radio[name="bxgmfs"]:checked').val() == '') {
		toast('请选择保险购买');
	} else if (/^[\u4E00-\u9FA5a-zA-Z]{1,30}$/i.test($("#xm").val()) == false) {
		toast('姓名格式不正确');
	} else if (/(^[1][3456789][0-9]{9}$)/.test($("#sj").val()) == false) {
		toast('手机格式不正确');
	} else if ($("#yx").val() != ""
		&& /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test($("#yx").val()) == false) {
		toast('邮箱格式不正确');
	} else if ($('#lygw_mdid').val() == '') {
		toast('请选择旅游顾问');
	} else if ($('#zflx').val() == '') {
		toast('请选择支付类型');
	} else {
		$("#lygw_mdid").prop("disabled", false);
		$("#zflx").prop("disabled", false);

		if (!islogin) { //未登录
			yzmdlym($("#sj").val());
		} else {
			$
			.ajax({
				type : "POST",
				url : "/module/ddgl/yd.do",
				data : $("#form").serialize(),
				dataType : "json",
				async : false,
				success : function(result) {
					if (result.key == "1")
						window.location.href = "/module/hygl/page.do?page=index&mk=wd";
					else if (result.key == "2") {
						$("#lygw_mdid").prop("disabled", true);
						toast(result.value);
					} else if (result.key == "3")
						yzmdlym($("#sj").val());
				},
				error : function(result) {
					toast('系统繁忙，请稍后重试');
					$("#lygw_mdid").prop("disabled", true);
				}
			});
		}
	}
}

//验证码登录页面
function yzmdlym(sj) {
	$(".zz,.hy").hide().show();
	$(".yzmdl input[type=reset]").trigger("click");
	if (sj != null)
		$("#yzmdlsjh").val(sj);//默认联系人手机
	$(".yzmdl").show();
}

//获取验证码
function hqyzm() {
	if (handlerflag) {
		handlerflag = false;
		var sjh = $("#yzmdlsjh").val();
		var hqyzm = $("#yzmdlhqyzm");
		if (!(/(^[1][3456789][0-9]{9}$)/.test(sjh))) {
			toast("手机格式不正确");
		} else {
			hqyzm.prop("disabled", true);
			settime(60, function(msg) {
				if (msg == "获取验证码") {
					hqyzm.prop("disabled", false);
					hqyzm.val(msg);
				} else {
					hqyzm.prop("disabled", true);
					hqyzm.val(msg);
				}
			});
			$.ajax({
				type : "POST",
				url : "/module/hygl/dxyzm.do",
				data : {
					sjh : sjh,
					yzmlx : "dlyzm"
				},
				dataType : "json",
				async : false,
				success : function(result) {
					if (result.key == "1")
						dxfsxz = false;
					else if (result.key == "2") {
						toast(result.value);
						dxfsxz = true;
					}
				},
				error : function() {
					toast('系统繁忙，请稍后重试');
					dxfsxz = true;
				}
			});
		}
		handlerflag = true;
	}
}

//重新获取验证码时间
function settime(time, fn) {
	var timer = setInterval(function() {
		if (!dxfsxz && time >= 0) {
			fn("重新获取(" + time + ")");
			--time;
		} else {
			clearInterval(timer);
			fn("获取验证码");
		}
	}, 1000);
}

//验证码登录
function yzmdl() {
	if (handlerflag) {
		handlerflag = false;
		var sjh = $("#yzmdlsjh").val();
		var dxyzm = $.trim($("#yzmdldxyzm").val());
		if (!(/(^[1][3456789][0-9]{9}$)/.test(sjh))) {
			toast("手机格式不正确");
		} else if (dxyzm == "") {
			toast("请输入短信验证码");
		} else {
			$.ajax({
				type : "POST",
				url : "/module/hygl/add.do",
				data : {
					sjh : sjh,
					dxyzm : dxyzm
				},
				dataType : "json",
				async : false,
				success : function(result) {
					if (result.key == "1") { //验证码登录
						islogin = true;//已登录
						submitOrder();//提交订单
					} else if (result.key == "2")
						toast("手机号与短信验证码不匹配");
					else if (result.key == "3")
						toast("短信验证码不正确");
				},
				error : function(result) {
					toast("系统繁忙，请稍后重试");
				}
			});
		}
		handlerflag = true;
	}
}

//抢购时间
function getqgsj() {
	var now = new Date().getTime();//当前时间
	var kssjstr = "";
	var jssjstr = "";
	var kssj = new Date(kssjstr.replace(/-/g, "/")).getTime();//开始时间
	var jssj = new Date(jssjstr.replace(/-/g, "/")).getTime();//结束时间
	var djs = 0;
	var temp = 0;
	var flag = false;
	if (kssj >= now) {
		djs = kssj - now;
		temp = 1;
		flag = true;
	} else if (kssj<now && jssj >= now) {
		djs = jssj - now;
		temp = 2;
		flag = true;
	}
	if (flag) {
		var days = Math.floor(djs / 1000 / 60 / 60 / 24);//天
		var hours = Math.floor(djs / 1000 / 60 / 60 % 24);//时
		var minutes = Math.floor(djs / 1000 / 60 % 60);//分
		var seconds = Math.floor(djs / 1000 % 60);//秒
		if (temp == 1) {
			$(".dbox").show();
			ydclick = false;//用于判断点击预订按钮是否可操作
			$("#submitOrder").removeClass("ydan ydan2")
			.addClass("ydan_hui");
			$(".tsy").html("距抢购开始 ");
			$(".djs").html(
					changeNumber(days) + "天" + changeNumber(hours) + "时"
					+ changeNumber(minutes) + "分"
					+ changeNumber(seconds) + "秒");
		} else if (temp == 2) {
			$(".dbox").show();
			ydclick = true;
			$("#submitOrder").removeClass("ydan ydan_hui")
			.addClass("ydan2");
			$(".tsy").html("距抢购结束 ");
			$(".djs").html(
					changeNumber(days) + "天" + changeNumber(hours) + "时"
					+ changeNumber(minutes) + "分"
					+ changeNumber(seconds) + "秒");
		}
	} else {
		$(".dbox").hide();
		ydclick = false;
		$("#submitOrder").removeClass("ydan_hui ydan2").addClass("ydan")
		.html("抢购已结束").click(function(event) {
			toast("抢购已结束")
		});
		clearInterval(timer);//清除定时器
	}
}
var handlerflag = true;
var fbid = '';
function xzfb(fbid) {
	if (handlerflag) {
		handlerflag = false;
		$.ajax({
			type : "POST",
			url : "/module/cpgl/xzfb.do",
			data : {
				fbid : fbid,
				page : "zddw"
			},
			dataType : "json",
			async : false,
			success : function(result) {
				window.location.href = window.location.href;
			},
			error : function() {
				toast("系统繁忙，请稍后重试");
			}
		});
		handlerflag = true;
	}
}

function xzxllb(lbid, xlqy) {
	var mk = "";
	if (xlqy == "01")
		mk = "zby";
	else if (xlqy == "02")
		mk = "gny";
	else if (xlqy == "03")
		mk = "cjy";
	window.location.href = "/HotelSystem/page.do?page=list&mdd=" + lbid
	+ "&mk=" + mk;
}

//产品搜索
function cpss() {
	var pattern = new RegExp("\\\\", "g");//查找所有的"\"
	var cpss = $("#kw").val().replace(pattern, "");
	window.location.href = "/module/cpgl/page.do?page=list&cpss="
		+ cpss;
}

function ljgl2(href, lmid) {
	if (href.indexOf("?") > 0) {
		if (typeof lmid != "undefined" && lmid != "")
			href += "&lmid=" + lmid;
	} else {
		if (typeof lmid != "undefined" && lmid != "")
			href += "?lmid=" + lmid;
	}
	return href;
}

var PI = Math.PI;
function rad(d) {
	return d * PI / 180.0;
}

//自动定位
function zddw() {
	$
	.ajax({
		type : "GET",
		url : "https://api.map.baidu.com/location/ip?ak=Un0pT9RtGyuech7wlFFw2t3Dn7utOkMr&coor=bd09ll",
		dataType : "jsonp",
		async : false,
		success : function(result) {
			if (result.status == "0") {
				if (typeof $(
						"li[szd*='"
						+ result.content.address_detail.city
						+ "']").attr("fbid") != "undefined") {
					fbid = $(
							"li[szd*='"
							+ result.content.address_detail.city
							+ "']:first").attr("fbid");
					$("#city span").html(
							$("li[fbid='" + fbid + "']:first")
							.find("a").html());
				} else {
					var count = 0;
					var zdjl = 0;
					var jlArry = new Array();

					var zb = "108.918546,34.211446".split(",");
					if (zb.length - 1 == 1) {
						var jd = rad(result.content.point.x)
						- rad(zb[0]);
						var wd = rad(result.content.point.y)
						- rad(zb[1]);
						var jl = 2 * Math
						.asin(Math
								.sqrt(Math
										.pow(
												Math
												.sin(jd / 2),
												2)
												+ Math
												.cos(rad(result.content.point.x))
												* Math
												.cos(rad(zb[0]))
												* Math
												.pow(
														Math
														.sin(wd / 2),
														2)));
						jl = jl * 6378.137;
						jl = Math.round(jl * 10000) / 10000;
						if (count == 0) {
							zdjl = jl;
							fbid = "44c20e5c75004e2385c6ad9297062ea9";
						} else {
							if (Number(jl) < Number(zdjl)) {
								zdjl = jl;
								fbid = "44c20e5c75004e2385c6ad9297062ea9";
							}
						}
						count++;
					}

					var zb = "106.535678,29.578018".split(",");
					if (zb.length - 1 == 1) {
						var jd = rad(result.content.point.x)
						- rad(zb[0]);
						var wd = rad(result.content.point.y)
						- rad(zb[1]);
						var jl = 2 * Math
						.asin(Math
								.sqrt(Math
										.pow(
												Math
												.sin(jd / 2),
												2)
												+ Math
												.cos(rad(result.content.point.x))
												* Math
												.cos(rad(zb[0]))
												* Math
												.pow(
														Math
														.sin(wd / 2),
														2)));
						jl = jl * 6378.137;
						jl = Math.round(jl * 10000) / 10000;
						if (count == 0) {
							zdjl = jl;
							fbid = "43b70ba64ff14cbfb1631ac8b72b1943";
						} else {
							if (Number(jl) < Number(zdjl)) {
								zdjl = jl;
								fbid = "43b70ba64ff14cbfb1631ac8b72b1943";
							}
						}
						count++;
					}

					var zb = "104.082448,30.665645".split(",");
					if (zb.length - 1 == 1) {
						var jd = rad(result.content.point.x)
						- rad(zb[0]);
						var wd = rad(result.content.point.y)
						- rad(zb[1]);
						var jl = 2 * Math
						.asin(Math
								.sqrt(Math
										.pow(
												Math
												.sin(jd / 2),
												2)
												+ Math
												.cos(rad(result.content.point.x))
												* Math
												.cos(rad(zb[0]))
												* Math
												.pow(
														Math
														.sin(wd / 2),
														2)));
						jl = jl * 6378.137;
						jl = Math.round(jl * 10000) / 10000;
						if (count == 0) {
							zdjl = jl;
							fbid = "e23757db874643cf801110cad3319164";
						} else {
							if (Number(jl) < Number(zdjl)) {
								zdjl = jl;
								fbid = "e23757db874643cf801110cad3319164";
							}
						}
						count++;
					}

					var zb = "117.185813,39.12389".split(",");
					if (zb.length - 1 == 1) {
						var jd = rad(result.content.point.x)
						- rad(zb[0]);
						var wd = rad(result.content.point.y)
						- rad(zb[1]);
						var jl = 2 * Math
						.asin(Math
								.sqrt(Math
										.pow(
												Math
												.sin(jd / 2),
												2)
												+ Math
												.cos(rad(result.content.point.x))
												* Math
												.cos(rad(zb[0]))
												* Math
												.pow(
														Math
														.sin(wd / 2),
														2)));
						jl = jl * 6378.137;
						jl = Math.round(jl * 10000) / 10000;
						if (count == 0) {
							zdjl = jl;
							fbid = "fc53f59f817446a094eaba8241828910";
						} else {
							if (Number(jl) < Number(zdjl)) {
								zdjl = jl;
								fbid = "fc53f59f817446a094eaba8241828910";
							}
						}
						count++;
					}

					var zb = "114.268978,30.619981".split(",");
					if (zb.length - 1 == 1) {
						var jd = rad(result.content.point.x)
						- rad(zb[0]);
						var wd = rad(result.content.point.y)
						- rad(zb[1]);
						var jl = 2 * Math
						.asin(Math
								.sqrt(Math
										.pow(
												Math
												.sin(jd / 2),
												2)
												+ Math
												.cos(rad(result.content.point.x))
												* Math
												.cos(rad(zb[0]))
												* Math
												.pow(
														Math
														.sin(wd / 2),
														2)));
						jl = jl * 6378.137;
						jl = Math.round(jl * 10000) / 10000;
						if (count == 0) {
							zdjl = jl;
							fbid = "b52e66ca68454d2cb6d0afdfb7420445";
						} else {
							if (Number(jl) < Number(zdjl)) {
								zdjl = jl;
								fbid = "b52e66ca68454d2cb6d0afdfb7420445";
							}
						}
						count++;
					}

					var zb = "112.976621,28.170051".split(",");
					if (zb.length - 1 == 1) {
						var jd = rad(result.content.point.x)
						- rad(zb[0]);
						var wd = rad(result.content.point.y)
						- rad(zb[1]);
						var jl = 2 * Math
						.asin(Math
								.sqrt(Math
										.pow(
												Math
												.sin(jd / 2),
												2)
												+ Math
												.cos(rad(result.content.point.x))
												* Math
												.cos(rad(zb[0]))
												* Math
												.pow(
														Math
														.sin(wd / 2),
														2)));
						jl = jl * 6378.137;
						jl = Math.round(jl * 10000) / 10000;
						if (count == 0) {
							zdjl = jl;
							fbid = "e756a3d11075413cac20f1a9675dcca6";
						} else {
							if (Number(jl) < Number(zdjl)) {
								zdjl = jl;
								fbid = "e756a3d11075413cac20f1a9675dcca6";
							}
						}
						count++;
					}

					var zb = "117.071172,36.671178".split(",");
					if (zb.length - 1 == 1) {
						var jd = rad(result.content.point.x)
						- rad(zb[0]);
						var wd = rad(result.content.point.y)
						- rad(zb[1]);
						var jl = 2 * Math
						.asin(Math
								.sqrt(Math
										.pow(
												Math
												.sin(jd / 2),
												2)
												+ Math
												.cos(rad(result.content.point.x))
												* Math
												.cos(rad(zb[0]))
												* Math
												.pow(
														Math
														.sin(wd / 2),
														2)));
						jl = jl * 6378.137;
						jl = Math.round(jl * 10000) / 10000;
						if (count == 0) {
							zdjl = jl;
							fbid = "b8ae45a436464cad896662bf1bbf32e0";
						} else {
							if (Number(jl) < Number(zdjl)) {
								zdjl = jl;
								fbid = "b8ae45a436464cad896662bf1bbf32e0";
							}
						}
						count++;
					}

					var zb = "121.452496,31.295425".split(",");
					if (zb.length - 1 == 1) {
						var jd = rad(result.content.point.x)
						- rad(zb[0]);
						var wd = rad(result.content.point.y)
						- rad(zb[1]);
						var jl = 2 * Math
						.asin(Math
								.sqrt(Math
										.pow(
												Math
												.sin(jd / 2),
												2)
												+ Math
												.cos(rad(result.content.point.x))
												* Math
												.cos(rad(zb[0]))
												* Math
												.pow(
														Math
														.sin(wd / 2),
														2)));
						jl = jl * 6378.137;
						jl = Math.round(jl * 10000) / 10000;
						if (count == 0) {
							zdjl = jl;
							fbid = "fb827d91953140da89fbf834b856e40f";
						} else {
							if (Number(jl) < Number(zdjl)) {
								zdjl = jl;
								fbid = "fb827d91953140da89fbf834b856e40f";
							}
						}
						count++;
					}

					var zb = "117.933912,40.990141".split(",");
					if (zb.length - 1 == 1) {
						var jd = rad(result.content.point.x)
						- rad(zb[0]);
						var wd = rad(result.content.point.y)
						- rad(zb[1]);
						var jl = 2 * Math
						.asin(Math
								.sqrt(Math
										.pow(
												Math
												.sin(jd / 2),
												2)
												+ Math
												.cos(rad(result.content.point.x))
												* Math
												.cos(rad(zb[0]))
												* Math
												.pow(
														Math
														.sin(wd / 2),
														2)));
						jl = jl * 6378.137;
						jl = Math.round(jl * 10000) / 10000;
						if (count == 0) {
							zdjl = jl;
							fbid = "0a98309b48f140f0a7dca48b41e814d6";
						} else {
							if (Number(jl) < Number(zdjl)) {
								zdjl = jl;
								fbid = "0a98309b48f140f0a7dca48b41e814d6";
							}
						}
						count++;
					}

					var zb = "112.558365,37.844668".split(",");
					if (zb.length - 1 == 1) {
						var jd = rad(result.content.point.x)
						- rad(zb[0]);
						var wd = rad(result.content.point.y)
						- rad(zb[1]);
						var jl = 2 * Math
						.asin(Math
								.sqrt(Math
										.pow(
												Math
												.sin(jd / 2),
												2)
												+ Math
												.cos(rad(result.content.point.x))
												* Math
												.cos(rad(zb[0]))
												* Math
												.pow(
														Math
														.sin(wd / 2),
														2)));
						jl = jl * 6378.137;
						jl = Math.round(jl * 10000) / 10000;
						if (count == 0) {
							zdjl = jl;
							fbid = "805595f059e64d7da18ce70ca8752e34";
						} else {
							if (Number(jl) < Number(zdjl)) {
								zdjl = jl;
								fbid = "805595f059e64d7da18ce70ca8752e34";
							}
						}
						count++;
					}

					$("#city span").html(
							$("li[fbid='" + fbid + "']:first")
							.find("a").html());
				}
			} else {
				fbid = "44c20e5c75004e2385c6ad9297062ea9";
				$("#city span").html(
						$("li[fbid='" + fbid + "']").find("a")
						.html());
			}
			xzfb(fbid);
		},
		error : function() {
			xzfb('');
		}
	});
}

//头部微商城图片加载失败，隐藏微商城字样
function hidewsc() {
	$(".wsc").hide();
}

$(function() {
	if ("" != "")
		$("#kw").val("");
	$(".xllb").mouseenter(function(e) {
		$(this).children(".xllb-mb").css({
			"display" : "block"
		});
	});
	$(".xllb").mouseleave(function(e) {
		$(this).children(".xllb-mb").css({
			"display" : "none"
		});
	});
	$(".xllb-mb ul li").mouseenter(function(e) {
		$(this).find("li").css({
			"color" : "#333"
		});
		$(this).find("span").css({
			"color" : "#333"
		});
		$(this).css({
			"background" : "#fff"
		});
		$(this).addClass("current");
		$(this).children(".xllb-mbzk").css({
			"display" : "block"
		});
	});
	$(".xllb-mb ul li").mouseleave(function(e) {
		$(this).find("li").css({
			"color" : "#fff"
		});
		$(this).find("span").css({
			"color" : "#fff"
		});
		$(this).css({
			"background" : "none"
		});
		$(this).removeClass("current");
		$(this).children(".xllb-mbzk").css({
			"display" : "none"
		});
	});
	$(".xllb-mb li.xllb-mbfl:last-child()").mouseenter(function(e) {
		$(this).css({
			"-webkit-box-shadow" : "7px 4px 5px rgba(0,0,0,0.22)"
		});
	});
	$(".xllb-mb li.xllb-mbfl:last-child()").mouseleave(function(e) {
		$(this).css({
			"-webkit-box-shadow" : "none"
		});
	});
	$(".change_tab,.xzcfd").mouseenter(function(e) {
		$(".xzcfd").css("display", "block");
		$(".change_tab u").removeClass('qhcfdjt').addClass("qhcfd2");
		$(".change_tab").addClass('change_tabh');
		$(".cfdz").hide();
	});
	$(".change_tab,.xzcfd").mouseleave(function(e) {
		$(".xzcfd").css("display", "none");
		$(".change_tab").removeClass('change_tabh');
		$(".change_tab u").removeClass('qhcfd2').addClass("qhcfd");
		if ("1" != null && "1" != "")
			$(".cfdz").show();
	});
	$(".headpiece-in span .wsc").mouseenter(function(e) {
		$(".wxbox").css("display", "block");
	});
	$(".headpiece-in span .wsc").mouseleave(function(e) {
		$(".wxbox").css("display", "none");
	});
	if ("false" == "true" || "false" == "true") {
		if (getCookie("www.dw.com") != null) {
			fbid = getCookie("www.dw.com");
			if (typeof $("li[fbid=" + fbid + "]").find("a").html() != "undefined") {
				$("#city span").html(
						$("li[fbid='" + fbid + "']").find("a").html());
				xzfb(fbid);
			} else {
				zddw();
			}
		} else {
			zddw();
		}
	}
	$(".xzcfd ul li").click(function() {
		if(handlerflag) {
			handlerflag = false;
			$(".xzcfd").hide();
			fbid = $(this).attr("fbid");
			$.ajax({
				type : "POST",
				url : "/module/cpgl/xzfb.do",
				data : {
					fbid : fbid,
					page : "qhfb"
				},
				dataType : "json",
				async : false,
				success : function(result) {
					window.location.href = "/";
				},
				error : function() {
					toast("系统繁忙，请稍后重试");
				}
			});
			handlerflag = true;
		}
	});
	if ("false" == "true"
		|| "[{ljdx=关于乐游, cjsj=2017-03-30 22:40:31, lmmc=关于乐游, ljlx=02, cjr=9cd3066ad8434af1a8d9c1b21a1e4501, lmpx=2017-03-30 13:40:09, sjlm=cf3d46f118ba4ca5a676bf0b3b916c63, xjlist=[{ljdx=a77fe17b1ecf48cea8363705c4e28fc5, cjsj=2017-03-31 14:17:56, lmmc=董事长致辞, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:16:33, sjlm=28f8d9ede0754a6ba468b5e9606bbef1, lmid=e79ffd7b23d342bda7b8806add560d7b, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=79f928388ac349d7857364cb92039cc4, cjsj=2017-03-31 14:17:14, lmmc=乐游简介, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:17:02, sjlm=28f8d9ede0754a6ba468b5e9606bbef1, lmid=64e21b26baaa41a2ac59642956e79419, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=9d1396edd73044068542072d2805a4f3, cjsj=2017-03-31 14:18:33, lmmc=发展历程, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:18:25, sjlm=28f8d9ede0754a6ba468b5e9606bbef1, lmid=59b41f6268184e9cad98e519cdceb4e4, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=5f147ff15f03436d95143aa0fc74f547, cjsj=2017-03-31 14:19:03, lmmc=历史荣誉, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:18:52, sjlm=28f8d9ede0754a6ba468b5e9606bbef1, lmid=08230cb92cf14f2aa541dfa74b7a4ee3, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=e97501e9a660494cb566cb4ea1f986f8, cjsj=2017-03-31 14:37:48, lmmc=乐游大事记, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:20:40, sjlm=28f8d9ede0754a6ba468b5e9606bbef1, lmid=9b897cf4a9b14ed5806369e76a5eefc2, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=28db9c23e3804dcda7c8a9b59300ca62, cjsj=2017-03-31 14:28:59, lmmc=旗下子公司, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:20:43, sjlm=28f8d9ede0754a6ba468b5e9606bbef1, lmid=3038ca9189774c5e88f28e0d747b47c8, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=/module/ppgl/page.do?page=md, cjsj=2017-04-11 18:00:19, lmmc=乐游门店, ljlx=02, cjr=9cd3066ad8434af1a8d9c1b21a1e4501, lmpx=2017-03-31 14:21:00, sjlm=28f8d9ede0754a6ba468b5e9606bbef1, lmid=4fd8d33384de4f209624b80e2da5a039, ppid=a1d051e647f74bf6959c53e8c518d4b5}], lmid=28f8d9ede0754a6ba468b5e9606bbef1, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=乐游模式, cjsj=2017-03-31 14:22:00, lmmc=乐游模式, ljlx=02, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:21:22, sjlm=cf3d46f118ba4ca5a676bf0b3b916c63, xjlist=[{ljdx=170d1cf6e9ca4b6aa63ae53cd84361e5, cjsj=2017-03-31 14:22:26, lmmc=乐游特色, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:22:18, sjlm=01453a4c046749b6b774fa64c7cbb39d, lmid=afd9cb7fbabe401fb232b590bfa75507, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=a80338e85e2f4c4283d5356aca41c7d5, cjsj=2017-03-31 14:22:44, lmmc=运作模式, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:22:33, sjlm=01453a4c046749b6b774fa64c7cbb39d, lmid=0232aade0b204938ba4f03d5723dbbbd, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=edb1d00a4c3a4f7c962862ae2e19a9ee, cjsj=2017-03-31 14:23:10, lmmc=核心优势, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:24:55, sjlm=01453a4c046749b6b774fa64c7cbb39d, lmid=3ca88aa2e14f44a19399191f00a595fe, ppid=a1d051e647f74bf6959c53e8c518d4b5}], lmid=01453a4c046749b6b774fa64c7cbb39d, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=乐游动态, cjsj=2017-03-31 14:12:18, lmmc=乐游动态, ljlx=02, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:25:00, sjlm=cf3d46f118ba4ca5a676bf0b3b916c63, xjlist=[{ljdx=/module/ppgl/page.do?page=dt&lx=01, cjsj=2017-03-31 19:00:34, lmmc=热门头条, ljlx=02, cjr=9cd3066ad8434af1a8d9c1b21a1e4501, lmpx=2017-03-31 14:25:01, sjlm=9565b543c81a40a496a14cf3cc27065c, lmid=794152f786b04602be7ac0cc61a630d9, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=/module/ppgl/page.do?page=dt&lx=02, cjsj=2017-03-31 19:01:21, lmmc=行业资讯, ljlx=02, cjr=9cd3066ad8434af1a8d9c1b21a1e4501, lmpx=2017-03-31 14:25:02, sjlm=9565b543c81a40a496a14cf3cc27065c, lmid=6143acccad0b40debf9708d6431ed8cb, ppid=a1d051e647f74bf6959c53e8c518d4b5}], lmid=9565b543c81a40a496a14cf3cc27065c, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=加入乐游, cjsj=2017-03-31 14:52:26, lmmc=加入乐游, ljlx=02, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:52:17, sjlm=cf3d46f118ba4ca5a676bf0b3b916c63, xjlist=[{ljdx=d5bb2cb4ba5c47b1a9c3674cbf3c7ac6, cjsj=2017-03-31 14:52:46, lmmc=门店合作, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:52:38, sjlm=2074a8318161497eba8e504a9768e9bb, lmid=33f4c89f887246329e5be780255be307, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=c9d02b8dff9543e09972d4ec66874a63, cjsj=2017-03-31 14:53:00, lmmc=资源合作, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:52:53, sjlm=2074a8318161497eba8e504a9768e9bb, lmid=0b8c4c1f129945d99b2a1407b4c632f3, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=a818e63ad8744149ae8a4c0cbd6a360d, cjsj=2017-03-31 14:53:17, lmmc=人才招聘, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:53:10, sjlm=2074a8318161497eba8e504a9768e9bb, lmid=6b97fe2ce1ec4af1bf10535eacbb6e02, ppid=a1d051e647f74bf6959c53e8c518d4b5}], lmid=2074a8318161497eba8e504a9768e9bb, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=帮助中心, cjsj=2017-04-06 18:43:35, lmmc=帮助中心, ljlx=02, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-04-06 18:43:19, sjlm=cf3d46f118ba4ca5a676bf0b3b916c63, xjlist=[{ljdx=77d897ad7e204b97aa57c6f9f1e91677, cjsj=2017-04-06 18:49:24, lmmc=签证相关问题, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-04-06 18:45:47, sjlm=20886be9a2dc493796eeedc2407d5375, lmid=8d5fb4376ddc4fa7b3af939694df9e4f, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=c857762882e94825ab814279653cdb3a, cjsj=2017-04-06 18:54:11, lmmc=旅游常见概念解释, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-04-06 18:50:20, sjlm=20886be9a2dc493796eeedc2407d5375, lmid=b4774d6510234db08fb4acce92a09100, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=ef310f5b8af440b9897739385ff26632, cjsj=2017-04-06 19:06:03, lmmc=旅游线路常见问题, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-04-06 19:01:48, sjlm=20886be9a2dc493796eeedc2407d5375, lmid=ed8db429d86c45cb9343e5ac903f406b, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=4ce22cd607ff4784a33144adfb8c0ddf, cjsj=2017-04-06 19:12:11, lmmc=网上预订相关问题, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-04-06 19:07:03, sjlm=20886be9a2dc493796eeedc2407d5375, lmid=94b84f8145574d40b742800c74848982, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=31c7084a3d48402a9ac30cae3ffc6e41, cjsj=2017-04-06 19:20:59, lmmc=网上支付方式, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-04-06 19:17:13, sjlm=20886be9a2dc493796eeedc2407d5375, lmid=34179947430d4bd68d2d6f848ab0b396, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=a4b4c16140b9497f9f550873f2fce521, cjsj=2017-06-06 14:18:26, lmmc=护照、签证及港澳通行证, ljlx=01, cjr=68851066fdec46e8b2ec8fca9dcc2b7d, lmpx=2017-06-06 14:29:08, sjlm=20886be9a2dc493796eeedc2407d5375, lmid=78e410e62e4548b4be66d7e039fde92a, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=2dd3d4a46e904f1faeef8296d29a2254, cjsj=2017-06-06 15:34:44, lmmc=各国插座形式、电压一览表, ljlx=01, cjr=68851066fdec46e8b2ec8fca9dcc2b7d, lmpx=2017-06-06 15:27:25, sjlm=20886be9a2dc493796eeedc2407d5375, lmid=980f85ebbfe04ffa850fb097f95892c0, ppid=a1d051e647f74bf6959c53e8c518d4b5}], lmid=20886be9a2dc493796eeedc2407d5375, ppid=a1d051e647f74bf6959c53e8c518d4b5}]" == null
		|| $(".right").find("a").length < 2) {
		$.ajax({
			type : "POST",
			url : "/module/ppgl/cxyjlm.do",
			dataType : "json",
			success : function(result) {
				var html = "";
				var data = $.parseJSON(result.value);
				$
				.each(
						data,
						function(i, item) {
							if (item.lmmc != '帮助中心') {
								html += '<a href="/module/ppgl/index.do?lmid='
									+ item.lmid
									+ '"  target="_blank">'
									+ item.lmmc
									+ '</a>';
								if (i !== data.length - 1) {
									html += "丨";
								}
							} else {
								html += '<a href="/module/ppgl/page.do?page=bz&lmid='
									+ item.lmid
									+ '"  target="_blank">'
									+ item.lmmc
									+ '</a>';
								if (i !== data.length - 1) {
									html += "丨";
								}
							}
						})
						$(".wsc_box").before(html);
			},
			error : function() {
			}
		})
	}
	$(".cfdz").click(
			function() {
				window.open("/module/ppgl/index.do?page=md&jgid="
						+ getCookie("www.dw.com"));
			});

	if ("false" == "true" || "1" == null) {
		$.ajax({
			type : "POST",
			url : "/module/ppgl/ismddz.do",
			dataType : "json",
			success : function(result) {
				if (result.key == "1")
					$(".cfdz").show();
			},
			error : function() {
			}
		});
	}

});
$(function() {
	$(".sidebar .top").on("click", function() {
		$('body,html').animate({
			scrollTop : "0px"
		}, 300);
	});
	$(".sidebar .dd").on("click", function(e) {
		window.location.href = "/module/hygl/page.do?page=index";
	});
	$(".sidebar .sc").on("click", function(e) {
		window.location.href = "/module/hygl/page.do?page=index&lm=sc";
	});
	$("#tccancle").on("click", function(e) {
		$(".tczz,.tc").hide()
	});
});
with (document)
0[(getElementsByTagName('head')[0] || body)
  .appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='
	  + ~(-new Date() / 36e5)];
$(function() {
	window._bd_share_config = {
			"common" : {
				"bdText" : "五星泰国海景沙美版6天5晚跟团游，1晚沙美岛豪华度假酒店小别墅+2晚芭提雅国五海景房布莱顿酒店海景房+1晚曼谷皇家喜来登酒店180°落地河景房+1晚曼谷高人气绿宝石酒店",
				"bdUrl" : "http://wd.loyoyo.com/weixin/cpgl/view.do?cpid=b210ea079b7b4f4a9e2632b04426fb5c",
				"bdPic" : document.getElementById('imgurl').content,
				/* "bdMini":"1",
		"bdMiniList":["weixin","sqq","qzone","tsina"], */
				"bdStyle" : "0",
				"bdSize" : "16",
				"onBeforeClick" : function(cmd, config) {
				},
				"onAfterClick" : function(cmd) {
				}
			},
			"share" : {}
	};

	$(".bds_weixin,.qrcode_close").on("click", function() {
		$("#qrcode_div").toggle();
	});
})