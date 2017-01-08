$(document).ready(function(){
    FilterPanelToggle();
    compareFunction();
});

function FilterPanelToggle()
{
    $( ".ar-filter-panel .ar-panel-head" ).click(function() {
        console.log('clicked');
      $(this).siblings('.ar-panel-body').slideToggle("medium");
    });
}




function compareFunction()
{
    clearLoanBtn();
    $(".ar-table-box input[type=checkbox]").change(function() {
        if(this.checked) 
        {
            $numImgInCompareSection = $('.ar-compare-logos div.ar-logo-compare').size();
            //console.log($numImgInCompareSection);
            $tr = $(this).parents('tr');
            if($tr.attr('imgData'))
            {
                console.log('image already added');
            }else
            {
                if($numImgInCompareSection < 4 )
                {
                    $tr.attr('imgData','imgAdded imgAdd'+($numImgInCompareSection+1));
                    $src = $tr.find('.ar-product-logo').attr('src');
                    $('section.ar-compare-logos').append("<div class='ar-logo-compare' imgData='imgAdded imgAdd"+($numImgInCompareSection+1)+"'><img src='"+$src+"'><i class='fa fa-times' aria-hidden='true'></i></div>");
                    
                    if($('.ar-compare-logos div.ar-logo-compare').size() >= 4 )
                    {
                        $(".ar-table-box tr:not([imgData*='imgAdded']) input[type=checkbox]").attr('disabled',true);
                    }
                    
                    closeCompareImg($('.ar-logo-compare[imgData="imgAdded imgAdd'+($numImgInCompareSection+1)+'"]'));
                    
                }else
                {
                    
                }
            }
            setupRest();
        }
        else
        {
            $tr = $(this).parents('tr');
            if($tr.attr('imgData'))
            {
                $attrtobeRemoved = $tr.attr('imgData');
                //console.log($removedAttr);
                removeCompareImg($attrtobeRemoved);
            }
            setupRest();
        }
    });
}


function removeCompareImg($attrtobeRemoved)
{
    $('tr[imgData="'+$attrtobeRemoved+'"]').removeAttr('imgData');
    $('div.ar-logo-compare[imgData="'+$attrtobeRemoved+'"]').remove();
    
    
    $numRemoved = $attrtobeRemoved.substring(15, 16);
    $( "[imgData*='imgAdded']" ).each(function( index ) {
        $preAttr = $(this).attr('imgData');
        $numpre = $preAttr.substring(15, 16);
        if($numpre > $numRemoved)
        {
            $(this).removeAttr('imgData');
            $(this).attr('imgData','imgAdded imgAdd'+($numpre-1));
        }
    });
    
    if($('.ar-compare-logos div.ar-logo-compare').size() < 5 )
    {
        $(".ar-table-box input[type=checkbox]").removeAttr('disabled');
    }
    
}
function setupRest()
{
    $numRemaining = $('.ar-compare-logos div.ar-logo-compare').size();
    if($numRemaining == 1)
    {
        $('.ar-compare-text').html('Great, you can select up to 4 investment loans to compare');
        $('.ar-compare-section-box').is(':hidden')
        {
            $('.ar-compare-section-box').fadeIn('medium');
        }
    }else if($numRemaining > 1)
    {
        $('.ar-compare-text').html($numRemaining+' / 4 investment loans ready to be compared');
    }else if($numRemaining == 0)
    {
        $('.ar-compare-section-box').fadeOut('medium');
    }
}


function closeCompareImg(thisobj)
{
    $(thisobj).children('i').click(function(){
        $attrtobeRemoved = $(this).parent('.ar-logo-compare').attr('imgData');
        //console.log($attrtobeRemoved);
        $('tr[imgData="'+$attrtobeRemoved+'"] input[type="checkbox"]').prop( "checked", false );
        removeCompareImg($attrtobeRemoved);
        setupRest();
    });
}
function clearLoanBtn()
{
    $('.ar-compare-section-box .ar-clear-fixed').click(function(){
        $('.ar-table-box tr').removeAttr('imgData');
        $('.ar-table-box  tr input[type="checkbox"]').prop( "checked", false );
        $(".ar-table-box input[type=checkbox]").removeAttr('disabled');
        $('.ar-compare-text').html('');
        $('.ar-compare-logos').html('');
        $('.ar-compare-section-box').fadeOut('medium');
    });
}








