// ==UserScript==
// @name        Shreddit - reddit.com
// @namespace   Violentmonkey Scripts
// @match       https://www.reddit.com/*
// @grant       none
// @version     1.0
// @author      https://github.com/calebvisage
// @description 2023/11/06, 13:01:25
// ==/UserScript==

const removeElement = () => {
  const element = document.querySelector("shreddit-async-loader.theme-beta");
  if (element) {
    element.remove();
  }
};

removeElement();
