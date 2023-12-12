$(document).ready(function () {
  var result = { A: 0, B: 0, C: 0, D: 0, E: 0 };

  var readCookie = document.cookie;
  cookieArray = readCookie.split(";");

  cookieArray.forEach(function (value) {
    var option = value.split("=")[1];
    result[option] = result[option] + 1;
  });

  var valueList = Object.values(result);
  var the_most_select = Math.max(...valueList);

  var final = getKeyByValue(result, the_most_select);

  console.log(final);
  $("#pic").attr("src", "static/TransitionPractice/gif/4/" + final + ".gif");
});

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] == value);
}
