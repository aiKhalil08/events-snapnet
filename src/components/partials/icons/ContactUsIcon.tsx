import { Contact } from "lucide-react";
import { FC } from "react";

const ContactUsIcon: FC<{isActive: boolean}> = ({isActive}) => {
    return (
        <Contact size={20} className={`${isActive ? 'text-[#EB5017]' : ''}`} />
    );
}

export default ContactUsIcon;