<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="member_files/share.css">
<script type="text/javascript" src="member_files/jquery.js"></script>
<script type="text/javascript" src="member_files/common.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>乐游旅游</title>
<link rel="shortcut icon" type="image/x-icon"
	href="http://www.loyoyo.com/xtfsq/themes/default/ppgl/loyoyo.com/favicon.ico?timestamp=2015090216">
<link rel="stylesheet" type="text/css" href="member_files/hygl.css">

<link rel="stylesheet" type="text/css" href="css/member.css">
<script type="text/javascript" src="js/member.js"></script>

</head>
<body style="margin: 0; padding: 0;">
	<!-- 嵌入头部 -->
	<%@ include file="common/hread.jsp"%>
	<!-- 嵌入页面导航 -->
	<%@ include file="common/left.jsp"%>
	
	<div class="content">
		<div class="content-in">
			<div class="content-left">
				<h4>会员中心</h4>
				<ul>
					<li class="current"><a
						href="javascript:openHycenter('memberMyOrder.jsp');">我的订单</a></li>
					<li><a
						href="javascript:openHycenter('memberMydata.jsp');">我的资料</a></li>
					<li><a
						href="javascript:openHycenter('memeberMyPassword.jsp');">修改密码</a></li>
				</ul>
			</div>
			<iframe id="hycenter" name="hycenter"
				style="width: 953px; height: 620px; z-index: 2; visibility: inherit; margin-left: 20px; padding-bottom: 20px; background: rgb(255, 255, 255) none repeat scroll 0% 0%;"
				scrolling="no" onload="iFrameHeight2();"
				src="memberMyOrder.jsp" frameborder="0"> 

				</iframe>
		</div>
	</div>

	<!-- 嵌入页面底部 -->
	<%@ include file="common/bottom.jsp"%>

	<div class="tczz"
		style="width: 100%; height: 100%; background-color: #000; background-color: rgba(0, 0, 0, 0.5); filter: alpha(opacity = 50); BORDER-LEFT: medium none; /*IE8支持*/ position: fixed; left: 0; top: 0; /* filter:alpha(Opacity=20);  */ z-index: 9998; display: none; pointer-events: auto;"></div>
	<div class="tck">
		<span></span>
		<div id="tsk" class="row">
			<div id="qxsc" class="col-xs-6">否</div>
			<div id="qdsc">是</div>
		</div>
	</div>
</body>
</html>
