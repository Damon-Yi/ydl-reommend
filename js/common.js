$(function(){
    $('.a_2,.link_btn').on('tap',function(){
        $(this).addClass('active');
        var _that = this;
        setTimeout(function(){
            $(_that).removeClass('active');
        },200);
    });
});