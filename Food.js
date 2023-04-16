'use strict';

// let search = document.querySelector('#search-icon');
// let menu_bar = document.querySelector('#menu-bars');

// search.addEventListener('click', ()=>{
//     // document.querySelector('#search-form').className = 'searchHover';
//     document.querySelector('#search-form').style.top = 0;
//     document.querySelector('#search-form').style.display = 'block';
//     document.querySelector('#search-form').style.zIndex = 999;
//     document.querySelector('#search-form').style.transition = 'all .4s';
// });

// document.querySelector('#close').addEventListener('click', ()=>{
//     // document.querySelector('#search-form').style.transition = 'all .4s';
//     document.querySelector('#search-form').style.display = 'none';
// })

$(document).ready(function(){
    $('#owl-one').owlCarousel({
        items : 1,
        stagePadding : 130,
        dots : true,
        loop : true,
        autoplay : true,
        autoplayTimeout : 3800,
        responsiveClass:true,
        responsive:{
            320: {
                stagePadding : false,
                dots : false
            },
            375: {
                stagePadding : false,
                dots : false
            },
            425: {
                stagePadding : false,
                dots : false
            },
            768: {
                stagePadding : false,
                dots : false
            },
            1024: {
                stagePadding : 100
            },
            1025: {
                stagePadding : 130
            }
        }
    });
});

$(document).ready(function(){
    $('#owl-two').owlCarousel({
        // items : 3,
        margin: 60,
        loop: true,
        stagePadding: 130,
        autoplay : true,
        autoplayTimeout : 3800,
        responsiveClass:true,
        responsive:{
            320: {
                items : 1,
                margin : 50,
                stagePadding : false
            },
            375: {
                items : 1,
                margin : 50,
                stagePadding : false
            },
            425: {
                items : 1,
                margin : 50,
                stagePadding : false
            },
            768: {
                items : 1,
                margin : 66,
                stagePadding : 200
            },
            992:{
                items : 2
            },
            1024: {
                // stagePadding : 100
                items : 2
            },
            1025: {
                // stagePadding : 100
                items : 3,
                margin: 46
            }
        }
    });
})