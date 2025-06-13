import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MdOutlineMail } from 'react-icons/md';

export default function About() {
    return (
        <div id="about-container" className="bg-gray-50 shadow-xl rounded-lg overflow-hidden max-w-3xl w-full">
            <div id="about-header" className="flex flex-col p-4">
                <h1 className="text-3xl font-bold mb-8">About Me</h1>
                <div className="flex gap-12 justify-center">
                    <Avatar className="size-32">
                        <AvatarImage src="/bio.jpg" />
                        <AvatarFallback>WS</AvatarFallback>
                    </Avatar>
                    <div className="w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Will Smith</h2>
                        <p className="text-lg text-gray-600">Founder / Principal Engineer</p>
                    </div>
                </div>
            </div>
            <div id="about-content" className="px-6 py-8 sm:p-10">
                <div className="flex flex-col items-center space-y-8">
                    <div className="space-y-6 max-w-2xl">
                        <p>
                            Hello, my name is Will Smith. Since 2005, I have been helping companies with web development
                            needs and IT services. Sometimes that is as a full-time employee, and other times as a
                            contractor. I have built everything from simple websites to complex and tailor-made web
                            applications for a variety of industries. I have also provided a variety of IT services,
                            including complex networking and server configuration management.
                        </p>
                        <p>
                            When I am not working on some cool project, I enjoy a wide variety of activities. Time with
                            family, spent outdoors, or creating something are things that really drive me.
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
        </div>
    );
}
