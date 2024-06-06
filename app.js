
var glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 1,
    perView: 1,
    autoplay: 5000,
    breakpoints: {
        768: {
            perView: 1
        }
    },
    peek: 300
}).mount();



