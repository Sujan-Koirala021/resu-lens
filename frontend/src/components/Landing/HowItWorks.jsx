import React from 'react'
import { Link } from 'react-router-dom'

function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-blue-50">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center max-w-3xl mx-auto mb-16" >
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-4">How It Works</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Powerful Screening Process</h2>
                    <p className="text-xl text-muted-foreground">
                        Three simple steps to transform your recruitment workflow
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            number: "01",
                            title: "Define Requirements",
                            description: "Set your job criteria and requirements. Our AI will match candidates based on your specific needs."
                        },
                        {
                            number: "02",
                            title: "Upload Resumes",
                            description: "Batch upload resumes in any format. Our system handles PDF, Word, and plain text files with ease."
                        },
                        {
                            number: "03",
                            title: "Review Top Matches",
                            description: "Receive ranked results with detailed analysis. Focus your time on the most promising candidates."
                        }
                    ].map((step, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-white border shadow-md"
                        >
                            <div className="text-5xl font-bold text-blue-200 mb-4">{step.number}</div>
                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center ">
                    <Link to='/screen'>
                    <button  className=' px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/30 rounded-lg text-lg'>
                        See It In Action
                    </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks