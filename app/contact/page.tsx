import { MdOutlineMail } from 'react-icons/md';

export default function Contact() {
    return (
        <div id="about-container" className="bg-gray-50 shadow-xl rounded-lg overflow-hidden max-w-3xl w-full">
            <div id="about-header" className="flex flex-col p-4">
                <h1 className="text-3xl font-bold">Let&apos;s Work Together</h1>
            </div>
            <div id="about-content" className="px-6 py-8 sm:p-10 max-w-2xl">
                <div className="flex flex-col space-y-8">
                    <p>
                        Have questions about your project? I am happy to hear about what you are doing and see if there
                        is a way that I can help. No obligation to talk through what you have going on. Please feel free
                        to reach out.
                    </p>
                    <div className="pt-6 border-t border-gray-200 flex justify-between items-center">
                        <p className="text-xl">Get in Touch</p>
                        <div className="flex gap-2 items-center justify-center sm:justify-start">
                            <MdOutlineMail size={24} />
                            <a
                                href="mailto:will@openbydesign.net"
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                will@openbydesign.net
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
