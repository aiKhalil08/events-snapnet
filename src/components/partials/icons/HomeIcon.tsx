import { Home } from "lucide-react";
import { FC } from "react";

const HomeIcon: FC<{isActive: boolean}> = ({isActive}) => {
    return (
        <Home size={20} className={`${isActive ? 'text-[#EB5017]' : ''}`} />
    );
}

export default HomeIcon;