/**
 * pagination分页插件
 * @version 1.1.2
 * @author mss
 *
 * @调用方法
 * $(selector).pagination();
 * 
 * @更新日志
 * 2016-07-25：修复click重复事件
 */
;(function($,window,document,undefined){

	//配置参数
	var defaults = {
		totalData:0,			//数据总条数
		showData:0,				//每页显示的条数
		pageCount:9,			//总页数,默认为9
		current:1,				//当前第几页
		prevCls:'prev',			//上一页class
		nextCls:'next',			//下一页class
		prevContent:'<',		//上一页内容
		nextContent:'>',		//下一页内容
		activeCls:'active',		//当前页选中状态
		coping:false,			//首页和尾页
		homePage:'',			//首页节点内容
		endPage:'',				//尾页节点内容
		n:7,					//显示个数
		jump:false,				//跳转到指定页数
		ajax:true,				//异步请求
		jumpIptCls:'jump-ipt',	//文本框内容
		jumpBtnCls:'jump-btn',	//跳转按钮
		jumpBtn:'跳转',			//跳转按钮文本
		url:window.location.href,//url
		callback:function(){}	//回调
	};

	var Pagination = function(element,options){
		//全局变量
		var opts = options,//配置
			current,//当前页
			$document = $(document),
			$obj = $(element);//容器

		/**
		 * 设置总页数
		 * @param int page 页码
		 * @return opts.pageCount 总页数配置
		 */
		this.setTotalPage = function(page){
			return opts.pageCount = page;
		};

		/**
		 * 获取总页数
		 * @return int p 总页数
		 */
		this.getTotalPage = function(){
			var p = opts.totalData || opts.showData ? Math.ceil(parseInt(opts.totalData) / opts.showData) : opts.pageCount;
			return p;
		};

		//获取当前页
		this.getCurrent = function(){
			return current;
		};
		
		this.setPage = function(i){
			var href = "";
			if(opts.ajax==true){
				href = "javascript:;"
			}else{
				if(opts.url.indexOf("?") > 0 ){
					href = opts.url+"&p="+i;
				}else{
					href = opts.url+"?p="+i;
				}
			}
			return href;
		}

		/**
		 * 填充数据
		 * @param int index 页码
		 */
		this.filling = function(index){
			current=index||opts.current;//当前页码
			var html='',p=this.getTotalPage(),c1=parseInt(current)-3,c2=parseInt(current)+3,n=opts.n;
			var s=p>n?(c1>1&&c2<p?c1:c2>=p?p-n+1:1):1,e=p>n?(c1>1&&c2<p?c2:c2>=p?p:n):p;
			if(current > 1) html+='<a href="'+this.setPage(current-1)+'" class="'+opts.prevCls+'">'+opts.prevContent+'</a>';
			if(((c1>1&&c2<p)||c2>=p)&&p>n) html+='<a href="'+this.setPage(1)+'" data-page="1">首页</a><span>...</span>';
			for(;s<=e;s++){
				if(s != current) html+='<a href="'+this.setPage(s)+'" data-page="'+s+'">'+s+'</a>';
				else html+='<span class="'+opts.activeCls+'">'+s+'</span>';
			}
			if(((c1>1&&c2<p)||c1<=1)&&p>n) html+='<span>...</span><a href="'+this.setPage(p)+'" data-page="'+p+'">尾页</a>';
			if(current < p) html+='<a href="'+this.setPage(parseInt(current)+1)+'" class="'+opts.nextCls+'">'+opts.nextContent+'</a>'
			html += opts.jump ? '<input type="text" class="'+opts.jumpIptCls+'"><a href="javascript:;" class="'+opts.jumpBtnCls+'">'+opts.jumpBtn+'</a>' : '';
			$obj.empty().html(html);
		};

		//绑定事件
		this.eventBind = function(){
			var self = this;
			var pageCount = this.getTotalPage();//总页数
			$obj.off().on('click','a',function(){
				if($(this).hasClass(opts.nextCls)){
					var index = parseInt($obj.find('.'+opts.activeCls).text()) + 1;
				}else if($(this).hasClass(opts.prevCls)){
					var index = parseInt($obj.find('.'+opts.activeCls).text()) - 1;
				}else if($(this).hasClass(opts.jumpBtnCls)){
					if($obj.find('.'+opts.jumpIptCls).val() !== ''){
						var index = parseInt($obj.find('.'+opts.jumpIptCls).val());
					}else{
						return;
					}
				}else{
					var index = parseInt($(this).data('page'));
				}
				self.filling(index);
				typeof opts.callback === 'function' && opts.callback(self);
			});
			//输入跳转的页码
			$obj.on('input propertychange','.'+opts.jumpIptCls,function(){
				var $this = $(this);
				var val = $this.val();
				var reg = /[^\d]/g;
	            if (reg.test(val)) {
	                $this.val(val.replace(reg, ''));
	            }
	            (parseInt(val) > pageCount) && $this.val(pageCount);
	            if(parseInt(val) === 0){//最小值为1
	            	$this.val(1);
	            }
			});
			//回车跳转指定页码
			$document.keydown(function(e){
				var self = this;
		        if(e.keyCode == 13 && $obj.find('.'+opts.jumpIptCls).val()){
		        	var index = parseInt($obj.find('.'+opts.jumpIptCls).val());
		            self.filling(index);
					typeof opts.callback === 'function' && opts.callback(self);
		        }
		    });
		};

		//初始化
		this.init = function(){
			if(opts.pageCount<2)$obj.empty();
			else{
				this.filling(opts.current);
				if(opts.ajax==true)this.eventBind();
			}
		};
		this.init();
	};

	$.fn.pagination = function(parameter,callback){
		if(typeof parameter == 'function'){//重载
			callback = parameter;
			parameter = {};
		}else{
			parameter = parameter || {};
			callback = callback || function(){};
		}
		var options = $.extend({},defaults,parameter);
		return this.each(function(){
			var pagination = new Pagination(this, options);
			callback(pagination);
		});
	};

})(jQuery,window,document);