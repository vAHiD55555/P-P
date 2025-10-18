// Obfuscated PAC — generated automatically
(function(){
  var b64 = "ZnVuY3Rpb24gRmluZFByb3h5Rm9yVVJMKHVybCwgaG9zdCkgewogIC8vINin24zZhiDbjNqpINiq2LHZgdmG2K8g2LPYp9iv2Ycg2KjYsdin24wg2LHZhdiy2q/YsNin2LHbjCDYsdi02KrZhyAiUFJPWFkiINin2LPYqi4KICB2YXIgcCA9ICJZIiArICJYIiArICJPIiArICJSIiArICJQIjsKICB2YXIgcHJveHkgPSBwLnNwbGl0KCIiKS5yZXZlcnNlKCkuam9pbigiIikgKyAiICIgKyAiJHByb3h5X29iZnVzY2F0ZWQiLnNwbGl0KCIiKS5yZXZlcnNlKCkuam9pbigiIik7CiAgcmV0dXJuIHByb3h5ICsgIjsgRElSRUNUIjsKfQ==";
  function b64dec(s) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var i = 0;
    s = s.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < s.length) {
      var enc1 = chars.indexOf(s.charAt(i++));
      var enc2 = chars.indexOf(s.charAt(i++));
      var enc3 = chars.indexOf(s.charAt(i++));
      var enc4 = chars.indexOf(s.charAt(i++));
      var chr1 = (enc1 << 2) | (enc2 >> 4);
      var chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      var chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) output = output + String.fromCharCode(chr2);
      if (enc4 != 64) output = output + String.fromCharCode(chr3);
    }
    try { return decodeURIComponent(escape(output)); } catch(e){ return output; }
  }
  var code = b64dec(b64);
  try { eval(code); } catch(e) { /* fallback: expose plain function if eval blocked */ this.FindProxyForURL = new Function('url','host', code.match(/FindProxyForURL\s*\(([^)]*)\)\s*{([\s\S]*)}/)[2]); }
})();

