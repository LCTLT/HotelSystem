<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css"
	href="member_files/share.css?timestamp=2015090216">
<script type="text/javascript"
	src="member_files/jquery.min.js?timestamp=2015090216"></script>
<script type="text/javascript"
	src="/xtfsq/themes/common.js?timestamp=2015090216"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>乐游旅游</title>
<link rel="shortcut icon" type="image/x-icon"
	href="http://www.loyoyo.com/favicon.ico?timestamp=2015090216">
<link rel="stylesheet" type="text/css"
	href="member_files/hygl.css?timestamp=2015090216">
<script type="text/javascript"
	src="/xtfsq/laydate/laydate.js?timestamp=2015090216"></script>
<link type="text/css" rel="stylesheet"
	href="http://www.loyoyo.com/xtfsq/laydate/need/laydate.css">
<link type="text/css" rel="stylesheet"
	href="http://www.loyoyo.com/xtfsq/laydate/skins/default/laydate.css"
	id="LayDateSkin">
<script>
			function testzjh(){
				var xm = $("#xm").val();
				var xb = $("#xb").val();
				var csrq = $("#csrq").val();
				var yx = $("#yx").val();
				var dz = $("#dz").val();
				if(/^[\u4E00-\u9FA5a-zA-Z]{2,30}$/.test(xm) == false&&$.trim(xm)!=""){
					parent.toast('姓名格式不正确');return false;
				}else if(xb.trim()==""){
					toast("请选择性别");return false;
				}else if($.trim(zjlx)==''){
					toast("请选择证件类型"); return false;
				}else if($.trim(zjh)==''){
					toast("请输入证件号"); return false;
				}else if(zjlx=='01'){
					var temp = validCard(zjh,csrq,xb);
					if(temp[0]!="true"){
						toast(temp[0]);
						return false;
					}
				}else if(zjlx=='02' && !/^(1[45][0-9]{7}|G[0-9]{8}|P[0-9]{7}|S[0-9]{7,8}|D[0-9]+|E[0-9]{8}|[a-zA-Z0-9]+)$/.test(zjh)){
					parent.toast("无效护照"); return false;
				}else if(zjlx=='03' && !/^[a-zA-Z0-9\(\)]+$/.test(zjh)){
					parent.toast("证件号格式不正确"); return false;
				}
				if(csrq.trim()==""){toast("请选择出生日期"); return false;}
				if(new Date()<=Date.parse(csrq.replace(/-/g, "/"))){
					parent.toast("出生日期不能大于今天"); return false;
				}
				if(!(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(yx))&&$.trim(yx)!=''){
					parent.toast('邮箱格式不正确');return false;
				}
				if(!(/^[^\~\`\!\@#$\%\^\&\*\(\)\_\-\+\=\{\[\}\]\|\\\:\;\"\'\<\,\>\.\?\/]+$/.test(dz))&&$.trim(dz)!=''){
					parent.toast('地址格式不正确');return false;
				}
				return true;
			}
			$(function(){
				if(""=="1"){
					parent.toast('保存成功');
				}
				var handlerflag=true;
			    $("#save").click(function(){
			    	if(handlerflag){
						handlerflag=false;
				    	 if(!testzjh()){
				    	 }else{
					    	$.ajax({
					    		type:"POST",
					    		url:"/module/hygl/edit.do",
					    		data:$("#form").serialize(),
					    		dataType:"json",
					    		async:false,
					    		success:function(result){
				    				window.location.href="/module/hygl/page.do?page=edit&toast=1";
					    		},
					    		error:function(result){parent.toast("系统繁忙，请稍后重试");}
					    	});
						}
						handlerflag=true;
					}
			    });
			    $("input[type='text']").focus(function(){
			    	$($(this).parent().find("i")).css("display","inline");
			    });
			    $(".iconfont").click(function(){
			    	$($(this).parent().find("input")).val("").focus();
			    });
			    $("#zjh").blur(function(){
					if($("#zjlx").val()=="01"){
						var temp = validCard($("#zjh").val(),null,null);
						if(temp[0]=="true"){
							$("#csrq").val(temp[1]);
							$("#xb").val(temp[2]);
						}
					}
			   	});
			    $("input[type='text']").blur(function(){
			    	var obj = $(this);
			    	setTimeout(function(){
			    		if(!obj.is(":focus")){
			    			$(obj.parent().find("i")).css("display","none");
			    		}
			    	},100);
			    })
			})
		</script>
</head>
<body>
	<div class="content-right">
		<ul class="wdsc">
			<li class="current" style="cursor: default;">我的资料</li>
			<li
				style="cursor: default; width: 845px; border-bottom: 2px solid #e1e1e1;"></li>
		</ul>
		<div class="wdzl">
			<form id="form">
				<input name="hyid" type="hidden"
					value="21fee1af61dd4d75970d5faff879ef56">
				<ul>
					<li><div>姓名</div>
						<input id="xm" name="xm" type="text" placeholder="请输入姓名" value=""
						maxlength="30"></li>
					<li><div>性别</div> <select id="xb" name="xb">
							<option value="">请选择</option>
							<option value="01">男</option>
							<option value="02">女</option>
					</select></li>
					<li><div>出生日期</div>
						<input id="csrq" name="csrq" readonly="readonly" type="text"
						placeholder="请输入出生日期" maxlength="10"
						onclick="laydate({elem: '#csrq'});" value=""></li>
					<li><div>邮箱</div>
						<input id="yx" name="yx" type="text" placeholder="请输入邮箱" value=""
						maxlength="100"></li>
					<li><div>地址</div>
						<input id="dz" name="dz" type="text" placeholder="请输入地址" value=""
						maxlength="100"></li>
					<li><span id="save">保存</span></li>
				</ul>
			</form>
		</div>
	</div>
</body>
</html>