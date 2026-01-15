const images = document.querySelectorAll('.slider__img')
const controlls = document.querySelectorAll('.controlls')
let imageIndex = 0

function show(index){
    images[imageIndex].classList.remove('active')
    images[index].classList.add('active')
    imageIndex = index
}

controlls.forEach((e) =>{
    e.addEventListener('click' , () => {
    if(event.target.classList.contains('prev')) {
        let index = imageIndex - 1

        if(index < 0){
            index = images.length - 1
        }
        show(index)
    } else if (event.target.classList.contains('next'))
    {
        let index = imageIndex + 1
        if (index >= images.length){
            index = 0
        }
        show(index)
    }
})
})

setInterval(() => {
  let index = imageIndex + 1;
  if (index >= images.length) index = 0;
  show(index);
}, 2000);

show(imageIndex)









function charSelect(image, cost) {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    let existing = basket.find(item => item.image === image);

    if (existing) {
        existing.count += 1; 
    } else {
        basket.push({ image, cost, count: 1 });
    }
    localStorage.setItem('basket', JSON.stringify(basket));

    alert("✅ Added to basket!");
}





function charSelect(image, cost) {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    let existing = basket.find(item => item.image === image);

    if (existing) {
        existing.count += 1; 
    } else {
        basket.push({ image, cost, count: 1 });
    }
    localStorage.setItem('basket', JSON.stringify(basket));

    alert("✅ Added to basket!");
}





function charSelect(image, cost) {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    let existing = basket.find(item => item.image === image);

    if (existing) {
        existing.count += 1; 
    } else {
        basket.push({ image, cost, count: 1 });
    }
    localStorage.setItem('basket', JSON.stringify(basket));

    alert("✅ Added to basket!");
}









                    





























