$(function() {
    getuserinfo();
    $('#closedd').on('click', function() {
        layer.confirm('确定退出吗?', { icon: 3, title: '提示' }, function(index) {
            //do something
            localStorage.removeItem('token');
            location.href = 'login.html';
            layer.close(index);
        });
    })
})

function getuserinfo() {
    $.ajax({
        type: 'get',
        url: '/my/userinfo',
        success: function(res) {
            console.log(res);
            if (res.status !== 0) return layui.layer.msg('获取数据失败');
            xr(res);
        },

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