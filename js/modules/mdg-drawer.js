/* eslint-disable no-nested-ternary */
/**
 * File mdg-drawer.js.
 *
 *
 */

 import Overlay from "./mdg-overlay";

 export default class Drawer {
	 constructor( drawerId ) {
		 this.drawer = document.getElementById(drawerId);
		 this.overlay = new Overlay();
		 this.closeDrawerButton = this.drawer.querySelector('.js-close-drawer');
		 this.init()
	 }
	 init() {
		 if(this.closeDrawerButton) this.closeDrawerButton.addEventListener('click', ()=> this.close());
	 }
	 open() {
		 this.drawer.classList.add('active');
		 this.overlay.openOverlay();
	 }
	 close() {
		 this.drawer.classList.remove('active');
		 this.overlay.closeOverlay();
	 }
 }
 
 