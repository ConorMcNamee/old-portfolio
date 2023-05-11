import Service from "../../components/Services/Service"

import { motion } from "framer-motion";

export default function ServiceList() {
    return (
        <motion.section className="flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
        >
            <div className="text-center">
                <h1>Services</h1>
                <p>Below is a list of services that I can provide</p>
            </div>
            
            <div>
                <Service 
                    title={"Group Coaching"} 
                    desc={"Group coaching and an invitation to an exclusive members discord community"} />
                
                <Service 
                    title={"Landing Page Development"} 
                    desc={"A good landing page is the difference between a lead and a client. I can help you build landing page which convert clients"} />
                
                <Service 
                    title={"Web App Development"} 
                    desc={"Custom Software can help your business move and manage faster than the competition. I can help your dream of custom software come to a reality"} />
                
                <Service title={"Cloud Deployment"} desc={"Looking to deploy to the cloud? I can make this dream become a reality and bring your business all the benefits the cloud has to provide"} />
                
                <Service title={"Cloud Management"} desc={"Looking for an expert to manage your infrastructure? I can help manage all of your cloud infrastructure"} />
                
                <Service title={"Web Scraping"} desc={"Looking for a Web Scraping solution? I have experience building web scrapers aimed at data collection"} />
                
                <Service title={"SEO Optimisation"} desc={"Already have a website but it isn't getting any traffic. Get in touch and I can help develop and implement a SEO Strategy"} />
            </div>
        </motion.section>
    );
}