// Updates cursor position in viewport
if (typeof window !== 'undefined') {
  document.body.onmousemove = function (e) {
    document.documentElement.style.setProperty(
      "--x",
      e.clientX + window.scrollX + "px"
    );
    document.documentElement.style.setProperty(
      "--y",
      e.clientY + window.scrollY + "px"
    );
  };
}
