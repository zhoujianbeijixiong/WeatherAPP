/*
* @Author: Administrator
* @Date:   2018-01-20 08:54:33
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-21 09:05:29
*/
//引入远程数据
//关于城市的信息
var city;  //全局变量
var tianqi;
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
    dataType:"jsonp",
    method:"get",
    success:function(obj){
    	city=obj.data;
    	console.log(city);
    }
 })
//获取天气信息
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
	dataType:"jsonp",
	method:"get",
	success:function(obj){
		tianqi=obj.data;//var的元素可能定义
		console.log(tianqi);
	}
})
//页面加载函数
window.onload=function(){
    update();
}
//获取点击城市的数据

//获取数据的函数



window.onload=function(){
  update();
   //页面  交互
  var pos=document.getElementsByClassName("pos")[0];
  //点击城市出现城市详情页
  var cityBox=document.getElementsByClassName("city")[0];
  pos.onclick=function(){
  	cityBox.style.display="block";
  }
  //出现点击城市情况
   var BOX=$(".city .citys .con .box");//空格 大写
   /*console.log(BOX);*/
   for(let i in BOX){
    BOX[i].onclick=function(){
    	var chengshi=this.innerHTML;
    	/*console.log(chengshi);*/
    	//加载页面
    	AJAX(chengshi);
    	//cityBox.style.display="none";
    	
    }

   }
   /*BOX.onclick=function(){

   	var chengshi
   }*/
    //搜索
    var searchBox=document.getElementsByClassName("searchBox")[0];
    var button=document.getElementsByClassName("button")[0];
    var text;
    //console.log(button);
    searchBox.onfocus=function(){

       button.innerHTML="确认";
       text=searchBox.value;
       //console.log(text);
        /*for(let i in city){
       	for(let j in city[i]){
       	}*/
       }

       
       //console.log(neirong);
       button.onclick=function(){
       	var neirong=button.innerHTML;
       if(neirong=="取消"){

       	var city3=document.getElementsByClassName("city")[0];
       	city3.style.display="none";
       }else{
        //console.log(i);

       	for(let i in city){
       		//console.log(i);
       		for(let j in city[i]){
       			if(text==j){   //j是所有的市
       				AJAX(text);
       				return;

       			} else{
       				alert("没有次天气的情况");
       				return;
       			}
       		}
       	}
       }
    //可能缺少一个}
    }

}
function AJAX(str){
      $.ajax({
	  url:`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`,
	  dataType:"jsonp",
	  method:"get",
	  success:function(obj){
		tianqi=obj.data;//var的元素可能定义
		update();
		//console.log(tianqi);
		var city2=$(".city")[0];
		city2.style.display="none";

	   }
       })

}
function update(){
	var pos=document.getElementsByClassName("pos")[0];
	//console.log(pos);
	pos.innerHTML=tianqi.city;
    /*当前空气质量*/
	var quality_level=document.getElementsByTagName("h5")[0];//标签
	//console.log(quality_level);
	quality_level.innerHTML=tianqi.weather.quality_level;
	//当前温度
	var current_temperature=document.getElementsByClassName("title1")[0];
	//console.log(current_temperature);
	current_temperature.innerHTML=tianqi.weather.current_temperature+"°";
    var current_condition=document.getElementsByClassName("title2")[0];
    current_condition.innerHTML=tianqi.weather.current_condition;
    //当前风的方向
    var wind_direction=document.getElementsByClassName("wind_der")[0];
    wind_direction.innerHTML=tianqi.weather.wind_direction;
    //当前风的等级
    var wind_level=document.getElementsByClassName("wind_level")[0];
    wind_level.innerHTML=tianqi.weather.wind_level+"级";
    //今天的天气情况图表
    var today_icon=document.getElementsByClassName("conPic")[0];
    today_icon.style=`background-image:url("img/${tianqi.weather.dat_weather_icon_id}.png")`;
    //魔板字符串写法
    //console.log(today_icon);
    //明天的
    var tomorrow_icon=document.getElementsByClassName("tomorrow_icon")[0];
    tomorrow_icon.style=`background-image:url("img/${tianqi.weather.tomorrow_weather_icon_id}.png")`;//tabjian上的
    //今天的天气
    var current_condition=document.getElementsByClassName("con")[0];
    current_condition.innerHTML=tianqi.weather.current_condition;
    var current_condition=document.getElementsByClassName("con1")[0];
    current_condition.innerHTML=tianqi.weather.tomorrow_condition;
    //今天的最高温、最低温
    var current_temperature=document.getElementsByClassName("heigher")[0];
	//console.log(current_temperature);
	current_temperature.innerHTML=tianqi.weather.dat_high_temperature;
	var current_temperature=document.getElementsByClassName("lower")[0];
	//console.log(current_temperature);
	//明天的最高温、最低温
	current_temperature.innerHTML=tianqi.weather.dat_low_temperature;
	var current_temperature=document.getElementsByClassName("heigher1")[0];
	//console.log(current_temperature);
	current_temperature.innerHTML=tianqi.weather.tomorrow_high_temperature;
	var current_temperature=document.getElementsByClassName("lower1")[0];
	//console.log(current_temperature);
	current_temperature.innerHTML=tianqi.weather.tomorrow_low_temperature;

    //每小时的天气情况
    
    var hourlyArr=tianqi.weather.hourly_forecast;
    var wrap=document.getElementsByClassName("wrap")[0];
   
    for(let i in hourlyArr){
    	//console.log(hourlyArr[i].hour);获取的数据
    	var box1=document.createElement("div");//创建div元素
        box1.className="box";
        //创建box
       var time=document.createElement("div");
       //添加类名
       time.className="time";
       box1.appendChild(time);
       time.innerHTML=hourlyArr[i].hour+":00";

       var icon=document.createElement("div");
       icon.className="icon";
       box1.appendChild(icon);
    //修改样式
       icon.style=`background-image:url("img/${hourlyArr[i].weather_icon_id}.png`

       var timeTem=document.createElement("div");
       timeTem.className="timeTem";
       box1.appendChild(timeTem);
       timeTem.innerHTML=hourlyArr[i].temperature+"°";
    
       wrap.appendChild(box1);
    }
    //查询城市的天气
    function AJAX(str){
  $.ajax({
  url: `https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`,
  dataType:"jsonp",
  type:"get",
  success:function(obj){
    weather=obj.data.weather;
    update();
    $(".fourth").css({"display":"none"});
    }
  })
}
    //未来15天的天气情况
    var dayArr=tianqi.weather.forecast_list;
    console.log(dayArr);
    var wrap1=document.getElementsByClassName("wrap1")[0];
    for(let i in dayArr){

    	var box2=document.createElement("div");
    	box2.className="box";
    	
    	var time=document.createElement("div");
    	time.className="time";
    	box2.appendChild(time);
    	time.innerHTML=dayArr[i].date;

        var weaCon=document.createElement("div");
        weaCon.className="weaCon";
        box2.appendChild(weaCon);
        weaCon.innerHTML=dayArr[i].condition;
        
        var icon2=document.createElement("div");
        icon2.className="icon2";
        box2.appendChild(icon2);
        icon2.style=`background-image:url("img/${dayArr[i].weather_icon_id}.png`;

        var timeTem=document.createElement("div");
        timeTem.className="timeTem";
        box2.appendChild(timeTem);
        timeTem.innerHTML=dayArr[i].high_temperature;

        var timeTem=document.createElement("div");
        timeTem.className="timeTem";
        box2.appendChild(timeTem);
        timeTem.innerHTML=dayArr[i].low_temperature;

        var weaCon=document.createElement("div");
        weaCon.className="weaCon";
        box2.appendChild(weaCon);
        weaCon.innerHTML=dayArr[i].wind_direction;


        var weaCon2=document.createElement("div");
        weaCon2.className="weaCon2";
        box2.appendChild(weaCon2);
        weaCon2.innerHTML=dayArr[i].wind_level;

    	wrap1.appendChild(box2);
    	    }
    	    //关于城市获取情况
    	    var city1=document.getElementsByClassName("city")[0];
    	    console.log(city1);
    	    for(let i in city){
            console.log(city[i]);
    	    	var citys=document.createElement("div");
    	    	citys.className="citys";
    	    	var title=document.createElement("div");
    	    	title.className="title";
    	    	title.innerHTML=i;
    	    	citys.appendChild(title);

    	    	var con=document.createElement("div");
    	    	con.className="con";

    	    	for(let j in city[i]){


               var box=document.createElement("div");
               box.className="box";
               box.innerHTML=j;
               con.appendChild(box);
    	    	}
    	    	citys.appendChild(con);
    	    	city1.appendChild(citys);


    	    }
}

