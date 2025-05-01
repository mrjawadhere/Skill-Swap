import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, staggerContainer } from "@/lib/animations";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Set up your personal profile with skills you want to share and skills you want to learn."
    },
    {
      number: "02",
      title: "Find Skills to Learn",
      description: "Browse our extensive catalog of skills offered by community members."
    },
    {
      number: "03",
      title: "Connect and Learn",
      description: "Schedule virtual sessions with skill providers through our platform."
    },
    {
      number: "04",
      title: "Exchange Knowledge",
      description: "Share your expertise with others while learning new skills yourself."
    },
    {
      number: "05",
      title: "Review and Improve",
      description: "Provide feedback to help community members enhance their teaching."
    }
  ];

  // Custom animation for step progression
  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-poppins text-slate-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          How Does It Work?
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={step.number} 
                custom={index}
                variants={stepVariants}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-all duration-300 cursor-pointer"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
              >
                <motion.div 
                  className="bg-accent text-white h-10 w-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.5 }
                  }}
                >
                  {step.number}
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInFromRight}
          >
            <motion.div
              className="relative rounded-lg overflow-hidden"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-accent/40 to-primary/40 mix-blend-overlay"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="People collaborating in a workshop setting" 
                className="rounded-lg w-full h-auto"
              />
              
              {/* Floating shapes for added visual interest */}
              <motion.div
                className="absolute h-16 w-16 rounded-full bg-accent/30 backdrop-blur-md -top-8 -right-8"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.7, 0.9, 0.7]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="absolute h-8 w-8 rounded-full bg-primary/30 backdrop-blur-md bottom-10 left-10"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
