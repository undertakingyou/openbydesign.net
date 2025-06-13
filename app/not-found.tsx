import { PiSmileySadLight } from 'react-icons/pi';

export default function Custom404() {
    return (
        <div className="flex gap-2 items-center">
            <p className="text-2xl">I&apos;m sorry, that page is not found.</p>
            <PiSmileySadLight size={32} />
        </div>
    );
}
