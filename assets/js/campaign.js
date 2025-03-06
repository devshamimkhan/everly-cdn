jQuery(document).ready(function ($) {
    $('#campaign_product').select2({
        templateResult: function (data) {
            if (!data.id) {
                return data.text;
            }
            const thumbnail = $(data.element).data('thumbnail');
            return $('<span><img src="' + thumbnail + '" style="width:30px; height:30px; margin-right:10px;" />' + data.text + '</span>');
        },
        templateSelection: function (data) {
            const thumbnail = $(data.element).data('thumbnail');
            return $('<span><img src="' + thumbnail + '" style="width:20px; height:20px; margin-right:10px;" />' + data.text + '</span>');
        }
    });

    $('#add_campaign_product').on('click', function () {
        const productID = $('#campaign_product').val();
        const productName = $('#campaign_product option:selected').text();
        const productPrice = $('#campaign_product option:selected').data('price');
        const thumbnail = $('#campaign_product option:selected').data('thumbnail');
        const productType = $('#campaign_product option:selected').data('type');

        if (productID) {
            if (productType === 'variable') {
                $.ajax({
                    url: campaignData.ajaxUrl, 
                    type: 'POST',
                    data: {
                        action: 'fetch_product_variations',
                        product_id: productID,
                    },
                    success: function (response) {
                        if (response.success) {
                            const variations = response.data.variations;

                            variations.forEach(variation => {
                                $('#campaign_items').append(`
                                    <tr>
                                        <td><img src="${thumbnail}" alt="" width="50" height="50"></td>
                                        <td>${productName} (${variation.attributes})</td>
                                        <td>${variation.price}</td>
                                        <td><input type="text" class="offer_price_input" name="campaign_offer_price[]" placeholder="Enter offer price"></td>
                                        <td><button type="button" class="button remove_campaign_item"><?php esc_html_e('Remove', 'text-domain'); ?></button></td>
                                    </tr>
                                `);
                            });
                        }
                    }
                });
            } else if (productType === 'simple') {
                $('#campaign_items').append(`
                    <tr>
                        <td><img src="${thumbnail}" alt="" width="50" height="50"></td>
                        <td>${productName}</td>
                        <td>${productPrice}</td>
                        <td><input type="text" class="offer_price_input" name="campaign_offer_price[]" placeholder="Enter offer price"></td>
                        <td><button type="button" class="button remove_campaign_item"><?php esc_html_e('Remove', 'text-domain'); ?></button></td>
                    </tr>
                `);
            }
        }
    });

    $(document).on('click', '.remove_campaign_item', function () {
        $(this).closest('tr').remove();
    });
});
