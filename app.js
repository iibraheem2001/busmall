const productImageSectionTag = document.getElementById('all_prodcuts');
const leftproductImageTag = document.getElementById('left_product_img');
const rightproductImageTag = document.getElementById('right_prodcut_img');



let totalClicks = 0;

let leftproductOnTePage = null;
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
  console.log(ProductPicture.allImages[leftIndex].name, ProductPicture.allImages[rightIndex].name);

  lefProductOnThePage = ProductPicture.allImages[leftIndex];
  rightProductOnThePage = ProductPicture.allImages[rightIndex];

  renderNewProducts(leftIndex, rightIndex);
};

const handleClickOnProduct = function(event){
  console.log('im still alive');
  if(totalClicks < 5){

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

      pickNewProducts();
    }
    console.log(event.target.id);
  }
  totalClicks++;
  if(totalClicks === 5){
    productImageSectionTag.removeEventListener('click', handleClickOnProduct);
    console.log('you picked 5 products, thanks!');

  }
};




productImageSectionTag.addEventListener('click', handleClickOnProduct);




new ProductPicture('Bubblegum', 'img/assets/bubblegum.jpg');
new ProductPicture('Bubblegum', 'img/assets/banana.jpg');
new ProductPicture('Bubblegum', 'img/assets/chair.jpg');
new ProductPicture('Bubblegum', 'img/assets/sweep.jpg');
new ProductPicture('Bubblegum', 'img/assets/water-can.jpg');
new ProductPicture('Bubblegum', 'img/assets/wine-glass.jpg');
new ProductPicture('Bubblegum', 'img/assets/dragon.jpg');
new ProductPicture('Bubblegum', 'img/assets/shark.jpg');
new ProductPicture('Bubblegum', 'img/assets/breakfast.jpg');
new ProductPicture('Bubblegum', 'img/assets/scissors.jpg');
new ProductPicture('Bubblegum', 'img/assets/unicorn.jpg');
new ProductPicture('Bubblegum', 'img/assets/boots.jpg');



leftProductOnThePage = ProductPicture.allImages[3];
rightProductOnThePage = ProductPicture.allImages[0];

pickNewProducts();