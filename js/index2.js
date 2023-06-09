var cookieget = document.cookie.split("=")[1];

function abc() {
  $("#tittleid").css("opacity", 0);
  $("#openimg").css("opacity", 0);
  $("#a1").css("opacity", 0);
  $("#a2").css("opacity", 0);
  $("#a3").css("opacity", 0);
  $("#a4").css("opacity", 0);
  if (this.id == "pica1") {
    document.cookie = "top2=A";
    setTimeout(function () {
      $("#openimg").attr("src", "img/option.jfif");
    }, 2500);
    setTimeout(function () {
      window.location.href = "index3.html";
    }, 6500);
  } else if (this.id == "pica2") {
    document.cookie = "top2=B";
    setTimeout(function () {
      $("#openimg").attr("src", "img/option.jfif");
    }, 2500);
    setTimeout(function () {
      window.location.href = "index3.html";
    }, 6500);
  } else if (this.id == "pica3") {
    document.cookie = "top2=C";
    setTimeout(function () {
      $("#openimg").attr("src", "img/option.jfif");
    }, 2500);
    setTimeout(function () {
      window.location.href = "index3.html";
    }, 6500);
  } else if (this.id == "pica4") {
    document.cookie = "top2=D";
    setTimeout(function () {
      $("#openimg").attr("src", "img/option.jfif");
    }, 2500);
    setTimeout(function () {
      window.location.href = "index3.html";
    }, 6500);
  }

  setTimeout(function () {
    $("#openimg").css("opacity", 1);
  }, 4000);
}

$("#pica1, #pica2, #pica3, #pica4").click(abc);

jQuery(document).ready(function () {
  $("#pica1, #pica2, #pica3, #pica4, #btn1").off("click");
  $("#openimg").css("opacity", 1);
  $("#tittleid").css("opacity", 1);
  $("#a1").css("opacity", 1);
  $("#a2").css("opacity", 1);
  $("#a3").css("opacity", 1);
  $("#a4").css("opacity", 1);

  setTimeout(function () {
    $("#pica1, #pica2, #pica3, #pica4").on("click", abc);
  }, 2000);
});
$("#passbtn").click(function () {
  window.location.href = "index3.html";
});

console.log(document.cookie);
