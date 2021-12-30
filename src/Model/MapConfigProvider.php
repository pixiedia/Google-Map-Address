<?php
namespace Pixicommerce\GoogleMapAddress\Model;

use Magento\Checkout\Model\ConfigProviderInterface;
use Magento\Framework\App\Config\ScopeConfigInterface;

class MapConfigProvider implements ConfigProviderInterface
{
    /**
     * @var \Pixicommerce\GoogleMapAddress\Helper\Data
     */
    protected $helperData;

    /**
     * Constructor.
     * @param \Pixicommerce\GoogleMapAddress\Helper\Data     $helperData
     */

    public function __construct(
        \Pixicommerce\GoogleMapAddress\Helper\Data $helperData
    ) {
        $this->helperData = $helperData;
    }
    /**
     * set data in window.checkout.config for checkout page.
     *
     * @return array $options
     */
    public function getConfig()
    {
        $options = [
            'map' => [],
        ];
        $options['map']['status'] = $this->helperData->getModuleStatus();
        $options['map']['api_key'] = $this->helperData->getApiKey();
        return $options;
    }
}
