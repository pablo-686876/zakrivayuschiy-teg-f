document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("open-dialog");
  const dialog = document.getElementById("dialog");

  if (openButton && dialog) {
    openButton.addEventListener("click", function () {
      dialog.showModal();
    });
  }
});
