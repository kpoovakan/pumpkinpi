"use strict";

function checkCompatible() {
document.getElementById("output").innerHTML=
`<p>Are you on a compooter or phone?</p>
<button class="main-button" onclick="compooter()">compooter</button>
<button class="main-button" onclick="phone()">phone</button>`; }

window.onload = checkCompatible

function compooter() {
	window.location.href="/pumpkinpi/compooter";
}

function phone() {
	window.location.href="/pumpkinpi/phone";
}