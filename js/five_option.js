function clickpic() {
  var picbig = $("#main")[0].src;
  var picsmall = $("#pick1")[0].src;
  $(
    "#pick1, #pick2, #pick3, #pick4, #pick5, #main, #word, #word1, #word2, #word3, #word4, #word5"
  ).css("opacity", 0);
  setTimeout(function () {
    window.location.href = "index4.html";
  }, 3000);
}

$(
  "#pick1, #pick2, #pick3, #pick4, #pick5, #word1, #word2, #word3, #word4, #word5"
).click(clickpic);

$(document).ready(function () {
  $(
    "#pick1, #pick2, #pick3, #pick4, #pick5, #word1, #word2, #word3, #word4, #word5"
  ).off("click");
  $("#main").css("opacity", 1);
  setTimeout(function () {
    $("#word").css("opacity", 1);
  }, 2000);
  setTimeout(function () {
    $(
      "#pick1, #pick2, #pick3, #pick4, #pick5, #word1, #word2, #word3, #word4, #word5"
    ).css("opacity", 1);
  }, 4000);
  setTimeout(function () {
    $(
      "#pick1, #pick2, #pick3, #pick4, #pick5, #word1, #word2, #word3, #word4, #word5"
    ).on("click", clickpic);
  }, 7000);
});
