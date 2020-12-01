$(function() {
    var form = layui.form
    $.ajax({
        type: 'get',
        url: '/my/userinfo',
        success: function(res) {
            if (res.status !== 0) return layui.layer.msg('获取数据失败');
            form.val('formlist', res.data)
        },
    })
})