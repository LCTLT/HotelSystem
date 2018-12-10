if(window.top.location.href!=location.href)window.top.location.href=window.top.location.href;
			
			var handlerflag=true;
			function login(){
				if(handlerflag){
	  				handlerflag=false;
					if(!(/(^[1][3456789][0-9]{9}$)/.test($("#sjh").val()))){
						$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
						$("#loginTip").html("手机格式不正确");
					}else if($("#mm").val() == ""||!(/^[a-zA-Z0-9\~\`\!\@#$\%\^\&\*\(\)\_\-\+\=\{\[\}\]\|\\\:\;\"\'\<\,\>\.\?\/]{6,32}$/.test($("#mm").val()))){
						$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
						$("#loginTip").html("密码格式不正确");
					}else{
						$.ajax({
				    		type:"POST",
				    		url:"/login.do",
				    		data:$("#dlform").serialize(),
				    		dataType:"json",
				    		async:false,
				    		success:function(result){
				    			if(result.key=="2"){
				    				$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
				    				$("#loginTip").html("账号或密码错误");
				    			}else if(result.key=="3"){
				    				$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
				    				$("#loginTip").html("账号异常，请联系客服");
				    			}
				    			else window.location.href="/";
				    		},
				    		error:function(result){toast("系统繁忙，请稍后重试");}
				    	});
			  		}
					handlerflag=true;
				}
			}
			$(function(){
				$(".sidebar").hide();
				$('input').focus(function(e) {
					$(this).addClass('current').siblings().removeClass('current');
				});
			});