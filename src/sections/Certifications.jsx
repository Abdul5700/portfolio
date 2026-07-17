import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const certificates = [
  { title: "Introduction to Agile Methodology", provider: "Infosys Springboard", file: "introduction-to-agile-methodology.pdf" },
  { title: "DevOps with Azure", provider: "Infosys Springboard", file: "devops-with-azure.pdf" },
  { title: "Hands-On Cloud Native Development with Kubernetes", provider: "Infosys Springboard", file: "cloud-native-development-kubernetes.pdf" },
  { title: "TechA DevOps Engineer Certification", provider: "Infosys Springboard", file: "techa-devops-engineer.pdf" },
  { title: "Cloud-Native Continuous Integration and Delivery", provider: "Infosys Springboard", file: "cloud-native-ci-cd.pdf" },
  { title: "Creating Continuous Deployment Pipeline for Cloud Platforms", provider: "Infosys Springboard", file: "continuous-deployment-cloud-platforms.pdf" },
  { title: "Oracle Agentic AI Foundation Associate", provider: "Oracle", file: "oracle-agentic-ai-foundation.pdf" },
];

const Certifications = () => (
  <section id="certifications" className="min-h-screen bg-white">
    <AnimatedHeaderSection subTitle="CONTINUOUS LEARNING, REAL PROGRESS" title="Credentials" text="Professional learning milestones across Agile, DevOps, cloud-native development and AI." textColor="text-black" withScrollTrigger />
    <div className="grid px-10 pb-20 md:grid-cols-2">
      {certificates.map((certificate) => (
        <a key={certificate.file} href={`/assets/certificates/${certificate.file}`} target="_blank" rel="noreferrer" className="group flex min-h-[10.5rem] items-end justify-between border-t-2 border-black py-7 transition-colors duration-300 hover:bg-black hover:px-5 hover:text-white">
          <div><p className="mb-3 text-xs uppercase tracking-widest text-black/55 group-hover:text-white/55">{certificate.provider}</p><h3 className="max-w-sm text-2xl leading-tight md:text-3xl">{certificate.title}</h3></div><span className="text-2xl">↗</span>
        </a>
      ))}
    </div>
  </section>
);

export default Certifications;
