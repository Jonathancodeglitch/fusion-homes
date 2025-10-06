import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function FAQSection() {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            ❓ Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Find quick answers to the most common questions about our services,
            care options, and community.
          </p>
        </div>

        <div className="mb-12">
          <FAQ />
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faq = [
    {
      question: "What types of care does Fusion Senior Care Home provide?",
      answer:
        "Fusion Senior Care Home offer different levels of care, inlcuding assisted living, memory care, and skilled nursing. The right level depends on your relative’s health, mobility, and personal needs.",
    },
    {
      question:
        "How do I know if it’s the right time to move my loved one into a care home?",
      answer:
        "Consider a move when your relative struggles with daily activities (like bathing, cooking, or medication management), experiences frequent falls, loneliness, or requires constant supervision for safety.",
    },
    {
      question: "What qualifications and training do the caregivers have?",
      answer:
        "All staff are certified by the state of Kansas must pass background checks per state requirement. All staff must also have ongoing training in elderly care, dementia support, first aid, and emergency response, medication administration, etc.",
    },
    {
      question:
        "How much does it cost to live in a Home Plus, and what’s included?",
      answer:
        "Costs vary depending on location, level of care, and room type. Fees typically cover accommodation, meals, personal care, and activities—but may exclude medical or specialized services. Contact our office for detail information for cost and we will be happy to help you",
    },
    {
      question:
        "Can residents personalize their rooms or bring personal belongings?",
      answer:
        "Our homes encourage residents to decorate rooms with familiar items like photos, bedding, or furniture, to create a sense of comfort and belonging.",
    },
    {
      question: "How does the home handle medical emergencies?",
      answer:
        "Our homes have 24-hour staff, a comprehensive emergency safety plan in which there is a  clear protocols for contacting nurse, family members, or emergency services.",
    },
    {
      question: "What kind of activities or social programs are available?",
      answer:
        "Our Homes have programs that promote physical, mental, and emotional well-being, such as exercise sessions, arts and crafts, outings, music therapy, and group games.",
    },
    {
      question: "How can families stay involved in their loved one’s care?",
      answer:
        "Our homes encourage regular visits, family meetings, and care plan reviews. Designated staff provide updates of resident's care and conditions.",
    },
    {
      question:
        "What steps are taken to ensure residents’ safety and security?",
      answer:
        "Fusion Senior Care Homes have secure entry systems, 24/7 supervision, and fall-prevention measures.",
    },
    {
      question:
        "How can I be sure my loved one will be treated with dignity and respect?",
      answer:
        "Fusion Senior Care educate all its staff on resident rights policy, complaint process, and promote compassionate care, privacy, and individual choice in daily routines.",
    },
  ];
  return (
    <div className="w-full max-w-[600px] mx-auto">
      {faq.map((faq, id) => {
        return (
          <Accordion key={id} defaultExpanded={id === 0 ? true : false}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>{faq.answer}</AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
