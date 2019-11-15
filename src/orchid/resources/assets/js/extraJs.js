{
  /* <script src="https://js.tito.io/v1" async></script>; */
}

var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://js.tito.io/v1";
s.async = true;
$("head").append(s);

var titoCss = document.createElement("link");
titoCss.rel = "stylesheet";
titoCss.type = "text/css";
titoCss.href = "https://css.tito.io/v1.1";
$("head").append(titoCss);
