(function(exports){

    var ctrl = function(){

    };

    var view = function(ctrl){
        return m('form', {class: 'col s12'}, [
            m('div', {class: 'row'}, [
                m('div.input-field.col.s6', [
                    m('input[type=text]#sql', {placeholder: 'SQL', class: 'validate sqldetector'}),
                    m('label', {for: 'SQL', class: 'active'}, 'Enter some SQL:')
                ]),
                m('div.input-field.col.s6', [
                    m('input[type=text]#sql2', {placeholder: 'SQL', class: 'validate sqldetector'}),
                    m('label', {for: 'SQL', class: 'active'}, 'Enter some more SQL:')
                ])
            ])
        ]);
    };

    var component = {
        view: view,
        controller: ctrl
    };

    exports.SQLForm = component;
})(app = window.app || {});
