$(document).ready(function() {
    $('#page1').click(function() {
       $('#pager1').show();
       $('#page').hide();
    });

    $('#page2').click(function() {
       $('#pager2').show();
       $('#page').hide();
    });

    $('#page3').click(function() {
       $('#pager3').show();
       $('#page').hide();
    });

    $('#page4').click(function() {
       $('#pager4').show();
       $('#page').hide();
    });


    $('#s, .icon-arrow-left-2').click(function() {
      $('#pager4, #pager3, #pager2, #pager1').hide();
      $('#page').show();
      
  
    });





     //vibration for the phone
              $('#dope').click(function() { 
              if (localStorage.vibrate == "yes") {
                $('#vibrate').animate({'width':'0%'}, 300, 'linear');
                localStorage.vibrate = "no";
              }
              else {
                   $('#vibrate').animate({'width':'100%'}, 300, 'linear');
                localStorage.vibrate = "yes";
                navigator.notification.vibrate(500);

              }
            });
            
            //sound for the phone
            $('#dope1').click(function() { 
              if (localStorage.music == "yes") {
                $('#music').animate({'width':'0%'}, 300, 'linear');
                localStorage.music = "no";
              }
              else {
                $('#music').animate({'width':'100%'}, 300, 'linear');
                localStorage.music = "yes";
                navigator.notification.beep(3);

              }
            });


});