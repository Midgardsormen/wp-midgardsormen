export default class Overlay {
	constructor( ) {
		this.overlay = document.querySelector( '.mdg-overlay' );
        this.siteBody = document.querySelector( 'body' );
        this.activeOverlayButtons = document.querySelectorAll( '.js-active-overlay' );
        this.removeOverlayButtons = document.querySelectorAll( '.js-remove-overlay' );
        this.init();
	}
    init(){
        this.addOrRemoveOverlay(this.activeOverlayButtons,this.toggleOverlay)
        this.addOrRemoveOverlay(this.removeOverlayButtons,this.closeOverlay)
        this.overlay.addEventListener( 'click', ( ) => {
            this.allActiveElements = document.querySelectorAll( '.active' );
            this.allActiveElements.forEach( ( elm ) => {
                elm.classList.remove( 'active' );
            } );
            this.closeOverlay()
        } );
        
    }
    addOrRemoveOverlay(nodeList, action){
        nodeList.forEach( ( e ) => {
            e.addEventListener( 'click', () => { 
                if ( this.overlay ) action();
            } );
        } );
    }
    toggleOverlay(){
        debugger;
        this.overlay.classList.toggle( 'active' );
        this.siteBody.classList.toggle( 'fixed' );
    }
	openOverlay() {
		this.overlay.classList.add('active');
		this.siteBody.classList.add('fixed');
	}
	closeOverlay() {
		this.overlay.classList.remove('active');
		this.siteBody.classList.remove('fixed');
	}
}