import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Services() {
    // TODO: I want to flesh out more of the services section here, but I can do that a little later.
    return (
        <div id="about-container" className="bg-gray-50 shadow-xl rounded-lg overflow-hidden max-w-3xl w-full">
            <div id="about-header" className="flex flex-col p-4">
                <h1 className="text-3xl font-bold">Services I Offer</h1>
            </div>
            <div id="about-content" className="px-6 py-8 sm:p-10 max-w-2xl">
                <div className="flex flex-col space-y-8">
                    <p>
                        I offer a variety of services. Everything from custom development of complex web applications to
                        low level networking. Use the sections below for additional details.
                    </p>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="custom-app-development">
                            <AccordionTrigger>Custom Application Development</AccordionTrigger>
                            <AccordionContent>
                                <div className="flex gap-4">
                                    <p>
                                        I have provided custom application development for a variety of industries. The
                                        majority of these have been Web Applications (applications that are accessed
                                        through a web browser), but I have also created others.
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="it-services">
                            <AccordionTrigger>IT Services</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    IT Services includes any use of technology that supports your business. Early in my
                                    career some of my team members would call me the button guy, because if it had
                                    buttons I interacted with it. While that is a gross simplification, I have a wide
                                    breadth of experience in this area.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="server-admin">
                            <AccordionTrigger>Server Administration &amp; DevOps</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    I have experience with a wide set of systems, processes, and server services which
                                    allows me to support a wide variety of needs.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="database-admin">
                            <AccordionTrigger>Database Administration &amp; Schema Design</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    How we store application data is critical to application performance. I have
                                    experience in designing data schemas, and maintaining database systems to help
                                    maximize performance.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="network-admin">
                            <AccordionTrigger>Network Administration &amp; Design</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    We use networking every single day. From simple internet to more comprehensive
                                    solutions I have a variety of experience. That includes everything from sourcing the
                                    right equipment and pulling wires, to configuring the network to be secure and
                                    performant.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
