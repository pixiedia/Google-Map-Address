var config = {
    map: {
        '*': {
            mapjs: 'Pixiedia_GoogleMapAddress/js/mapJs',
        },
    },
    config: {
        mixins: {
            'Magento_Checkout/js/action/set-billing-address': {
                'Pixiedia_GoogleMapAddress/js/action/set-billing-address-mixin': true,
            },
            'Magento_Checkout/js/action/set-shipping-information': {
                'Pixiedia_GoogleMapAddress/js/action/set-shipping-information-mixin': true,
            },
            'Magento_Checkout/js/action/create-shipping-address': {
                'Pixiedia_GoogleMapAddress/js/action/create-shipping-address-mixin': true,
            },
            'Magento_Checkout/js/action/place-order': {
                'Pixiedia_GoogleMapAddress/js/action/set-billing-address-mixin': true,
            },
            'Magento_Checkout/js/action/create-billing-address': {
                'Pixiedia_GoogleMapAddress/js/action/set-billing-address-mixin': true,
            },
        },
    },
};
