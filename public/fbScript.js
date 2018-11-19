// appId: '188071835431986',
// appId: '2403105399703676',

window.fbAsyncInit = function () {
  FB.init({
    appId: '188071835431986',
    cookie: true,
    xfbml: true,
    version: 'v2.8'
  });

  const fbInitEvent = new Event('FBObjectReady');
  document.dispatchEvent(fbInitEvent);
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));