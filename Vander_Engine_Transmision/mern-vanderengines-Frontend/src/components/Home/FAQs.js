import React from 'react'
import './FAQs.css'

const Faq = () => {

    const handleToggle = (e) => {
        
        const question = e.target 
        const answer = e.target.nextSibling 

        if(question.classList.contains('faq-accordion-question-button-active')) {
            question.classList.remove('faq-accordion-question-button-active')
            answer.classList.remove('faq-accordion-answer-active')
        } else {
            // // reset 
            const openQuestions = document.querySelectorAll('.faq-accordion-answer-active')
            const openBtn = document.querySelectorAll('.faq-accordion-question-button-active')
            openQuestions?.forEach(item => item.classList.remove('faq-accordion-answer-active'))      
            openBtn?.forEach(btn => btn.classList.remove('faq-accordion-question-button-active'))

            question.classList.add('faq-accordion-question-button-active')           
            answer.classList.toggle('faq-accordion-answer-active')
        }
    }

    const data = [
        {
            id: 1,
            question: "Finance facility available?",
            answer: "Yes, at vander engines transmissions you will get the complete finance facilities. We have all the finance vander available on our website where you can avail for finance facilities. You can visit our website’s finance page and check your eligibility for finance.",
        },
        {
            id: 2,
            question: "Is it good to buy a used engine or transmission ?",
            answer: "If you are looking to buy a used engine or transmission then it can be a viable option for you instead of seeking repair or upgrading your vehicles. It is a cost-effective solution for you if you are looking to upgrade a new engine or transmission for your car. However, there are some essential factors that you need to consider before buying a used engine or transmission. While buying a used engine or transmission it is important to ensure that the part is sourced from a trusted and reputed supplier, verify the condition of the part, check its mileage and check for warranty. Vander Engines Transmissions is one of the trusted suppliers of used engines and transmissions in the United States, where you get the best quality products. We also offer delivery to your doorstep and warranty on our products. Our support team is always available to support you",
        },
        {
            id: 3,
            question: " Do you provide home delivery ?",
            answer: "Yes, at Vander Engines Transmissions we offer engines and transmissions delivery to your doorstep. Just visit our website and make a call to our support team, our team will help you to find the perfect match for your car’s engine and transmission.",
        },
        // {
        //     id: 4,
        //     question: "Can I cancel my subscription?",
        //     answer: "Yes! Send us a message and we’ll process your request no questions asked.",
        // },
        // {
        //     id: 5,
        //     question: "Do you provide additional support?",
        //     answer: " Chat and email support is available 24/7. Phone lines are open during normal business hours.",
        // },
    ]

    return (
        <div className='faq-accordion df'>
           <div className="faq-accordion-container"
           data-aos="fade-in" data-aos-delay="250" data-aos-duration="500"
           >
               <div className="faq-accordion-content">
                   <h1 className="faq-accordion-title">FAQ</h1>

                    {data.map((item)=>(
                   <div className="faq-accordion-question" key={item.id}>
                        <button className="faq-accordion-question-button" 
                        onClick={handleToggle}> {item.question}
                        </button>
                        <div className="faq-accordion-answer">
                            <p> {item.answer}</p>
                        </div>
                   </div>
                    ))}
                    
               </div>
           </div>
        </div>
    )
}

export default Faq