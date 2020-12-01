$(function() {
    var form = layui.form
    form.verify({
        pwd: function(value) {
            if ($('[name=oldPwd]').val() === value) {
                return '原密码与新密码相同！'
            }
        },
        conf: function(value) {
            if ($('[name=newPwd]').val() !== value) {
                return '密码输入有误，请重输！'
            }
        }
    })
    $('.layui-form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layui.layer.msg('密码修改失败')
                }
                // layui.layer.msg(res.message);
                layer.confirm(res.message + '是否重新登录?', { icon: 3, title: '提示' }, function(index) {
                    //do something
                    localStorage.removeItem('token');
                    window.parent.location.href = '/login.html';
                    layer.close(index);
                });
                // layui.layer.msg(res.message);
                $('.layui-form')[0].reset()
            }
        })
    })
})