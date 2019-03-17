/**
 * [description]
 * @author Jason
 * @DateTime 2019-03-11T17:32:27+0800
 * @param    {[type]}                 ){} [description]
 * @return   {[type]}                       [description]
 */
$(function(){
	// 初始化工具提示条的样式
	 $('[data-toggle="tooltip"]').tooltip()
	// 获取所有的item
	var items =$(".carousel-inner .item");
	/*监听屏幕大小改变事件*/
	$(window).on("resize",function(){
		// 1.获取当前屏幕的宽度
		var width =$(window).width();
		// 2.判断屏幕的宽度
		if(width>=768){
			// 说明是非移动端
			// 为每一个item添加子元素
			$(items).each(function(index,value){
				var item=$(this);
				// 获取自定义属性
				var imgSrc=item.data("largeImage")
				//添加非移动端的子元素
				item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
			});
		}else{
			$(items).each(function(index,value){
				var item=$(this);
				var imgSrc=item.data("smallImage")
				item.html('<a href="javascript" class="mobileImg"><img src="'+imgSrc+'"></a>');
			});
		}
	}).trigger('resize');

	// 计算产品块标签页的原始宽度
	var ul=$(".wjs_product .nav-tabs");
	var lis=ul.find("li");
	var totalWidth=0;
	lis.each(function(index,value){
		totalWidth=totalWidth+($(value).innerWidth());
	}); 
	ul.width(totalWidth);
	// 设置产品块标签页滑动效果
	var myScroll=new IScroll(".tabs_parent",{
		scrollX:true,scrollY:false
	});

});