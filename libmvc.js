/**
 * @author so000255
 */
(function(win,$){
	'use strict';
	
	function each(a, fn) {
		if (Array.isArray(a)) {
			eachArray(a, fn);
		} else {
			eachObj(a, fn);
		}
	}

	function eachArray(a, fn) {
		for (var i = 0, l = a.length; i < l; i++) {
			var ret = fn.apply(this, [a[i], i]);
			if (ret) {
				break;
			}
		}
	}

	function eachObj(a, fn) {
		for (var i in a) {
			var ret = fn.apply(this, [a[i], i]);
			if (ret) {
				break;
			}
		}
	}
	
	var ids = 0;
	
	function getId(){
		return ++ids;
	}
	
	var MVCFwk = {
		createElement:function(name, ctor, obj){
			if (typeof ctor == 'object') {
				obj = ctor;
				ctor = null;
			}
			var classInst = MVCFwk[name],
				newObj = ctor || function(){
				classInst.prototype.constructor.apply(this,arguments);			
			};
			
			newObj.prototype = new classInst();
			newObj.prototype.constructor = newObj;
			
			for(var name in obj) {
				newObj.prototype[name] = obj[name];
			}
			
			return newObj;
		}
	};
	
	var Model=function(opts) {
		this.options = {};
		this.attributes = {};
		for(var optName in opts) {
			switch(optName) {
				case 'url':
				case 'query':
					this.options[optName] = opts[optName];
					break;
				default: 
					this.set(optName, opts[optName]);	
			}
		}
		this.cid = getId();
	}

	Model.prototype={
		constructor: Model,
		set:function(name,value){
			this.attributes[name]=value;
		},
		get:function(name){
			return this.attributes[name];
		},
		del:function(name){
			delete this.attributes[name];
		},
		toJSON:function(){
			var ret = {};
			for(var name in this.attributes) {
				ret[name] = this.attributes[name];
			}
			return ret;
		},
		id:function(){
			return this.cid;
		}
	}
	
	MVCFwk.Model = Model;
	
	var View=function(opts){
		for(var optName in opts) {
			this[optName] = opts[optName];
		}
	}

	View.prototype={
		constructor: View,
		tagName: 'div',
		render:function(){
			var $el = $(this.el);
			var container = $(document.createElement(this.tagName));
			
			var html = [];
			
			each(this.model.toJSON(), function(attr, name) {
				html.push(name + ':' + attr);
			});

			container.html('<p>'+html.join('</p><p>')+'</p>');
			
			$el.append(container);
			return $el[0];	
		}
	}
	
	MVCFwk.View = View;
	
	var Controller=function(opts){
		this.handlers={};
		for(var optName in opts) {
			this[optName] = opts[optName];
		}
	}
	
	Controller.prototype={
		constructor: Controller,
		register:function(evnt,fn,scope){
			var handler = this.handlers[evnt] || []; 
			handler.push({'scope': scope, 'fn': fn});
			this.handlers[evnt] = handler;
		},
		unregister:function(evnt){
			delete this.handlers[evnt];
		},
		trigger:function(evnt){
			var hs = this.handlers[evnt];
			if (hs) {
				var args = Array.prototype.slice.call(arguments,1);
				for(var i = 0, l = hs.length; i < l; i++){
					var h = hs[i];
					h.fn.apply(h.scope || this, args);
				}
			}
		}
	}
	
	MVCFwk.Controller = Controller;

	$.MVCFwk = MVCFwk;
	
})(window, window.jQuery);
