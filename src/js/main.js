import $ from "jquery";
// console.log($);

import {data} from "./data";
console.log(data);


var items = data.results.map(function(item){
// return an array of objects, name the object,
// attach the function name (item)to the list item
return {
	title: item.title,
	price: item.price,
	shopname: item.Shop.shop_name,
	imgurl: item.Images[0].url_170x135,
	shoplink: item.Shop.url
  };
});

console.log(items)

var productHtml =items.map(function(product){
  return `<div class="itemBoxes">

  <div class="itemImagebox">
   <img src=${product.imgurl} 
   style="width: 100%;max-height: 100%">
   </div>

  <div class="itemTitlebox">
   <a href=${product.shoplink}>
   ${product.title}
   </a>
   </div>
  
  <div class="shopNamebox">
   <a href=${product.shoplink}>
   ${product.shopname}
   	</a>
  </div>

<div class="itemPricebox">
    <span class="price">$${product.price}
    </span>
  </div>

  </div>`
});

var resultsContainerNode = $(".resultsContainer").append(productHtml);


console.log(productHtml)


// $(".items")


//  function itemreturn(){
//  $(".items").addClass("itemboxes");
// };

// $(".resultsContainer").on("click", itemreturn);


// function boxesLayout (data) {
// 	return `<h3 class="title"> ${data.title}</h3>`;
// }


// data.forEach(function(x) {
// var node = $(".items");
// 	node.append("itemboxes");
// var itemsHTML = boxesLayout(x);
// });



