$(function() {
    $('#link_reg').on('click', function() {
        $('.log-box').hide();
        $('.reg-box').show();
    })
    $('#link_log').on('click', function() {
        $('.log-box').show();
        $('.reg-box').hide();
    })
    var from = layui.form;
    from.verify({
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repwd: function(value) {
            var pwd = $('.reg-box [name = password]').val();
            if (pwd !== value) return '两次输入密码不一致';
        }
    })
    $('#reg-form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/api/reguser',
            data: $(this).serialize(),
            success: function(res) {
                // console.log(res);
                if (res.status !== 0) return layui.layer.msg(res.message);
                $('#link_log').click()
            }
        })
    })
    $('#log-form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: $(this).serialize(),
            success: function(res) {
                console.log(res);
                if (res.status !== 0) return layui.layer.msg(res.message);
                localStorage.setItem('token', res.token);
                location.href = 'index.html'
            }
        })
    })
})