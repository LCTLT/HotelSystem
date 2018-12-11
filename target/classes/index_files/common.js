var _markfs="",_markgs="",_markrs="",_markus="",_markdh=",",_markfh=";",_markmh=":",_markdy="=",_markzhx="-",_markxhx="_";

//日期或月份不足两位前面补0
function changeNumber(num){
	if(num<10){return "0"+num;}else{return num+"";}
}

/**
 *1、身份证号码[1-->17位]分别对应的系数为[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2]
 *2、将[前17位数字*系数]之和，再除以11得到余数[0-->10]对应身份证号码最后一位的顺序为[1,0,'X',9,8,7,6,5,4,3,2]
 */
function validCard(cardId,csrq,xb){
	var arr = new Array(3);
	cardId = cardId.toUpperCase();//字母转大写
    if(cardId.length==18){//∑(ai×Wi)(mod 11),18位身份证需要验证最后一位校验位
    	var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
        if(!city[cardId.substr(0,2)]){
        	arr[0]="身份证地址编码错误";
        	return arr;
        }
        var cardIdArr=cardId.split('');
        var factor=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];//加权因子
        var parity=[1,0,'X',9,8,7,6,5,4,3,2];//校验位
        var sum=0,ai=0,wi=0;
        for (var i=0;i<17;i++){
            ai=cardIdArr[i];
            wi=factor[i];
            sum+=ai*wi;
        }
        var last=parity[sum%11];
        if(parity[sum%11]!=cardIdArr[17]){
        	arr[0]="身份证号校验错误";
        	return arr;
        }else{
        	if(xb!=null&&((cardId.substr(16,1)%2==0&&xb=="01")||(cardId.substr(16,1)%2!=0&&xb=="02"))){
            	arr[0]="身份证性别校验错误";
            	return arr;
            }
        	if(csrq!=null&&cardId.substr(6,8)!=csrq.replace(/-/g, "")){
            	arr[0]="身份证出生日期校验错误";
            	return arr;
            }
        }
    }else{
    	arr[0]="身份证位数校验错误";
    	return arr;
    }
    arr[0]="true";
    arr[1]=cardId.substr(6,4)+"-"+cardId.substr(10,2)+"-"+cardId.substr(12,2);//生日
    arr[2]=cardId.substr(16,1)%2!=0?"01":"02";//性别
    return arr;
}

function toast(message){
	if($('.toast-container').length) return;
	var toast = document.createElement('div');
	toast.className = 'toast-container';
	toast.innerHTML = '<div class="toast-message">' + message + '</div>';
	document.body.appendChild(toast);
	setTimeout(function() {
		document.body.removeChild(toast);
	}, 3000);
}

/**
 * 获取字符串日期拼接
 * @param dateStr  例如："2015-01-18"
 * @param addNum  数字类型，不增减为0
 * @param flag  true--返回带周几，其他不返回
 * @returns {String} 返回带周几的日期
 */
function getDateAndWeek(dateStr,addNum,flag){
	var resDate = "";
	var date = dateStr==""?new Date():new Date(dateStr.replace(/-/g,"/"));
	date.setDate(date.getDate()+(isNaN(addNum)?0:parseInt(addNum)));
	resDate = date.getFullYear()+"-"+changeNumber((date.getMonth()+1))+"-"+changeNumber(date.getDate());
	resDate = resDate + (flag==true?("（"+changeWeek(date.getDay())+"）"):"");
	return resDate;
}

function getCookie(key)
{
    if (document.cookie!=null && document.cookie.length>0) {
		var start = document.cookie.indexOf(key);
		if(start!=-1){
			start = start+key.length+1;
			var end = document.cookie.indexOf(";",start);
			if (end==-1) end = document.cookie.length;
			return unescape(document.cookie.substring(start,end));
		}
	}
    return null;
}

/**
 * MAP对象，实现MAP功能
 * var map = new Map();map.put("key", "value");var val = map.get("key");
 */
function Map(){
    this.elements = new Array();
    
    this.isEmpty = function() {//判断MAP是否为空
        return (this.elements.length < 1);
    };
    
    this.clear = function() {//删除MAP所有元素
        this.elements = new Array();
    };
    
    this.size = function() {//获取MAP元素个数
        return this.elements.length;
    };
    
    this.put = function(key, value) {//向MAP中增加元素（key, value)
        this.elements.push( {
            key : key,
            value : value
        });
    };
    
    this.get = function(key) {//获取指定KEY的元素值VALUE，失败返回false
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == key) {
                    return this.elements[i].value;
                }
            }
        } catch (e) {
            return false;
        }
        return false;
    };
    
    this.remove = function(key) {//删除指定KEY的元素，成功返回true，失败返回false
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == key) {
                    this.elements.splice(i, 1);
                    return true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };
    
    this.containsKey = function(key) {//判断MAP中是否含有指定KEY的元素
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == key) {
                    bln = true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };
    
    this.containsValue = function(value) {//判断MAP中是否含有指定VALUE的元素
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].value == value) {
                    bln = true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };
   
    this.keys = function() { //获取MAP中所有KEY的数组（ARRAY）
        var arr = new Array();
        for (i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].key);
        }
        return arr;
    };
    
    this.values = function() {//获取MAP中所有VALUE的数组（ARRAY）
        var arr = new Array();
        for (i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].value);
        }
        return arr;
    };
    
    this.keysvalues = function() {//获取MAP中所有KEY:VALUE的字符串（STRING）
        var str = "";
        for (i = 0; i < this.elements.length; i++) {
            str += ","+this.elements[i].key+":"+this.elements[i].value;
        }
        return str.substring(1);
    };
}