import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FrontPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackgroundAnimation, setShowBackgroundAnimation] = useState(false);
  const heroRef = useRef(null);
  const pricingRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const [heroText, setHeroText] = useState('');
  const heroTextOptions = [
    
  ];
  const [heroTextIndex, setHeroTextIndex] = useState(0);
  const backgroundStars = useRef([]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const heroOffset = heroRef.current.offsetTop;
    const pricingOffset = pricingRef.current.offsetTop;
    const blogOffset = blogRef.current.offsetTop;
    const contactOffset = contactRef.current.offsetTop;

    if (scrollY >= contactOffset) {
      setActiveSection('contact');
      setShowBackgroundAnimation(true);
    } else if (scrollY >= blogOffset) {
      setActiveSection('blog');
      setShowBackgroundAnimation(true);
    } else if (scrollY >= pricingOffset) {
      setActiveSection('pricing');
      setShowBackgroundAnimation(true);
    } else if (scrollY >= heroOffset) {
      setActiveSection('home');
      setShowBackgroundAnimation(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroTextIndex((prevIndex) => (prevIndex + 1) % heroTextOptions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroTextOptions]);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= heroTextOptions[heroTextIndex].length) {
        setHeroText(heroTextOptions[heroTextIndex].substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [heroTextIndex, heroTextOptions]);

  useEffect(() => {
    // Reset and populate background stars when animation is triggered.
    backgroundStars.current = [];
    if (showBackgroundAnimation) {
      const starCount = 200;
      for (let i = 0; i < starCount; i++) {
        backgroundStars.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 1,
        });
      }
    }
  }, [showBackgroundAnimation]);

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  // Showcase data
  const featureCards = [
    {
      title: 'Personalized Skill Assessments',
      description:
        'Identify where you stand with adaptive assessments that deliver accurate, actionable insights tailored to your needs. Get actionable insights for targeted improvement.',
      image:
        'https://energipeople.com/wp-content/uploads/2023/01/Skills-Gap-Analysis-who-or-what-is-missing.jpg',
    },
    {
      title: 'AI Powered Speech and Student Detection',
      description:
        'Harness cutting-edge AI to monitor classroom interactions, ensuring academic integrity and detecting any attempts to cheat. This intelligent system enhances fairness and accountability in the learning process.',
      image:
        'https://specials-images.forbesimg.com/imageserve/61c4dab3dcce70ad2cdf606a/960x0.jpg',
    },
    {
      title: 'Gamified and Structured Learning',
      description:
        'Experience a dynamic and engaging learning journey with gamified lessons and a structured curriculum designed to keep you motivated and on track. Earn rewards and see measurable progress as you master new skills.',
      image:
        'https://miro.medium.com/v2/resize:fit:750/1*GdYEKCQeLhjOHDKGc_gg3Q.jpeg',
    },
  ];

  const codeImages = [
    'https://via.placeholder.com/600x400?text=Code1',
    'https://via.placeholder.com/600x400?text=Code2',
    'https://via.placeholder.com/600x400?text=Code3',
  ];

  // Interleave the showcase items (features and code images)
  const allShowcaseItems = [];
  for (let i = 0; i < Math.max(featureCards.length, codeImages.length); i++) {
    if (featureCards[i]) {
      allShowcaseItems.push({ type: 'feature', data: featureCards[i] });
    }
    if (codeImages[i]) {
      allShowcaseItems.push({ type: 'code', data: codeImages[i] });
    }
  }

  const pricingPlans = [
    {
      title: 'Basic',
      price: '$19/month',
      features: ['Access to basic courses', 'Community support'],
    },
    {
      title: 'Pro',
      price: '$49/month',
      features: ['All basic features', 'Real-time feedback', 'Advanced projects'],
    },
    {
      title: 'Enterprise',
      price: '$99/month',
      features: ['All pro features', 'Dedicated mentor', 'Custom projects'],
    },
  ];

  const blogPosts = [
    {
      title: 'The Future of Web Development',
      date: 'Oct 26, 2023',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
    },
    {
      title: 'Tips for Learning React Faster',
      date: 'Oct 20, 2023',
      excerpt: 'Learn effective strategies to accelerate your React learning journey.',
    },
    {
      title: 'Building Scalable APIs with Node.js',
      date: 'Oct 15, 2023',
      excerpt: 'Discover best practices for designing and building scalable APIs using Node.js.',
    },
  ];

  return (
    <div className="landing-page font-sans text-white bg-black overflow-x-hidden relative">
      {/* Shooting Stars Background */}
      {showBackgroundAnimation && (
        <div className="animated-background fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
          {backgroundStars.current.map((star, index) => (
            <motion.div
              key={index}
              initial={{ x: star.x, y: star.y, rotate: 0, opacity: 0.8 }}
              animate={{
                x: [star.x, star.x + 300],
                y: [star.y, star.y + 300],
                rotate: [0, 45],
                opacity: [0.8, 0.3, 0.8]
              }}
              transition={{
                duration: star.speed * 5,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop'
              }}
              className="absolute rounded-full bg-white"
              style={{ width: star.size, height: star.size }}
            />
          ))}
        </div>
      )}

      {/* Navbar */}
      <nav className="navbar fixed top-0 left-0 w-full bg-black bg-opacity-80 p-4 flex justify-center z-10 shadow-md">
        <a
          href="#home"
          className={`mx-4 transition-colors duration-300 ${activeSection === 'home' ? 'text-violet-400' : 'hover:text-violet-300'}`}
          onClick={() => scrollToSection(heroRef)}
        >
          Home
        </a>
        <a
          href="#pricing"
          className={`mx-4 transition-colors duration-300 ${activeSection === 'pricing' ? 'text-violet-400' : 'hover:text-violet-300'}`}
          onClick={() => scrollToSection(pricingRef)}
        >
          Pricing
        </a>
        <a
          href="#blog"
          className={`mx-4 transition-colors duration-300 ${activeSection === 'blog' ? 'text-violet-400' : 'hover:text-violet-300'}`}
          onClick={() => scrollToSection(blogRef)}
        >
          Blog
        </a>
        <a
          href="#contact"
          className={`mx-4 transition-colors duration-300 ${activeSection === 'contact' ? 'text-violet-400' : 'hover:text-violet-300'}`}
          onClick={() => scrollToSection(contactRef)}
        >
          Contact
        </a>
      </nav>

      {/* Hero Section without Motion */}
      <section ref={heroRef} className="hero-section min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-b from-purple-900 via-black to-black">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Start Your Journey in Coding</h1>
          <button className="bg-violet-600 hover:bg-violet-700 text-white py-3 px-8 rounded-lg transition-colors duration-300 text-lg">
            Begin Now
          </button>
          <div className="image-slider mt-8">
            {/* Add your improved image slider component here */}
          </div>
          <div className=" mt-8 text-xl text-gray-300">
            <p>{heroText}</p>
          </div>
        </div>
      </section>

      {/* Showcase Section with Alternate Layout and No Vertical Translation */}
      <section className="showcase-section min-h-screen flex flex-col justify-center items-center p-8 bg-black">
        <h2 className="text-4xl font-bold mb-10">Showcase</h2>
        {allShowcaseItems.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center mb-12 w-full max-w-5xl`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {item.type === 'feature' ? (
              <>
                <img
                  src={item.data.image}
                  alt={item.data.title}
                  className="w-full md:w-1/2 rounded-md shadow-2xl hover:shadow-violet-400 transition-shadow duration-300"
                />
                <div className="p-6 md:w-1/2">
                  <h3 className="text-3xl font-semibold mb-4">{item.data.title}</h3>
                  <p className="text-gray-300">{item.data.description}</p>
                </div>
              </>
            ) : (
              <img
                src={item.data}
                alt={`Code ${index + 1}`}
                className="w-full md:w-1/2 rounded-md shadow-2xl hover:shadow-violet-400 transition-transform duration-300 cursor-pointer"
              />
            )}
          </motion.div>
        ))}
      </section>

      {/* Pricing Section with Enhanced Gradient */}
      <section
        ref={pricingRef}
        className="pricing-section min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-black via-purple-800 to-black"
      >
        <h2 className="text-4xl font-bold mb-10">Pricing Plans</h2>
        <div className="pricing-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="pricing-card bg-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-violet-400 transition-shadow duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-3xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="list-disc list-inside text-gray-300 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-6 rounded-lg transition-colors duration-300 w-full">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section ref={blogRef} className="blog-section min-h-screen flex flex-col justify-center items-center p-8 bg-black">
        <h2 className="text-4xl font-bold mb-10">Blog</h2>
        <div className="blog-posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="blog-post bg-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-violet-400 transition-shadow duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-3xl font-semibold mb-4">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.date}</p>
              <p className="text-gray-300 mb-6">{post.excerpt}</p>
              <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors duration-300 inline-block">
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact-section min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-b from-purple-900 to-black">
        <h2 className="text-4xl font-bold mb-10">Contact Us</h2>
        <p className="text-gray-300 mb-6">Have any questions or need assistance? Reach out to us!</p>
        <form className="w-full max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-700 p-3 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-gray-700 p-3 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <textarea
            placeholder="Your Message"
            className="bg-gray-700 p-3 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-violet-400"
            rows="4"
          ></textarea>
          <button className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-6 rounded-lg transition-colors duration-300 w-full">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 p-8 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FrontPage;