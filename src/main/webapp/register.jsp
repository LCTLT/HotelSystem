<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="register_files/share.css">
<script type="text/javascript" src="register_files/jquery.js"></script>
<script type="text/javascript" src="register_files/common.js"></script>
<title>乐游旅游</title>
<style>
.drag {
	width: 300px;
	height: 40px;
	line-height: 40px;
	background-color: #e8e8e8;
	position: relative;
	margin-left: 90px;
}

.bg {
	width: 40px;
	height: 100%;
	position: absolute;
	background-color: #75CDF9;
}

.text {
	position: absolute;
	width: 100%;
	height: 100%;
	text-align: center;
	user-select: none;
}

.btn {
	width: 40px;
	height: 38px;
	position: absolute;
	border: 1px solid #ccc;
	cursor: move;
	font-family: "宋体";
	text-align: center;
	background-color: #fff;
	user-select: none;
	color: #666;
}
</style>
<link rel="shortcut icon" type="image/x-icon"
	href="http://www.loyoyo.com/xtfsq/themes/default/ppgl/loyoyo.com/favicon.ico?timestamp=2015090216">
<link rel="stylesheet" type="text/css"
	href="register_files/hygllogin.css">
<script type="text/javascript">
			var handlerflag=true;
			var dxfsxz = false;
			function settime(time,fn){
			   var timer = setInterval(function(){
			       if(!dxfsxz&&time>=0){
			             fn("重新获取(" + time + ")");
			             --time;
			        }else{
			            clearInterval(timer);
			            fn("获取验证码");
			        }
			    }, 1000);
			}
			function zc(){
				if(handlerflag){
					handlerflag=false;
					if(!(/(^[1][3456789][0-9]{9}$)/.test($("#sjh").val()))){
						$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
	    				$("#loginTip").html("手机格式不正确");
					}else if($.trim($("#mm").val())==""){
						$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
	    				$("#loginTip").html('请输入密码');
					}else if(!(/^[a-zA-Z0-9\~\`\!\@#$\%\^\&\*\(\)\_\-\+\=\{\[\}\]\|\\\:\;\"\'\<\,\>\.\?\/]{6,32}$/.test($("#mm").val()))){
						$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
	    				$("#loginTip").html('密码要求至少6位的数字或字母');
					}else if($("#mm").val() != $("#qrmm").val()){
						$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
	    				$("#loginTip").html('密码和确认密码不一致');
					}else{
						$.ajax({
				    		type:"POST",
				    		url:"/module/hygl/add.do",
				    		data:$("#form").serialize(),
				    		dataType:"json",
				    		async:false,
				    		success:function(result){
				    			if(result.key=="1"){
				    				$("#hqyzm").prop("disabled",true);
				    				$(".three").prop("disabled",true);
				    				window.location.href='/';
				    			}else if(result.key=="4"){
				    				$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
				    				$("#loginTip").html('手机号已存在');
				    			}
				    		},
				    		error:function(result){toast("系统繁忙，请稍后重试");}
				    	});
					}
					handlerflag=true;
				}
			}
			$(function(){
				$(".sidebar").hide();
				$("#dxyzm").on("keyup",function(e){
					var tmptxt=$(this).val();
			        $(this).val(tmptxt.replace(/\D/g,''));
				})
				$("#hqyzm").click(function(){
					if(handlerflag){
						handlerflag=false;
						if(!(/(^[1][3456789][0-9]{9}$)/.test($("#sjh").val()))){
							$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
		    				$("#loginTip").html("手机格式不正确");
		    				handlerflag=true;return;
						}else{

						}
						handlerflag=true;
					}
				});
			});
		</script>
</head>
<body>
	<div class="header" style="height: 85px;">
		<div class="logo-in">
			<a href="" class="logo" style="margin-top: 8px;"><img
				src="register_files/dllogo.jpg"></a>
			<div class="title_icon">
				<img src="register_files/dl_bg2.png" style="display: inline-block">
			</div>
		</div>
	</div>
	<div class="content" style="height: 460px;">
		<div class="content-in">
			<form id="form" class="zc">
				<div class="i18n">会员注册</div>
				<span id="loginTip" class="loginTipInfo"></span>
				<ul style="margin-top: 28px;">
					<li><input id="sjh" name="sjh" type="text" maxlength="11"
						class="username" placeholder="手机号"></li>
					<li><input id="mm" name="mm" type="password" maxlength="100"
						class="password" placeholder="设置密码"></li>
					<li><input id="qrmm" type="password" maxlength="100"
						class="password"
						onkeydown="if(event.keyCode == 13){zc();return false;}"
						placeholder="确认密码"></li>
					<div class="drag">
						<div class="bg"></div>
						<div class="text" onselectstart="return false;">请拖动滑块解锁</div>
						<div class="btn">&gt;&gt;</div>
					</div>
					<li style="margin: 10px 0 5px;">
						<button class="three" onclick="zc();return false;" type="button">注&nbsp;&nbsp;&nbsp;册</button>
					</li>
					<p>
						<span class="kszc"><a href="login.jsp">立即登录</a></span>
					</p>
				</ul>
			</form>
		</div>
	</div>
	<div class="footer"
		style="background: #fff; border-top: none; margin-top: 30px; font-size: 14px;">
		<p style="text-align: center; color: #999; margin-bottom: 10px;">技术支持：广州云旅网络科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Copyright&nbsp;©&nbsp;乐游旅游.
			All Rights Reserved.</p>
		<div class="beian"
			style="border-top: none; text-align: center; background: #fff; color: #999; width: 100%">
			<a target="_blank"
				href="http://www.beian.gov.cn/portal/registerSystemInfo"
				style="display: inline-block; text-decoration: none; height: 20px; color: #9d9d9d; line-height: 20px;"><img
				src="register_files/footer_beian.png"
				style="display: inline-block; vertical-align: middle; margin-right: 3px;"><i
				style="font-style: normal; vertical-align: middle; margin-right: 3px;">粤公网安备
					44010602001894号</i></a> &nbsp;&nbsp;&nbsp;<a target="_blank"
				href="http://www.miitbeian.gov.cn/"
				style="display: inline-block; text-decoration: none; height: 20px; color: #9d9d9d;"><i
				style="font-style: normal; vertical-align: middle; margin-right: 3px;">沪ICP备15034440号</i></a>
		</div>
	</div>
	<script>
    //一、定义一个获取DOM元素的方法
    var $ = function(selector){
            return  document.querySelector(selector);
        },
        box = $(".drag"),//容器
        bg = $(".bg"),//背景
        text = $(".text"),//文字
        btn = $(".btn"),//滑块
        success = false,//是否通过验证的标志
        distance = box.offsetWidth - btn.offsetWidth;//滑动成功的宽度（距离）

    //二、给滑块注册鼠标按下事件
    btn.onmousedown = function(e){

        //1.鼠标按下之前必须清除掉后面设置的过渡属性
        btn.style.transition = "";
        bg.style.transition ="";

        //说明：clientX 事件属性会返回当事件被触发时，鼠标指针向对于浏览器页面(或客户区)的水平坐标。

        //2.当滑块位于初始位置时，得到鼠标按下时的水平位置
        var e = e || window.event;
        var downX = e.clientX;

        //三、给文档注册鼠标移动事件
        document.onmousemove = function(e){

            var e = e || window.event;
            //1.获取鼠标移动后的水平位置
            var moveX = e.clientX;

            //2.得到鼠标水平位置的偏移量（鼠标移动时的位置 - 鼠标按下时的位置）
            var offsetX = moveX - downX;

            //3.在这里判断一下：鼠标水平移动的距离 与 滑动成功的距离 之间的关系
            if( offsetX > distance){
                offsetX = distance;//如果滑过了终点，就将它停留在终点位置
            }else if( offsetX < 0){
                offsetX = 0;//如果滑到了起点的左侧，就将它重置为起点位置
            }

            //4.根据鼠标移动的距离来动态设置滑块的偏移量和背景颜色的宽度
            btn.style.left = offsetX + "px";
            bg.style.width = offsetX + "px";

            //如果鼠标的水平移动距离 = 滑动成功的宽度
            if( offsetX == distance){

                //1.设置滑动成功后的样式
                text.innerHTML = "验证通过";
                text.style.color = "#fff";
                btn.innerHTML = "&radic;";
                btn.style.color = "green";
                bg.style.backgroundColor = "lightgreen";

                //2.设置滑动成功后的状态
                success = true;
                //成功后，清除掉鼠标按下事件和移动事件（因为移动时并不会涉及到鼠标松开事件）
                btn.onmousedown = null;
                document.onmousemove = null;

                //3.成功解锁后的回调函数
                setTimeout(function(){
                   
                },100);
            }
        }

        //四、给文档注册鼠标松开事件
        document.onmouseup = function(e){

            //如果鼠标松开时，滑到了终点，则验证通过
            if(success){
                return;
            }else{
                //反之，则将滑块复位（设置了1s的属性过渡效果）
                btn.style.left = 0;
                bg.style.width = 0;
                btn.style.transition = "left 1s ease";
                bg.style.transition = "width 1s ease";
            }
            //只要鼠标松开了，说明此时不需要拖动滑块了，那么就清除鼠标移动和松开事件。
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
	</script>
</body>
</html>