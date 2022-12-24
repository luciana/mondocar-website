import React, {useState} from 'react';
import AnalyticsEventTracker from './AnalyticsEventTracker';


function Schedule({props}) {   
    const [result, setResult] = useState(false);    
    const[error, setError] = useState(false);
    const[success, setSuccess] = useState(false);
    const gaEventTracker = AnalyticsEventTracker('Schedule Service Form');
    
    const onSubmit = async (event) => {
        console.log('onSubmit triggered');
        event.preventDefault();

        setResult(true);
        console.log('event.target', event.target);
        const formData = new FormData(event.target);
    
        formData.append("access_key", "25868d84-4cd4-40f6-af5a-b2be7133ede3");
        formData.append('subject', 'Mondo Car Service Request');


        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",       
      
        body: formData
        })
        .then(async (res) => {          
            if (res.status === 200) {                                             
                setSuccess(true);
                setResult(false);
            } else {
             
              setError(true);   
              setResult(false);       
            }
          })
          .catch((error) => {            
                
            setError(true); 
            setResult(false);
          })
          .then(function () {
            console.log('suppose to reset form');
          });
    };
  
  return (
    <div>    
   
   <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Schedule Service</h2>
                    <h3 className="section-subheading text-muted">with your friendly neighbohood car shop</h3>
                </div>    
                <div className={ success ? "alert-success" : "d-none"} id="submitSuccessMessage">
                      <div className="text-center fw-bolder mb-3">Your message has been sent to Mondo Car Repair. They will contact you shortly.</div>                        
                    </div>   
                <div className={ error ? "alert-warning" : "d-none"} id="submitErrorMessage">
                    <div className="text-center fw-bolder mb-3">Oops there was an error sending your message, please try it again.</div>
                </div>                    
                                           
                <form id="contactForm" onSubmit={onSubmit} className="needs-validation" >
                    
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">                               
                                <input className="form-control" 
                                        id="name" 
                                        name="name" 
                                        type="text" 
                                        placeholder="Your Name *"  
                                        required  
                                       />                                
                                <div className="invalid-feedback">A name is required.</div>
                            </div>
                            <div className="form-group">
                               
                                <input className="form-control" id="email"  name="email" type="email" placeholder="Your Email *"  required />                               
                                <div className="invalid-feedback" >Email is not valid.</div>
                            </div>
                            <div className="form-group">                               
                                <input className="form-control" id="phone" name="phone" type="tel" placeholder="Your Phone *"   required/>
                                <div className="invalid-feedback">A phone number is required.</div>
                            </div>
                            <div className="form-group row g-3  mb-md-0">                               
                                    <div className="col-sm-4 form-group mb-md-0">
                                        <input className="form-control" name="year" id="year" type="number" placeholder="Car Year "  />                                
                                    </div>
                                    <div className="col-sm form-group mb-md-0">
                                        <input className="form-control" name="make" id="make" type="text" placeholder="Car Make "  />
                                    </div>
                                    <div className="col-sm form-group mb-md-0">
                                        <input className="form-control" name="model" id="model" type="text" placeholder="Car Model "  />
                                    </div>                                                                   
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                               
                                <textarea className="form-control" name="message" id="message" placeholder="Your Message *" required ></textarea>
                                <div className="invalid-feedback">A message is required.</div>
                            </div>
                        </div>
                    </div>                   
                                     
                    <div className="text-center">
                        <button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit" onClick={()=>gaEventTracker('schedule_service_submit_button')}>                      
                            <span className={ result ? "spinner-border spinner-border-sm" : "d-none"} role="status" aria-hidden="true"></span>  Send Message 
                        </button>                                               
                    </div>
                </form>
               
            </div>
        </section>
  
    </div>
  );
  }
  export default Schedule;