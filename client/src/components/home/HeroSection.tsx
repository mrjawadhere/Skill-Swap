import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, fadeIn, pulse } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="bg-white pt-10 pb-16 border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInFromLeft}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-slate-900 mb-6 leading-tight">
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Exchange 
              </motion.span>{" "}
              <motion.span 
                className="inline-block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Skills 
              </motion.span>{" "}
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Virtually!
              </motion.span>
            </h1>
            <motion.p 
              className="text-lg text-slate-600 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              We believe in the power of collaborative learning and the transformative potential of skill exchange
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link href="#explore">
                <Button className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md inline-flex items-center justify-center transition-all hover:scale-105 hover:shadow-lg">
                  Explore Skills
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              className="mt-10 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <AvatarGroup 
                users={[
                  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" },
                  { src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" },
                  { src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" }
                ]} 
                count={90000}
              />
            </motion.div>
          </motion.div>
          <motion.div 
            className="order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInFromRight}
          >
            <motion.div 
              className="relative"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-lg opacity-75 blur-sm"
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.7, 0.5] 
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="People collaborating on laptops" 
                className="rounded-lg w-full shadow-lg relative z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
