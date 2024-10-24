import Footer from '../../Footer/Footer'
import './BlogPage1.css'; // Import the CSS for styling
import banner1 from '../../../assets/banner-6.jpg';
import blog21 from "../../../assets/blog2-1.png"
import blog22 from "../../../assets/blog2-2.png"
import blog23 from "../../../assets/blog2-3.png"


const BlogPage2 = () => {
    return (
        <div>
            <div class="blog-container">
                {/* Banner Image */}

                <div > <img src={banner1} /> </div>

                {/* Blog Title and Metadata */}
                <h2 class="blog-title">An Insight into DevGen</h2>
                <p class="blog-meta">
                    By <strong>Chandrashekhar Lall Chaudhury</strong> on <em>October, 2024, student of CSE at the Institute of Engineering and Management, Kolkata</em><br />
                    <strong>Category</strong>: IT Products & Solutions
                </p>

                {/* Blog Chapters */}
                <div class="blog-chapters">
                    <div class="chapter">
                        <h2>Introduction</h2>
                        <p>
                            Technology has always been a driving factor of our economy and with the evolution of technology, a lot of new job opportunities arise. Therefore, those who do not adapt to the current and rising technology today shall face hardships tomorrow. Generative AI (GenAI) is one such technology that has shattered many records. For example, ChatGPT took only 5 days to gather 1 million users on their platform as compared to Facebook which almost took 10 months. This alone proves that GenAI might soon be as revolutionary as Cloud or DevOps, if not today. From experienced and seasoned developers who need help regarding a block of code to middle school students who can complete their assignments with the help of a prompt, GenAI has boosted the productivity of people who are not in technical fields as well. Therefore, this is one such innovation that can be used by anyone to improve their efficiency and provide their maximum potential output. The age of <b>DevGen</b>  has arrived!
                        </p>
                    </div>
                    <div class="chapter">
                        <h2></h2>
                        <p>
                            From the name itself, it is evident that GenAI is used to ‘generate’ something. GenAI is a subset of artificial intelligence models that have been designed to learn from existing data to create new content like text, images, audio, and even code. These models use underlying algorithms like deep learning and neural networks and recognize patterns and structures in the input data. Then, it generates new outputs that resemble the original data. A common example of a GenAI model is the Generative Pre-trained Transformer (GPT), used in ChatGPT. GPT is capable of producing human-like text as we all know. Other examples include AI systems that generate art, music, or even realistic human faces. In software development, GenAI can assist by automating code generation, testing, and debugging, <b>significantly speeding up</b>  the development process, therefore improving the efficiency of the entire process and speeding the completion of software products.
                        </p>
                    </div>
                    <div class="chapter">
                        <h2>Software Development Lifecycle (SDLC)</h2>
                        <p>
                            The lifecycle of a developing software usually has five/six phases. It begins with the <strong>Requirement Analysis</strong> - where the needs of the users are gathered and documented. This is followed by the <strong>Design</strong> phase - where the system architecture and components are planned. Next is the <strong>Development</strong> phase - where the actual coding and software creation takes place. Once developed, the software undergoes <strong>Testing</strong> to identify and fix any bugs or issues. After successful testing, the software moves to the <strong>Deployment</strong> stage - where it is released to users. The final stage is <strong>Maintenance</strong> - where the software is monitored and updated as and when required, to ensure continued performance and address any issues or scalability factors. These stages traditionally form a structured approach to building industry-standard software
                        </p>
                        <div > <img src={blog21} /> </div>
                    </div>
                    <div class="chapter">
                        <h2>How Gen AI can help during the SDLC?</h2>
                        <p>
                            Most large IT firms have a huge repository of requirements, business processes, innovative design patterns, proprietary codes, test cases, and documentation. This is a perfect setup for training a GenAI model and ultimately it can work as an assistant for each of the SDLC stages.

                        </p>
                    </div>
                    <div class="chapter">
                        <h2></h2>
                        <p>
                            In the traditional software development process, significant time is spent by the business analysts and the development team to gather and interpret customer requirements during the <strong>requirement analysis</strong> phase. This stage becomes a single phase of failure later due to multiple factors such as the ambiguity and lack of clarity about the customer’s requirement, the business analysts being aware of the full capability of the available products, miscommunication between the development team and the client, and the end users being unavailable on-time to provide the accurate requirements. With the help of Gen AI, the requirement gathering and elicitation process can be made easy by predicting requirements based on historical data and user behavior patterns
                        </p>
                    </div>

                    <div class="chapter">
                        <h2></h2>
                        <p>
                            In the <strong>system design</strong> stage, architects typically create high-level designs from scratch, also these architects usually have experience as a solid foundation for brainstorming designs but Gen AI can now assist by generating architectural blueprints and system designs automatically with the help of a prompt.

                        </p>
                    </div>

                    <div class="chapter">
                        <h2></h2>
                        <p>
                            During <strong>coding and implementation</strong>, developers traditionally write code line-by-line and manually optimize it. Now, in this phase, there are a lot of times even experienced developers get stuck in trying to code a particular function or block. Therefore, one might need to refer to other resources or even seek help from others. Here Gen AI can be really helpful as a constant coding companion as they can now auto-generate, refactor, and optimize code based on the input.
                        </p>
                    </div>

                    <div class="chapter">

                        <p>
                            For <strong>testing and debugging</strong>, the conventional approach involves manually creating test cases and identifying bugs. This often leads to some extraordinary test cases being left out naturally due to human error but AI can accelerate this process by generating a large variety of test cases. Debugging is one such task where the developer has always had a tiresome experience of being unable to detect what exactly has caused an error and sometimes it takes hours of reading code line by line in order to find the bug but here, we can find that Gen AI is able to do so in a matter of seconds by identifying and isolating the code.

                        </p>
                    </div>
                    {/*------------------------------------------------------------------------*/}
                    <div class="chapter">
                        <h2></h2>
                        <p>
                            <strong>Deployment</strong>, which traditionally requires a manual setup and a staged approach can become a smooth process by automating CI/CD pipelines and minimizing human errors. In the maintenance and monitoring phase, manual monitoring and issue resolution are replaced by GenAI’s ability to proactively predict and resolve potential issues through intelligent maintenance.`

                        </p>
                    </div>
                    {/*------------------------------------------------------------------------*/}
                    <div class="chapter">
                        <h2></h2>
                        <p>
                            <strong>Maintenance and monitoring</strong> can also be automated now with the help of Gen AI tools like Amazon Cloudwatch or Dynatrace, thereby reducing human intervention in this phase.
                        </p>
                        <div > <img src={blog22} /> </div> <br></br> <br></br>
                        <p class="chapter"> <h2> <strong>The table below can be used as a guide for choosing the right GenAI tool for your SDLC.</strong> </h2> <br></br>
                            <div > <img src={blog23} /> </div>
                        </p>
                    </div>
                    {/*------------------------------------------------------------------------*/}
                    {/*------------------------------------------------------------------------*/}
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>


    );
};

export default BlogPage2;
