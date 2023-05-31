import React, { useState, useEffect} from 'react';

import { BeakerIcon } from '@heroicons/react/24/solid'

function Form() {
  const [webPageChecked, setWebPageChecked] = useState(false);
  const [seoChecked, setSeoChecked] = useState(false);
  const [adCampaignChecked, setAdCampaignChecked] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === 'webPage') {
      setWebPageChecked(checked);
    } else if (name === 'seo') {
      setSeoChecked(checked);
    } else if (name === 'adCampaign') {
      setAdCampaignChecked(checked);
    }
  };

  useEffect(() => {
    let total = 0;

    if (webPageChecked) {
      total += 500;
    }

    if (seoChecked) {
      total += 300;
    }

    if (adCampaignChecked) {
      total += 200;
    }

    setTotalPrice(total);
  }, [webPageChecked, seoChecked, adCampaignChecked]);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="webPage"
          checked={webPageChecked}
          onChange={handleCheckboxChange}
        />
        Página web (500 €) 
        
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="seo"
          checked={seoChecked}
          onChange={handleCheckboxChange}
        />
        Campaña SEO (300 €)
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="adCampaign"
          checked={adCampaignChecked}
          onChange={handleCheckboxChange}
        />
        Campaña de publicidad (200 €)
      </label>
      <br />
      <h3>Total: {totalPrice} €</h3>
    </div>
  );
}

export default Form;