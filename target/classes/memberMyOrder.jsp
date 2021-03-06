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
	src="member_files/common.js?timestamp=2015090216"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>乐游旅游</title>
<link rel="shortcut icon" type="image/x-icon"
	href="http://www.loyoyo.com/favicon.ico?timestamp=2015090216">
<link rel="stylesheet" type="text/css"
	href="member_files/hygl.css?timestamp=2015090216">
<link rel="stylesheet" type="text/css"
	href="member_files/pagination.css?timestamp=2015090216">
<script type="text/javascript"
	src="member_files/jquery-qrcode.min.js?timestamp=2015090216"></script>
<script type="text/javascript">
		var status="";
		function loadOrderList(status,sort,page,callback){
			$.ajax({
				type:"POST",
				url:"/module/ddgl/list.do",
				data:{ddzt:status,sort:sort,page:page},
				dataType:"json",
				async:true,
				success:function(result){
					$(".ddxx").html("");
					if (result.key=="2") {
						//暂无订单
					}else{
						var html = '';
		        		$.each(result.rows,function(idx,item){
		        			html += '<li>';
		        			html += '<span style="background: #f7f7f7;">订单编号：'+item.ddbh+'</span>';
		        			html += '<div>';
		        			html += '<a href="/module/cpgl/view.do?cpid='+item.cpid+'" target="_blank">';
		        			if(item.cptp==null||item.cptp==''){
				           		html += ' <img src="/xtfsq/themes/images/default.jpg?timestamp=2015090216">';
				           	}else{
				           		html += ' <img src="http://sc-fx-fxtfsq.cloudtravel.net/'+item.cptp+'" onerror="this.src=\'/xtfsq/themes/images/default.jpg?timestamp=2015090216\'">';
				           	}
		        			html += '</a>';
		        			html += '<p><a href="/module/cpgl/view.do?cpid='+item.cpid+'" style="text-decoration:none" target="_blank">'+item.cpmc+'</a></p>';
		        			html += '<span>'+item.cfrq+'</span>';
		        			html += '<span class="orange">¥'+item.htje+'</span>';
		        			html += '<span class="orange">';
		       				if(item.ddzt=='01'||item.ddzt=='02'){
		                      	html+='待确认';
		                     }else if(item.ddzt=='03'){
		                     	html+='待支付';
		                     }else if(item.ddzt=='04'||item.ddzt=='05'){
		                     	html+='已支付';
		                     }else if(item.ddzt=='06'||item.ddzt=='07'||item.ddzt=='08'){
		                     	html+='已取消';
		                    }
		        			html += '</span>';
		        			html += '<span class="sj">'+item.ydsj.split(" ")[0]+'<br>'+item.ydsj.split(" ")[1]+'</span>';
		        			html += '<span class="ddxx-box" style="margin-left:0"';
		        			if(item.zflx=="03" && item.ddzt=="03" ){
				        		html+=' style=""><button ddid="'+item.ddid+'" appid="'+item.appid+'" ssfb="'+item.ssfb+'" class="zf">立即支付</button>';//未支付、部分支付显示产即支付，变更支付不为空则显示变更支付，二选一
				        	}else if(item.bgzf!=null && item.bgzf!=''){
				        		html+=' style=""><button ddid="'+item.ddid+'" appid="'+item.appid+'" ssfb="'+item.ssfb+'" class="zf bgzf">变更支付</button>';
				        	}else if(item.blkh=="0" && item.bgzt!="02"){
				        		html+=' style=""><button  onclick="bllk(\''+item.mdid+'\',\''+item.ddid+'\');">补录旅客</button>';
				        	}else{
				        		html+='>';
				        	}
		        			html += '<a href="/module/ddgl/page.do?page=view&ddid='+item.ddid+'" style="margin-left:13px;height:28px; line-height:30px;display: inline-block;" target="_blank">订单详情</a>'
		        			html += '</span>';
		        			html += '</div>';
		        			html += '</li>';
		                });
		        		$(".ddxx").append(html);
		       		}
					$('.M-box2').pagination({
				 		pageCount:Math.ceil(result.total/10),
				        coping:true,
				        current:(page+1),
				        homePage:'首页',
				        endPage:'末页',
				        prevContent:'上页',
				        nextContent:'下页',
				        callback:function(index){
				        	page=index.getCurrent()-1;
				        	$(".ddxx").html("");
				        	loadOrderList(status,'desc',page,setHeight);
				        }
				    });
					typeof(callback) == 'function' && callback();
				},error:function(){parent.toast("系统繁忙，请稍后重试");}
			});
		}
		//去产品详情页
		function goCpView(cpid){
			window.location.href="/module/cpgl/view.do?cpid="+cpid+"";
		}
		//补录旅客
		function bllk(mdid,ddid){
			window.location.href="/module/ddgl/page.do?page=bllk&mdid="+mdid+"&ddid="+ddid;
		}
		function setHeight(){
			var height=$(".content-right").height()+61;
			$(window.parent.document).find("#hycenter").css("height",""+height+"px");
		}
		$(function(){
			loadOrderList('','desc',0,setHeight);
			$('.ddzt li').click(function(e) {
				if($('.ddzt li').index($(this))==0)status='';
				else if($('.ddzt li').index($(this))==1)status='01,02';
				else if($('.ddzt li').index($(this))==2)status='03';
				else if($('.ddzt li').index($(this))==3)status='04,05';
				else if($('.ddzt li').index($(this))==4)status='06,07,08';
				else return;
				$(this).addClass("current").siblings().removeClass("current");
				loadOrderList(status,'desc',0,setHeight);
			});
			$("body").on("click",".zf",function(){
				$.ajax({
					type:"POST",
					url:"/module/ddgl/zf.do",
					data:{ddid:$(this).attr("ddid"),state:$(this).attr("ssfb")},
					dataType:"json",
					async:false,
					success:function(result){
						if(result.key=="2") parent.toast(result.value);
						else if(result.key=="1"){
							$(".tczz",parent.document).show();
							var data = $.parseJSON(result.value);
							var html='';
							html+='<div class="ddzf">'
							+'<h3><span class="wxzf"></span><em id="qxdd"></em></h3>'
							+'<div class="ddje">'
				        	+'<span class="ddbh">'+data.paymap.body+'</span>'
				        	+'<p>¥'+(data.paymap.total_fee/100).toFixed(2)+'</p>'
				       		+'</div>';
				        	if(data.zfan=='02') html+='<div style="text-align: center;color: #da8a0d;"><p style="font-size:14px;margin-bottom:10px;">订单金额'+data.htjebg1+'变更为'+data.htjebg2+'， 需支付'+(data.paymap.total_fee/100).toFixed(2)+'</p></div>';
				        	html+='<div class="zfan" style="text-align: center;">';
				       		if(data.code_url!=null && data.code_url!='')html+='<div id="qrcode"></div>';
				        	html+='</div>'
				        	+'<div style="text-align: center;">';
				       	 	if(data.code_url!=null && data.code_url!='')html+='<span>请通过微信扫码支付</span>';
				        	html+='</div>'
							$(window.parent.document.body).append(html);
				        	if(data.code_url!=null && data.code_url!=''){
								$('#qrcode',parent.document).qrcode({size:200,text: data.code_url,ecLevel:'H',mode:4,mSize:0.2,mPosX:0.5,mPosY:0.5,image:$('#img-buffer')[0]});
							}
				        	$("#qxdd",parent.document).bind("click",function(){
				        		$(".tczz",parent.document).hide();
				        		$(".ddzf",parent.document).remove();
				        		loadOrderList(status,'desc',0,setHeight);
							});
						}
					},
					error:function(){parent.toast("系统繁忙，请稍后重试");}
				})
			});
		})
	</script>
</head>
<body>
	<div class="content-right" style="padding: 20px 30px 40px 30px">
		<ul class="ddzt">
			<li class="current">全部</li>
			<li>待确认</li>
			<li>待支付</li>
			<li>已支付</li>
			<li>已取消</li>
			<li style="width: 509px; cursor: default;"></li>
		</ul>
		<div>
			<ul class="ddxx-tou">
				<li>订单信息</li>
				<li>出发日期</li>
				<li>订单金额</li>
				<li>订单状态</li>
				<li>预订时间</li>
				<li class="ddxx-cz">操作</li>
			</ul>
			<ul class="ddxx"></ul>
			<div class="M-box2"></div>
		</div>
	</div>
	<img id="img-buffer" style="display: none;"
		src="/xtfsq/themes/images/weixin.png?timestamp=2015090216">
	<script src="/xtfsq/themes/jquery.pagination.js?timestamp=2015090216"></script>
</body>
</html>