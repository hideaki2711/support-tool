import { useState }  from 'react';
import { LayoutDashboard ,MessageSquare , Clock , Calendar , Link  } from 'lucide-react';
import Chatview from './components/Chatview';

const menuItems = [
  { id : 'dashbord' ,label :'ダッシュボード' , icon : LayoutDashboard },
  { id : 'message' ,label :'メッセージ' , icon : MessageSquare },
  { id : 'clock' ,label :'クロック' , icon : Clock },
  { id : 'calendar' ,label :'カレンダー' , icon : Calendar },
  { id : 'link' ,label :'リンク' , icon : Link },
]









function App() {
   const [activeTab , setActiveTab] = useState('dashbord');

   return(
    <div className='flex h-screen bg-gray-100'>
      <aside className=' w-64 bg-slate-800 h-screen shadow-xl '>
        <h1 className="text-xl font-bold p-4 text-white" >Biz-Cnnect</h1>
        
        <nav className="flex flex-col px-4 gap-2">

        {menuItems.map((item) =>
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
             className={` w-full flex items-center gap-3 p-3 rounded-lg  text-white transition ${ activeTab === item.id ? 'bg-blue-600' : 'bg-slate-700 hover:bg-slate-600'}`}
            >
              <item.icon size={20}/>
              {item.label}
             </button>        
            )}
        
        </nav>
      </aside>

      <main className="flex-1 p-8 flex-col">
        <header className="mb-8">
          {<h2 className="text-2xl font-bold">
            {menuItems.find(i => i.id === activeTab)?.label}
          </h2>}
          
        </header>

        <div className='bg-white p-6 rounded-xl shadow'>
            {activeTab === 'dashbord' && <p>ダッシュボードです。</p>}
            {activeTab === 'message' && <Chatview/>}
            {activeTab === 'attendance' && <p>勤怠内容です。</p>}        
        </div>
      </main>
    </div>
  );
}
export default App;