document.querySelector("textarea[placeholder='Message']").value =
  searchToObject().message || "";
var encrypt = () => {
  document.querySelector(
    "textarea[placeholder='Result']"
  ).value = CryptoJS.AES.encrypt(
    document.querySelector("textarea[placeholder='Message']").value,
    document.querySelector("input").value
  );
};
var decrypt = () => {
  document.querySelector(
    "textarea[placeholder='Result']"
  ).value = CryptoJS.AES.decrypt(
    document.querySelector("textarea[placeholder='Message']").value,
    document.querySelector("input").value
  ).toString(CryptoJS.enc.Utf8);
};
function searchToObject() {
  var pairs = window.location.search.substring(1).split("&"),
    obj = {},
    pair,
    i;

  for (i in pairs) {
    if (pairs[i] === "") continue;

    pair = pairs[i].split("=");
    obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return obj;
}
