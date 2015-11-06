(function(exports){

    // the class selector that can be added to input elements to mark them for detection
    var selector = 'sqldetector';

    // a static variable to use that will be set to true f sql is detected.
    exports.IS_SQL = false;

    /**
     *  @class SQLDetector
            If the optional 2nd parameter is omitted, then all input elements with the class 'sqldetector' will be used to detect injection
     *  @param {string} url - the url of the api server
     *  @param {DOM EL} el - an optional dom element (input element) to detect changes on
     *  @param {function} callback - a callback function that will be invoked when input events are received.
                                    receives a single boolean parameter. true if sql injection was detected and false otherwise.
     */
    function Model(url, el, callback){
        var self = this;
        self.url = url;
        if(!el){
            // listen to all input elements if no element is provided.
            this.inputs = document.getElementsByClassName(selector);
            R.forEach(function(ele){
                ele.addEventListener('keyup', sendToApi.bind(self));
            }, this.inputs);
        } else {
            // otherwise, just listen to the provided input element's events
            el.addEventListener('keyup', sendToApi.bind(self));
        }
        self.callback = callback;
    }

    /**
     *  @function handleResponse - receives the api response. Calls the callback with the result.
     */
    var handleResponse = function(res){
        exports.IS_SQL = res;
        this.callback(res);
        console.log(res);
    };

    /**
     *  @function sendToApi - submits the current input value to the server for detection
     */
    var sendToApi = function(e){
        var self = this;
        // todo - filter out non-numeric keys better.
        if(e.keyCode == 13 || e.keyCode == 9 || e.keyCode == 18 || e.keyCode == 16) return;
        // submit the event target's iput value to the server
        var text = e.target.value;
        var request = new Request(self.url + '/detect', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                stuff: text,
            })
        });
        // fetch and call the handleResponse method with the result
        fetch(request).then(function(res){
            return res.json();
        }).then(handleResponse.bind(self));
    };

    // only expose the class constructor and selector
    exports.SQLDetector = Model;
    exports.Selector = selector;

})(sqldetector = window.sqldetector || {});
