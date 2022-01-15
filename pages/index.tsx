import { Layout } from '../components/Layout'
import { Hero } from '../components/Hero'
import { Element } from 'react-scroll'
import { TextBlock } from '../components/TextBlock'
import { Link } from '../components/Link'
import { ImageBlock } from '../components/ImageBlock'
import skiingImage from '../assets/skiing-cairngorms.jpg'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function HomePage() {
  return (
    <Layout>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="experience">
        <TextBlock>
          <p>
            I have experience both working and volunteering as a web developer
            for{' '}
            <Link newTab href="https://protectourwinters.uk">
              Protect Our Winters UK
            </Link>
            . As a keen skier and an environmentalist, I jumped at the
            opportunity to help the planet and gain some really valuable work
            experience. This involves helping to develop a completely redesigned
            version of their website, while working remotely within an Agile
            development team.
          </p>
          <p>
            While studying for my Bachelors in Computer Science, I have studied
            some really interesting courses including Vision and Robotics,
            Software Engineering, Computer Security, Computer Communications and
            Networks, Databases and much more. For my latest group project, we
            built an award-winning autonomous garden cleaning robot called
            RoboGardener. Check it out{' '}
            <Link href="https://robogardenerteam.github.io" newTab>
              here
            </Link>
            .
          </p>
        </TextBlock>
      </Element>
      <Element name="hobbies">
        <ImageBlock
          src={skiingImage}
          alt="Matt Dorling skiing in the Cairngorms, Scotland"
        >
          <p>
            When I&apos;m not studying or volunteering, I am likely to be at the
            local bouldering gym or on a bike ride.
          </p>
          <p>
            I am a passionate skier so try to go as much as I can in the winter.
          </p>
        </ImageBlock>
      </Element>
      <Element name="contact">
        <TextBlock>
          <h2 className="text-center">Want to get in touch?</h2>
          <p className="text-center">
            <strong>Contact me</strong> via the links below
          </p>
          <span className="flex flex-row w-80 justify-evenly mx-auto text-4xl">
            <Link href="mailto:matt@mattdorling.com">
              <FaEnvelope />
            </Link>
            <Link href="https://github.com/MattDorling" newTab>
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/matt-dorling/" newTab>
              <FaLinkedin />
            </Link>
            <Link href="https://www.instagram.com/dorling.m" newTab>
              <FaInstagram />
            </Link>
          </span>
        </TextBlock>
      </Element>
    </Layout>
  )
}
