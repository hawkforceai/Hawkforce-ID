
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { ContactHeaderIcon, ContactEmailIcon, ContactCallIcon } from './Icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    'Subject of interest': '',
    'More info': '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.Name || !formData.Email || !formData['More info']) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ Name: '', Email: '', 'Subject of interest': '', 'More info': '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 2000);
  };

  return (
    <AnimatedSection id="contact" className="py-20 sm:py-28 flex justify-center items-start">
        <div
        style={{
          alignContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          rowGap: "44px",
          justifyContent: "flex-start",
          maxWidth: "1000px",
          width: "100%",
          padding: "0px 1rem",
        }}
      >
        <div
          id="header"
          style={{
            alignContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            rowGap: "16px",
            justifyContent: "center",
            maxWidth: "700px",
            width: "100%",
          }}
        >
          <div
            style={{
              height: "32px",
              position: "relative",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "8px",
                display: "flex",
                position: "relative",
                backgroundColor: "rgb(245, 245, 245)",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0.706592px 0.706592px -0.541667px, rgba(0, 0, 0, 0.09) 0px 1.80656px 1.80656px -1.08333px, rgba(0, 0, 0, 0.09) 0px 3.62176px 3.62176px -1.625px, rgba(0, 0, 0, 0.09) 0px 6.8656px 6.8656px -2.16667px, rgba(0, 0, 0, 0.08) 0px 13.6468px 13.6468px -2.70833px, rgba(0, 0, 0, 0.05) 0px 30px 30px -3.25px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                borderRadius: "60px",
                padding: "6px 12px",
              }}
            >
              <ContactHeaderIcon style={{ width: "16px", height: "20px", fill: "rgba(0, 0, 0, 0.4)" }}/>
              <p style={{ fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif', fontWeight: "500", fontSize: "12px" }}>
                  CONTACT
              </p>
            </div>
          </div>
          <h2 className="text-6xl font-sans font-bold tracking-tighter text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-black from-35% to-gray-700">
                Reach Us At Anytime
            </span>
          </h2>
          <p className="text-lg text-black/80 max-w-[500px] text-center">
              Have questions or need any help? We’re here to help you with that
          </p>
        </div>
        <div
          id="form"
          className="w-full flex flex-col lg:flex-row items-start gap-6"
        >
          <div className="flex flex-col gap-6 w-full lg:w-2/5 animate-in from-left">
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-b from-black to-gray-700 flex items-center justify-center shadow-lg mb-6">
                <ContactEmailIcon style={{ width: "32px", height: "32px", fill: "rgb(255, 255, 255)" }} />
              </div>
              <p className="text-gray-600 mb-4">Feel free to email me if you have any questions or need more details!</p>
              <a href="mailto:hawkforce@support.com" target="_blank" rel="noopener" className="font-semibold text-black underline">hawkforce@support.com</a>
            </div>
            <div
               style={{
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-b from-black to-gray-700 flex items-center justify-center shadow-lg mb-6">
                  <ContactCallIcon style={{ width: "32px", height: "32px", fill: "rgb(255, 255, 255)" }} />
                </div>
                <p className="text-gray-600 mb-4">Feel free to book a call if that’s more convenient and easier for you</p>
                <a href="https://calendly.com/" target="_blank" rel="noopener" className="font-semibold text-black underline">Book a call</a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex-1 w-full animate-in from-right"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
              borderRadius: "16px",
              padding: "32px",
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >
              <label>
                <p className="text-sm font-semibold text-gray-700 mb-2">Full Name</p>
                <div style={{boxShadow: "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset", borderRadius: '10px', height: '48px'}}>
                    <input type="text" name="Name" placeholder="Mohammad Ibrahim" value={formData.Name} onChange={handleChange} required className="w-full h-full p-3 bg-transparent rounded-lg" />
                </div>
              </label>
              <label>
                <p className="text-sm font-semibold text-gray-700 mb-2">Email Address</p>
                <div style={{boxShadow: "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset", borderRadius: '10px', height: '48px'}}>
                    <input type="email" name="Email" placeholder="hawkforce@support.com" value={formData.Email} onChange={handleChange} required className="w-full h-full p-3 bg-transparent rounded-lg" />
                </div>
              </label>
              <label>
                <p className="text-sm font-semibold text-gray-700 mb-2">Subject Of Interest</p>
                 <div style={{boxShadow: "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset", borderRadius: '10px', height: '48px'}}>
                    <input type="text" name="Subject of interest" placeholder="Regarding Project" value={formData['Subject of interest']} onChange={handleChange} className="w-full h-full p-3 bg-transparent rounded-lg" />
                </div>
              </label>
              <label>
                 <p className="text-sm font-semibold text-gray-700 mb-2">How may we assist you?</p>
                 <div style={{boxShadow: "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset", borderRadius: '10px', minHeight: '100px'}}>
                    <textarea name="More info" placeholder="Give us more info.." required value={formData['More info']} onChange={handleChange} className="w-full min-h-[100px] p-3 bg-transparent rounded-lg resize-y"></textarea>
                </div>
              </label>
            <button
                type="submit"
                style={{
                backgroundColor: "rgb(0, 0, 0)",
                boxShadow: "rgba(61, 61, 61, 0.72) 0px 0.602187px 1.08394px -1.25px, rgba(61, 61, 61, 0.64) 0px 2.28853px 4.11936px -2.5px, rgba(61, 61, 61, 0.25) 0px 10px 18px -3.75px, rgba(0, 0, 0, 0.35) 0px 0.706592px 0.706592px -0.583333px, rgba(0, 0, 0, 0.34) 0px 1.80656px 1.80656px -1.16667px, rgba(0, 0, 0, 0.33) 0px 3.62176px 3.62176px -1.75px, rgba(0, 0, 0, 0.3) 0px 6.8656px 6.8656px -2.33333px, rgba(0, 0, 0, 0.26) 0px 13.6468px 13.6468px -2.91667px, rgba(0, 0, 0, 0.15) 0px 30px 30px -3.5px",
                borderRadius: "10px",
                padding: "12px 24px",
                color: 'white',
                fontWeight: 500
              }}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Your Message'}
            </button>
            {status === 'success' && (
                <div role="alert" className="text-center p-3 bg-green-100 text-green-800 rounded-lg">
                Thank you! Your message has been sent successfully.
                </div>
            )}
            {status === 'error' && (
                <div role="alert" className="text-center p-3 bg-red-100 text-red-800 rounded-lg">
                Please fill out all required fields and try again.
                </div>
            )}
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
