"use strict";
const $menu = document.querySelector("menu[state=close]");
$menu.onclick =
    event => {
        const menu_is_closed = $menu.getAttribute("state") === "close";
        $menu.setAttribute("state", menu_is_closed ? "open" : "close");
    };
