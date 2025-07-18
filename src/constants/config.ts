type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Welcome",
    fullName: "Prajna Agrawal",
    email: "prajna2613@gmail.com",
  },
  hero: {
    name: "Prajna Agrawal",
    p: ["I am an Undergraduate Student at IIT Jodhpur"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a passionate developer with a strong interest in building both intuitive user interfaces and intelligent systems. I'm a fast learner who loves turning complex ideas into real, usable tools—whether it's through thoughtful design, smart modeling, or efficient code. Let’s bring something meaningful to life together`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience & Hackathons.",
    },
    feedbacks: {
      p: "What I have accomplished",
      h2: "Achievements.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories .`,
    },
  },
};
