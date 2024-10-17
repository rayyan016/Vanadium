"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  label: string;
}

const SkillDataProvider = ({ src, width, height, index, label }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex flex-col items-center"
    >
      <div className="w-[100px] h-[100px] flex items-center justify-center bg-gray-800 rounded-lg">
        <Image
          src={src}
          width={width}
          height={height}
          alt="skill image"
          className="object-contain"
        />
      </div>
      <p className="mt-2 text-center text-white text-sm">{label}</p>
    </motion.div>
  );
};

export default SkillDataProvider;
