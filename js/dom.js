var aa="123";
console.log(aa);

//button.onclick=function(){
//alert("这是一个弹框");
//}
window.onload=function(){
	//当点击按钮时出现弹框
	var button=document.getElementsByClassName("button");
	console.log(button);
	button[0].onclick=function(){
		//当点击按钮时出现弹框
		//alert("这是一个按钮");
		var city=document.getElementsByClassName("city");
		console.log(city);
		city[0].style.display="none";
	}
	var pos=document.getElementsByClassName("pos")/*[0]*/;
	pos[0].onclick=function(){
		var city=document.getElementsByClassName("city");
		console.log(city);
		city[0].style.display="block";

	}
}//当页面加载时
//js
//当整个页面加载完成时才可以对元素进行操作
//获取元素document.getElementsByClassName("")[0];
//添加事件函数
//进行样式的操作
//引入远程数据
//关于城市的数据
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	method:"get",
	success:function(obj){

		var city=obj.data;
		console.log(city);
	}
})
//关于天气的情况
$.ajax({

   url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
   dataType:"jsonp",
	method:"get",
	success:function(obj){

		var tianqi=obj.data;
		console.log(tianqi)
		console.log(tianqi.weather.current_temperature);
		console.log(tianqi.weather.tomorrow_low_temperature)
		//var tem=tianqi.weather.
     }
})
	
