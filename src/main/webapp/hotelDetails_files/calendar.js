var Calendar = {
	DATE: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
	curM: new Date().getMonth(),
	YEAR: new Date().getFullYear(),
	curDays: 0,
	CurTime: {},
	getCurTime: function() { //根据当前时间获得年月日和星期
		var me = {};
		me.Week = new Date(this.YEAR, this.curM, 1).getDay();
		me.Year = new Date(this.YEAR, this.curM, 1).getFullYear();
		me.Month = new Date(this.YEAR, this.curM, 1).getMonth();
		me.Day = new Date(this.YEAR, this.curM, 1).getDate();
		return me;
	},
	getMonthDays: function(y, m) { //获取月份有多少天
		if( (((y % 4)==0) && ((y % 100)!=0) || ((y % 400)==0)) && new Date(y, m,32).getMonth()==2 ){
			return 29;
		}else {
			return 32 - new Date(y, m, 32).getDate();
		}
	},
	getMonthHTML: function() { //获得日历年月份显示
		return this.CurTime.Year + '年' + ((this.CurTime.Month + 1)<10?'0'+(this.CurTime.Month + 1):(this.CurTime.Month + 1)) + '月';
	},
	setCurMonth: function(month) { //设置当前月FOR日历按钮
		this.DATE = new Date(this.YEAR, this.curM + month, this.CurTime.Day);
		this.curM = this.curM + month;
	},
	Bind: function() { //绑定上一月下一月按钮
		$("#preMonth").click(function(e) {
			Calendar.setCurMonth( - 1);
			Calendar.RenderCalendar();
		});
		$("#nextMonth").click(function(e) {
			Calendar.setCurMonth(1);
			Calendar.RenderCalendar();
		});
	},
	RenderCalendar: function(DATE) { //填充日历
		if(DATE){
			this.DATE = new Date(DATE.split("-")[0],DATE.split("-")[1]-1,DATE.split("-")[2]);
			this.curM = new Date(DATE.split("-")[0],DATE.split("-")[1]-1,DATE.split("-")[2]).getMonth();
			this.YEAR = new Date(DATE.split("-")[0],DATE.split("-")[1]-1,DATE.split("-")[2]).getFullYear();
		}
		this.CurTime = this.getCurTime();
		this.curDays = this.getMonthDays(this.CurTime.Year, this.curM);
		html = '';
		for (i = 0; i < this.CurTime.Week; i++) {
			html += '<li><a href="javascript:void(0);"></a></li>';
		}
		for (i = 1; i <= this.curDays; i++) {
			var d = this.CurTime.Year + '-' + (this.CurTime.Month + 1 < 10 ? '0' + (this.CurTime.Month + 1) : this.CurTime.Month + 1) + '-' + (i < 10 ? '0' + i: i);
			html += '<li><a href="javascript:void(0);"';
			if (CalendarData[d]){
				if ($("#cfrq").val()==d){
					html += ' class="valid selected" cfrq="' + this.CurTime.Year + '-' + (this.CurTime.Month + 1 < 10 ? '0' + (this.CurTime.Month + 1) : (this.CurTime.Month + 1)) + '-' + (i<10?'0'+i:i) + '" onclick="DDGL.getTc(\'' + this.CurTime.Year + '-' + (this.CurTime.Month + 1 < 10 ? '0' + (this.CurTime.Month + 1) : (this.CurTime.Month + 1)) + '-' + (i<10?'0'+i:i) + '\',\'' + CalendarData[d].CRSCJ + '\',\'' + CalendarData[d].ETSCJ + '\',this);"><span>' + i + '</span><p>¥' + CalendarData[d].CRSCJ+'起';
				}else{
					html += ' class="valid" cfrq="' + this.CurTime.Year + '-' + (this.CurTime.Month + 1 < 10 ? '0' + (this.CurTime.Month + 1) : (this.CurTime.Month + 1)) + '-' + (i<10?'0'+i:i) + '" onclick="DDGL.getTc(\'' + this.CurTime.Year + '-' + (this.CurTime.Month + 1 < 10 ? '0' + (this.CurTime.Month + 1) : (this.CurTime.Month + 1)) + '-' + (i<10?'0'+i:i) + '\',\'' + CalendarData[d].CRSCJ + '\',\'' + CalendarData[d].ETSCJ + '\',this);"><span>' + i + '</span><p>¥' + CalendarData[d].CRSCJ+'起';
				}
			} else {
				html += '>' + i + '<p>&nbsp;';
			}
			html += '</p></a></li>';
		}
		if ((this.CurTime.Week + this.curDays) % 7 > 0) {
			for (i = 0, t = 7 - (this.CurTime.Week + this.curDays) % 7; i < t; i++) {
				html += '<li><a href="javascript:void(0);"></a></li>';
			}
		}
		$("#dayhtml").html(html);
		$("#monthHTML").html(this.getMonthHTML());
	},
	Init: function(DATE) { //初始化
		this.RenderCalendar(DATE); //渲染日历
		this.Bind(); //绑定上一月下一月按钮事件
	}
}