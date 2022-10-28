$('.about_items > div').on('click', function(){
    $(this).children('.about_icon').toggleClass('about_rotate-icon');
    $(this).parent('.about_items').toggleClass('change_color')
    $(this).next('.about_text').slideToggle(300);
})


$('.features_items > div').on('click', function(){
    $(this).children('.features_icon').toggleClass('features_rotate-icon');
    $(this).parent('.features_items-content').toggleClass('features_title-color')
    $(this).next('.features_text-jquery').slideToggle(300);
})
