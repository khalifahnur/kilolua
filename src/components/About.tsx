import { motion, Variants } from 'motion/react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function About() {
  const { t } = useTranslation();
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between">
      
      {/* Text Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="w-full md:w-[45%] flex flex-col items-start z-10"
      >
        <motion.h3 variants={itemVariants} className="font-caveat text-4xl md:text-5xl mb-2 text-royal-navy transform -rotate-3 ml-2">
          {t('landing.about.subtitle')}
        </motion.h3>

        <motion.h2 
          variants={itemVariants} 
          className="font-playfair text-7xl md:text-[100px] font-bold text-royal-navy mb-8 leading-[0.85] tracking-wide"
          dangerouslySetInnerHTML={{ __html: t('landing.about.title') }}
        >
        </motion.h2>
        
        <motion.p variants={itemVariants} className="max-w-[450px] text-sm md:text-base mb-10 leading-relaxed font-medium text-royal-navy/90">
          {t('landing.about.desc')}
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link href="/about" className="bg-royal-red text-white font-playfair text-2xl tracking-widest px-12 py-3 hover:bg-red-800 transition-colors shadow-lg inline-block">
            {t('landing.about.btn')}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="w-full md:w-[50%] mt-24 md:mt-0 relative h-[500px] md:h-[550px] flex justify-center items-center"
      >
        <motion.img 
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          src="/coffee-cup-seeds.png" 
          alt="Coffee cup splashing with coffee beans" 
          className="w-full max-w-[600px] object-contain drop-shadow-2xl z-20"
        />
      </motion.div>

    </section>
  );
}
