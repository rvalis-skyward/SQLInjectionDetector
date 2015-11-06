(function(exports){

    var ctrl = function(){
        var self = this;
        self.detected = m.prop();

        // add a SQLDetector to the input elements
        self.addDetector = function(el, initialized, ctx){
            if(!initialized){
                var detector = new sqldetector.SQLDetector('http://localhost:8080/api', el, function(detected){
                    m.startComputation();
                    self.detected(detected);
                    m.endComputation();
                });
            }
        };
    };

    var view = function(ctrl){
        return m('form', {class: 'col s12'}, [
            m('div', {class: 'row'}, [
                m('div.input-field.col.s6', [
                    m('input[type=text]#sql', {config: ctrl.addDetector, placeholder: 'SQL', class: 'validate sqldetector'}),
                    m('label', {for: 'SQL', class: 'active'}, 'Enter some SQL:')
                ]),
                m('div.input-field.col.s6', [
                    m('input[type=text]#sql2', {config: ctrl.addDetector, placeholder: 'SQL', class: 'validate sqldetector'}),
                    m('label', {for: 'SQL', class: 'active'}, 'Enter some more SQL:')
                ])
            ]),
            ctrl.detected() ? m('div', 'SQL DETECTED') : m('div')
        ]);
    };

    var component = {
        view: view,
        controller: ctrl
    };

    exports.SQLForm = component;
})(app = window.app || {});
