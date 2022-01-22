// ==UserScript==
// @name         YouTube AdBlocker
// @namespace    https://pnyx.dev
// @version      0.1
// @description  YouTube Advertisement Blocker
// @author       You
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

// Created by Ethan

setInterval(() => {
	try {
		if (document.querySelector(".ytp-ad-button.ytp-ad-info-dialog-mute-button.ytp-ad-button-link")) {
			try {
				document.querySelector(".ytp-ad-info-dialog-background").style.display = "none";
				document.querySelector(".ytp-ad-feedback-dialog-background").style.display = "none";
			} catch {}
			document.querySelector(".ytp-ad-button.ytp-ad-info-dialog-mute-button.ytp-ad-button-link").click();
			setTimeout(() => {
				document.querySelectorAll(".ytp-ad-feedback-dialog-reason-text")[2].click();
				setTimeout(() => document.querySelector(".ytp-ad-feedback-dialog-confirm-button").click(), 20);
			}, 30)
		}
	} catch {}
}, 10)
