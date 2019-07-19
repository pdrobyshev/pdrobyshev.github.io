// Javascript for detecting browsers who do not support this, and provide fallback
if (window.navigator.userAgent.indexOf("Edge") !== -1 || navigator.appVersion.indexOf("MSIE 10") !== -1 || window.navigator.userAgent.indexOf("Trident/7.0") > 0) {
    document.documentElement.className += ' crappy-browser';
} else {
    document.documentElement.className += ' modern-browser';
}