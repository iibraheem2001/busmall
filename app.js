const productImageSectionTag = document.getElementById('all_products');
const leftProductImageTag = document.getElementById('left_product_img');
const rightProductImageTag = document.getElementById('right_product_img');



let totalClicks = 0;

let leftproductOnThePage = null;
let rightproductOnThePage = null;

const ProductPicture = function (name, imageSrc) {
  this.name = name;
  this.clicks = 0;
  this.timesShown = 0;
  this.url = imageSrc;

  ProductPicture.allImages.push(this);
};

ProductPicture.allImages = [];


const renderNewProducts = function (leftIndex, rightIndex){


  leftProductImageTag.src = ProductPicture.allImages[leftIndex].url;
  rightProductImageTag.src = ProductPicture.allImages[rightIndex].url;
};

const pickNewProducts = function(){
  const leftIndex = Math.floor(Math.random() * ProductPicture.allImages.length);
  let rightIndex;
  do {
    rightIndex = Math.floor(Math.random() * ProductPicture.allImages.length);
  } while (rightIndex === leftIndex);

  leftProductOnThePage = ProductPicture.allImages[leftIndex];
  rightProductOnThePage = ProductPicture.allImages[rightIndex];

  renderNewProducts(leftIndex, rightIndex);
};

const handleClickOnProduct = function(event){
  if(totalClicks < 25){

    const thingWeClickedOn = event.target;
    const id = thingWeClickedOn.id;

    if(id === 'left_product_img' || id === 'right_product_img'){
      if(id === 'left_product_img'){
        leftProductOnThePage.clicks++;
      }

      if(id === 'right_product_img'){
        rightProductOnThePage.clicks++;
      }

      leftProductOnThePage.timesShown++;
      rightProductOnThePage.timesShown++;
    console.log(leftProductOnThePage);
      pickNewProducts();
    }

  }
  totalClicks++;
  if(totalClicks === 25){
    productImageSectionTag.removeEventListener('click', handleClickOnProduct);
    console.log('you picked 25 products, thanks!');

  }
};




productImageSectionTag.addEventListener('click', handleClickOnProduct);




new ProductPicture('Bubblegum', 'img/assets/bubblegum.jpg');
new ProductPicture('Banana', 'img/assets/banana.jpg');
new ProductPicture('Chair', 'img/assets/chair.jpg');
new ProductPicture('Sweep', 'img/assets/sweep.png');
new ProductPicture('Water-can', 'img/assets/water-can.jpg');
new ProductPicture('Wine-glass', 'img/assets/wine-glass.jpg');
new ProductPicture('Dragon', 'img/assets/dragon.jpg');
new ProductPicture('Shark', 'img/assets/shark.jpg');
new ProductPicture('Breakfast', 'img/assets/breakfast.jpg');
new ProductPicture('Scissors', 'img/assets/scissors.jpg');
new ProductPicture('Unicorn', 'img/assets/unicorn.jpg');
new ProductPicture('Boots', 'img/assets/boots.jpg');



leftProductOnThePage = ProductPicture.allImages[3];
rightProductOnThePage = ProductPicture.allImages[0];

pickNewProducts();