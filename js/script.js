$(document).ready(function() {

        $('.dataLayerTab').click(function(){
          var $parent = $(this).parent(".dataLayerTab");

            if($(this).children(".content").is(':hidden')) {
               $(this).children(".content").slideDown( "slow" );
                $(this).children(".dataLayerTab h4").addClass('close');
                $(".close_dataLayers:hidden").show();

            } /*else {

               $(this).children(".content").slideUp();
               $(this).children(".dataLayerTab h4").removeClass('close');
            }   */

            
        });
        $('.dataLayersIcon, .dataLayerTab h4').click(function(){

            if($(".content").is(':visible')) {
               $(".content").slideUp( "slow" );
                $(".dataLayerTab h4").removeClass('close');
            } 


});
        $(".close_dataLayers").click(function() {
                      
                $(".content").slideUp( "slow" );
                $(".dataLayerTab h4").removeClass('close');
                $(".close_dataLayers").hide();
                 

});

        });