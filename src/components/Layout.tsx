import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './common/CustomCursor';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(({ children }, ref) => {
  return (
    <>
      <CustomCursor />
      <div className="min-h-screen flex flex-col relative" ref={ref}>
        <Navbar />
        <motion.main 
          className="flex-grow pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  );
});

export default Layout;