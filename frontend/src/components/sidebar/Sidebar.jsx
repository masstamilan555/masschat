import SerachInput from './SerachInput'
import Conversations from '../../components/sidebar/Conversations'
import LogOutButton from './LogOutButton'


const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SerachInput/>
        <div className="divider px-3">
            {/* convo */}
        </div>
            <Conversations/>
            <LogOutButton/>
    </div>
  )
}

export default Sidebar