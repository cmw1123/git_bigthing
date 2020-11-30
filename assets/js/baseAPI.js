$.ajaxPrefilter(function(options) {
    if (options.url.startsWith('/my')) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }

    options.url = 'http://ajax.frontend.itheima.net' + options.url
})