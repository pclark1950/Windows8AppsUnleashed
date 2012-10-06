﻿(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/win/win.html", {
        ready: function (element, options) {
            document.getElementById("btnStart").addEventListener("click", function (e) {
                e.preventDefault();
                WinJS.Navigation.navigate("/pages/play/play.html");
            });
        }

    });
})();
