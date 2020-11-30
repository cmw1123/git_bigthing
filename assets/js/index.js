$(function() {
    getuserinfo()
})

function getuserinfo() {
    $.ajax({
        type: 'get',
        url: '/my/userinfo',
        success: function(res) {
            if (res.status !== 0) return layui.layer.msg('获取数据失败');
            xr(res);
        }
    })
}

function xr(res) {
    var name = res.data.nickname || res.data.username;
    if (res.data.user_pic) {
        $('.layui-nav-img').attr('src', res.data.user_pic).show();
        $('.text-avatar').hide();
    } else {
        var first = name[0].toUpperCase()
        $('.layui-nav-img').hide();
        $('.text-avatar').html(first).show()
    }
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
}