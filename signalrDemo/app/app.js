(function () {
    angular.module('app', []);
    $(function () {
        $.connection.hub.logging = true;
        $.connection.hub.start();
    });
    $.connection.hub.error(function (err) {
        console.log('an Error Occurred' + err);
    });

    angular.module('app').value('chat', $.connection.chat);
    angular.module('app').value('toastr', toastr);

})();