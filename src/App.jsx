import React from 'react';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
     
      <header className="bg-white p-4 shadow flex items-center">
        <h1 className="text-xl font-bold text-black ml-8">ระบบประมวลผลภาพยาเสพติด</h1>
      </header>

      
      <nav className="bg-[#800000] text-white px-8 py-2">
        <div className="flex space-x-4 text-xs">
          <a href="#" className="hover:underline">หน้าหลัก</a>
          <a href="#" className="hover:underline">ถ่ายภาพ</a>
          <a href="#" className="hover:underline">อัปโหลดภาพ</a>
          <a href="#" className="hover:underline">ดูสถิติ</a> 
          <a href="#" className="hover:underline">บันทึกคลังสถิติ</a>
          <a href="#" className="hover:underline">ออกจากระบบ</a>
        </div>
      </nav>

     
      <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
        
       
        <div>
          <h2 className="text-2xl font-bold">สถิติการค้นพบ (รายวัน)</h2>
          <h1 className="text-4xl font-bold my-4">2,431,340 เม็ด</h1>
          <div className="space-y-4">
            <StatItem label="ยาA" value="74,779" width="w-2/3" />
            <StatItem label="ยาB" value="56,635" width="w-1/2" />
            <StatItem label="ยาC" value="43,887" width="w-2/5" />
            <StatItem label="ยาD" value="19,027" width="w-1/4" />
            <StatItem label="ยาE" value="8,142" width="w-1/6" />
            <StatItem label="ยาF" value="4,918" width="w-1/12" />
          </div>
        </div>

    
        <div className="relative">
      
          <h2 className="text-lg font-bold mb-2">Map</h2>
          <img src="img/20200204-2PNG.png" alt="Map" className="w-full h-auto rounded-lg" />
          

          <DrugCard top="20%" left="40%" name="ยาA" amount="2,000 เม็ด" imageSrc="img/Unknown.jpeg" />
          <DrugCard top="30%" left="60%" name="ยาB" amount="3,500 เม็ด" imageSrc="img/Unknown.png" />
          <DrugCard top="50%" left="20%" name="ยาE" amount="5,000 เม็ด" imageSrc="img/shutterstock_674315233.jpg" />
          <DrugCard top="70%" left="80%" name="ยาF" amount="4,200 เม็ด" imageSrc="img/images.jpeg" />
        </div>
      </div>

     
      <footer className="bg-[#800000] h-4 mt-8"></footer>
    </div>
  );
}


function StatItem({ label, value, width }) {
  return (
    <div className="flex items-center">
      
      <span className="w-20 mr-2">{label}</span> 
      <div className={`h-4 bg-[#800000] ${width} mr-2`} /> 
      <span>{value}</span>
    </div>
  );
}


function DrugCard({ top, left, name, amount, imageSrc }) {
  return (
    <div
      className="absolute bg-white p-2 border rounded shadow-lg"
      style={{ top: top, left: left, width: '120px' }}
    >
      <p className="text-sm font-bold">{name}</p> 
      <img src={imageSrc} alt={name} className="w-full h-16 object-cover rounded" /> {/* แสดงรูปภาพยา */}
      <p className="text-xs">{amount}</p> 
    </div>
  );
}

export default App;
