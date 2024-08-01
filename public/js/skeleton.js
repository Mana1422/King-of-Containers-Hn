// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton(){
    console.log($('#navbarPlaceholder').load('./app/text/navbar.html'));
    console.log($('#footerPlaceholder').load('./app/text/footer.html'));
    console.log($('#footerPlaceholder2').load('../../app/text/footer2.html'));
}
loadSkeleton();  //invoke the function