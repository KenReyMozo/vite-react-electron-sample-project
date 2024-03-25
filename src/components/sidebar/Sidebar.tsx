import { useNavigate } from 'react-router-dom'
import style from './Sidebar.module.scss'

type SidebarButtonType = {
	status : ("notify" | "active" | "inactive")
	onClick? : ()=>void
}

const SidebarButton : React.FC<SidebarButtonType> = (props) => {

	const {
		status,
		onClick,
	} = props

	return (
		<button className={`${style.button} ${style[status]}`}
			onClick={onClick}>
			<div className={`${style.content} bg-gray-600 text-white`}>...</div>
		</button>
	)
}

const SideBar : React.FC = () => {

  const navigate = useNavigate();

  const onClickLink = (link: string) => {
    navigate(link);
  }

	return (
		<div className={`${style.container} bg-gray-800`}>
			<SidebarButton status='inactive' onClick={()=>onClickLink('home')}/>
			<hr className='w-4/5'/>
			<SidebarButton status='active'/>
			<SidebarButton status='notify'/>
			<SidebarButton status='inactive'/>
			<SidebarButton status='inactive'/>
			<SidebarButton status='inactive'/>
			<SidebarButton status='inactive'/>
			<SidebarButton status='inactive'/>
			<hr className='w-4/5'/>
			<SidebarButton status='inactive' onClick={()=>onClickLink('color-picker')}/>
		</div>
	)
}

export default SideBar