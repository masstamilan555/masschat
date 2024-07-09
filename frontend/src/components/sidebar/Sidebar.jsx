import SerachInput from './SerachInput'
import Conversations from '../../components/sidebar/Conversations'
import LogOutButton from './LogOutButton'


const Sidebar = () => {
  return (
    <div className={`border-r lg:w-[700px] border-slate-500 p-4 flex flex-col sm:w-65 sm:h-200`}>
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