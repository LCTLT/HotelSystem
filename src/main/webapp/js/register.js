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
					}else if($.trim($("#dxyzm").val())==""){
						$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
	    				$("#loginTip").html('请输入短信验证码');
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
				    			}else if(result.key=="2"){
				    				$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
				    				$("#loginTip").html('手机号与验证码不匹配');
				    			}else if(result.key=="3"){
				    				$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
				    				$("#loginTip").html('短信验证码不正确');
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
							$("#hqyzm").prop("disabled",true);
							settime(60,function(msg){
			    				if(msg == "获取验证码"){
			    					$("#hqyzm").prop("disabled",false);
			    					$("#hqyzm").val(msg);
			    				}else{
			    					$("#hqyzm").prop("disabled",true);
			    					$("#hqyzm").val(msg);
			    				}
			    			});
							$.ajax({
					    		type:"POST",
					    		url:"/module/hygl/dxyzm.do",
					    		data:{sjh:$("#sjh").val(),yzmlx:"zcyzm"},
					    		dataType:"json",
					    		async:false,
					    		success:function(result){
					    			if(result.key=="1"){
					    				dxfsxz = false;
					    				$("#loginTip").removeClass("loginTipWarn").addClass("loginTipInfo");
					    				$("#loginTip").html("");
					    			}else if(result.key=="2"){
					    				$("#loginTip").removeClass("loginTipInfo").addClass("loginTipWarn");
					    				$("#loginTip").html(result.value);
					    				dxfsxz = true;
					    			}
					    		},
					    		error:function(){toast('系统繁忙，请稍后重试');dxfsxz=true;}
					    	});
						}
						handlerflag=true;
					}
				});
			});