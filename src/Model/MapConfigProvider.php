<?php
namespace Pixiedia\GoogleMapAddress\Model;

use Magento\Checkout\Model\ConfigProviderInterface;
use Magento\Framework\App\Config\ScopeConfigInterface;

class MapConfigProvider implements ConfigProviderInterface
{
    /**
     * @var \Pixiedia\GoogleMapAddress\Helper\Data
     */
    protected $helperData;

    /**
     * Constructor.
     * @param \Pixiedia\GoogleMapAddress\Helper\Data     $helperData
     */

    public function __construct(
        \Pixiedia\GoogleMapAddress\Helper\Data $helperData
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
