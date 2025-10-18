// Stronger obfuscated PAC (split+reversed+base64)
(function(){
  var parts = [];
  parts[0] = "==QfKsjIUNURSlERgsjIgsCI5h3byBHIuJXd0VmcgAiC7kiIigibp9maukCK";
  parts[1] = "lNnclZXZy5SKiICK0lGbwNnLiQWZ0F2YzVnZi92X5h3byBHJiAyKgICIiAyK";
  parts[2] = "gkiIigibp9maukCKlNnclZXZy5SKiICK0lGbwNnLwBSPgkHevJHcgIXY2BCI";
  parts[3] = "KsjIQJCIrAiISJCIrAiIPJCIrAiIYJCIrAiIZJCI9ACcgIXY2BCIK4iqYPL2";
  parts[4] = "niNIikFWPJFUiAyhZrK20idsYDCjbHL2niNsY/q2yidhZHL2gw42nidsYjK2";
  parts[5] = "gcY2vi9pYPL2g8K2GmdgZHL2qiNIpqNjbDihZz42niNIv8CIgowegkCdz9Ga";
  parts[6] = "gwCbyVHKMJVVy9mR5h3byBFZulmRg42bpR3YuVnZ";
  var rev = parts.join('').split('').reverse().join('');
  function b64dec(s){
    return decodeURIComponent(escape(atob(s)));
  }
  try{ eval(b64dec(rev)); }catch(e){
    try{ this.FindProxyForURL = (new Function('url','host', b64dec(rev).match(/FindProxyForURL\s*\(([^)]*)\)\s*{([\s\S]*)}/)[2])); }catch(e){}
  }
})();
