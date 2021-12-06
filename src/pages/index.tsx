import Acomplishments from '../components/Acomplishments/Acomplishments';
import Description from '../components/Description/Description';
import Animation from '../components/Svg/Animation';
import Projects from '../components/Projects/Projects';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid={true}>
        <Description />
        <Animation />
      </Section>
      <Projects />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
