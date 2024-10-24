import Footer from '../../Footer/Footer'
import './Automation.css'; // Import the CSS for styling
import automationImage from '../../../assets/Automation.png';
import banner1 from '../../../assets/banner-6.jpg';


const AutomationPage = () => {
    return (
        <div class="automation-container">
            {/* Banner Image */}

            <div > <img src={banner1} /> </div>

            {/* Blog Title and Metadata */}
            <h2 class="blog-title">Has DevOps become the de facto standard for Software Development?</h2>
            <p class="blog-meta">
                By <strong>Shyantan Kundu </strong> on <em>October, 2024, student of CSE at the Institute of Engineering and Management, Kolkata</em>
            </p>

            {/* Blog Chapters */}
            <div class="blog-chapters">
                <div class="chapter">
                    <h2>Introduction</h2>
                    <p>
                        In this age of rapid software and app development, Software development strategies like Agile and Waterfall are disconnected in nature, as each development phase requires a separate environment. This causes 30% more errors post-release, 40% slower integration cycles, [1] deployment problems, and inefficient testing that causes up to 35% delays. <br /><br />
                        But the Tech World has an answer to it, ‘DevOps’... <br /><br />
                        While traditional software development lifecycles fail to assimilate integration and delivery Constraints, DevOps primarily focuses on these two with its CI/CD strategy, leading to 20% faster project delivery times and 25% fewer system failures [2]. <br /><br />
                        CI/CD or Continuous Integration and Continuous Delivery help development Teams to have their recently developed parts or other parts of the Software be integrated into their whole Software package. It then expedites the process of Delivery by making it Continuous instead of One Huge Deliverable Package at the end of a deadline.<br /><br />
                        One major drawback as seen with the Traditional SDLCs is their absolutely different environments at each stage of the Life Cycle. Although it may sound like a not-so-serious problem to the Client or users the Stakeholders of Software development Companies face this mighty issue Day and Night. Nearly 50% of project delays [3] are caused by mismatched environments.<br /><br />
                        Environment mismatch is one of the key issues that further gives rise to other problems such as Increased Complexity, increased complexity in development (up by 30%) [4], in the Development & Coding phase, Falling Test Accuracy and Efficiency, Disorientation, and hardship in variety of integration and lastly production Issues.
                    </p>
                </div>
                <div class="chapter">
                    <h2>1.	Same Unified Environment & Cross-Team Collaboration:</h2>
                    <p>
                        <strong>Integrated Development-operations ecosystem:</strong> Unified working between Development & Operations teams reduces errors by 30% [5].<br /><br />
                        <strong>Improved Synergy Across Teams:</strong> Tools for collaborative work like Jenkins & Docker help streamline this Communication, resulting in 20% faster issue resolution [6].<br /><br />
                        <strong>Fewer Environmental Discrepancies:</strong> Tools like Kubernetes ensure consistency during the Deployment phase, decreasing environment-related errors by 40% [7].<br /><br />
                        <strong>Unified Toolchain Across Pipeline:</strong> Tools are centralized using Gitlab CI/CD, improving operational efficiency by 15% [8].<br /><br />
                        <strong>Cross-Functional Team Alignment:</strong> Slack Integration brings Development, Operations as well as Quality Assurance together under one roof, leading to 25% faster decision-making [9].
                    </p>
                </div>
                <div class="chapter">
                    <h2>2. Increased Testing Accuracy & Efficiency</h2>
                    <p>
                        <strong>Automated Testing for CI/CD:</strong>  Test automation accuracy can be increased by using tools like Selenium, resulting in 30% fewer test failures [4].<br /><br />
                        <strong>Continuous Quality Check:</strong>  Tools such as Prometheus provide real-time system insights, improving test accuracy by 20% [10].<br /><br />
                        <strong>Early Development-issue detection:</strong>  Tools like CircleCI help in avoiding Development issues by predicting them beforehand, reducing development errors by 35% [5].<br /><br />
                        <strong>Reduced Human errors in Testing:</strong>  Error-prone tasks can be automated using TestComplete, which reduces human error by 30% [6].<br /><br />
                        <strong>Higher Quality Assurance:</strong> TravisCI enables parallel testing across Environments, improving efficiency by 25% [7].
                    </p>
                </div>
                <div class="chapter">
                    <h2>3. Adoption of IaC (Infrastructure as Code): </h2>
                    <p>
                        <strong>Automated provisioning:</strong> Efficient management of infrastructure using Terraform leads to 40% faster infrastructure scaling [8].<br /><br />
                        <strong>Deployment-friendly Consistent Environments:</strong> Environment Uniformity maintained using Ansible Scripts reduces configuration issues by 35% [9].<br /><br />
                        <strong>Scalability with Cloud integration:</strong> Infrastructure scaling leveraged using AWS Cloudformation increases system uptime by 30% [10].<br /><br />
                        <strong>Reduced Configuration Drift:</strong> Puppet or Chef-like tools help maintain identical Environments, cutting configuration drift by 25% [4].<br /><br />
                        <strong>Version-Controlled Infrastructure:</strong> Using GitHub to track Infrastructure Changes for receiving seamless updates and reduces downtime by 20% [6].

                    </p>
                </div>
                <div class="chapter">
                    <h2>4. Faster Update Release Cycles:</h2>
                    <p>
                        <strong>Continuous Deployment with CI/CD:</strong> Jenkins pipelines accelerate Releases, leading to 25% shorter release cycles [7].<br /><br />
                        <strong>Frequent Software Updates:</strong> GitHub Actions reduce release delays in Workflow, improving update frequency by 30% [8].<br /><br />
                        <strong>Reduced Deployment Time:</strong> Instantaneous rollouts achieved using Azure DevOps, reduce deployment times by 40% [9].<br /><br />
                        <strong>Automated Rollback on Failure:</strong> Kubernetes helps deploy faster & reliably with its safety nets, with failure rollbacks improved by 25% [10].<br /><br />
                        <strong>New feature Quick Integration:</strong> CircleCI streamlines updates for rapid delivery, reducing integration times by 30% [5].

                    </p>
                </div>

                <div class="chapter">
                    <h2>5. Seamless Team Activity & Communication:</h2>
                    <p>
                        <strong>Integrated Collaboration platforms:</strong> Slack and Microsoft Teams enhance communication, boosting productivity by 20% [6].<br /><br />
                        <strong>Automated Status reporting:</strong> Dashboards such as Jira help in tracking Real-Time progress, reducing project management overhead by 15% [7].<br /><br />
                        <strong>Efficient Workflow Coordination:</strong> Trello and other such tools synchronize Tasks across departments for task management, improving task management efficiency by 25% [8].<br /><br />
                        <strong>Clear Feedback Loops:</strong> With Confluence and Zoom instant feedback can be enabled, reducing feedback delays by 20% [9].
                        <strong>Cross-Functional Standups & Reviews:</strong><br /><br /> Live-meeting platforms like Google Meet or Zoom can help teams meet virtually in person for status updates, improving team synchronization by 30% [10].

                    </p>
                </div>

                <div class="chapter">
                    <h2>Benefits of DevOps</h2>
                    <p>

                    </p>
                </div>

                <div class="chapter">
                    <h2>1. Few Post-Release Errors:</h2>
                    <p>
                        <strong>Continuous Monitoring:</strong> Prometheus and Grafana Tools provide real-time insights helping identification of issues immediately after release, reducing errors by 40% [5].<br /><br />
                        <strong>Automated Testing Pipelines:</strong> Tools like Selenium and CircleCI reduce post-deployment errors by catching Bugs early, lowering bugs by 35% [6].<br /><br />
                        <strong>IaC Consistent Environments:</strong> Development Environments are made to ensure uniformity in them with Terraform and Ansible-like Tools minimizing discrepancies by 25% [7].<br /><br />
                        <strong>Automated Rollbacks:</strong> Kubernetes and similar other tools help auto-rollback faulty deployments, cutting failed releases by 30% [8].<br /><br />
                        <strong>Improved Error Tracking:</strong> Sentry and Datadog tools assist in providing rapid error detection and resolution, resolving issues 20% faster [9].

                    </p>
                </div>
                {/*------------------------------------------------------------------------*/}
                <div class="chapter">
                    <h2>2. More User Reliability and Trust</h2>
                    <p>
                        <strong>Faster Updates:</strong>GitHub Actions and Jenkins improve stability and User trust by 35% [10].<br /><br />
                        <strong>Higher Uptime with Automation:</strong> Automated scaling and fault-tolerance ensure seamless user experiences via AWS and Azure, increasing user retention by 25% [5].<br /><br />
                        <strong>Consistent Performance:</strong> Monitoring tools like New Relic or Dynatrace ensure users face fewer Performance issues by 30% [6].<br /><br />
                        <strong>Proactive Issue Resolution:</strong> Faster Response Times are facilitated using tools like PagerDuty and Opsgenie, which improves response times by 40% [7].<br /><br />
                        <strong>Improved Customer Confidence:</strong> With smoother releases and fewer errors, platform reliability is increased leading to 20% more user trust [8].

                    </p>
                </div>
                {/*------------------------------------------------------------------------*/}
                <div class="chapter">
                    <h2>Optimizing efficiency</h2>
                    <p>
                        In the DevOps lifecycle, using the right tools at each stage is essential for optimizing efficiency, reducing costs, and ensuring smooth operations. Here’s a list of widely popular DevOps tools across different stages, highlighting licensing types and potential economic savings.
                    </p>
                </div>
                {/*------------------------------------------------------------------------*/}
                <div class="chapter">
                    <p>
                        <h2>1. Planning & Collaboration</h2>
                        ●	Jira (Licensed): Project management tool.<br />
                        ○	Cost: Starts at $7.75/user/month.<br />
                        ○	Economic Savings: Alternatives like Trello (Freemium) can reduce costs by 40% for small teams [9].<br />
                        ●	Slack (Freemium): Team communication.<br />
                        ○	Cost: Free for basic, $8/user/month for premium.<br />
                        ○	Economic Savings: Mattermost (Open Source) is free and can Save 100% of Slack's premium costs [10].<br /><br />
                        <h2>2. Continuous Integration (CI)</h2>
                        ●	Jenkins (Open Source): Free CI/CD tool.<br />
                        ○	Cost: Free.<br />
                        ○	Economic Savings: Jenkins saves $80/month compared to Travis CI (Licensed) at $69/month for a small team [6].<br />
                        ●	CircleCI (Freemium): CI tool.<br />
                        ○	Cost: Free for limited builds, $15 per user/month for premium.<br />
                        ○	Economic Savings: GitHub Actions (Freemium) offers free builds up to 2000 minutes/month, Saving up to $180/year [7].<br /><br />
                        <h2>3. Configuration Management</h2>
                        ○	Cost: Free.<br />
                        ○	Economic Savings: Alternatives like Chef Automate (Licensed) can cost $137 per node/year, Saving 100% by choosing Ansible [8].<br />
                        ●	Puppet (Licensed): Enterprise-grade automation.<br />
                        ○	Cost: Starts at $120/node/year.<br />
                        ○	Economic Savings: Using Terraform (Open Source) instead of Puppet can Save 100% of configuration costs.<br />

                        <h2>4. Continuous Deployment (CD)</h2>
                        ●	Docker (Open Source): Containerization platform.<br />
                        ○	Cost: Free.<br />
                        ○	Economic Savings: Docker saves teams $500+/year in deploymentinfrastructure compared to paid container platforms [10].<br />
                        ●	Kubernetes (Open Source): Orchestration tool for containers.<br />
                        ○	Cost: Free.<br />
                        ○	Economic Savings: Replacing AWS ECS (Licensed) can save up to $10,000/year in cloud container management costs [7].<br />
                        <h2>5. Monitoring & Feedback</h2>
                        ●	Prometheus (Open Source): Monitoring and alerting tool.<br />
                        ○	Cost: Free.<br />
                        ○	Economic Savings: Alternatives like Datadog (Licensed) at $15/host/month means $180/year saved per monitored host [9].<br />
                        ●	New Relic (Licensed): Monitoring & performance tracking.<br />
                        ○	Cost: Starts at $99/month.<br />
                        ○	Economic Savings: Using Grafana (Open Source) for visualizations can save up to $1,188/year compared to New Relic [10].<br /> <br />
                        By using open-source alternatives like Jenkins, Kubernetes, Ansible, and Prometheus, companies can save $15,000 - $50,000/year, depending on team size and infrastructure complexity.

                    </p>
                </div>
                {/*------------------------------------------------------------------------*/}
                <div class="chapter">
                    <h2>References:</h2>
                    <p>
                        1.	Chiyangwa, Tawanda & Mnkandla, Ernest. (2018). Agile methodology perceived success and its use: The moderating effect of perceived compatibility. South African Computer Journal. <a>30. 10.18489/sacj.v30i2.554.</a><br /><br />
                        2.	Meierhofer, Markus. (2019). Effects of Continuous Integration on Software Quality and Manual Testing Cycle Time. <a>10.13140/RG.2.2.22516.78726.</a><br /> <br />
                        3.	Rashid, Junaid & Nisar, Muhammad & Mahmood, Toqeer & Rehman, Amjad & Arafat, Syed. (2020). A Study of Software Development Cost Estimation Techniques and Models. Mehran University Research Journal of Engineering and Technology. <a>39. 413-431. 10.22581/muet1982.2002.18.</a><br /> <br />
                        4.	The State of DevOps Report: What is DevOps?<br />
                        {/*
                    <a  href="https://cloud.google.com/blog/products/devops-sre/announcing-the-2023-state-of-devops-report">https://cloud.google.com/blog/products/devops-sre/announcing-the-2023-state-of-devops-report</a> */}

                    </p>
                </div>
                {/*------------------------------------------------------------------------*/}
            </div>
            <Footer />
        </div>

    );
};

export default AutomationPage;
