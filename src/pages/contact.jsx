import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const ContactSupportPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            // Reset form after 3 seconds of showing success message
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    subject: 'General Inquiry',
                    message: ''
                });
            }, 3000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-indigo-800 mb-3">Contact Support</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions about JobPrepAI? Our team is here to help you with any inquiries about our Mock.AI interview platform or Placed job portal.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 sm:p-8"
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center py-12"
                            >
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                                <p className="text-gray-600 max-w-md">
                                    Your message has been received. Our support team will get back to you as soon as possible.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your email address"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Mock.AI Support">Mock.AI Support</option>
                                        <option value="Placed Support">Placed Support</option>
                                        <option value="Technical Issue">Technical Issue</option>
                                        <option value="Billing Question">Billing Question</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="Please describe your question or issue in detail..."
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center 
                    ${isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} 
                    transition-colors duration-200 shadow-md`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            Submit Message <Send className="ml-2 h-5 w-5" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-md text-white p-6 sm:p-8"
                    >
                        <h3 className="text-xl font-bold mb-6">Support Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                                    <MessageSquare className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium">Chat Support</h4>
                                    <p className="text-blue-100 mt-1">Available in-app for faster responses to your questions</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium">Email</h4>
                                    <p className="text-blue-100 mt-1">support@jobprepai.com</p>
                                </div>
                            </div>


                            <div className="flex items-start">
                                <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium">Response Time</h4>
                                    <p className="text-blue-100 mt-1">We aim to respond to all inquiries within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-6 border-t border-white border-opacity-20">
                            <h4 className="text-lg font-medium mb-3">Common Topics</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                                    <span>Interview practice tips</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                                    <span>Job application status</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                                    <span>Account settings</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                                    <span>Billing questions</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16"
                >
                    <h2 className="text-2xl font-bold text-indigo-800 mb-8 text-center">Frequently Asked Questions</h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">How does the Mock.AI interview simulator work?</h3>
                            <p className="text-gray-600">Our AI-powered system creates personalized interview scenarios based on your industry and role. You'll receive realistic questions and get feedback on your responses to help you improve.</p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I post jobs for free on Placed?</h3>
                            <p className="text-gray-600">We offer both free and premium job posting options. Free postings include basic features, while premium listings offer enhanced visibility and candidate matching.</p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                How does JobPrepAI improve my interview performance?
                            </h3>
                            <p className="text-gray-600">
                                JobPrepAI conducts AI-driven mock interviews that simulate real-life scenarios.
                                It provides instant feedback on your answers, body language, and communication skills,
                                helping you refine your responses and boost your confidence before the actual interview.
                            </p>
                        </div>


                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Is my data secure on JobPrepAI?</h3>
                            <p className="text-gray-600">Yes, we take data security seriously. All personal information and interview recordings are encrypted and securely stored according to industry best practices.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactSupportPage;