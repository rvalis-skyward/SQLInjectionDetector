(function(exports){

    var ul = null, overlay;
    //view helpers
    var init = function(element, isInitialized, context) {
        if (!isInitialized) {
            ul = document.getElementById('slide-out');
            ul.style.left = '-105%';
            overlay = document.getElementById('sidenav-overlay');
        }
    };

    var out = false;
    var slideIn = function(){
        Vel(ul, {left: 0, complete: function(){
            out = true;
        }});
        Vel(overlay, {opacity: 1, complete: function(){
            overlay.addEventListener('click', slideOut);
            overlay.style.display = 'block';
        }});
    };
    var slideOut = function(){
        if(out) {
            Vel(ul, {left: '-105%', complete: function(){
                out = false;
            }});
            Vel(overlay, {opacity: 0, complete: function(){
                overlay.removeEventListener('click', slideOut);
                overlay.style.display = 'none';
            }});
        }
    };
    var toggle = function(){
        if(out){
            slideOut();
        } else {
            slideIn();
        }
    };

    exports.Nav = {
        controller: function(args){
            this.nav_items = args.nav_items || [];
        },
        view: function(ctrl, args){
            return m('nav', [
                m('ul', {class: 'right hide-on-med-and-down'}, [
                    ctrl.nav_items.map(function(item){
                        return m('li', [
                            m('a', {href: item.href, onclick: slideOut}, item.name)
                        ]);
                    })
                ]),
                m('ul#slide-out', {class: 'side-nav'}, [
                    ctrl.nav_items.map(function(item){
                        return m('li', [
                            m('a', {href: item.href, onclick: slideOut}, item.name)
                        ]);
                    })
                ]),
                m('span', {href: '', class: 'button-collapse hide-on-large'}, [
                    m('i', {class: 'mdi-navigation-menu', onclick: toggle, config: init})
                ])
            ]);
        }
    };
})(app = window.app || {});
