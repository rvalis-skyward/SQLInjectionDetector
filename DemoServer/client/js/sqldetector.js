(function(exports){

    var selector = 'sqldetector';

    function Model(url){
        var self = this;
        self.url = url;
        this.inputs = document.getElementsByClassName(selector);
        R.forEach(function(el){
            el.addEventListener('keyup', self.sendToApi.bind(self));
        }, this.inputs);
    }

    Model.prototype.handleResponse = function(res){
        console.log(res);
    };

    Model.prototype.sendToApi = function(e){
        var self = this;
        // todo - filter out non-numeric keys better.
        if(e.keyCode == 13 || e.keyCode == 9 || e.keyCode == 18 || e.keyCode == 16) return;
        var text = e.target.value;
        var request = new Request(self.url + '/echo', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                stuff: text,
            })
        });
        fetch(request).then(function(res){
            return res.json();
        }).then(self.handleResponse.bind(self));
    };

    exports.SQLDetector = Model;
    exports.Selector = selector;

})(sqldetector = window.sqldetector || {});
