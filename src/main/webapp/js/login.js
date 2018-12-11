
if(window.top.location.href!=location.href)window.top.location.href=window.top.location.href;
			
			function login(){
					if(!(/(^[1][3456789][0-9]{9}$)/.test($("#sjh").val()))){
						$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
						$("#loginTip").html("手机格式不正确");
					}else if($("#mm").val() == ""||!(/^[a-zA-Z0-9\~\`\!\@#$\%\^\&\*\(\)\_\-\+\=\{\[\}\]\|\\\:\;\"\'\<\,\>\.\?\/]{6,32}$/.test($("#mm").val()))){
						$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
						$("#loginTip").html("密码格式不正确");
					}else{
						$.post("loginUser",{phone:$("#sjh").val(),},function(tt){
							 if(tt==2){
								$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
								$("#loginTip").html("账号不存在!");
								return;
							} 
						});
						$.post("login",{phone:$("#sjh").val(),password:$("#mm").val()},function(dd){
							if(dd==1){
								window.location="index.jsp";
							}else if(dd==2){
								$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
								$("#loginTip").html("账号或密码错误!");
							}							
						});
						
					}
					
			}
			$(function(){
				$(".sidebar").hide();
				$('input').focus(function(e) {
					$(this).addClass('current').siblings().removeClass('current');
				});
			});