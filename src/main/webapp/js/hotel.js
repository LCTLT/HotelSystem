//删除条件
function del(obj){
	$(obj).parent().remove();
	//访问服务器
	//window.location.href="";
}
//添加条件
function add(obj,id){
	if($(obj).text() != "全部"){
		var fig = true;
		$("#"+id+"").each(function(index,i){
			$("#spans").children("#"+id).replaceWith('<span style="color: red; margin-left: 10px;"'+
					'name="sp" id="'+id+'">'+$(obj).text()+'<a href="javascript:void(0)" onclick="del(this)">'+
					'<img src="images/x.png" alt="删除" style="padding-left: 4px; height: 14px;" />'+
			'</a></span>');
			fig = false;
		});
		attrCss(obj);
		if(fig){
			$("#spans").append('<span style="color: red; margin-left: 10px;"'+
					'name="sp" id="'+id+'">'+$(obj).text()+'<a href="javascript:void(0)" onclick="del(this)">'+
					'<img src="images/x.png" alt="删除" style="padding-left: 4px; height: 14px;" />'+
			'</a></span>');
		}
	}
	//window.location.href="";
}
//全部
function ddAll(obj,id){
	//删除所有同级元素样式
	$(obj).parent().children("dd").removeClass();

	//设置样式
	$(obj).addClass("current");
	
	var spans = $("#spans").children("span");
	//删除条件
	if(spans.attr("id") == id){
		$("#"+id).remove();
	}
}
//设置样式默认选中
function attrCss(obj){
	//删除所有同级元素样式
	$(obj).parent().children("dd").removeClass();

	//设置样式
	$(obj).addClass("current");
}

var page = "1"==""?1:"1";
function ljgl(map){
	var url = window.location.href.split("?")[0];
	var cs = window.location.href.split("?")[1];
	if(cs!=''&&cs!=null){
		var obj = {}
		var arr = cs.split("&");
		for(var i = 0; i < arr.length; i++) {
			arr[i] = arr[i].split("=");
			obj[arr[i][0]] = arr[i][1];
		};
		for(var pre in map){
			if(map[pre]!=""){
				obj[pre] = map[pre];
			}else{
				delete obj[pre];
			}
		}
		var str = "";
		for(var p in obj){
			str += p + "=" + obj[p]+"&";
		}
		str = str.substring(0,str.length-1);
		url += "?" + str;
	}else{
		url += "?"+key+"="+value;
	}
	return url;
}
function init(){
	if(""!="")$("#yxzdscj a").html($("#zdscj").find("#").html()).parent().show();
	if(""!="")$("#yxxcts a").html($("#xcts").find("#").html()).parent().show();
	//中文带有特殊符号使用$("#yxmdd a").html($("#mdd").find($('[id="' + "" + '"]')).html()).parent().show();
	if(""!="")$("#yxmdd a").html($("#mdd").find("#").html()).parent().show();
	if(""!="")$("#yxdjbq a").html($("#djbq").find("#").html()).parent().show();
	if(""!="")$("#yxztbq a").html($("#ztbq").find("#").html()).parent().show();
	if(""!="")$("#yxppbq a").html($("#ppbq").find("#").html()).parent().show();
	if($("#mdd").height()/44>1){
		$("#mdd_gd").show();
	}
	if($("#djbq").height()/44>1){
		$("#djbq_gd").show();
	}
	if($("#ztbq").height()/44>1){
		$("#ztbq_gd").show();
	}
	if($("#ppbq").height()/44>1){
		$("#ppbq_gd").show();
	}
	$('.M-box2').pagination({
		pageCount:Math.ceil("15"/10),
		coping:true,
		current:page,
		homePage:'首页',
		endPage:'末页',
		prevContent:'上页',
		nextContent:'下页',
		ajax:false,
		url:ljgl({'p':''})
		});
	}
//	查询url地址参数
	function GetQueryString(name){
		//获得页面url某个参数参数
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r!=null)return unescape(r[2]);  //unescape() 来解码字符串
		return null;
	}
//	清空条件
	function qktj(){
		window.location.reload();
	}
	$(function(){
		init();
		var mddNum = 0;
		$("#mdd_gd").click(function() {
			if(mddNum == 0){
				if($("#xzmdd").attr("class")=="mddheight")$("#xzmdd").removeClass("mddheight").addClass("mddheight2");
				else $("#xzmdd").removeClass("mddheight2").addClass("mddheight");
				$("#mdd_gd").html("收起<i class='sq'></i>");
				mddNum = 1;
			}else{
				if($("#xzmdd").attr("class")=="mddheight")$("#xzmdd").removeClass("mddheight").addClass("mddheight2");
				else $("#xzmdd").removeClass("mddheight2").addClass("mddheight");
				$("#mdd_gd").html("更多<i></i>");
				mddNum = 0;
			}
		});
		var	djbqNum = 0;
		$("#djbq_gd").click(function() {
			if(djbqNum == 0){
				if($("#xzdjbq").attr("class")=="mddheight")$("#xzdjbq").removeClass("mddheight").addClass("mddheight2");
				else $("#xzdjbq").removeClass("mddheight2").addClass("mddheight");
				$("#djbq_gd").html("收起<i class='sq'></i>");
				djbqNum = 1;
			}else{
				if($("#xzdjbq").attr("class")=="mddheight")$("#xzdjbq").removeClass("mddheight").addClass("mddheight2");
				else $("#xzdjbq").removeClass("mddheight2").addClass("mddheight");
				$("#djbq_gd").html("更多<i></i>");
				djbqNum = 0;
			}
		}); 
		var	ztbqNum = 0;
		$("#ztbq_gd").click(function() {
			if(ztbqNum == 0){
				if($("#xzztbq").attr("class")=="mddheight")$("#xzztbq").removeClass("mddheight").addClass("mddheight2");
				else $("#xzztbq").removeClass("mddheight2").addClass("mddheight");
				$("#ztbq_gd").html("收起<i class='sq'></i>");
				ztbqNum = 1;
			}else{
				if($("#xzztbq").attr("class")=="mddheight")$("#xzztbq").removeClass("mddheight").addClass("mddheight2");
				else $("#xzztbq").removeClass("mddheight2").addClass("mddheight");
				$("#ztbq_gd").html("更多<i></i>");
				ztbqNum = 0;
			}
		});
		var	ppbqNum = 0;
		$("#ppbq_gd").click(function() {
			if(ppbqNum == 0){
				if($("#xzppbq").attr("class")=="mddheight")$("#xzppbq").removeClass("mddheight").addClass("mddheight2");
				else $("#xzppbq").removeClass("mddheight2").addClass("mddheight");
				$("#ppbq_gd").html("收起<i class='sq'></i>");
				ppbqNum = 1;
			}else{
				if($("#xzppbq").attr("class")=="mddheight")$("#xzppbq").removeClass("mddheight").addClass("mddheight2");
				else $("#xzppbq").removeClass("mddheight2").addClass("mddheight");
				$("#ppbq_gd").html("更多<i></i>");
				ppbqNum = 0;
			}
		});
		$("#nyxz dd span").click(function(){
			var url = window.location.href;
			var map={'p':''}
			if($(this).parent().attr("id")=="yxzdscj")map['zdscj']='';
			else if($(this).parent().attr("id")=="yxxcts")map['xcts']='';
			else if($(this).parent().attr("id")=="yxmdd") map['mdd']='';
			else if($(this).parent().attr("id")=="yxdjbq")map['djbq']='';
			else if($(this).parent().attr("id")=="yxztbq")map['ztbq']='';
			else if($(this).parent().attr("id")=="yxppbq")map['ppbq']='';
			else return;
			url = ljgl(map);
			window.location.href=url;
		})
		$("dd").click(function(){
			alert(1);
			var map = {'p':''};
			if($(this).parent().attr("id")=="zdscj")map['zdscj']=$(this).attr('id');
			else if($(this).parent().attr("id")=="xcts")map['xcts']=$(this).attr('id');
			else if($(this).parent().attr("id")=="mdd")map['mdd']=$(this).attr('id');
			else if($(this).parent().attr("id")=="djbq")map['djbq']=$(this).attr('id');
			else if($(this).parent().attr("id")=="ztbq")map['ztbq']=$(this).attr('id');
			else if($(this).parent().attr("id")=="ppbq")map['ppbq']=$(this).attr('id');
			else return;
			window.location.href= ljgl(map);
		});
		$(".px ul li").click(function(){
			px=$(this).attr("id");
			$(this).siblings().removeClass();
			if($(this).attr("id")=="zdscj"){
				if($(this).attr("class")=="currentup")px+="_desc";
				else px+="_asc";
			}else if($(this).attr("id")=="xcts"){
				if($(this).attr("class")=="currentup")px+="_desc";
				else px+="_asc";
			}else{
				$(this).addClass("currentup");
			}
			window.location.href=ljgl({'p':'','px':px});
		});
	});
	var handlerflag=true;
	var fbid='';
	function xzfb(fbid){
		if(handlerflag){
			handlerflag=false;
			$.ajax({
				type:"POST",
				url:"/module/cpgl/xzfb.do",
				data:{fbid:fbid,page:"zddw"},
				dataType:"json",
				async:false,
				success:function(result){
					window.location.href=window.location.href;
				},
				error:function(){toast("系统繁忙，请稍后重试");}
			});
			handlerflag=true;
		}
	}
	function xzxllb(lbid,xlqy){
		var mk="";
		if(xlqy=="01")mk="zby";
		else if(xlqy=="02")mk="gny";
		else if(xlqy=="03")mk="cjy";
		window.location.href="/module/cpgl/page.do?page=list&mdd="+lbid+"&mk="+mk;
	}
//	产品搜索
	function cpss(){
		var pattern=new RegExp("\\\\","g");//查找所有的"\"
		var cpss=$("#kw").val().replace(pattern,"");
		window.location.href="/module/cpgl/page.do?page=list&cpss="+cpss;
	}
	function ljgl2(href,lmid){
		if(href.indexOf("?") > 0 ){
			if(typeof lmid!="undefined"&&lmid!="") href += "&lmid="+lmid;
		}else{
			if(typeof lmid!="undefined"&&lmid!="") href += "?lmid="+lmid;
		}
		return href;
	}
	var PI = Math.PI;
	function rad(d){
		return d*PI/180.0;
	}
//	自动定位
	function zddw(){
		$.ajax({
			type:"GET",
			url:"https://api.map.baidu.com/location/ip?ak=Un0pT9RtGyuech7wlFFw2t3Dn7utOkMr&coor=bd09ll",
			dataType:"jsonp",
			async:false,
			success:function(result){
				if(result.status=="0"){
					if(typeof $("li[szd*='"+result.content.address_detail.city+"']").attr("fbid")!="undefined"){
						fbid = $("li[szd*='"+result.content.address_detail.city+"']:first").attr("fbid");
						$("#city span").html($("li[fbid='"+fbid+"']:first").find("a").html());
					}else{
						var count=0;
						var zdjl=0;
						var jlArry = new Array();
						var zb="108.918546,34.211446".split(",");
						if(zb.length-1==1){
							var jd = rad(result.content.point.x)-rad(zb[0]);
							var wd = rad(result.content.point.y)-rad(zb[1]);
							var jl = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(jd / 2), 2) + Math.cos(rad(result.content.point.x)) * Math.cos(rad(zb[0])) * Math.pow(Math.sin(wd / 2), 2)));
							jl = jl * 6378.137;
							jl = Math.round(jl * 10000) / 10000;
							if(count==0){
								zdjl=jl;
								fbid="44c20e5c75004e2385c6ad9297062ea9";
							}else{
								if(Number(jl)<Number(zdjl)){
									zdjl=jl;
									fbid="44c20e5c75004e2385c6ad9297062ea9";
								}
							}
							count++;
						}
						var zb="106.535678,29.578018".split(",");
						if(zb.length-1==1){
							var jd = rad(result.content.point.x)-rad(zb[0]);
							var wd = rad(result.content.point.y)-rad(zb[1]);
							var jl = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(jd / 2), 2) + Math.cos(rad(result.content.point.x)) * Math.cos(rad(zb[0])) * Math.pow(Math.sin(wd / 2), 2)));
							jl = jl * 6378.137;
							jl = Math.round(jl * 10000) / 10000;
							if(count==0){
								zdjl=jl;
								fbid="43b70ba64ff14cbfb1631ac8b72b1943";
							}else{
								if(Number(jl)<Number(zdjl)){
									zdjl=jl;
									fbid="43b70ba64ff14cbfb1631ac8b72b1943";
								}
							}
							count++;
						}
						var zb="104.082448,30.665645".split(",");
						if(zb.length-1==1){
							var jd = rad(result.content.point.x)-rad(zb[0]);
							var wd = rad(result.content.point.y)-rad(zb[1]);
							var jl = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(jd / 2), 2) + Math.cos(rad(result.content.point.x)) * Math.cos(rad(zb[0])) * Math.pow(Math.sin(wd / 2), 2)));
							jl = jl * 6378.137;
							jl = Math.round(jl * 10000) / 10000;
							if(count==0){
								zdjl=jl;
								fbid="e23757db874643cf801110cad3319164";
							}else{
								if(Number(jl)<Number(zdjl)){
									zdjl=jl;
									fbid="e23757db874643cf801110cad3319164";
								}
							}
							count++;
						}
						var zb="117.185813,39.12389".split(",");
						if(zb.length-1==1){
							var jd = rad(result.content.point.x)-rad(zb[0]);
							var wd = rad(result.content.point.y)-rad(zb[1]);
							var jl = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(jd / 2), 2) + Math.cos(rad(result.content.point.x)) * Math.cos(rad(zb[0])) * Math.pow(Math.sin(wd / 2), 2)));
							jl = jl * 6378.137;
							jl = Math.round(jl * 10000) / 10000;
							if(count==0){
								zdjl=jl;
								fbid="fc53f59f817446a094eaba8241828910";
							}else{
								if(Number(jl)<Number(zdjl)){
									zdjl=jl;
									fbid="fc53f59f817446a094eaba8241828910";
								}
							}
							count++;
						}
						var zb="114.268978,30.619981".split(",");
						if(zb.length-1==1){
							var jd = rad(result.content.point.x)-rad(zb[0]);
							var wd = rad(result.content.point.y)-rad(zb[1]);
							var jl = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(jd / 2), 2) + Math.cos(rad(result.content.point.x)) * Math.cos(rad(zb[0])) * Math.pow(Math.sin(wd / 2), 2)));
							jl = jl * 6378.137;
							jl = Math.round(jl * 10000) / 10000;
							if(count==0){
								zdjl=jl;
								fbid="b52e66ca68454d2cb6d0afdfb7420445";
							}else{
								if(Number(jl)<Number(zdjl)){
									zdjl=jl;
									fbid="b52e66ca68454d2cb6d0afdfb7420445";
								}
							}
							count++;
						}
						var zb="112.976621,28.170051".split(",");
						if(zb.length-1==1){
							var jd = rad(result.content.point.x)-rad(zb[0]);
							var wd = rad(result.content.point.y)-rad(zb[1]);
							var jl = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(jd / 2), 2) + Math.cos(rad(result.content.point.x)) * Math.cos(rad(zb[0])) * Math.pow(Math.sin(wd / 2), 2)));
							jl = jl * 6378.137;
							jl = Math.round(jl * 10000) / 10000;
							if(count==0){
								zdjl=jl;
								fbid="e756a3d11075413cac20f1a9675dcca6";
							}else{
								if(Number(jl)<Number(zdjl)){
									zdjl=jl;
									fbid="e756a3d11075413cac20f1a9675dcca6";
								}
							}
							count++;
						}
						var zb="117.071172,36.671178".split(",");
						if(zb.length-1==1){
							var jd = rad(result.content.point.x)-rad(zb[0]);
							var wd = rad(result.content.point.y)-rad(zb[1]);
							var jl = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(jd / 2), 2) + Math.cos(rad(result.content.point.x)) * Math.cos(rad(zb[0])) * Math.pow(Math.sin(wd / 2), 2)));
							jl = jl * 6378.137;
							jl = Math.round(jl * 10000) / 10000;
							if(count==0){
								zdjl=jl;
								fbid="b8ae45a436464cad896662bf1bbf32e0";
							}else{
								if(Number(jl)<Number(zdjl)){
									zdjl=jl;
									fbid="b8ae45a436464cad896662bf1bbf32e0";
								}
							}
							count++;
						}
						var zb="121.452496,31.295425".split(",");
						if(zb.length-1==1){
							var jd = rad(result.content.point.x)-rad(zb[0]);
							var wd = rad(result.content.point.y)-rad(zb[1]);
							var jl = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(jd / 2), 2) + Math.cos(rad(result.content.point.x)) * Math.cos(rad(zb[0])) * Math.pow(Math.sin(wd / 2), 2)));
							jl = jl * 6378.137;
							jl = Math.round(jl * 10000) / 10000;
							if(count==0){
								zdjl=jl;
								fbid="fb827d91953140da89fbf834b856e40f";
							}else{
								if(Number(jl)<Number(zdjl)){
									zdjl=jl;
									fbid="fb827d91953140da89fbf834b856e40f";
								}
							}
							count++;
						}
						var zb="117.933912,40.990141".split(",");
						if(zb.length-1==1){
							var jd = rad(result.content.point.x)-rad(zb[0]);
							var wd = rad(result.content.point.y)-rad(zb[1]);
							var jl = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(jd / 2), 2) + Math.cos(rad(result.content.point.x)) * Math.cos(rad(zb[0])) * Math.pow(Math.sin(wd / 2), 2)));
							jl = jl * 6378.137;
							jl = Math.round(jl * 10000) / 10000;
							if(count==0){
								zdjl=jl;
								fbid="0a98309b48f140f0a7dca48b41e814d6";
							}else{
								if(Number(jl)<Number(zdjl)){
									zdjl=jl;
									fbid="0a98309b48f140f0a7dca48b41e814d6";
								}
							}
							count++;
						}
						var zb="112.558365,37.844668".split(",");
						if(zb.length-1==1){
							var jd = rad(result.content.point.x)-rad(zb[0]);
							var wd = rad(result.content.point.y)-rad(zb[1]);
							var jl = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(jd / 2), 2) + Math.cos(rad(result.content.point.x)) * Math.cos(rad(zb[0])) * Math.pow(Math.sin(wd / 2), 2)));
							jl = jl * 6378.137;
							jl = Math.round(jl * 10000) / 10000;
							if(count==0){
								zdjl=jl;
								fbid="805595f059e64d7da18ce70ca8752e34";
							}else{
								if(Number(jl)<Number(zdjl)){
									zdjl=jl;
									fbid="805595f059e64d7da18ce70ca8752e34";
								}
							}
							count++;
						}
						$("#city span").html($("li[fbid='"+fbid+"']:first").find("a").html());
					}
				}else{
					fbid="44c20e5c75004e2385c6ad9297062ea9";
					$("#city span").html($("li[fbid='"+fbid+"']").find("a").html());
				}
				xzfb(fbid);
			},
			error:function(){xzfb('');}
		});
	}
//	头部微商城图片加载失败，隐藏微商城字样
	function hidewsc(){
		$(".wsc").hide();
	}
	$(function(){
		if("酒店"!="") $("#kw").val("酒店");
		$(".xllb").mouseenter(function(e) {
			$(this).children(".xllb-mb").css({"display":"block"});
		});
		$(".xllb").mouseleave(function(e) {
			$(this).children(".xllb-mb").css({"display":"none"});
		});
		$(".xllb-mb ul li").mouseenter(function(e) {
			$(this).find("li").css({"color":"#333"});
			$(this).find("span").css({"color":"#333"});
			$(this).css({"background":"#fff"});
			$(this).addClass("current");
			$(this).children(".xllb-mbzk").css({"display":"block"});
		});
		$(".xllb-mb ul li").mouseleave(function(e) {
			$(this).find("li").css({"color":"#fff"});
			$(this).find("span").css({"color":"#fff"});
			$(this).css({"background":"none"});
			$(this).removeClass("current");
			$(this).children(".xllb-mbzk").css({"display":"none"});
		});
		$(".xllb-mb li.xllb-mbfl:last-child()").mouseenter(function(e) {
			$(this).css({"-webkit-box-shadow":"7px 4px 5px rgba(0,0,0,0.22)"});
		});
		$(".xllb-mb li.xllb-mbfl:last-child()").mouseleave(function(e) {
			$(this).css({"-webkit-box-shadow":"none"});
		});
		$(".change_tab,.xzcfd").mouseenter(function(e) {
			$(".xzcfd").css("display","block");
			$(".change_tab u").removeClass('qhcfdjt').addClass("qhcfd2");
			$(".change_tab").addClass('change_tabh');
			$(".cfdz").hide();
		});
		$(".change_tab,.xzcfd").mouseleave(function(e) {
			$(".xzcfd").css("display","none");
			$(".change_tab").removeClass('change_tabh');
			$(".change_tab u").removeClass('qhcfd2').addClass("qhcfd");
			if("1"!=null&&"1"!="")$(".cfdz").show();
		}); 
		$(".headpiece-in span .wsc").mouseenter(function(e) {
			$(".wxbox").css("display","block");
		});
		$(".headpiece-in span .wsc").mouseleave(function(e) {
			$(".wxbox").css("display","none");
		});
		if("false"=="true"||"false"=="true"){	
			if(getCookie("www.dw.com")!=null){
				fbid=getCookie("www.dw.com");
				if(typeof $("li[fbid="+fbid+"]").find("a").html()!="undefined"){
					$("#city span").html($("li[fbid='"+fbid+"']").find("a").html());
					xzfb(fbid);
				}else{
					zddw();
				}
			}else{
				zddw();
			}
		}
		$(".xzcfd ul li").click(function(){
			if(handlerflag){
				handlerflag=false;
				$(".xzcfd").hide();
				fbid=$(this).attr("fbid");
				$.ajax({
					type:"POST",
					url:"/module/cpgl/xzfb.do",
					data:{fbid:fbid,page:"qhfb"},
					dataType:"json",
					async:false,
					success:function(result){
						window.location.href="/";
					},
					error:function(){toast("系统繁忙，请稍后重试");}
				});
				handlerflag=true;
			} 
		});
		if("false"=="true"||"[{ljdx=关于乐游, cjsj=2017-03-30 22:40:31, lmmc=关于乐游, ljlx=02, cjr=9cd3066ad8434af1a8d9c1b21a1e4501, lmpx=2017-03-30 13:40:09, sjlm=cf3d46f118ba4ca5a676bf0b3b916c63, xjlist=[{ljdx=a77fe17b1ecf48cea8363705c4e28fc5, cjsj=2017-03-31 14:17:56, lmmc=董事长致辞, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:16:33, sjlm=28f8d9ede0754a6ba468b5e9606bbef1, lmid=e79ffd7b23d342bda7b8806add560d7b, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=79f928388ac349d7857364cb92039cc4, cjsj=2017-03-31 14:17:14, lmmc=乐游简介, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:17:02, sjlm=28f8d9ede0754a6ba468b5e9606bbef1, lmid=64e21b26baaa41a2ac59642956e79419, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=9d1396edd73044068542072d2805a4f3, cjsj=2017-03-31 14:18:33, lmmc=发展历程, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:18:25, sjlm=28f8d9ede0754a6ba468b5e9606bbef1, lmid=59b41f6268184e9cad98e519cdceb4e4, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=5f147ff15f03436d95143aa0fc74f547, cjsj=2017-03-31 14:19:03, lmmc=历史荣誉, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:18:52, sjlm=28f8d9ede0754a6ba468b5e9606bbef1, lmid=08230cb92cf14f2aa541dfa74b7a4ee3, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=e97501e9a660494cb566cb4ea1f986f8, cjsj=2017-03-31 14:37:48, lmmc=乐游大事记, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:20:40, sjlm=28f8d9ede0754a6ba468b5e9606bbef1, lmid=9b897cf4a9b14ed5806369e76a5eefc2, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=28db9c23e3804dcda7c8a9b59300ca62, cjsj=2017-03-31 14:28:59, lmmc=旗下子公司, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:20:43, sjlm=28f8d9ede0754a6ba468b5e9606bbef1, lmid=3038ca9189774c5e88f28e0d747b47c8, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=/module/ppgl/page.do?page=md, cjsj=2017-04-11 18:00:19, lmmc=乐游门店, ljlx=02, cjr=9cd3066ad8434af1a8d9c1b21a1e4501, lmpx=2017-03-31 14:21:00, sjlm=28f8d9ede0754a6ba468b5e9606bbef1, lmid=4fd8d33384de4f209624b80e2da5a039, ppid=a1d051e647f74bf6959c53e8c518d4b5}], lmid=28f8d9ede0754a6ba468b5e9606bbef1, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=乐游模式, cjsj=2017-03-31 14:22:00, lmmc=乐游模式, ljlx=02, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:21:22, sjlm=cf3d46f118ba4ca5a676bf0b3b916c63, xjlist=[{ljdx=170d1cf6e9ca4b6aa63ae53cd84361e5, cjsj=2017-03-31 14:22:26, lmmc=乐游特色, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:22:18, sjlm=01453a4c046749b6b774fa64c7cbb39d, lmid=afd9cb7fbabe401fb232b590bfa75507, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=a80338e85e2f4c4283d5356aca41c7d5, cjsj=2017-03-31 14:22:44, lmmc=运作模式, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:22:33, sjlm=01453a4c046749b6b774fa64c7cbb39d, lmid=0232aade0b204938ba4f03d5723dbbbd, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=edb1d00a4c3a4f7c962862ae2e19a9ee, cjsj=2017-03-31 14:23:10, lmmc=核心优势, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:24:55, sjlm=01453a4c046749b6b774fa64c7cbb39d, lmid=3ca88aa2e14f44a19399191f00a595fe, ppid=a1d051e647f74bf6959c53e8c518d4b5}], lmid=01453a4c046749b6b774fa64c7cbb39d, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=乐游动态, cjsj=2017-03-31 14:12:18, lmmc=乐游动态, ljlx=02, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:25:00, sjlm=cf3d46f118ba4ca5a676bf0b3b916c63, xjlist=[{ljdx=/module/ppgl/page.do?page=dt&lx=01, cjsj=2017-03-31 19:00:34, lmmc=热门头条, ljlx=02, cjr=9cd3066ad8434af1a8d9c1b21a1e4501, lmpx=2017-03-31 14:25:01, sjlm=9565b543c81a40a496a14cf3cc27065c, lmid=794152f786b04602be7ac0cc61a630d9, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=/module/ppgl/page.do?page=dt&lx=02, cjsj=2017-03-31 19:01:21, lmmc=行业资讯, ljlx=02, cjr=9cd3066ad8434af1a8d9c1b21a1e4501, lmpx=2017-03-31 14:25:02, sjlm=9565b543c81a40a496a14cf3cc27065c, lmid=6143acccad0b40debf9708d6431ed8cb, ppid=a1d051e647f74bf6959c53e8c518d4b5}], lmid=9565b543c81a40a496a14cf3cc27065c, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=加入乐游, cjsj=2017-03-31 14:52:26, lmmc=加入乐游, ljlx=02, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:52:17, sjlm=cf3d46f118ba4ca5a676bf0b3b916c63, xjlist=[{ljdx=d5bb2cb4ba5c47b1a9c3674cbf3c7ac6, cjsj=2017-03-31 14:52:46, lmmc=门店合作, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:52:38, sjlm=2074a8318161497eba8e504a9768e9bb, lmid=33f4c89f887246329e5be780255be307, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=c9d02b8dff9543e09972d4ec66874a63, cjsj=2017-03-31 14:53:00, lmmc=资源合作, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:52:53, sjlm=2074a8318161497eba8e504a9768e9bb, lmid=0b8c4c1f129945d99b2a1407b4c632f3, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=a818e63ad8744149ae8a4c0cbd6a360d, cjsj=2017-03-31 14:53:17, lmmc=人才招聘, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-03-31 14:53:10, sjlm=2074a8318161497eba8e504a9768e9bb, lmid=6b97fe2ce1ec4af1bf10535eacbb6e02, ppid=a1d051e647f74bf6959c53e8c518d4b5}], lmid=2074a8318161497eba8e504a9768e9bb, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=帮助中心, cjsj=2017-04-06 18:43:35, lmmc=帮助中心, ljlx=02, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-04-06 18:43:19, sjlm=cf3d46f118ba4ca5a676bf0b3b916c63, xjlist=[{ljdx=77d897ad7e204b97aa57c6f9f1e91677, cjsj=2017-04-06 18:49:24, lmmc=签证相关问题, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-04-06 18:45:47, sjlm=20886be9a2dc493796eeedc2407d5375, lmid=8d5fb4376ddc4fa7b3af939694df9e4f, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=c857762882e94825ab814279653cdb3a, cjsj=2017-04-06 18:54:11, lmmc=旅游常见概念解释, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-04-06 18:50:20, sjlm=20886be9a2dc493796eeedc2407d5375, lmid=b4774d6510234db08fb4acce92a09100, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=ef310f5b8af440b9897739385ff26632, cjsj=2017-04-06 19:06:03, lmmc=旅游线路常见问题, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-04-06 19:01:48, sjlm=20886be9a2dc493796eeedc2407d5375, lmid=ed8db429d86c45cb9343e5ac903f406b, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=4ce22cd607ff4784a33144adfb8c0ddf, cjsj=2017-04-06 19:12:11, lmmc=网上预订相关问题, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-04-06 19:07:03, sjlm=20886be9a2dc493796eeedc2407d5375, lmid=94b84f8145574d40b742800c74848982, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=31c7084a3d48402a9ac30cae3ffc6e41, cjsj=2017-04-06 19:20:59, lmmc=网上支付方式, ljlx=01, cjr=8b47c67ea7314e42aae2995e6aeb642a, lmpx=2017-04-06 19:17:13, sjlm=20886be9a2dc493796eeedc2407d5375, lmid=34179947430d4bd68d2d6f848ab0b396, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=a4b4c16140b9497f9f550873f2fce521, cjsj=2017-06-06 14:18:26, lmmc=护照、签证及港澳通行证, ljlx=01, cjr=68851066fdec46e8b2ec8fca9dcc2b7d, lmpx=2017-06-06 14:29:08, sjlm=20886be9a2dc493796eeedc2407d5375, lmid=78e410e62e4548b4be66d7e039fde92a, ppid=a1d051e647f74bf6959c53e8c518d4b5}, {ljdx=2dd3d4a46e904f1faeef8296d29a2254, cjsj=2017-06-06 15:34:44, lmmc=各国插座形式、电压一览表, ljlx=01, cjr=68851066fdec46e8b2ec8fca9dcc2b7d, lmpx=2017-06-06 15:27:25, sjlm=20886be9a2dc493796eeedc2407d5375, lmid=980f85ebbfe04ffa850fb097f95892c0, ppid=a1d051e647f74bf6959c53e8c518d4b5}], lmid=20886be9a2dc493796eeedc2407d5375, ppid=a1d051e647f74bf6959c53e8c518d4b5}]"==null||$(".right").find("a").length<2){
			$.ajax({
				type:"POST",
				url:"/module/ppgl/cxyjlm.do",
				dataType:"json",
				success:function(result){
					var html = "";
					var data = $.parseJSON(result.value);
					$.each(data,function(i,item){
						if(item.lmmc!='帮助中心'){
							html+='<a href="/module/ppgl/index.do?lmid='+item.lmid+'"  target="_blank">'+item.lmmc+'</a>';
							if(i!==data.length-1){
								html+="丨";
							}
						}else{
							html+='<a href="/module/ppgl/page.do?page=bz&lmid='+item.lmid+'"  target="_blank">'+item.lmmc+'</a>';
							if(i!==data.length-1){
								html+="丨";
							}
						}
					})
					$(".wsc_box").before(html);
				},
				error:function(){}
			})
		}
		$(".cfdz").click(function(){
			window.open("/module/ppgl/index.do?page=md&jgid="+getCookie("www.dw.com"));
		});
		if("false"=="true"||"1"==null){
			$.ajax({
				type:"POST",
				url:"/module/ppgl/ismddz.do",
				dataType:"json",
				success:function(result){
					if(result.key=="1") $(".cfdz").show();
				},
				error:function(){}
			});
		}
	});
	$(function(){
		$(".sidebar .top").on("click",function(){ $('body,html').animate({scrollTop: "0px"}, 300); });	
		$(".sidebar .dd").on("click",function(e){
			window.location.href="/module/hygl/page.do?page=index";
		});
		$(".sidebar .sc").on("click",function(e){
			window.location.href="/module/hygl/page.do?page=index&lm=sc";
		});
		$("#tccancle").on("click",function(e){$(".tczz,.tc").hide()});
	});