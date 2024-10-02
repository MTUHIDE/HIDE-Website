import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Home.css';

function FaqAccordion(props) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <h3 className="faq-title">{props.question}</h3>
            </AccordionSummary>
            <AccordionDetails>
                <p className="faq-answer">
                    {props.answer}
                </p>
            </AccordionDetails>
        </Accordion>
    );
}

export default function Faq() {

    return (
        <div>
            <section className="blog-intro section-padding" id="faq">
                <div className="container">
                    <h3>Frequently Asked Questions</h3>
                    <FaqAccordion
                        question = "Can I get permission to join HIDE?"
                        answer = "Our enterprise does not require special permission to join besides registering for the appropriate course. If you are enrolling in the 4950/4960 courses as a requirement for graduation (Engineering majors), you may need to fill out a registration form for department approval. Contact your academic advisor for more information."
                    />
                    <FaqAccordion
                        question = "Which ENT course should I sign up for?"
                        answer = "There are several enterprise courses, depending on your year and whether your major requires Enterprise. For every course, you will want to register for the HIDE section, which is section 19 (but double check this on Banweb). If you are a first year in your second semester, you should register for ENT 1960. If you are a second year, you should register for ENT 2950 for your first semester and ENT 2960 for your second semester. If you are a third year, you should register for ENT 3950 for your first semester and ENT 3960 for your second semester. If you are a fourth year and require Enterprise for graduation, sign up for ENT 4950 for your first semester and ENT 4960 for your second semester. If you do not require Enterprise for graduation (such as CS majors), register for ENT 4900 your first semester and ENT 4910 your second semester."
                    />
                    <FaqAccordion
                        question = "I am only familiar with the programming language [any language]. Is this okay?"
                        answer = "HIDE is always looking for new members of all skillsets and levels. We will help you learn the programming languages used in the project you work on. We primarily focus on web development, so you will likely learn HTML, CSS, and JavaScript. You may learn how to work within frameworks such as Django, or a library such as React. For back-end web development, you may work with SQL, Python, or another language. Learning a new language, especially when you are already familiar with a language, usually is not a big hassle. Practicing and collaborating with others makes the process natural."
                    />
                    <FaqAccordion
                        question = "Can I talk with someone from the enterprise about joining?"
                        answer = "Yes! Feel free to email HIDE Management (hide-management-l@mtu.edu) or come to one of our general body meetings to talk in-person (or Zoom). "
                    />
                    <FaqAccordion
                        question = "I am very interested in working on one of your existing projects, how can I help?"
                        answer = "Talk with the President of HIDE or the Team Lead of the project after you register for the Enterprise. Some semesters we assign teams, while in other semesters we allow members to pick their projects. It depends on the types of projects we are working on and how skills and resources can best be utilized to accomplish those projects. We always want you to work on a project you are interested in, however."
                    />
                    <FaqAccordion
                        question = "I am currently enrolled in another enterprise but am also interested in joining HIDE. Do you know if this would be possible?"
                        answer = "It depends on your how much work you think you can take on during a semester. Some members have found success in doing this while others have felt overwhelmed. Think about if you can take on the work required for two enterprises, talk it over with your academic advisor, and if you would like feel free to email HIDE Management (hide-management-l@mtu.edu) or come to a general body meeting to discuss your specific situation."
                    />
                    <FaqAccordion
                        question = "I want to wait to see how much course load I am dealing with before signing up for the Enterprise course. Can I join a couple weeks into the semester?"
                        answer = "We prefer if students join at the start of the semester. However if you are interested in joining after the semester has started, please email HIDE Management"
                    />
                </div>
            </section>
        </div>
    );
}