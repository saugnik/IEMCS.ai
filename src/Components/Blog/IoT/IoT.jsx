import "./IoT.css"; // Import the CSS file
import IoTImage from '../../../assets/IoT.png'

const IotPage = () => {
  return (
    <div className="iot-container">
      <header className="header">
        <h1>IOT-Internet of Things</h1>
      </header>
      <div className="content">
        <p>
        The evolution of IoT (Internet of Things) has transformed the way we interact with technology, connecting the physical and digital worlds like never before. Starting with basic wireless communication between devices in the late 1990s, IoT has rapidly advanced with the rise of smartphones, faster internet, and cloud computing. Today, IoT is everywhere—smart home devices like thermostats, lights, and security systems can be controlled remotely through apps, while wearable technology tracks health and fitness data in real time.
        </p>
        <p>
        In industries, IoT enables factories to operate more efficiently with connected machines and sensors monitoring performance and predicting maintenance needs. Smart cities are another major application, where IoT-driven systems optimize traffic flow, manage energy consumption, and improve public services. Agriculture is also benefiting, with connected devices monitoring soil conditions and weather patterns to enhance crop yields. As IoT continues to evolve, it’s creating a more connected, efficient, and intelligent world, where billions of devices work together to make life smarter and more convenient.
        </p>
      </div>
      <div className="image-container">
        <img
          src={IoTImage}
          alt="IoT Internet of things"
          className="IoT-image"
        />
      </div>
    </div>
  );
};

export default IotPage;