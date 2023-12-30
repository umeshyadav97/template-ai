export const textVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeIn"
    }
  },
  exit: { opacity: 0, y: 15 }
}

export const buttonVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.9,
      ease: "easeIn",
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  exit: { opacity: 0, y: 15 }
}
