<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="memberDetails_files/share.css">
<script type="text/javascript" src="memberDetails_files/jquery.js"></script>
<script type="text/javascript" src="memberDetails_files/common.js"></script>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta httpequiv="XUACompatible" content="IE=EmulateIE">
		<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7">
		<title>乐游旅游</title>
		<link rel="shortcut icon" type="image/x-icon" href="http://www.loyoyo.com/xtfsq/themes/default/ppgl/loyoyo.com/favicon.ico?timestamp=2015090216">
		<link rel="stylesheet" type="text/css" href="memberDetails_files/ddglview.css">
	<script type="text/javascript">
		function goView(cpid){
			window.open("/module/cpgl/view.do?cpid="+cpid);
		}
	</script></head>
	<body>
<script type="text/javascript" src="js/memberDetails.js">
</script>
<!-- 嵌入头部 -->
<%@ include file="common/hread.jsp"%>

<!-- 嵌入导航 -->
<%@ include file="common/left.jsp"%>

	    <div class="main">
	    	<div class="main-in">
	        	<div class="ddxx_adr"><span>您的位置</span> &gt; <span>会员中心</span> &gt; <span>我的订单</span> &gt; <span>订单详情</span></div>
	            <div class="ddxq">
	            	<ul>
	                	<li>
	                    	<div class="title">产品信息</div>
	                    	<div style="height:auto; overflow:hidden;">
	                        	<img src="memberDetails_files/9fd1ee780a7c4d539322c7ea1d79c0a4.jpg" style="float:left; cursor:pointer;" onclick="goView('b210ea079b7b4f4a9e2632b04426fb5c');" width="100px" height="75px"><p style="float:left; margin-left:15px; width:80%;">产品编号：CPCS18102510274376</p>
	                            <br><p class="ddmc" onclick="goView('b210ea079b7b4f4a9e2632b04426fb5c');">五星泰国海景沙美版6天5晚跟团游，1晚沙美岛豪华度假酒店小别墅+2晚芭提雅国五海景房布莱顿酒店海景房+1晚曼谷皇家喜来登酒店180°落地河景房+1晚曼谷高人气绿宝石酒店</p>
	                        </div>
	                    </li>
	                    <li style="padding-bottom:0;">
	                    	<div class="title">报名信息</div>
	                        <ul class="ddxx ddx-box" style="padding-bottom: 10px;">
	                            <li><span>订单编号：</span><span>DDCS18112710416163</span></li>
	                            <li><span>订单状态：</span><i>待确认</i></li>
	                            <li><span>订单金额：</span><u>¥3990.00</u>（支付宝支付）</li>
	                            <li><span>出发城市：</span><span>长沙市</span></li>
	                            <li><span>订购数量：</span><span>1间</span></li>
	                            <li><span>入住天数：</span><span>6天</span></li>
	                            <li><span>入住日期：</span><span>2018-11-28</span></li>
	                            <li><span>退房日期：</span><span>2018-12-03</span></li>
	                            <li><span>房间型号：</span><span>单人间</span></li>
	                        </ul>
	                    </li>
	                    <li>
	                    	<div class="title">联系信息</div>
	                        <ul class="ddxx">
	                        	<li><span>姓名：</span><span>啦啦啦</span></li>
	                            <li><span>手机：</span><span>17674143747</span></li>
	                            <li><span>邮箱：</span><span>iii@qq.vvv</span></li>
	                        </ul>
	                    </li>
	                </ul>
	            </div> 
	        </div>
	    </div>
<style type="text/css">
	.tc{ min-height:0rem;width:20rem; padding: 10px; float:right; background:#FFF; border-radius:4px; position:relative;}
	.tc em{position:absolute; background:#fff;  right:10px; top:12px; height:14px; width:14px; display:inline-block; font-style:normal; cursor:pointer; background: url(/xtfsq/themes/images/cancle.png) no-repeat;}
	.tc p{width:90%;/* position:absolute;left:50%;margin-left: -40%; */margin:.5rem auto;font-size:16px; text-align:center;}
	/*弹出框*/
	.tck{width:70%;width:280px; height:auto;z-index:9999; position:fixed; left:50%; top:50%; margin-left:-140px; margin-top:-100px; display:none; border-radius:5px; background:#fff; border:1px solid #fff; color:#333; padding:0px;}
	.tck .row{border-top:1px solid #eee;width:100%;margin:0px;background:#fff;padding:3px 0px 3px;}
	.tck .row div{text-align:center;line-height:30px;cursor: pointer;}
	.tck .row div:first-child{ border-right:1px solid #eee;}
	.tck span{ padding:15px; display:inline-block;}
	.col-xs-6 {width: 50%;float: left;}
</style>
<script type="text/javascript">
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
</script>
<!-- 嵌入页面底部 -->
<%@ include file="common/bottom.jsp"%>

<div class="tczz" style="width:100%; height:100%; background-color:#000;background-color:rgba(0, 0, 0, 0.5) ;filter:alpha(opacity=50); BORDER-LEFT: medium none;/*IE8支持*/ position:fixed; left:0; top:0; /* filter:alpha(Opacity=20);  */z-index:9998;display:none;pointer-events:auto;"></div>
    <div class="tck">
    	<span></span>
    	<div id="tsk" class="row">
        <div id="qxsc" class="col-xs-6">否</div>
        <div id="qdsc">是</div>
    </div>
</div>
</body></html>