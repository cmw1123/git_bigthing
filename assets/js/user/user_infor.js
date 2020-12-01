$(function() {
    var form = layui.form;
    getuse_info();

    function getuse_info() {
        $.ajax({
            type: 'get',
            url: '/my/userinfo',
            success: function(res) {
                if (res.status !== 0) return layui.layer.msg('获取数据失败');
                form.val('formlist', res.data)
            },
        })
    }

    form.verify({
        nick: [
            /^[\S]{1,8}$/, '昵称必须1到8位，且不能出现空格'
        ],
    })
    $('.layui-form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) return layui.layer.msg(res.message);
                layui.layer.msg(res.message);
                window.parent.getuserinfo()
            },
        })
    })
    $('#btnrest').on('click', function(e) {
        e.preventDefault();
        getuse_info();
    })
})