import { CalendarPlus } from "lucide-react";
import { FC } from "react";

const CreateEventIcon: FC<{isActive: boolean}> = ({isActive}) => {
    return (
        <CalendarPlus size={20} className={`${isActive ? 'text-[#EB5017]' : ''}`} />
    );
}

export default CreateEventIcon;