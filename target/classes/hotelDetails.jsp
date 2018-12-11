<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css"
	href="hotelDetails_files/share.css">
<script type="text/javascript" src="hotelDetails_files/jquery.js"></script>
<script type="text/javascript" src="hotelDetails_files/common.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta id="description"
	content="温馨提示：
提前3个小时抵达机场，由领队带领大家办理出境手续及换登机牌。乘搭国际航班前往泰国首都—【曼谷】&nbsp;，抵达泰国机场之后，领队帮忙办理落地签/或自备签证，入境泰国后送至酒店休息，养精蓄锐迎接精彩的明天！">
<meta id="imgurl"
	content="http://sc-fx-fxtfsq.cloudtravel.net/fxtfsq/xltt/2018/10/25/9fd1ee780a7c4d539322c7ea1d79c0a4.jpg">
<title>酒店详情</title>
<meta name="description"
	content="乐游旅游，全国旅游连锁品牌，综合性旅游服务平台，提供出境游、国内游、周边游、自由行、机票预订、酒店预订主题定制等旅游全产业链服务，已在全国15个省30多个地市建立1600余家连锁门店。快乐旅游，就在乐游，全国旅游咨询热线：4000-121-888">
<meta name="keywords"
	content="五星泰国海景沙美版6天5晚跟团游，1晚沙美岛豪华度假酒店小别墅+2晚芭提雅国五海景房布莱顿酒店海景房+1晚曼谷皇家喜来登酒店180°落地河景房+1晚曼谷高人气绿宝石酒店_乐游旅游">
<link rel="shortcut icon" type="image/x-icon"
	href="http://www.loyoyo.com/xtfsq/themes/default/ppgl/loyoyo.com/favicon.ico?timestamp=2015090216">
<link rel="stylesheet" type="text/css"
	href="hotelDetails_files/cpglview.css">
<script type="text/javascript" src="hotelDetails_files/calendar.js"></script>
<script type="text/javascript" src="hotelDetails_files/jquery-qrcode.js"></script>
<link rel="stylesheet" type="text/css" href="css/hotelDetails.css">
<script src="hotelDetails_files/share.js"></script>
<link rel="stylesheet" href="hotelDetails_files/share_style0_16.css">
<!-- 引入js -->
<script type="text/javascript" src="js/hotelDetails.js"></script>
</head>
<body>
	<!-- 嵌入头部 -->
	<%@ include file="common/hread.jsp"%>
	<!-- 嵌入页面导航 -->
	<%@ include file="common/left.jsp"%>

	<!--页面主体开始-->
	<div class="cpxq">
		<div class="cpxq-in">
			<div class="mbx"></div>
			<div class="cpxx">
				<div class="cp-left">
					<div class="jdtp" style="overflow: hidden;">
						<div class="tp">
							<img style="width: 500px; height: 375px;"
								src="images/wz.png"
								title=""
								onerror="this.src='/xtfsq/themes/images/default.jpg?timestamp=2015090216'">
							<span class="left_button"></span> <span class="right_button"></span>
						</div>
					</div>

					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-body no-padding">
								<div class="hh-calendar clearfix" style="width: 500px;">
									<img style="width: 250px; height: 140px;"
										src="images/wz.png"
										title=""
										onerror="this.src='/xtfsq/themes/images/default.jpg?timestamp=2015090216'">
									<img style="width: 245px; height: 140px;"
										src="images/wz.png"
										title=""
										onerror="this.src='/xtfsq/themes/images/default.jpg?timestamp=2015090216'">

									<img style="width: 50%; height: 140px;"
										src="images/wz.png"
										title=""
										onerror="this.src='/xtfsq/themes/images/default.jpg?timestamp=2015090216'">
									<img style="width: 245px; height: 140px;"
										src="images/wz.png"
										title=""
										onerror="this.src='/xtfsq/themes/images/default.jpg?timestamp=2015090216'">
								</div>
							</div>
						</div>
					</div>

				</div>
				<form id="form">
					<div class="cp-right">
						<p>乌镇大墅HOTEL民宿</p>
						<span class="price">¥<b>300</b><em>起</em></span>
						<div class="cpxxxx">
							<ul>
								<li>详细地址： <i>桐乡 慈云路537号至543号 ，近西栅景区南门售票点约800处</i>
								</li>
							</ul>
						</div>
						<div class="txxx">
							<h4>订单信息</h4>
							<ul>
								<li><span style="letter-spacing: 6px;">出发地:</span> <select
									name="cfd" id="cfd">
										<option value="1c4b4a222b264c41aff39bed41377e5a"
											selected="selected">长沙市</option>
								</select></li>
								<li><span>入住日期：</span> <input name="" id="" type="text"
									onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})"
									placeholder="不能小于当前日期" /></li>
								<li><span>退房日期：</span> <input name="" id="" type="text"
									onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm'})"
									placeholder="不能小于入住日期" /></li>
								<li><span>房&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
									<select name="" id="">
										<option value="" selected="selected">请选择</option>
								</select></li>
								<li><span>退&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;订：</span></li>
								<li><span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：</span><label
									id="crjg">0</label></li>
								<li><span>剩余库存：</span><label id="sykc_label">0</label></li>
								<li><span>订购数量：</span><select id="crrs" name="crrs"
									style="width: 70px; vertical-align: middle;">
										<option value="0" selected="selected">0</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
								</select>
							</ul>
						</div>
						<div class="lxxx">
							<h4>联系信息</h4>
							<ul>
								<li>姓名：<input type="text" class="texts " id="xm" name="xm"
									maxlength="30"></li>
								<li>手机：<input type="text" class="texts " id="sj" name="sj"
									maxlength="11"></li>
								<li>邮箱：<input type="email" class="texts " id="yx" name="yx"
									maxlength="100"></li>
							</ul>
							<ul>
								<li>备注：<input type="text" class="texts "
									style="width: 588px;" placeholder="如果您有其他要求，请在这里留言" id="bz"
									name="bz" maxlength="1000"></li>
							</ul>
						</div>
						<div class="yd">
							支付方式 <select name="zflx" id="zflx" class="default twins"
								style="margin-right: 5px;">
								<option value="03" selected="selected">支付宝</option>
							</select> 合计：<span>¥<b id="totalPrice">0</b></span> <a class="ydan"
								id="submitOrder" style="font-size: 16px; color: #fff;"> 立即预订
							</a>
							<div class="dbox" style="display: none;">
								<p class="box tsy" style="padding-top: 2px; font-size: 15px"></p>
								<p style="font-weight: normal;" class="box djs"></p>
							</div>
						</div>
						<input type="hidden" id="zje" name="zje" value="0.00"> <input
							type="hidden" id="blkh" name="blkh" value="0"> <input
							type="hidden" id="cpid" name="cpid"
							value="b210ea079b7b4f4a9e2632b04426fb5c"> <input
							type="hidden" id="cpbh" name="cpbh" value="CPCS18102510274376">
						<input type="hidden" id="htrq" name="htrq" value=""> <input
							type="hidden" id="zdqx" name="zdqx" value="0"> <input
							type="hidden" id="gysid" name="gysid"
							value="b4213d02b4134a3d8e49dce57e453617"> <input
							type="hidden" id="sfsscp" name="sfsscp" value="02"> <input
							type="hidden" id="yd_random" name="yd_random"
							value="f237433e339c4beeadc3a1056e0bbdaa">
					</div>
				</form>
			</div>
			<div class="cpgk">
				<div id="yccpdh" style="display: none; height: 45px;"></div>
				<div class="cpdh">
					<ul>
						<li class="cpmd current"><a href="javascript:;" onclick="">酒店详情</a></li>
						<li class="xxxc"><a href="javascript:;">详细信息</a></li>
					</ul>
				</div>
				<div class="one">
					<div id="cpmd">
						<h3>酒店详情</h3>
						<p style="font-size: 14px;">&nbsp;&nbsp;&nbsp;&nbsp;乌镇大墅HOTEL民宿位于乌镇西栅南门约800米处，是一家现代感装修风格的民宿，占地面积约1000平方，
							共20间客房，小店经营者是时装设计师出身，有着自己对时尚的理解。从前期硬装的装修图纸规划到后期一凳一椅
							的软装都是从上海杭州等地请来的专业团队悉心打造。用心做人，用良心做事，是小店的宗旨。期待与您的合作。</p>
					</div>
				</div>
				<div id="xxxc">
					<h3>详细信息</h3>
					<div class="dtxc">
						<div class="jt-yc-zs-jd">
							<span><i>宽带：</i>WIFI</span> <span><i>房型：</i>标准单人间、标准双人间、大床房
							</span> <span><i>用餐：</i>早餐(无)</span> <span></span>
						</div>
						<div class="dtjtxc">
							<p style="font-size: 14px;">温馨提示： 到达后与酒店前台人员办理入住。</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="qrcode_div"
			style="position: relative; width: 240px; height: 275px; padding: 10px; border: solid 1px #d8d8d8; display: none; position: absolute; top: 50%; left: 50%; margin-left: -120px; margin-top: -120px; background: #FFFFFF; z-index: 999;">
			<label
				style="font-weight: bold; display: inline-block; font-size: 12px; line-height: 16px;">分享到微信朋友圈</label>
			<div id="qrcode2" style="margin: 0 auto; padding: 2px 10px 0;">
				<canvas width="220" height="220"></canvas>
			</div>
			<p style="line-height: 20px; color: #666;">
				打开微信，点击底部的“发现”，<br>使用“扫一扫”即可将网页分享至朋友圈。
			</p>
			<span class="qrcode_close"
				style="position: absolute; top: 10px; right: 10px; cursor: pointer; font-size: 16px; color: #999; font-weight: bold;">×</span>
		</div>
		<!-- 验证码登录页面开始 -->
		<div class="zz"
			style="width: 100%; height: 100%; background-color: #000; background: rgba(0, 0, 0, 0.5); filter: alpha(opacity = 50); /*IE8支持*/ position: fixed; left: 0; top: 0; /*  filter:alpha(Opacity=20);  */ z-index: 9998; display: none;"></div>
		<div class="hy"
			style="position: fixed; left: 50%; top: 50%; margin-left: -250px; margin-top: -125px; background: #fff; z-index: 9999; display: none;">
			<h3>确定提交</h3>
			<em id="cancle"></em>
			<div style="margin-bottom: 1rem;">
				<div class="yzmdl" style="display: none;">
					<ul>
						<li><input id="yzmdlsjh" type="text" name="sjh"
							style="width: 255px;" placeholder="手机号" maxlength="11"></li>
						<li><button class="three" onclick="yzmdl();return false;"
								style="width: 260px; margin-top: 15px;">确&nbsp;&nbsp;&nbsp;定</button></li>
					</ul>
					<input type="reset" name="reset" style="display: none;">
				</div>
			</div>
		</div>
		<!-- 验证码登录页面结束 -->
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
<script type="text/javascript" src="My97DatePicker/WdatePicker.js"></script>
</html>