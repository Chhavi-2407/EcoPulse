import { motion } from "framer-motion";

export default function Section({ children }) {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      {children}
    </motion.section>
  );
}