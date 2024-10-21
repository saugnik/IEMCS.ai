import './Automation.css'; // Import the CSS for styling
import automationImage from '../../../assets/Automation.png';


const AutomationPage = () => {
  return (
    <div className="automation-container">
      <header className="header">
        <h1>AUTOMATION</h1>
      </header>
      <div className="content">
        <p>
          Automation has rapidly evolved from simple mechanical systems to advanced, AI-driven technologies that are transforming industries worldwide.
          Starting in the early 20th century with machines handling basic, repetitive tasks, automation has now expanded into every sector, revolutionizing
          manufacturing, logistics, and even service industries. Today, factories utilize robotic arms to assemble products with precision and speed, while
          warehouses deploy autonomous robots to streamline inventory management and deliveries. In everyday life, automation is present in smart home
          devices, customer service bots, and even in the development of autonomous vehicles.
        </p>
        <p>
          The rise of AI and machine learning has further enhanced automation's capabilities, enabling real-time decision-making and optimizing efficiency.
          From manufacturing floors to smart cities, automation is shaping a future where tasks are faster, more accurate, and seamlessly integrated into our
          daily lives.
        </p>
      </div>
      <div className="image-container">
        <img
          src={automationImage}
          alt="automation in a factory"
          className="Automation-image"
        />
      </div>
    </div>
  );
};

export default AutomationPage;
