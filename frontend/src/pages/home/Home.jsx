import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
	return (
		<div className='h-full sm:h-auto'>
			<h1 className='text-center text-4xl font-bold font-mono mb-10 tracking-widest cursor-pointer shadow-md'>
				MassChat.com
			</h1>
			<div className='flex flex-col sm:flex-row sm:h-[650px] md:h-[550px] md:w-[1000px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 sm:p-0 sm:m-0 sm:w-full'>
				<Sidebar />
				<MessageContainer />
			</div>
		</div>
	);
};

export default Home;
