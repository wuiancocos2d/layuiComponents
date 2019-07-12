layui.define(['table', 'layer', 'jquery','CurdForm'], function(exports) {
    var table = layui.table,
        layer = layui.layer,
        $ = layui.jquery;
        CurdForm = layui.CurdForm;

    function CurdTable(opt) {
        this.opt = opt || {};
        this.filter = this.opt.filter ? this.opt.filter : '';

        if(this.opt.cols && this.opt.cols[0].length > 0) {
        	this.fileders = this.opt.cols[0]
        }
        return this;
    }

    CurdTable.prototype.render = function() {
        var that = this;
        if (this.opt.cols) {
            var cols = this.opt.cols[0];
            cols.push(controlers());
        }
        table.render(this.opt);
        table.on('tool(' + this.filter + ')', function(data) {
            that.openCurdForm(data)
        })
    }

    CurdTable.prototype.openCurdForm = function(data) {
    	
    };

    var controlers = function() {
        //支持添加更多自定义功能
        var controlObj = [
                { 'lay-event': "openEditor", 'title': 'Edite', 'class': ["layui-btn", "layui-btn-primary", "layui-btn-xs"] },
            ],
            controlElement = $('<div></div>');
        for (var i = 0; i < controlObj.length; i++) {
            (function(el) {
                var aElement = $('<a></a>').attr("lay-event", el["lay-event"])
                    .text(el['title']).addClass(function() {
                        var classes = el["class"];
                        return $.isArray(classes) ? classes.join(" ") : classes;
                    }).appendTo(controlElement);
            })(controlObj[i])
        }

        return { field: 'controler', title: 'Controlers', width: 300, toolbar: $('<div>').append(controlElement).html() };

    }


    exports('CurdTable', CurdTable);
})