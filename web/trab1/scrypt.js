var nav = document.getElementById('nav');

window.onscroll = function(){
    if ( window.pageYOffset > 100)
    {
        this.console.log("entrou");
        this.nav.style.position = "fixed";
        this.nav.style.top = 0;
    }   
    else{
        
    }
}