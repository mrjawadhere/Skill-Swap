import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { featuredClasses } from "@/lib/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleUp } from "@/lib/animations";

export default function FeaturedClassesSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-5 w-24 h-24 rounded-full bg-primary/20 blur-2xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-5 w-32 h-32 rounded-full bg-accent/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-slate-900 mb-4 md:mb-0">
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Featured 
            </motion.span>{" "}
            <motion.span 
              className="inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Classes
              <motion.div 
                className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </motion.span>
          </h2>
          <motion.p 
            className="text-slate-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Explore Our Featured Classes Expand Your Skills from Anywhere!
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredClasses.map((classItem, index) => (
            <motion.div 
              key={classItem.id}
              variants={scaleUp}
              custom={index}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 } 
              }}
              className="h-full"
            >
              <Card className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm h-full transform transition-all duration-300 hover:shadow-lg group">
                <div className="w-full h-48 overflow-hidden relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  />
                  <motion.img 
                    src={classItem.image} 
                    alt={classItem.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Badge variant="secondary" className="bg-accent text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {classItem.category}
                    </Badge>
                  </motion.div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="bg-primary/20 text-primary-foreground px-2 py-1 rounded-full">
                    {classItem.category}
                  </Badge>
                  <h3 className="text-xl font-bold mt-3 mb-2 group-hover:text-accent transition-colors duration-300">{classItem.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{classItem.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                        <Avatar className="w-8 h-8 border-2 border-white shadow-sm">
                          <AvatarImage src={classItem.instructor.avatar} alt={classItem.instructor.name} />
                          <AvatarFallback>{classItem.instructor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <span className="text-sm font-medium ml-2">{classItem.instructor.name}</span>
                    </div>
                    <motion.div 
                      className="flex items-center space-x-1"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: [0, 5, 0, -5, 0],
                        transition: { duration: 0.4 } 
                      }}
                    >
                      <span className="text-sm text-accent font-medium">{classItem.rating}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                      </svg>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
