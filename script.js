//async 
function fetchData() {

    fetch('https://www.theiconic.com.au/drover-1-1-4-belt-1101894.html')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

       document.getElementById("website").appendChild(doc.getElementsByClassName("image ti-logo")[0]);
       document.getElementById("item").appendChild(doc.querySelector('[class="product-image-frame ga-track-link-click"]'));
       var newy = document.getElementById("lastprice").appendChild(doc.getElementsByClassName("price")[0]);
       document.getElementById("sku").appendChild(doc.getElementsByClassName("small product-description-sku")[0]);

       console.log(newy)
    })
}

fetchData();

function pollSite() {
    fetch('https://www.theiconic.com.au/the-logo-strap-snapshot-628923.html')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");
        var getPrice = doc.getElementsByClassName("price final")[0];
        var oldPrice = doc.getElementsByClassName("price final")[0].textContent;
       
        console.log(oldPrice)

        let td = document.createElement('td');
        td.textContent = newPrice;

        document.getElementById("newprice").appendChild(doc.getElementsByClassName("price final")[0]);

        var newPrice = document.getElementById("lastprice").textContent;
     
        var number1 = Number(oldPrice.replace(/[^0-9.-]+/g,""));
        var number2 = Number(newPrice.replace(/[^0-9.-]+/g,""));

        console.log(number1)
        console.log(number2)

        if (number2 = number1){

            //alert("PRICE CHANGE ALERT")
        }
})
}   

setInterval(pollSite, 1000);
