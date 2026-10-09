// This static preview is independent of the actual PST Flutter app. The
// "Launch the PST Tool" / "Open Tool" links aren't connected to the live
// tool, so clicks on them are simply no-ops (no navigation, no message).
(function () {
  document.querySelectorAll('.js-inert-link').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
    });
  });
})();
