import React, {useEffect} from 'react';

const Reviews = () => {

    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = "//widget.tagembed.com/embed.min.js";
      script.async = true;
      script.type = "text/javascript";
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      }
    }, []);
  
      
    return (
        <div>
            <div class="tagembed-container google-reviews-tagembeded" >
                <div class="tagembed-socialwall" data-wall-id="80077" view-url="https://widget.tagembed.com/80077">  </div>               
            </div>
        </div>
    )
  };
  
  export default Reviews