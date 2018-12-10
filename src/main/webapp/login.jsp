<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html><head>
<link rel="stylesheet" type="text/css" href="login_files/share.css">
<script type="text/javascript" src="login_files/jquery.js"></script>
<script type="text/javascript" src="login_files/common.js"></script>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>乐游旅游</title>
		<link rel="shortcut icon" type="image/x-icon" href="http://www.loyoyo.com/xtfsq/themes/default/ppgl/loyoyo.com/favicon.ico?timestamp=2015090216">
		<link rel="stylesheet" type="text/css" href="login_files/hygllogin.css">
		<script type="text/javascript" src="js/login.js"></script>
	</head>
	<body>
		<div class="header" style="height:85px; overflow:hidden;">
			<div class="logo-in">
				<a href="http://www.loyoyo.com/" class="logo" style="margin-top: 8px;"><img src="login_files/dllogo.jpg"></a>
				<div class="title_icon"><img src="login_files/dl_bg2.png" style="display:inline-block"></div>
			</div>
		</div>
		<div class="content">
			 <div class="content-in">
				<div class="login">
                	<div class="i18n">会员登录</div>
					<span id="loginTip" class="loginTipInfo"></span>
					<form id="dlform" style="margin-top:28px;" action="post">
						<ul>
							<li><input id="sjh" name="sjh" type="text" maxlength="11" class="username" placeholder="手机号"></li>
							<li><input id="mm" name="mm" type="password" maxlength="100" class="password" placeholder="密码" onkeydown="if(event.keyCode == 13){login();return false;}"></li>
							<li style="margin:15px 0;"><button class="three" onclick="login();return false;" type="button">登&nbsp;&nbsp;&nbsp;录</button></li>
	                        <p><span class="kszc"><a href="register.jsp">快速注册</a></span></p>
						</ul>
					</form>
				</div>
			</div>
		</div>
	   <div class="footer" style="background:#fff;border-top:none; margin-top:30px; font-size:14px;">
	    	<p style="text-align:center;color:#999;margin-bottom:10px;">技术支持：广州云旅网络科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Copyright&nbsp;©&nbsp;乐游旅游. All Rights Reserved.</p>
        	<div class="beian" style="border-top:none;text-align:center; background:#fff;color:#999; width:100%">
        		<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo" style="display:inline-block;text-decoration:none;height:20px;color:#9d9d9d;line-height:20px;"><img src="login_files/footer_beian.png" style="display: inline-block;vertical-align:middle;margin-right:3px;"><i style="font-style: normal;vertical-align:middle;margin-right:3px;">粤公网安备 44010602001894号</i></a>
				&nbsp;&nbsp;&nbsp;<a target="_blank" href="http://www.miitbeian.gov.cn/" style="display:inline-block;text-decoration:none;height:20px;color:#9d9d9d;"><i style="font-style: normal;vertical-align:middle;margin-right:3px;">沪ICP备15034440号</i></a>
            </div>
         </div> 
</body></html>