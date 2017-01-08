$( document ).ready(function() {
    ///// new ///////////
    
    
    CompareRefineToggle();
    compareFunction();
    comparisonRateModal();
    rlViewFullDisplaimer();
    rlToggleWidget();
    
    ///// new ///////////
    
    
    
    $('i[data-toggle]').tooltip();
    
    OnWindowResize();
    OnElementExistance();
    
    chosenMultiSelect();
    //arOwlCarousel(); Element Dependent
    CompanyProfileCarousel();
    selectRadioListing();
    menu();
    ownershiptype();
    clearRefine();
    maxPriceDeactivation();
	minPriceDeactivation();
    adjustAgentDetailWidth();
    ClickOnListingBtn();
    
    cpRefinePropertyToggle();
    
    residentialListingTabs();
    rlCollapse();
    rlAdditionalExpenses();
    rlh2Responsive();
    rlTabsResponsive();
    rlTermsMore();
    rlInspectionMore();
    rlTextareaCountdown();
    
    currencyModal();
    //estimatorModal(); 
    fullDisclaimerModal();
    shareOptionsModal();
    depreciationCalModal();
    rlInputSignupModal();
    rlFloorPlanModal();
    rlRentalDetailModal();
    contactAgentFormModal();
    
    faAgentlogoMasonry();
    
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart1);
    
    //drop down deactivation
	rental_yield();
	beds();
	baths();
	costperweek();
});








/*///////////////////////////////////////////////////////////
new 
/*///////////////////////////////////////////////////////////


function rlToggleWidget()
{
    $('.rl-widgets-box .rl-widget-head').click(function(){
        $('.rl-loan-info-sec').slideToggle();
    });
}


function rlViewFullDisplaimer()
{
    $('.widget_full_disclaimer').click(function(){
        $('.rest-val-ali').fadeToggle();
    });
}


function comparisonRateModal()
{
    $('.CompRateExplain').click(function() {
        $('#comparisonRateModal').modal();
    });
}

function CompareRefineToggle()
{
    $('.compare-refine-search').click(function(){
        $('.ar-refine-compare').toggle("medium");
    });
}




function compareFunction()
{
    clearLoanBtn();
    $(".compare-mb-table input[type=checkbox]").change(function() {
        if(this.checked) 
        {
            console.log('on hai');
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
                //console.log('image not added');
                    $tr.attr('imgData','imgAdded imgAdd'+($numImgInCompareSection+1));
                    $src = $tr.find('.ar-product-logo').attr('src');
                    $('section.ar-compare-logos').append("<div class='ar-logo-compare' imgData='imgAdded imgAdd"+($numImgInCompareSection+1)+"'><img src='"+$src+"'><i class='fa fa-times' aria-hidden='true'></i></div>");
                    
                    if($('.ar-compare-logos div.ar-logo-compare').size() >= 4 )
                    {
                        $(".compare-mb-table tr:not([imgData*='imgAdded']) input[type=checkbox]").attr('disabled',true);
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
        $(".compare-mb-table input[type=checkbox]").removeAttr('disabled');
    }
    
}
function setupRest()
{
    $numRemaining = $('.ar-compare-logos div.ar-logo-compare').size();
    if($numRemaining == 1)
    {
        $artext1 = $('.ar-compare-text').attr('artext1');
        $('.ar-compare-text').html($artext1);
        $('.ar-compare-section-box').is(':hidden')
        {
            $('.ar-compare-section-box').fadeIn('medium');
        }
    }else if($numRemaining > 1)
    {
        $artext2 = $('.ar-compare-text').attr('artext2');
        $('.ar-compare-text').html($numRemaining+$artext2);
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
        $('.compare-mb-table tr').removeAttr('imgData');
        $('.compare-mb-table  tr input[type="checkbox"]').prop( "checked", false );
        $(".compare-mb-table input[type=checkbox]").removeAttr('disabled');
        $('.ar-compare-text').html('');
        $('.ar-compare-logos').html('');
        $('.ar-compare-section-box').fadeOut('medium');
    });
}











/*///////////////////////////////////////////////////////////
new 
/*///////////////////////////////////////////////////////////











function maxPriceDeactivation()
{
    $('select.min-price').on('change', function() {
        
        $minValue = this.value;
        
        $('select.max-price').find('option').each(function(index,element){
			 element.removeAttribute('disabled');
            if($minValue >= parseInt(element.value))
            {
                element.setAttribute('disabled','disabled');
            }
			else{
                element.removeAttribute('disabled');
            }
         });
		 
		if($minValue =='')
		{
			$('select.max-price').find('option').each(function(index,element){
				element.removeAttribute('disabled');
			});
		}
    });
}

function minPriceDeactivation()
{
    $('select.max-price').on('change', function() {
        
        $maxValue = this.value;
        
        $('select.min-price').find('option').each(function(index,element){
			element.removeAttribute('disabled');
            if($maxValue <= parseInt(element.value))
            {
                element.setAttribute('disabled','disabled');
            }else{
                element.removeAttribute('disabled');
            }
         });
		 
		if($maxValue =='')
		{
			$('select.min-price').find('option').each(function(index,element){
				element.removeAttribute('disabled');
			});
		}
    });
}

function costperweek()
{
  
   $('select.max-costperweek').on('change', function() {
        
        $maxValue = this.value;
        
        $('select.min-costperweek').find('option').each(function(index,element){
			element.removeAttribute('disabled');
            if($maxValue <= parseInt(element.value))
            {
                element.setAttribute('disabled','disabled');
            }else{
                element.removeAttribute('disabled');
            }
         });
		 
		if($maxValue =='')
		{
			$('select.min-costperweek').find('option').each(function(index,element){
				element.removeAttribute('disabled');
			});
		}
    });
	$('select.min-costperweek').on('change', function() {
        
        $minValue = this.value;
        
        $('select.max-costperweek').find('option').each(function(index,element){
			element.removeAttribute('disabled');
            if($minValue >= parseInt(element.value))
            {
                element.setAttribute('disabled','disabled');
            }else{
                element.removeAttribute('disabled');
            }
         });
		 
		if($minValue =='')
		{
			$('select.max-costperweek').find('option').each(function(index,element){
				element.removeAttribute('disabled');
			});
		}
    });
    
}

function rental_yield()
{
  
   $('select.max-rental-yield').on('change', function() {
        
        $maxValue = this.value;
        
        $('select.min-rental-yield').find('option').each(function(index,element){
			element.removeAttribute('disabled');
            if($maxValue <= parseInt(element.value))
            {
                element.setAttribute('disabled','disabled');
            }else{
                element.removeAttribute('disabled');
            }
         });
		 
		if($maxValue =='')
		{
			$('select.min-rental-yield').find('option').each(function(index,element){
				element.removeAttribute('disabled');
			});
		}
    });
	$('select.min-rental-yield').on('change', function() {
        
        $minValue = this.value;
        
        $('select.max-rental-yield').find('option').each(function(index,element){
			element.removeAttribute('disabled');
            if($minValue >= parseInt(element.value))
            {
                element.setAttribute('disabled','disabled');
            }else{
                element.removeAttribute('disabled');
            }
         });
		 
		if($minValue =='')
		{
			$('select.max-rental-yield').find('option').each(function(index,element){
				element.removeAttribute('disabled');
			});
		}
    });
    
}

function beds()
{
	$('select.beds-low').on('change', function() {
        
        $minValue = this.value;
        
        $('select.beds-high').find('option').each(function(index,element){
			element.removeAttribute('disabled');
            if($minValue >= parseInt(element.value))
            {
                element.setAttribute('disabled','disabled');
            }else{
                element.removeAttribute('disabled');
            }
         });
		 
		if($minValue =='')
		{
			$('select.beds-high').find('option').each(function(index,element){
				element.removeAttribute('disabled');
			});
		}
    });
	$('select.beds-high').on('change', function() {
        
        $maxValue = this.value;
        
        $('select.beds-low').find('option').each(function(index,element){
			element.removeAttribute('disabled');
            if($maxValue <= parseInt(element.value))
            {
                element.setAttribute('disabled','disabled');
            }else{
                element.removeAttribute('disabled');
            }
         });
		 
		 if($maxValue =='')
		{
			$('select.beds-low').find('option').each(function(index,element){
				element.removeAttribute('disabled');
			});
		}
    });
}

function baths()
{
		// $('select.baths-low').find('option').each(function(index,element){
			// var c_text = element.text();
             // element.text(c_text+'+');
         // });
}




















function ClickOnListingBtn()
{
    $('.ap-viewing-container button').click(function(){
        $('.ap-viewing-container button').removeClass('dark-listing-btn');
        $(this).addClass('dark-listing-btn');
    });
}



function OnElementExistance()
{
    if($('.search-item-carousel').length && $('.search-item-carousel').is(":visible"))
    {
        arOwlCarousel();
        console.log('run arOwl');
    }else if($('.owl-carousel').length)
    {
        arOwlCarousel();
        console.log('run arOwl');
    }
    
}

function OnWindowResize()
{
    $( window ).resize(function() {
        adjustAgentDetailWidth();
    });
}

function cpRefinePropertyToggle()
{
    $('h2.cp-ps-h2').click(function(){
        $('.extended-search-body.cp-property-search-body').slideToggle('medium');
    });
}

function adjustAgentDetailWidth()
{
    if($(window).width() < 500)
    {
        $containerWidth = $('section.img-name-num').width() - 15;
        $imgWidth = $('.rl-agent-img').width();
        $textWidth = $('.rl-agent-nameNum').width();
        //console.log($containerWidth+' '+ $imgWidth +' '+ $textWidth );
        if($containerWidth < $imgWidth+$textWidth)
        { 
            $widthContent = $containerWidth - 100;
            $('.rl-agent-nameNum').width($widthContent);
            $('.aac-cabtn').width(100);
            $('.submit-btn.aac-cabtn').css('margin-top' , '3px');
            $('.aac-agentcontent .rl-agent-nameNum p').css('margin-top' , '2px');
            $('.aac-agentcontent .rl-agent-nameNum h3').css({ lineHeight: '1em', marginBottom: '0px' });
        }
    }
}

function faAgentlogoMasonry()
{
    $(window).load(function(){
        $('.grid').masonry({
          itemSelector: '.grid-item',
          columnWidth: 176,
          gutter: 8,
          fitWidth: true
        });
    });
    
}

function rlTextareaCountdown()
{
    $('.rl-contact-agent-tab textarea').change(updateCountdown);
    $('.rl-contact-agent-tab textarea').keyup(updateCountdown);
    $('.rl-send-friend-tab textarea').change(updateCountFriend);
    $('.rl-send-friend-tab textarea').keyup(updateCountFriend);
    
    $('#contactAgentFormModal textarea').change(updateCountContactModal);
    $('#contactAgentFormModal textarea').keyup(updateCountContactModal);
}

function updateCountdown() {
    var remaining = 300 - jQuery('.rl-contact-agent-tab textarea').val().length;
    $('.rl-contact-agent-tab .rl-contact-words-left strong').text(remaining);
}
function updateCountFriend() {
    var remaining = 300 - jQuery('.rl-send-friend-tab textarea').val().length;
    $('.rl-send-friend-tab .rl-contact-words-left strong').text(remaining);
}

function updateCountContactModal() {
    var remaining = 300 - $('#contactAgentFormModal textarea').val().length;
    $('#contactAgentFormModal .rl-contact-words-left strong').text(remaining);
}
function drawChart1() 
{
    if (!document.getElementById('rl-piechart-1')) return;
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Rent',     100]
    ]);

    var options = {
      legend: {alignment: 'center',position:'bottom'},
      chartArea:{left:0,top:20,width:"100%",height:"70%"}
    };

    var chart = new google.visualization.PieChart(document.getElementById('rl-piechart-1'));

    chart.draw(data, options);
}

function rlInspectionMore()
{
    $('.rl-inspection-more-btn').click(function()
    {
        $('div.rl-more-inspection').slideDown(500);
        $(this).fadeOut(200); 
    });
}

function rlTermsMore()
{
    $('a.termsbox-more').click(function(){
        $para = $('p.terms-more-text');
        $para.slideToggle('medium');
        if($(this).text() == 'More...')
        {
            $(this).text('Less...');
        }else
        {
            $(this).text('More...');
        }
    });
}

function rlTabsResponsive()
{
    $ItemsNum = $('.rl-main ul.nav-tabs li').size();
    if($ItemsNum == 4)
    {
        $('.rl-main ul.nav-tabs li').addClass('fourTabs');
    }else if($ItemsNum == 5){
        $('.rl-main ul.nav-tabs li').addClass('fiveTabs');
    }else if($ItemsNum == 6){
        $('.rl-main ul.nav-tabs li').addClass('sixTabs');
    }
}

function rlh2Responsive()
{
    $mainWidth = $('.rl-main-heading').width();
    $h2Width = $('.rl-main-h2').width();
    $tableWidth = $('.hori-icons-table').width();
    if($mainWidth < ($h2Width + $tableWidth + 10))
    {
        $('.rl-main table.rl-dynamic-float.hori-icons-table').css('float','none');
    }
    $( window ).resize(function() {
        $mainWidth = $('.rl-main-heading').width();
        $h2Width = $('.rl-main-h2').width();
        $tableWidth = $('.hori-icons-table').width();
        if($mainWidth < ($h2Width + $tableWidth + 10))
        {
            $('.rl-main table.rl-dynamic-float.hori-icons-table').css('float','none');
        }else
        {
            $('.rl-main table.rl-dynamic-float.hori-icons-table').css('float','right');
        }
    });
}

function rlAdditionalExpenses()
{
    $('.rl-add-additional-exp').click(function(e){
        e.preventDefault();
        $('.rl-additional-expenses').fadeIn(200);
    });
}

function initMap() 
{
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 44.540, lng: -78.546},
        zoom: 7
    });
}

function rlCollapse()
{
    $backendListingIteration = 0;
    ////////////// Open or close tabs itself ////////////////////////////
    $('.rl-tab-head').click(function() {
        if($(this).parent('.rl-tab').hasClass('rl-tab-open'))
        {
            $(this).parent('.rl-tab').removeClass('rl-tab-open');
            $(this).next('.rl-tab-body').slideUp(500);
        }else{
            //destroy_owl($('.search-item-carousel'));
            $bodytab = $(this).next('.rl-tab-body');
            $bodytab.slideDown(500,function(){
                
                
                
                
                
            });
            $(this).parent('.rl-tab').addClass('rl-tab-open');
            if($bodytab.hasClass('rl-graph-body'))
            {
                drawChart1();
            }else if($bodytab.hasClass('rl-rental-estimator-tab'))
            {
                rentalOwlCarousel();
            }else if($bodytab.hasClass('backend-listing-tabs'))
                {
                    /*if($backendListingIteration)
                    {
                        $(".search-item-carousel").trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
                        $(".search-item-carousel").find('.owl-stage-outer').children().unwrap()
                        console.log('Destroyed');
                    }
                    console.log('yeah');
                    $backendListingIteration++;
                    */
                    arOwlCarousel();
                }
        }
    });
    ////////////// Clicks on [Click here to view available information tabs] //////////
    $('.rl-choose-tab').click(function() {
        $('.rl-tab').removeClass('rl-tab-open');
        $('.rl-tab-body').slideUp(500);
        
          $('html, body').animate({
            scrollTop: $('#rl-tabs-main-box').offset().top
          }, 800 );
    });
    
    //// Clicks on [Contact Agent] Button //////////////
    $('.rl-ca-js-fun').click(function() {
        $('.rl-tab').removeClass('rl-tab-open');
        $('.rl-tab-body').slideUp(500);
        
        $('.rl-tab.rl-contact-agent-tab').children('.rl-tab-body').slideDown(500,function(){
            $('html, body').animate({
                scrollTop: $('.rl-tab.rl-contact-agent-tab').offset().top
              }, 500 );
        });
        $('.rl-tab.rl-contact-agent-tab').addClass('rl-tab-open');
    });
    
    //// Clicks on [view rental estimator] Button //////////////
    $('.view-rental-exp').click(function() {
        $('.rl-tab').removeClass('rl-tab-open');
        $('.rl-tab-body').slideUp(500);
        
        $('.rl-tab.rl-rental-estimator-container').children('.rl-tab-body').slideDown(500,function(){
            $('html, body').animate({
                scrollTop: $('.rl-tab.rl-rental-estimator-container').offset().top
              }, 500 );
        });
        $('.rl-tab.rl-rental-estimator-container').addClass('rl-tab-open');
        rentalOwlCarousel();
    });
    
    
    
    
}

function residentialListingTabs()
{
    $('#myTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        if(e.target.getAttribute('href')=='#rl-maps')
        {
            initMap();
        }
    });
}

function contactAgentFormModal()
{
    $('button.cas-contact-agency,.aac-ca-js-fun,.cp-contact-agency,.agent-profile-contactbtn').click(function(){
    
        $('#contactAgentFormModal').modal();
    
    });
}

function rlRentalDetailModal()
{
    $('button.rl-rental-more-btn').click(function(){
    
        $('#rlRentalDetailModal').modal();
    
    });
}

function rlInputSignupModal()
{
    $('input.form-control.signup-input').click(function(){
        
        $('#rlInputSignupModal').modal();
    
    });
}

function rlFloorPlanModal()
{
    $('.rl-floorplan-img').click(function() {
        $('#rlFloorPlanModal').modal();
    });
}

function depreciationCalModal()
{
    $('.depreciationCal').click(function() {
        $('#depreciationCalModal').modal();
    });
}

function fullDisclaimerModal()
{
    $('.fullDisclaimerBtn').click(function() {
        $('#fullDisclaimerModal').modal();
    });
}

function estimatorModal()
{
    $('.view-rental-exp').click(function() {
        //console.log('yo');
        $('#estimatorModal').modal();
    });
}
function shareOptionsModal()
{
    $('.shareoptionsbtn').click(function() {
        $('#shareoptionsModal').modal();
    });
}
function currencyModal()
{
    $('select#currency').on('change', function() {
        
        $currency = this.value;
        $('#currencyChangeModal').modal();
        $('.modelcurrencyval').text($currency);
        
    });
}

function clearRefine()
{
    $('.submit-btn.clear-submit').click(function(){
        $('.refine-fields-form').trigger("reset");
        
        if($(this).hasClass('cp-clear-submit'))
        {
            $('#cp-property-type').val('').trigger('chosen:updated');
        }else
        {
            $('#property-type').val('').trigger('chosen:updated');
        }
        
        $('select.max-price').find('option').each(function(index,element){
            element.removeAttribute('disabled');
         });
    });
}

function chosenMultiSelect()
{
    $(".chosen-select").chosen({ width: '100%' });
}
function setOwlStageHeight(event) {
  var wrap =  $('.listing-search-images,.search-item-carousel');
  var stageWidth =  parseInt( wrap.width()); 
  var setStageHeight = stageWidth / (800/533);  
  wrap.css('min-height', setStageHeight );
 
}
function arOwlCarousel()
{
    //jQuery('.search-item-carousel').imagesLoaded(function () {
        $('.search-item-carousel').owlCarousel({
            items:1,
            loop:true,
            dots: false,
            lazyLoad: true,
            autoHeight : true,
            singleItem : true
        });
    //});
}

function rentalOwlCarousel()
{
    //jQuery('.rental-item-carousel').imagesLoaded(function () {
        $('.rental-item-carousel').owlCarousel({
            items:1,
            loop:true,
            dots: false,
            lazyLoad: true,
            autoHeight : true,
        });
    //});
}

function CompanyProfileCarousel()
{
    //jQuery('.cp-item-carousel').imagesLoaded(function () {
        $('.cp-item-carousel').owlCarousel({
            items:1,
            loop:true,
            dots: false,
            lazyLoad: true,
            autoHeight : true,
        });
    //});
}

function destroy_owl(el) {
    //el.data('owlCarousel').destroy();
}

function selectRadioListing()
{
    $('.ar-select-config table tr').click(function(){
        //var className = $( this ).attr( "class" );
        //console.log(className);
        $(this).find('input').prop( "checked", true );
    });
}

function ownershiptype()
{
    $('input:radio[name="ownertype"]').change(
    function(){
        if ($(this).is(':checked') && $(this).val() == 'joint') {
            $( ".joint-section" ).slideDown( 1000 );
        }
    });
}

function menu()
{
    
    $( ".ar-menu-bars .fa-bars" ).click(function() {
        $( "div.extended-menu" ).toggle( "fast" );
    });
    
    refineToggle();
    
    searchToggle();
}

function searchToggle()
{
    $( ".search-btn" ).click(function() {
        //console.log($(this).hasClass('refine-hidden'));
        if($(this).hasClass('search-hidden'))
        {
            $(this).removeClass('search-hidden');
            $( "div.simple-search" ).slideDown( "fast", function() {
                $(".search-btn").addClass('search-shown');
            });
        }else if($(this).hasClass('search-shown'))
        {
            $(this).removeClass('search-shown');
            $( "div.simple-search" ).slideUp( "fast", function() {
                $(".search-btn").addClass('search-hidden');
            });
        }


    });
}

function refineToggle()
{
    $( ".refine-btn" ).click(function() {
        //console.log($(this).hasClass('refine-hidden'));
        if($(this).hasClass('refine-hidden'))
        {
            $(this).removeClass('refine-hidden');
            $( "div.extended-search" ).slideDown( "normal", function() {
                $(".refine-btn").addClass('refine-shown');
            });
        }else if($(this).hasClass('refine-shown'))
        {
            $(this).removeClass('refine-shown');
            $( "div.extended-search" ).slideUp( "normal", function() {
                $(".refine-btn").addClass('refine-hidden');
            });
        }


    });
}

