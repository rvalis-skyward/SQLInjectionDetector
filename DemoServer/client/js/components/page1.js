(function(exports){

    var model = function(){
        this.title = m.prop('Welcome');
    };

    app.vm = function(){
        this.model = new model();
    };

    // the app controller
    var ctrl = function(){
        this.vm = new app.vm();
    };

    var view = function(ctrl){
        return [
            m('h1', 'Welcome'),
            m('p', {class: 'caption'}, 'Demo App for SQL Injection Detection'),
            m.component(app.SQLForm)
        ];
    };

    app.Page1 = {
        controller: ctrl,
        view: view
    };

})(app = window.app || {});
