(function($){
    var $form = $('form#apply-form');
    $form.validate({
        highlight: function(element) {
            $(element).parent().addClass("text-danger");
            $(element).parent().addClass("has-error");
        },
        unhighlight: function(element) {
            $(element).parent().removeClass("text-danger");
            $(element).parent().removeClass("has-error");
        }
    });
    $form.submit(function(e){
        e.preventDefault();

        var validate = $form.valid();
        if (validate == true) {
            $('.loading').removeClass('inactive');
            $.ajax({
                url: 'applyPost.php',
                type: 'post',
                data: $form.serialize(),
                dataType: 'json',
                success: function($data) {
                    console.log($data);
                    var alertClass = ($data.result) ? 'success' : 'danger';
                    var response = '<div class="alert alert-'+ alertClass +'" role="alert">'+$data.message+'</div>'
                    $('#response').html(response);
                },
                complete: function() {
                    $('.loading').addClass('inactive');
                }
            })
        }
    });
})(jQuery)