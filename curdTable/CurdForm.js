/*
/* 要求参数 
/*
/** fileds: [{filed: xxx（必填）, editable: true（必填） / false, type: input/textarea/（非必要，默认input）}] （必填）
/** updateURL: String （必填）
/** deleteURL: String (必填)
/** 目前只支持 ajax data模式，不支持url更新
*/

layui.define(['form', 'layer', 'jquery'], function(exports) {
    var form = layui.form,
        layer = layui.layer,
        $ = layui.jquery;

    function CurdForm(opt) {
        this.opt = opt || {};
        this.filter = this.opt.filter ? this.opt.filter : '';
        this.fileds = this.opt.fileds ? this.opt.fileds : (function(){
        	layer.alert('fileds params errror ,cannot be null or undefined', {icon: 9});
        	return null;
        })() 
        return this;
    }

    CurdForm.prototype.render = function(data){
    	if(data) {

    	}else {
    		layer.alert('form data option errror cannot be null or undefined', {icon: 6});
    	}
    }

    function formElement (fileds) {
    	$.isArray(fileds) ? '' : layer.alert('fileds data must be array', {icon: 6});
    	for(var i = 0; i< fileds.length; i++) {

    	}
    }
    //form 的 html
    function createForm() {
    	//时间戳作为fileter
    	formFilter =  Date.now();
    	var formHTML = '<div class="layui-form" lay-filter="'+formFilter+'"></div>';
    	return {"html":formHTML,"fileder": formFilter};
    }
    exports('CurdForm', CurdForm);
})