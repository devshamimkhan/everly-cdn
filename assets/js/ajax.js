jQuery(document).ready(function($) {
	function openMiniCart() {
        $('.wd-close-side.wd-fill').addClass('wd-close-side-opened');
        $('.cart-widget-side.wd-side-hidden.wd-right').addClass('wd-opened');
    }
	$('.custom-add-to-cart').on('click', function (e) {
		e.preventDefault();

		var productID = $(this).data('product-id');
		var variationID = $(this).data('variation-id') || 0; 
		var quantity = 1;
		var $thisbutton = $(this);

		$.ajax({
			type: 'POST',
			url: ajax_object.ajax_url,
			data: {
				action: 'custom_add_to_cart',
				product_id: productID,
				variation_id: variationID,
			},
			success: function (response) {
				 openMiniCart();
				 $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
			},
			error: function (xhr, status, error) {
				console.log('AJAX Error:', xhr.responseText, status, error);
			},
		});
	});

	$('.popup-variation-cart-button').on('click', function (e) {
		e.preventDefault();

		var productID = $(this).data('product-id');
		var variationID = $(this).data('variation-id') || 0; 
		var quantity = 1;
		var $thisbutton = $(this);
		
		variationID = $(this).attr('data-variation-id');
		
        // Ensure the variation ID exists
        if (!variationID || variationID === "") {
            alert('Please select a variation image.');
            return; 
        }
		
		$.ajax({
			type: 'POST',
			url: ajax_object.ajax_url,
			data: {
				action: 'custom_add_to_cart',
				product_id: productID,
				variation_id: variationID,
			},
			success: function (response) {
				 openMiniCart();
				 $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
			},
			error: function (xhr, status, error) {
				console.log('AJAX Error:', xhr.responseText, status, error);
			},
		});
	});

	});



jQuery(document).ready(function($) {
		$('#send-otp').on('click', function(e) {
			e.preventDefault();
			var phoneNumberInput = $('#contact-number');
			var phoneNumber = $('#contact-number').val();
			var bangladeshPhoneRegex = /^01[3-9]\d{8}$/;
			var phoneNumberLabel = $('#contact-number-label');
			
			if (!phoneNumber) {
				phoneNumberLabel.html('Please enter a valid phone number');
				phoneNumberLabel.addClass('invalid-feedback');
				phoneNumberInput.addClass('is-invalid');
				return;
			}
			
			if (!bangladeshPhoneRegex.test(phoneNumber)) {
				phoneNumberLabel.html('Please enter a valid 11-digit Bangladeshi phone number.');
				phoneNumberLabel.addClass('invalid-feedback');
				phoneNumberInput.addClass('is-invalid');
				return;
			}

			$.ajax({
				url: ajax_object.ajax_url,
				type: 'POST',
				data: {
					action: 'send_otp',
					contact_number: phoneNumber,
				},
				success: function(response) {
					if (response.success) {
						phoneNumberLabel.hide();
						phoneNumberLabel.removeClass('invalid-feedback');
						phoneNumberInput.removeClass('is-invalid');
						$('#form-response').html('<div class="alert alert-success"> OTP sent successfully. Please check your phone </div>');
						$('#otp-verification').show();
						$('#send-otp').hide();
					} else {
						$('#form-response').html('<div class="alert alert-danger">' + response.data.message + '</div>');
					}
				},
			});
		});

		$('#ajax-contact-form').on('submit', function (e) {
			e.preventDefault();
		
			const formData = $(this).serialize();
			$('#form-response').html('<div class="alert alert-info">Submitting...</div>');
		
			$.ajax({
				url: ajax_object.ajax_url,
				type: 'POST',
				data: formData,
				success: function (response) {
					if (response.success) {
						$('#form-response').html('<div class="alert alert-success">' + response.data.message + '</div>');
						$('#ajax-contact-form')[0].reset();
						$('#otp-verification').hide(); // Hide OTP section on success
					} else {
						$('#form-response').html('<div class="alert alert-danger">' + response.data.message + '</div>');
					}
				},
				error: function () {
					$('#form-response').html('<div class="alert alert-danger">An error occurred. Please try again.</div>');
				},
			});
		});
	});



// jQuery(document).ready(function($) {
//     $(".ajax-review-form").on("submit", function(e) {
//         e.preventDefault();

//         var form = $(this);
//         var formData = form.serialize();
//         var messageContainer = form.find(".review-message");

//         $.ajax({
//             type: "POST",
//             url: ajax_object.ajax_url,
//             data: formData + "&action=submit_review",
//             dataType: "json",
//             beforeSend: function() {
//                 messageContainer.html('<span style="color:blue;">Submitting review...</span>');
//             },
//             success: function(response) {
//                 if (response.success) {
//                     messageContainer.html('<span style="color:green;">' + response.data.message + '</span>');
//                     form[0].reset(); // Reset the form
//                 } else {
//                     messageContainer.html('<span style="color:red;">' + response.data.message + '</span>');
//                 }
//             },
//             error: function() {
//                 messageContainer.html('<span style="color:red;">Something went wrong. Try again.</span>');
//             }
//         });
//     });
// });


// jQuery(document).ready(function ($) {
//     $(".ajax-review-form").submit(function (e) {
//         e.preventDefault();
        
//         let form = $(this);
//         let formData = form.serialize();

//         $.ajax({
//             type: "POST",
//             url: ajax_object.ajax_url,
//             data: formData + "&action=submit_review",
//             dataType: "json",
//             beforeSend: function () {
//                 form.find(".submit-review-btn").text("Submitting...");
//             },
//             success: function (response) {
//                 if (response.success) {
//                     form.find(".review-message").html('<span style="color: green;">' + response.data.message + '</span>');
//                     form[0].reset();
//                 } else {
//                     form.find(".review-message").html('<span style="color: red;">' + response.data.message + '</span>');
//                 }
//             },
//             complete: function () {
//                 form.find(".submit-review-btn").text("Submit Review");
//             }
//         });
//     });
// });



jQuery(document).ready(function ($) {
    $(".ajax-review-form").submit(function (e) {
        e.preventDefault();

        let form = $(this);
        let formData = new FormData(this); // Use FormData to handle file uploads

        formData.append("action", "submit_review");

        $.ajax({
            type: "POST",
            url: ajax_object.ajax_url, 
            data: formData,
            processData: false,
            contentType: false,
            dataType: "json",
            beforeSend: function () {
                form.find(".submit-review-btn").text("Submitting...");
            },
            success: function (response) {
                if (response.success) {
                    form.find(".review-message").html('<span style="color: green;">' + response.data.message + '</span>');
                    form[0].reset();
					setTimeout(function () {
						location.reload();
					}, 1000);
                } else {
                    form.find(".review-message").html('<span style="color: red;">' + response.data.message + '</span>');
                }
            },
            complete: function () {
                form.find(".submit-review-btn").text("Submit Review");
            }
        });
    });
});


jQuery(document).ready(function($) {

    // Handle pagination link clicks
        $(document).on('click', '.PaginationStyled .page-numbers', function(e) {
            e.preventDefault(); // Prevent default link behavior

            var paged = $(this).text(); // Get the page number
            var product_id = $('#pagination-product-id').val();
              $('.PaginationStyled .page-numbers').removeClass('current');
              $(this).addClass('current');
            
            // Add a loading indicator (optional)
            $('#everly-reviews').html('<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>');

            // Send AJAX request
            $.ajax({
                url: ajax_object.ajax_url, 
                type: 'POST',
                data: {
                    action: 'fetch_reviews',
                    product_id: product_id,
                    paged: paged,
                },
                success: function(response) {
                    // Fade out the current content
                    $('#everly-reviews').fadeOut(300, function() {
                        // Replace the content
                        $(this).html(response).fadeIn(300); // Fade in the new content

                    });

                },
                error: function() {
                    alert('Error loading reviews. Please try again.');
                }
            });
        });
});
