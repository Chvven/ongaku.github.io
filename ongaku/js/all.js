$(document).ready(() => {
    $('.burgar_btn').click(function(){
      //避免a標籤會觸發
      event.preventDefault();
      //展開或收起
      $('.burgar_menu').slideToggle(600);
      
    })
    $('.burgar_menu li a').click(function(){
      event.preventDefault();
      //收起
      $('.burgar_menu').slideUp(600);
      //滾動
      var sectionTitle = this.title;
      console.log(sectionTitle);
      var sectionId = "#section--" + sectionTitle;
      console.log(sectionId);
      var scrollPoint = $(sectionId).offset().top;
      var lastScrollPoint = scrollPoint - 100;
      $("html,body").animate({ scrollTop: lastScrollPoint }, 800);
    })
});

