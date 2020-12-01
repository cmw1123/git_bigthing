$.ajaxPrefilter(function(options) {
    if (options.url.startsWith('/my')) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    options.url = 'http://ajax.frontend.itheima.net' + options.url;
    options.complete = function(res) {
        console.log(55555);
        if (res.responseJSON.status !== 0 && res.responseJSON.message !== '获取用户基本信息成功！') {
            localStorage.removeItem('token');

            function callback() {
                console.log(1111);
                location.href = '/login.html';
            }
            setTimeout(callback(), 5000)
        }
    }
})