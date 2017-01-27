export default function getAuth(url, auth, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI(url));
    xhr.setRequestHeader('Cloner_key', auth);
    xhr.onload = function() {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText));
      } else {
        error(xhr);
      }
    };
    xhr.send();
}
