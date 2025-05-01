import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-primary/10 py-16 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold font-poppins text-slate-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p 
            className="text-lg text-slate-600 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}