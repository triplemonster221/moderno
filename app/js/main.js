$(function(){

    
  
   

    $('.product-slider__inner').slick({
        infinite: true,
        arrows: false,
        dots:true,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    $('.top__tabs .tab').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.top__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.top__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
      });

      $('.top__tabs-profile .tab-profle').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.top__tabs-profile').find('.tab-item-profile').removeClass('active-tab').hide();
          $('.top__tabs-profile .tabs-profiles').find('.tab-profle').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
        });

  $('.header__menu-gamburger').on('click',function(){
    $('.menu__list').slideToggle();
    });


  // $('#rate-star').rateYo({
  //   rating: 5,
  //   normalFill: "#A0A0A0", 
  //   precision: 2
  //   });
   
    var mixer = mixitup('.product-inner-box');
  
  
    
 });

//  <div class="top__tabs">
// // <div class="tabs">
// //     <span class="tab active" data-id="1">Item Features</span>
// //     <span class="tab" data-id="2">Comments </span>
// //     <span class="tab" data-id="3">Reviews </span>
// //     <span class="tab" data-id="4">Support</span>
// // </div>
// // <div class="tab_content">
// //     <div class="tab-item active-tab tab-show" id="1">
// //         <ul class="tab__items">
// //             <li class="tabs__info icon-angle-right">Printing and typesetting industry</li>
// //             <li class="tabs__info icon-angle-right">Bhen an unknown printe</li>
// //             <li class="tabs__info icon-angle-right">Handard dummy text</li>
// //             <li class="tabs__info icon-angle-right">Desktop publishing software</li>
// //             <li class="tabs__info icon-angle-right">Bhen an unknown printe</li>
// //             <li class="tabs__info icon-angle-right">Printing and typesetting industry</li>
// //             <li class="tabs__info icon-angle-right">Bhen an unknown printe</li>
// //             <li class="tabs__info icon-angle-right">Handard dummy text</li>
// //         </ul>
// //     </div>
// //     <div class="tab-item active-tab" id="2">
// //         2
// //     </div>
// //     <div class="tab-item active-tab" id="3">
// //         3
// //     </div>
// //     <div class="tab-item active-tab" id="4">
// //         4
// //     </div>
// // </div>
// // </div>