// 处理getclass的兼容性问题
function getClass(classname,obj){
	var obj=obj||document;
	 // 如果没有传入obj，默认使用document对象输出
	if(obj.getElementByClassName){
		return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		// 定义一个空数组存储需要的类名
		var alls=document.getElementsByTagName('*');
		// 通过*选择所有的标签
		for(var i=0;i<alls.length;i++){
			if(check(alls[i].className,classname)){
				arr.push(alls[i]);
				// 调用check函数，如果下标为i的元素的类名等于实参，将这个类名加在数组arr里面
			}
		}
		return arr;
	}
}

 function check(search,match){
	var brr=search.split(" ");
	// 将找到的所有的标签的类名用空格分割成数组
	for(var i=0;i<brr.length;i++){
		if(brr[i]==match){
			return true;
		}else{
			return false;
		}
	}
}






function getInner(obj,value){
	if(obj.textContent){
		if(value==undefined){
			return obj.textContent;
		}else{
			obj.textContent=value;
		}
	}else{
		if(value==undefined){
			return obj.innerText;
		}else{
			obj.innerText=value;
		}
	}
}

function getStyle(obj,style){
	if(obj.currentStyle){
		return obj.currentStyle[style];
	}else{
		return  getComputedStyle(obj,null)[style];
	}
}




function $(search,obj){
	var obj=obj||document;
	if(search.charAt(0)=="#"){
		return document.getElementById(search.substr(1));
	}else if(search.charAt(0)=="."){
		return getClass(search.substr(1),obj);
	}else{
		return obj.getElementsByTagName(search);
	}

}