$(document).ready(function(){
    $.ajax({
        url: 'http://127.0.0.1:3000/',
        type: 'GET',
        data: '',
        success: function(data){
            console.log(data);
            $("body").append(data.msg);
        }
    });
});