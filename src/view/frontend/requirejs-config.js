var config = {
    map: {
        '*': {
            mapjs: 'Pixicommerce_GoogleMapAddress/js/mapJs',
        },
    },
    config: {
        mixins: {
            'Magento_Checkout/js/action/set-billing-address': {
                'Pixicommerce_GoogleMapAddress/js/action/set-billing-address-mixin': true,
            },
            'Magento_Checkout/js/action/set-shipping-information': {
                'Pixicommerce_GoogleMapAddress/js/action/set-shipping-information-mixin': true,
            },
            'Magento_Checkout/js/action/create-shipping-address': {
                'Pixicommerce_GoogleMapAddress/js/action/create-shipping-address-mixin': true,
            },
            'Magento_Checkout/js/action/place-order': {
                'Pixicommerce_GoogleMapAddress/js/action/set-billing-address-mixin': true,
            },
            'Magento_Checkout/js/action/create-billing-address': {
                'Pixicommerce_GoogleMapAddress/js/action/set-billing-address-mixin': true,
            },
        },
    },
};
