<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="hotel_files/share.css">
<script type="text/javascript" src="hotel_files/jquery_002.js"></script>
<script type="text/javascript" src="hotel_files/common.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>乐游旅游官方网站_中国专业旅游服务平台_快乐旅游 就在乐游！</title>
<meta name="description"
	content="乐游旅游，全国旅游连锁品牌，综合性旅游服务平台，提供出境游、国内游、周边游、自由行、机票预订、酒店预订主题定制等旅游全产业链服务，已在全国15个省30多个地市建立1600余家连锁门店。快乐旅游，就在乐游，全国旅游咨询热线：4000-121-888">
<meta name="keywords"
	content="乐游旅游,乐游旅游官网,旅游连锁,旅行社加盟,旅游分销平台,乐游美国,乐游邮轮,乐年汇">
<link rel="shortcut icon" type="image/x-icon"
	href="http://www.loyoyo.com/xtfsq/themes/default/ppgl/loyoyo.com/favicon.ico?timestamp=2015090216">
<link rel="stylesheet" type="text/css" href="hotel_files/cpgllist.css">
<link rel="stylesheet" type="text/css" href="hotel_files/pagination.css">
<link rel="stylesheet" type="text/css" href="css/hotel.css">
<script type="text/javascript" src="js/hotel.js"></script>

</head>
<body>
	<!-- 嵌入头部 -->
	<%@ include file="common/hread.jsp"%>
	<!-- 嵌入页面导航 -->
	<%@ include file="common/left.jsp"%>


	<!--页面主体开始-->
	<div class="main main-cplist">

		<div class="main-in">
			<div class="cxtj">
				<div class="cxtj_xz">
					<dl id="nyxz">
						<dt>产品搜索 &gt;</dt>
						<dd id="yxcyfs" style="display: none;">
							出游方式&nbsp;<a></a><span><img
								src="hotel_files/cplb_cancle.png"></span>
						</dd>
						<dd id="yxzdscj" style="display: none;">
							价格区间&nbsp;<a></a><span><img
								src="hotel_files/cplb_cancle.png"></span>
						</dd>
						<dd id="yxxcts" style="display: none;">
							行程天数&nbsp;<a></a><span><img
								src="hotel_files/cplb_cancle.png"></span>
						</dd>
						<dd id="yxmdd" style="display: none;">
							目的地&nbsp;<a></a><span><img
								src="hotel_files/cplb_cancle.png"></span>
						</dd>
                        <a href="javascript:qktj();" style="color:#333;font-size:16px;">清空条件</a>
					</dl>
				</div>
				<div id="spans">
					0家酒店符合您选择的条件:
				</div> 	
				<ul>
					<li>
						<div class="xzbt">价格区间</div>
						<dl id="zdscj">
							<dd id="" class="current" onClick="ddAll(this);">全部</dd>
							<dd id="200" class="" onClick="add(this,'price');">200以下</dd>
							<dd id="200-400" class="" onClick="add(this,'price');">200-400元</dd>
							<dd id="400-600" class="" onClick="add(this,'price');">400-600元</dd>
							<dd id="600-1000" class="" onClick="add(this,'price');">600-1000元</dd>
							<dd id="1000-3000" class="" onClick="add(this,'price');">1000-3000元</dd>
							<dd id="3000" class="" onClick="add(this,'price');">3000以上</dd>
						</dl>
					</li>
					<li>
						<div class="xzbt">星级档次</div>
						<dl id="">
							<dd id="" class="current" onClick="">全部</dd>
							<dd id="" class="" onClick="add(this,'xin');">一星酒店</dd>
							<dd id="" class="" onClick="add(this,'xin');">两星酒店</dd>
							<dd id="" class="">三星酒店</dd>
							<dd id="" class="">四星酒店</dd>
							<dd id="" class="">五星酒店</dd>
						</dl>
					</li>
					<li>
						<div class="xzbt">酒店类型</div>
						<dl id="">
							<dd id="" class="current">全部</dd>
							<dd id="" class="">国内酒店</dd>
							<dd id="" class="">港澳台酒店</dd>
							<dd id="" class="">民宿客栈</dd>
							<dd id="" class="">境外酒店</dd>
						</dl>
					</li>
					<li id="xzmdd">
						<div class="xzbt" style="letter-spacing: 5px;">所在城市</div>
						<dl id="mdd" class="more">
							<dd id="" class="current">全部</dd>
							<dd id="1f8ec47126fe44439481a91dfd1f029a" class="">张家界</dd>
							<dd id="a7625717b2904486aa967e803151496b" class="">凤凰</dd>
							<dd id="2421cbf3e0c043e89af4bb1f658e11aa" class="">方特</dd>
							<dd id="5aa5a6ff2ba7492190c65822a77a0b3d" class="">浏阳</dd>
							<dd id="f65d18cbb7084b2987f80bd737a22e3c" class="">岳阳</dd>
							<dd id="0c4702fedf7542148507ae2cbf3f450c" class="">长沙周边</dd>
							<dd id="d415904d2870481cb3ee8595ef6aae08" class="">衡山</dd>
							<dd id="6fd4df3b93f8420498e580b13bb56976" class="">温泉</dd>
							<dd id="b64f52871101496e862f790a7521cb95" class="">长韶</dd>
							<dd id="4c2fb1140e8342adb5dea764d7f2df4d" class="">郴州</dd>
							<dd id="d8646bef2e8347909596fe686132f829" class="">崀山</dd>
							<dd id="a9898141093a41dd8bac692e2c636f37" class="">张凤连线</dd>
							<dd id="274e502c1c8746f4b1cb405b04021c90" class="">湘西</dd>
							<dd id="b3e0733f24774aceadc8d8f49d12d315" class="">怀化</dd>
							<dd id="53162a470985476e940d3b9884f22940" class="">华东五市</dd>
							<dd id="51c27b840b7f496095a241dba889f941" class="">上海</dd>
							<dd id="5811b0fb66f4443da5e030f41e30b9ce" class="">江苏</dd>
							<dd id="da6ccff04c0e486b9b19677098d83a87" class="">浙江</dd>
							<dd id="88b3e4f5b57e4bf2b79117d64aec90d3" class="">安徽</dd>
							<dd id="865d2e556e29421fb12beb9a8be0b5af" class="">福建</dd>
							<dd id="bcadf913fa2448a0be25b15905d4a425" class="">山东</dd>
							<dd id="06293690dedd483bba25293a8cbd1dfa" class="">海南</dd>
							<dd id="de86cfba718a447aa95da4db4b2767d4" class="">广西</dd>
							<dd id="a7a70ca070934e44906a2102e863b3f7" class="">江西</dd>
							<dd id="13778e90cba4416b931388374356bcd6" class="">湖南</dd>
							<dd id="a4bf04d62582465797862c3664612408" class="">广东</dd>
							<dd id="45b5920958684979b810373d246dfbe4" class="">北京</dd>
							<dd id="5591e2adcbcd4fecbcfdf2e30b16b858" class="">河北</dd>
							<dd id="074108987cd44878a98c65898edc2995" class="">陕西</dd>
							<dd id="e43ffbdf6c574018899bae9eae14d55d" class="">河南</dd>
							<dd id="4c79f7920f7b428d8fa4954be877a583" class="">新疆</dd>
							<dd id="17bfead357d84ad78b6255c6c2e39713" class="">宁夏</dd>
							<dd id="b7230d56493144d0b21808fe63e70030" class="">东北三省</dd>
							<dd id="8507db744e4340a5a033e5dc0c0e7dcf" class="">云南</dd>
							<dd id="e6d002e9b0e0413b929abe713146aa86" class="">西藏</dd>
							<dd id="31d6f400998d47d69d8713028598bb7c" class="">贵州</dd>
							<dd id="a7061e0ea55d4c8b9caa6fad141fead0" class="">四川</dd>
							<dd id="f5a93862c5ee477a97dff36314df1bda" class="">重庆</dd>
							<dd id="6e72605f6236484a9f4476d8c65cbd46" class="">湖北</dd>
							<dd id="287c58baf8e44967b78740c4041bc863" class="">汽车票</dd>
							<dd id="c2cdc0b5c18041c98a852a77ba61f467" class="">车辆</dd>
							<dd id="4fff874134094075a286853e9996d7af" class="">机+X</dd>
							<dd id="23c8d243b12a45eca1a86f8252ab61d5" class="">日本</dd>
							<dd id="86ba9765185e4ea7a2f54554515ea193" class="">香港</dd>
							<dd id="f4969e66cd41466c8443fbdd0bb61777" class="">澳门</dd>
							<dd id="7669e41f8f5749a5b562fdf3e7c8a69d" class="">港澳</dd>
							<dd id="6d904d48f7804cb4b8997adf60524226" class="">泰国</dd>
							<dd id="ccdb39083d5d4d7f871883669501693e" class="">泰新马</dd>
							<dd id="15c34198172a4075b242df2437549a02" class="">芽庄</dd>
							<dd id="9fa3a0492e0c4609ba20cd810e69209d" class="">马来西亚</dd>
							<dd id="f2a6d4bc2e0c4ef6bd36691b1157a36c" class="">新马</dd>
							<dd id="efd3f3aab7d64be59dd6a73ef80b931a" class="">老挝</dd>
							<dd id="917b99ead6974f7b98c3fe3fbc603acf" class="">越南</dd>
							<dd id="e8b4c25da4a64e99b3e8b0e092baa0f4" class="">清迈</dd>
							<dd id="d966593554024a8d96610778a69131f5" class="">广西+越南</dd>
							<dd id="0de397d790de4097b8e79b1ce3e5c7a8" class="">柬埔寨</dd>
							<dd id="104f344800c34079acec84bf77f9a318" class="">越柬</dd>
							<dd id="2f641e4cf540416a95c83dab77c2e7e2" class="">尼泊尔</dd>
							<dd id="8d32752ff81b4766afe4870a52185804" class="">普吉岛</dd>
							<dd id="e216b4f6103c4348bdf4678787e1b545" class="">长滩岛</dd>
							<dd id="3a74475df9204dff9f7fb97e18ba5c99" class="">沙巴</dd>
							<dd id="83a4d8d18ad24485b66a564de1c10d26" class="">巴厘岛</dd>
							<dd id="bc9c9752924e408cad532c2a4f944e23" class="">斯里兰卡</dd>
							<dd id="2881d168694c47bb80662f7c7a74ef5f" class="">美国</dd>
							<dd id="e255bdab598d474db9a7b2b5ce579876" class="">欧洲</dd>
							<dd id="487cd4b55906499eb563b90ff5197db8" class="">英国</dd>
							<dd id="b241e10181904183b53b3278be8fa078" class="">俄罗斯</dd>
							<dd id="88e71a529a4e440f9c3a3481a79564f5" class="">西班牙</dd>
							<dd id="bc1827cbdf3e4190b8abc4c093594223" class="">迪拜</dd>
							<dd id="8e71b69eff054aa5876b6dfcb30912d5" class="">埃及</dd>
							<dd id="46603df514f946c880115db2f5a0bad8" class="">土耳其</dd>
							<dd id="80bcdd85b8704976aa2d7b15639a086f" class="">埃土</dd>
							<dd id="40bc9e44806a4e5193446d8adf25fe7b" class="">肯尼亚</dd>
							<dd id="d847c2c16c9149dbbdea7998b1d8c4ce" class="">南非</dd>
							<dd id="106714782a494e13b450fdee84397837" class="">澳大利亚</dd>
							<dd id="3a4f900863884347a5785c5ceddc54cc" class="">丽星邮轮</dd>
							<dd id="f5469d1cc66842f6a926536e472ec192" class="">歌诗达邮轮</dd>
							<dd id="a9387ebdef274cfdbc37f9e899192390" class="">诺唯真邮轮</dd>
							<dd id="65aadd403be849e09f8a113226268a44" class="">签证</dd>
							<span class="mdd_gd" id="mdd_gd" style="">更多 <i></i></span>
						</dl>
					</li>
				</ul>
			</div>
			<div class="content">
				<div class="px">
					<ul>
						<li id="zh" class="currentup">综合</li>
						<li id="zdscj" class="">价格<em></em></li>
						<li id="xcts" class="">天数<em></em></li>
					</ul>
				</div>
				<div id="cplist" style="position: relative; min-height: 520px;">
					<div class="cpzs">
						<a
							href="http://www.loyoyo.com/module/cpgl/view.do?cpid=b210ea079b7b4f4a9e2632b04426fb5c&amp;mk="
							target="_blank"> <img
							src="images/wz.png"
							onerror="this.src='/xtfsq/themes/images/default.jpg?timestamp=2015090216'">
							<!-- <div class="cpbq">跟团游</div> -->
						</a>
						<div class="cpmc">
							<div class="cppic">
								<a href="hotelDetails.jsp" target="_blank">乌镇大墅HOTEL民宿
								</a>
							</div>
							<div class="clear"></div>
							<p>酒店详情：乌镇大墅HOTEL民宿位于乌镇西栅南门约800米处，是一家现代感装修风格的民宿，占地面积约1000平方，
							共20间客房，小店经营者是时装设计师出身，有着自己对时尚的理解。从前期硬装的装修图纸规划到后期一凳一椅
							的软装都是从上海杭州等地请来的专业团队悉心打造。用心做人，用良心做事，是小店的宗旨。期待与您的合作。</p>
							<div class="cpxqnr">
								<p>酒店地址：慈云路537号至543号，近西栅景区南门售票点约800处 </p>
								<p>酒店房型：标准单人间、标准双人间、大床房</p>
							</div>
						</div>
						<div class="jg">
							<span><em>¥</em><b>300</b>起</span>
							<button style="outline: none; margin-top: 15px;" type="button"
								onclick="javascript:window.open('/module/cpgl/view.do?cpid=b210ea079b7b4f4a9e2632b04426fb5c&amp;mk=')">立即预订</button>
						</div>
					</div>
					
					<div class="M-box2" style="margin: 0 0 20px">
						<span class="active">1</span><a
							href="#"
							data-page="2">2</a><a
							href="#"
							class="next">下页</a>
					</div>
				</div>
			</div>
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
	<script src="hotel_files/jquery.js"></script>
</body>
</html>