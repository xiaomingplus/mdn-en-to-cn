var url = window.location.href;
if(/en-US/.test(url)){
  var toUrl = url.replace("en-US","zh-CN");
  window.location.href = toUrl;
}
