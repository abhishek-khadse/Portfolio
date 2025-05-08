import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Music, Gamepad2, Bike, Target } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import CTFImage from '../../../Assets/CTF.webp';
import DreamBikeImage from '../../../Assets/Dream Bike.png';
import FavGamesImage from '../../../Assets/FAV GAMES.png';

const VibesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const sections = [
    {
      title: "Favorite CTFs",
      description: "I like to participate in cybersecurity challenges and CTFs. Solving puzzles, learning new techniques, and competing with others keeps me sharp and inspired!",
      image: CTFImage,
      icon: <Target className="w-6 h-6 text-accent-500" />,
      imageLeft: true,
    },
    {
      title: "My Ride",
      description: "Weekend rides on a Himalayan 450 are my dream! Exploring the scenic roads of Maharashtra at sunrise, especially those foggy hill routes, is something I look forward to—one day, I'll be riding my dream bike there with the perfect playlist.",
      image: DreamBikeImage,
      icon: <Bike className="w-6 h-6 text-accent-500" />,
      imageLeft: false,
    },
    {
      title: "Gaming & Characters",
      description: "Valorant's Sage and Ghost of Tsushima's Jin Sakai are my favorites. Jin Sakai, especially as the Ghost, inspires me with his journey and stealthy approach! I love their unique abilities and the strategic depth they bring to the game!",
      image: FavGamesImage,
      icon: <Gamepad2 className="w-6 h-6 text-accent-500" />,
      imageLeft: true,
    },
    {
      title: "Sounds I Vibe With",
      description: "Lo-fi and Techno are my jam when I'm coding, hunting bugs, or night-riding. Bonus points for vintage synth!",
      image: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg",
      icon: <Music className="w-6 h-6 text-accent-500" />,
      imageLeft: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 dark:text-white font-mono">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              CTRL
            </motion.span>
            {" + "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              ALT
            </motion.span>
            {" + "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="text-accent-500"
            >
              VIBES
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-24"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className={`flex flex-col ${section.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
            >
              <motion.div
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h3 className="text-2xl font-bold text-primary-950 dark:text-white">
                    {section.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VibesSection; 