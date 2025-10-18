function FindProxyForURL(url, host) {
  // این یک ترفند ساده برای رمزگذاری رشته "PROXY" است.
  var p = "Y" + "X" + "O" + "R" + "P";
  var proxy = p.split("").reverse().join("") + " " + "$proxy_obfuscated".split("").reverse().join("");
  return proxy + "; DIRECT";
}
