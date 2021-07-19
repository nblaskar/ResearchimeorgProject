// const moredropdown = document.querySelector(".more_dropdown");
// const dropdownlink = document.getElementById("hide");
// moredropdown.addEventListener("click", function (e) {
//   e.stopImmediatePropagation();
//   if (dropdownlink.style.display == "none") {
//     dropdownlink.style.display = "";
//   } else {
//     dropdownlink.style.display = "none";
//   }
// });
// window.onload = () => {
//   dropdownlink.style.display = "none";
// };

$(document).ready(function () {
  $("#hide").hide();
  $("#show").mouseenter(function () {
    $("#hide").show();
  });
  $("body").click(function () {
    $("#hide").hide();
  });

  $("#show").click(function () {
    $("#hide").toggle();
  });
  // Card show/hide
  // $(".card").mouseenter(function () {
  //   $(".tag_data").hide();
  //   $(".content_data").show(300);
  // });
  // $(".card").mouseleave(function () {
  //   $(".tag_data").show();
  //   $(".content_data").hide();
  // });
});
function openNav() {
  document.getElementById("shutter").style.width = "70%";
  document.body.style.opacity = "0.8";
  document.getElementById("shutter").style.opacity = "1";
}

function closeNav() {
  document.getElementById("shutter").style.width = "0%";
  document.body.style.backgroundColor = "white";
  document.body.style.opacity = "1";
}
function card1MessageIn() {
  document.getElementById("tag_data1").style.display = "none";
  document.getElementById("content_data1").style.display = "block";
}
function card1MessageOut() {
  document.getElementById("tag_data1").style.display = "block";
  document.getElementById("content_data1").style.display = "none";
}
function card2MessageIn() {
  document.getElementById("tag_data2").style.display = "none";
  document.getElementById("content_data2").style.display = "block";
}
function card2MessageOut() {
  document.getElementById("tag_data2").style.display = "block";
  document.getElementById("content_data2").style.display = "none";
}
function card3MessageIn() {
  document.getElementById("tag_data3").style.display = "none";
  document.getElementById("content_data3").style.display = "block";
}
function card3MessageOut() {
  document.getElementById("tag_data3").style.display = "block";
  document.getElementById("content_data3").style.display = "none";
}
// Scroll Button Start
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // document.body.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
}
// Scroll Button End
