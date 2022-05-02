//async 
function fetchData() {

    fetch('https://www.theiconic.com.au/57-40-standard-women-s-1570362.html')
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
    fetch('https://www.theiconic.com.au/57-40-standard-women-s-1570362.html')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");
        // var getPrice = doc.getElementsByClassName("price final")[0];
        // var oldPrice = doc.getElementsByClassName("price final")[0].textContent;

        var selectedSize = doc.getElementsByClassName("small-7 medium-6 columns the-size");

        var sk = doc.querySelector('[data-key="load"]').textContent;

        console.log(sk);
        fetch('')

        //console.log(selectedSize[0]);
        //var newS = selectedSize.getElementsByClassName('original-size').textContent;
        //console.log(newS);

        var choice = " 4 "

        for (var i=0; i < selectedSize.length; i++) {
            console.log(selectedSize[i].getElementsByClassName('original-size')[i].textContent);
            console.log(selectedSize.length);
            console.log("done");
            // if(selectedSize[i].getElementsByClassName('original-size')[i].textContent == choice){
            //    var result = selectedSize[i].getElementsByClassName('original-size')[i].textContent;
            //     // result=selected[i].textContent;
            //     console.log("thisisthesize "+result);
            // }else{
            //     console.log("not found "+result);
            // }
                
            
        }
        // console.log("thisisthenewsize "+result);
        


        


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

setInterval(pollSite, 10000);
