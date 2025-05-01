import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/animations";

export default function EmpoweringSection() {
  // Custom animation for the connecting dots effect
  const connectingLines = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-40 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-primary/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <motion.div 
            className="col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInFromLeft}
          >
            <motion.div 
              className="relative rounded-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {/* Overlay pattern */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 mix-blend-overlay"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
              
              {/* Connection lines SVG overlay */}
              <motion.svg 
                className="absolute inset-0 w-full h-full z-10"
                viewBox="0 0 400 400"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.circle cx="100" cy="100" r="8" fill="var(--accent)" 
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
                <motion.circle cx="300" cy="150" r="8" fill="var(--primary)" 
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
                <motion.circle cx="200" cy="300" r="8" fill="var(--accent)" 
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                />
                <motion.path 
                  d="M 100 100 L 300 150" 
                  stroke="var(--accent)" 
                  strokeWidth="2" 
                  fill="none"
                  variants={connectingLines} 
                />
                <motion.path 
                  d="M 300 150 L 200 300" 
                  stroke="var(--primary)" 
                  strokeWidth="2" 
                  fill="none"
                  variants={connectingLines} 
                />
                <motion.path 
                  d="M 200 300 L 100 100" 
                  stroke="var(--accent)" 
                  strokeWidth="2" 
                  fill="none"
                  variants={connectingLines} 
                />
              </motion.svg>
              
              <img 
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Hands holding paper cutouts" 
                className="rounded-lg w-full h-auto object-cover shadow-lg transform"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInFromRight}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold font-poppins text-slate-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Empowering Connections
              </motion.span>
              <br />
              <motion.span 
                className="inline-block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                On Our Virtual Skills Exchange Platform
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-slate-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Welcome to Our Community! Our platform is designed to connect individuals worldwide who are passionate about expanding their knowledge, sharing their expertise, and learning from others in a supportive community environment.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button className="relative overflow-hidden group bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md inline-flex items-center justify-center transition-all hover:shadow-lg">
                <motion.span 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ["0% center", "100% center", "0% center"]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "linear",
                  }}
                  style={{ mixBlendMode: "overlay" }}
                />
                <span className="relative z-10">Read more</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
