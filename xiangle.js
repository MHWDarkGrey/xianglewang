
window.onload=function(){


//nav搜索栏选项卡	
var top_tit=document.getElementById('top_list');
var txt=document.getElementsByClassName('text');
var top_li=top_tit.getElementsByTagName('li');
var top_a=top_tit.getElementsByTagName('a');
for(var i=0;i<top_li.length;i++){
	top_li[i].id=i;
	top_li[i].onclick=function(){
		for(j=0;j<top_li.length;j++){
			top_li[j].className="";
			top_a[j].className="";
			txt[j].style.display="none";
		}
	this.className="active";
	txt[this.id].style.display="block";
	top_a[this.id].className="a_active";
	}

}
   

//hot_r处选项卡

	var hot_tit= document.getElementById('hot_tit');
    var divs= document.getElementsByClassName('menu_con');
    var titles=hot_tit.getElementsByTagName('li');
    for(var i=0;i<titles.length;i++){
	     titles[i].id=i;
	     titles[i].onclick=function(){
     	   for(var j=0;j<titles.length;j++){    //每一次点击hot_tit的某一个li时，都将先所有的menu_con隐藏
		   titles[j].className="";
		   divs[j].style.display="none";
		   }
		this.className="active";  /*隐藏完所有的menu_con后，再讲此时点击的li的类名设为"active",而此时具有
		active类名的li所对应的id值将会被设置成div数组的下标，指向了li中标题下所对应的menu_con内容，再将该
		menu_con的display样式设置成"block",便实现了选项卡切换效果*/

		divs[this.id].style.display="block";
	}
}

//life_l处选项卡
var life_tit=document.getElementById('life_tit');
var life_con=document.getElementsByClassName('life_img');
var l_titles=life_tit.getElementsByTagName('li');
for(var i=0;i<l_titles.length;i++){
	l_titles[i].id=i;
	l_titles[i].onclick=function(){
		for(j=0;j<l_titles.length;j++){
			l_titles[j].className="";
			life_con[j].style.display="none";
		}
	this.className="active";
	life_con[this.id].style.display="block";
	}

}

//coupons处选项卡
var cou_tit=document.getElementById('cou_tit');
var cou_mod=document.getElementsByClassName('cou_mod');
var cou_li=cou_tit.getElementsByTagName('li');
for(var i=0;i<cou_li.length;i++){
	cou_li[i].id=i;
	cou_li[i].onclick=function(){
		for(var j=0;j<cou_li.length;j++){
			cou_li[j].className="";
			cou_mod[j].style.display="none";
		}
		this.className="active";
		cou_mod[this.id].style.display="block";
	}
}


//life_l处选项卡
var life_tit=document.getElementById('life_tit');
var life_con=document.getElementsByClassName('life_img');
var l_titles=life_tit.getElementsByTagName('li');
for(var i=0;i<l_titles.length;i++){
	l_titles[i].id=i;
	l_titles[i].onclick=function(){
		for(j=0;j<l_titles.length;j++){
			l_titles[j].className="";
			life_con[j].style.display="none";
		}
	this.className="active";
	life_con[this.id].style.display="block";
	}

}



//知道分子处选项卡
var know_tit=document.getElementById('know_tit');
var know_mod=document.getElementsByClassName('know_mod');
var know_li=know_tit.getElementsByTagName('li');
for(var i=0;i<know_li.length;i++){
	know_li[i].id=i;
	know_li[i].onclick=function(){
		for(var j=0;j<know_li.length;j++){
			know_li[j].className="";
			know_mod[j].style.display="none";
		}
		this.className="active";
		know_mod[this.id].style.display="block";
	}
}



//轮播处效果
var lun_l=document.getElementById('lun_l');
var lun_r=document.getElementById('lun_r');
var img_l=lun_l.getElementsByClassName('img_l');
var img_r=lun_r.getElementsByTagName('img');
var index=0;//不能放在下面函数中，否则index的最大值只能为1
timer=setInterval(function(){//设置定时器，每隔2s执行一次function函数
	index++;
	if (index>=img_r.length) {index=0;}//图片完成一轮播放后，又从头再次开始新一轮的播放
	for(var i=0;i<img_r.length;i++){//先全部隐藏所有的轮播图片和轮播特殊样式
		img_r[i].className="";
		img_l[i].style.display="none";
	}
	img_r[index].className="active";//再显示此时的轮播图片和轮播特殊样式
	img_l[index].style.display="block";
},2000);
for(var j=0;j<img_l.length;j++){
	img_r[j].id=j;
	img_r[j].onclick=function(){//给右边图片设置鼠标点击事件，当用户点击右边的某一图片后，
		//会出现该图片所对应的轮播图片和轮播样式
		for(var w=0;w<img_r.length;w++){//
			img_r[w].className="";
			img_l[w].style.display="none";
		}
		this.className="active";
		img_l[this.id].style.display="block";
	}
}



//bbs论坛处效果
var bbs_list=document.getElementsByClassName('bbs_list');
for(var i=0;i<bbs_list.length;i++){
	bbs_list[i].id=i;
	
	bbs_list[i].onmouseover=function(){
		var bbs_divs=bbs_list[this.id].getElementsByTagName('div');
		bbs_divs[0].style.display="none";
		bbs_divs[1].style.display="block";
	}
	bbs_list[i].onmouseout=function(){
		var bbs_divs=bbs_list[this.id].getElementsByTagName('div');
		bbs_divs[0].style.display="block";
		bbs_divs[1].style.display="none";
	}
}
//today_l处效果：
var dates=document.getElementById('diff');
	var detail=document.getElementById('detail');
dates.onmouseover=function(){	
	detail.style.display="block";
}
dates.onmouseout=function(){
	detail.style.display="none";
}
}