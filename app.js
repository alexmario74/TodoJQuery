(function(w, $) {

	var TodoListView = $.MVCFwk.createElement('View',
	{
		models: [],
		add:function(model){
			this.models.push(model);
			this.render();
		},
		del:function(ids){
			if (Array.isArray(ids)) {
				for(var i = 0, l = ids.length; i < l; i++) {
					this.delModel(ids[i]);
				}
			} else {
				this.delModel(ids);
			}
		},
		delModel:function(id) {
			var nmodels = [];
			for(var model; (model = this.models.shift());) {
				if (model.id()!=id){
					nmodels.push(model);
				}
			}
			this.models=nmodels;
			this.render();
		},
		formatTime:function(t){
			return t.getDate()+'/'+(t.getMonth()+1)+'/'+t.getFullYear();
		},
		render:function(){
			
			var el = $('<ul class="todoList"></ul>');
			for(var i = 0, l = this.models.length; i < l; i++) {
				var model = this.models[i];
				el.append($('<li><div><input type="checkbox" value="' + model.id() + '"/>&nbsp;' +this.formatTime(model.get('time'))+ ', ' + model.get('text') + '</div></li>'));
			}
			
			$(this.el).html(el);
			
			if (this.models.length > 0) {
				$(this.el).show();
			} else {
				$(this.el).hide();
			}
			
			return el[0];
		}
	});
	
	var TodoController = function() {
		var self = this;
		$('button#todoAdd').click(function() {
			self.add.apply(self, arguments);
		});
		$('button#todoDel').click(function(vent) {
			var ids = [];
			$('input[type="checkbox"]').each(function(i,el) {
				if (el.checked) {
					ids.push(el.value);
				}
			});
			self.trigger.call(self, 'todo:del', ids);
		});
		this.testElement = $('#todo');

		this.todoListView = new TodoListView({
			'el' : '#totolist'
		});

		this.register('todo:add', this.todoListView.add, this.todoListView);
		this.register('todo:del', this.todoListView.del, this.todoListView);
	}

	TodoController = $.MVCFwk.createElement('Controller', TodoController, {
		add : function(vent) {
			if (this.testElement.val() != "") {
				var model = new $.MVCFwk.Model();
				model.set('text', this.testElement.val());
				model.set('time', new Date());

				this.testElement.val('');
				this.trigger('todo:add', model);
			}
		}
	}); 

	var App = {
		initialize : function() {
			var todo = new TodoController();
			
		}
	}

	$.App = App;

})(window, window.jQuery);
