// extract-access-token-function.js

function xtrct_AccessToken(tt){
  var iv = tt.match(/access_token\=[A-Za-z0-9\%\|]+/);
  if(iv){
    return iv[0].split('=')[1];
  } else {
    return tt;
  }
}

var token = 'https://www.facebook.com/connect/login_success.html#access_token=CAAAACZAVC6ygBAKUnyIg79RMZB1WCQhU9XA3UEFjUAh6eZBRIiPcUMqYGfsrEfLSO8kpI3tgXdL6t3hvZAzLgjpGWdg3yOL1Ys8do02RkOtcwU10Tcqaq45WCjdZCbESX83wwYCOgPQ2117e55PcFPvUe2I1F2Icn4EYRNEZD&expires_in=0';
console.log(xtrct_AccessToken(token));
