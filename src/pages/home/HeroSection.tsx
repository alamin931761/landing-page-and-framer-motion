import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/images/macbook-exposed.png";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
      delayChildren: 0.25,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -500 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 3, type: "spring", bounce: 0.5 },
  },
};

const laptop = {
  initial: { y: 0, rotate: 0, scale: 5 },
  animate: {
    y: 20,
    rotate: -30,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
      scale: {
        type: "spring",
        bounce: 0.3,
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-2 place-content-center h-screen pt-16">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            variants={introChildren}
            className="text-5xl lg:text-8xl text-nowrap font-bold"
          >
            <span className="text-gray">Don't worry.</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>

          <motion.p
            variants={introChildren}
            className="text-gray max-w-[50ch] mt-10 mb-5 text-lg"
          >
            Welcome to{" "}
            <span className="text-primary-foreground font-semibold">
              iRepair
            </span>{" "}
            , your one-stop place for all kinds of{" "}
            <span className="text-primary-foreground font-semibold">
              Macbook repairs
            </span>{" "}
            and diagnostics
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={laptop}
          initial="initial"
          animate="animate"
          className="mt-10 lg:w-full w-3/4 mx-auto"
        >
          <img className="h-[95%] object-contain" src={macbook} alt="" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
