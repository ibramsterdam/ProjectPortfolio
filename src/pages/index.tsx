import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Description from '../components/Description/Description';
import Projects from '../components/Projects/Projects';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid={true}>
        <Description />
        <BgAnimation />
      </Section>
      <Projects />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
