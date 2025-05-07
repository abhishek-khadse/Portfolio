import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <PageTransition>
      <section className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle number="06" title="Get In Touch" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-950 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always open to discussing new projects, opportunities, or partnerships. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent-500/10 p-3 rounded-md mr-4">
                    <MapPin className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-950 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Pune, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-500/10 p-3 rounded-md mr-4">
                    <Mail className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-950 dark:text-white">Email</h4>
                    <a 
                      href="mailto:abhishekkhadse289@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-accent-500 dark:hover:text-accent-500 transition-colors"
                    >
                      abhishekkhadse289@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-500/10 p-3 rounded-md mr-4">
                    <Phone className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-950 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300"></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-500/10 p-3 rounded-md mr-4">
                    <Clock className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-950 dark:text-white">Working Hours</h4>
                    <p className="text-gray-600 dark:text-gray-300">9:00 AM - 6:00 PM, Monday - Friday</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 >Send Me a Message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;