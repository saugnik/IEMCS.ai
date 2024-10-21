import './Robotics.css'; // Import the CSS for styling
import RoboticsImage from '../../../assets/Robotics.png';

const RoboticsPage = () => {
  return (
    <div className="robotics-container">
      <header className="header">
        <h1>ROBOTICS</h1>
      </header>
      <div className="content">
        <p>
          Robotics has come a long way, evolving from basic mechanical devices to sophisticated, AI-powered machines that are revolutionizing industries. Initially, robots were used for simple, repetitive tasks in manufacturing, such as assembly line work. Over time, advancements in sensors, AI, and machine learning have enabled robots to perform more complex, autonomous tasks.
        </p>
        <p>
          Today, robots are not only used in factories but also in healthcare, where surgical robots assist with precision surgeries, and in logistics, where autonomous robots manage inventory and deliveries. In agriculture, drones and robotic harvesters are increasing efficiency, while in households, robots are helping with cleaning and personal assistance.

          The integration of AI has empowered robots to learn, adapt, and make decisions in real-time, making them invaluable in sectors like defense, research, and even space exploration. As robotics continues to evolve, these machines are becoming more versatile, capable of collaborating with humans and transforming the way we work and live.
        </p>
      </div>
      <div className="image-container">
        <img
          src={RoboticsImage}
          alt="Robotic in a factory"
          className="Robotics-image"
        />
      </div>
    </div>
  );
};

export default RoboticsPage;
