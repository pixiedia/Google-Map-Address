define([
    'jquery',
    'mage/utils/wrapper',
    'Magento_Checkout/js/model/quote',
    'Pixiedia_GoogleMapAddress/js/model/map-config-provider',
], function ($, wrapper, quote, mapData) {
    'use strict';
    var mapDataValue = mapData.getMapData();
    return function (setShippingInformationAction) {
        return wrapper.wrap(
            setShippingInformationAction,
            function (originalAction, messageContainer) {
                if (mapDataValue['status'] == '0') {
                    return originalAction(messageContainer);
                }
                if (messageContainer.custom_attributes != undefined) {
                    $.each(
                        messageContainer.custom_attributes,
                        function (key, value) {
                            messageContainer['custom_attributes'][key] = {
                                attribute_code: key,
                                value: value,
                            };
                        }
                    );
                }

                return originalAction(messageContainer);
            }
        );
    };
});
