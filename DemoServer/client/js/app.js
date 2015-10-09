(function(app){


})(app = window.app || {});

var NavLinks = [
    {
        name:'Page 1',
        href:'#/'
    },
    {
        name:'Page 2',
        href:'#/page2'
    },
    {
        name:'Page 3',
        href:'#/page3'
    }
];

m.route.mode = "hash";
m.mount(document.getElementById('nav'), m.component(app.Nav, {nav_items: NavLinks}));
m.route(document.getElementById('app'), '/', {
    '/': app.Page1,
    '/page2': {
        view: function(){
            return m('h1', 'Page 2');
        }
    }
});
