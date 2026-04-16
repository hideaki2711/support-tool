import { useState } from "react";


 interface Message {
  id : number ;
  user : string;
  text : string ;
  timestamp : string;
 };

 const initialMessages:Message[]  = [
   {id:1, user:'you', text: '事務ｺﾝの件どう？' , timestamp : '2024-06-01 10:00'},
   {id:2, user:'me', text: '開発中です。', timestamp : '2024-06-01 10:05'},
 ];


 
function Chatview () {
  const [ editingId,setingId ] = useState < number |  null  > (null );
  const [ editTxet,setingText ] = useState ('');
  const [messages, setmessages] = useState < Message [] >(initialMessages);
  const [inputText, setInputText] = useState('');

  const handleSend = () =>{
    if (!inputText.trim()) return;
   
    const now = new Date () ;
   const timestring = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
   
    const newMessage:Message = {
      id: Date .now(),
      user:'me',
      text:inputText,
      timestamp: timestring,
    };
    setmessages([...messages,newMessage]);
    setInputText('');
  }

    const handleDelete = ( id :number) =>{
      const filteredMessages = messages.filter( m => m.id !== id );
      setmessages(filteredMessages);
    };
    const  handleditstart = ( m :Message )  => {
            setingId( m . id);
            setingText(m . text );
    };
    const handleditsave = ( id : number   ) =>{
        setmessages((prev) => 
        prev.map((m) => ( m.id  == id ? {...m , text :editTxet} :m) 
        ));
     setingId(null);
    }; 


return (
  <div className='flex flex-col w-full gap-4'>
      {/* メッセージ表示エリア */}
    
    <div className='flex flex-col gap-4 mb-4'>
        {messages.map((m) => (
          
      <div key={m.id} 
            className={`max-w-[80%] px-4 py-3 rounded-lg border ${
              m.user === 'me' ? 'ml-auto bg-blue-100' : 'mr-auto bg-gray-100'
            }`} >

                
                    {editingId == m.id ? (
                        <div className="flex flex-clom gap-2 w-full">
                        <input value={editTxet} 
                        onChange={(e) => setingText (e.target.value)}
                        className="border p-2 text-black rounded bg-white w-full"
                        autoFocus
                        />
                        <button onClick={() =>  handleditsave(m.id)} className="text-blue-600 text-xs font-bold">  保存</button>
                        <button onClick={() => setingId(null)} className="text-blue-600 text-xs font-bold" >キャンセル</button>
                        </div>
                    ) : (
        <>
          <span> ID: {m.id}</span>
          <p className='text-xs text-gray-500'>{m.user}.{m.timestamp}</p>
          <p>{m.text}</p>
          <button 
          onClick={() => handleditstart ( m ) }
          className="text-blue-500 text-xs hover:underline">編集
          </button>
          <button onClick = {() =>  handleDelete( m.id )}
            className='text-xs text-red-500 hover:text-red-700 mt-1'>
             削除
          </button>
       </>
      )}
       </div>
        ))}
    </div>


    <div className = "flex gap-2 border-t pt-4">
        <input type="text" 
          value={ inputText } 
          onChange = {(e) => setInputText(e.target.value)}
          placeholder='メッセージ入力中...'
          className='bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-blue-700 transition'        
        />
        <button onClick={handleSend}
        className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition'>
        送信
        </button>
    </div>
</div>
);
}
export default Chatview;