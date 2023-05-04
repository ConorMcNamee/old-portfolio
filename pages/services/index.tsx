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
                <Service title={"Group Coaching"} desc={"Group coaching and an invitation to an exclusive members discord community"} />
                <Service title={"Landing Page Development"} desc={"Group coaching and an invitation to an exclusive members discord community"} />
                <Service title={"Web App Development"} desc={"Group coaching and an invitation to an exclusive members discord community"} />
                <Service title={"Cloud Deployment"} desc={"Group coaching and an invitation to an exclusive members discord community"} />
                <Service title={"Cloud Management"} desc={"Group coaching and an invitation to an exclusive members discord community"} />
                <Service title={"Web Scraping"} desc={"Group coaching and an invitation to an exclusive members discord community"} />
                <Service title={"SEO Optimisation"} desc={"Group coaching and an invitation to an exclusive members discord community"} />
            </div>
        </motion.section>
    );
}