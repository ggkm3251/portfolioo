import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: 'Email',
      content: 'glennkamau2@gmail.com',
      link: 'mailto:glenn@example.com'
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: 'Phone',
      content: '+254 742 568 427',
      link: 'tel:+254742568427'
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: 'Location',
      content: 'Nairobi, Kenya',
      link: 'https://maps.google.com'
    }
  ];
  
  return (
    <section id="contact">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">
            Feel free to reach out to me for any inquiries, collaborations, or just to say hello. I'm always open to new opportunities and connections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">
                Have a project in mind or want to discuss a potential collaboration? I'm just a message away.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link}
                  className="flex items-start gap-4 hover:bg-muted p-4 rounded-lg transition-colors group"
                >
                  <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-muted group-hover:bg-background">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="font-medium mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/ggkm3251" 
                  target="_blank" 
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                >GH</a>
                <a 
                  href="https://www.linkedin.com/in/glenn-mwangi-a52b52218/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                >LI</a>
                <a 
                  href="https://x.com/GlennKamau" 
                  target="_blank" 
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                >TW</a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="card">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">Message Sent!</h4>
                  <p className="text-muted-foreground text-center mt-2">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary px-6 py-2.5 w-full md:w-auto flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};