import { HamburgerIcon } from '@chakra-ui/icons';
import { BsPeople, BsPeopleFill } from 'react-icons/bs';
import {
	RiDashboard2Line,
	RiHealthBookLine,
	RiMoneyDollarCircleLine,
	RiMoneyDollarCircleFill,
} from 'react-icons/ri';
import {
	MdOutlineMedicalServices,
	MdMedicalServices,
	MdOutlineHealthAndSafety,
	MdHealthAndSafety,
} from 'react-icons/md';
import { AiOutlineSchedule, AiFillSchedule } from 'react-icons/ai';
import { BiHealth } from 'react-icons/bi';
import { GiHealthCapsule } from 'react-icons/gi';
import { HiOutlineLogout } from 'react-icons/hi';

const icons = {
	health: RiHealthBookLine,
	people: BsPeople,
	filledPeople: BsPeopleFill,
	dashboard: RiDashboard2Line,
	services: MdOutlineMedicalServices,
	filledServices: MdMedicalServices,
	schedule: AiOutlineSchedule,
	filledSchedule: AiFillSchedule,
	sys: BiHealth,
	bandaid: GiHealthCapsule,
	hamburger: HamburgerIcon,
	money: RiMoneyDollarCircleLine,
	filledMoney: RiMoneyDollarCircleFill,
	visit: MdOutlineHealthAndSafety,
	filledVisit: MdHealthAndSafety,
	logout: HiOutlineLogout,
};

export { icons };
