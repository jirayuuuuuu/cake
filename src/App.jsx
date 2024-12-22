// fafce
import React from 'react'

const App = () => {
  const name ="Jirayu";
  const age ="20";
  const phone ="0812555836";
  return (
    // JavaSceipt and XML : JSX
    // React Fragment
    <>
    <h1>{name}</h1>
    <h2>{age}</h2>
    <h3>{phone}</h3>
    <div className='red-text'>App</div>
    <hr />
    <p className='emphasis'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut aliquid in pariatur, incidunt dolorem fugit voluptates illo excepturi adipisci qui atque est veritatis tempora corporis vitae facere cumque saepe quibusdam!</p>
    <input type="text" />
    <br />
    <br />
    <br />
    <p>Lorem ipsum dolor sit amet.</p>
    <p style={
              {
               color:'blue',
               fontSize: 18,
               border: '1px solid red',
               textAlign:'left',
               padding: 20
              }
             }>
              "มิตรภาพ" ไม่ได้เริ่มจากวงเหล้า "มิตรภาพ"ไม่ได้เริ่มจากวงไพ่ <br />
              "มิตรภาพ" ไม่ได้เริ่มจากวงหมอลำ <br />
              แต่จากการศึกษาค้นคว้า ของหลายๆสถาบัน สรุปตรงกันว่า <br />
              "มิตรภาพ" เริ่มจากสระบุรี และ ไปสิ้นสุดที่หนองคาย <br />
              ฉะนั้น...อย่าไปหนองคาย <br />
              มิตรภาพ...จะสิ้นสุดทันที <br />
             </p>

             <div className='text-6xl font-bold text-blue-700'>Test Tset</div>
    </>
  )
}

export default App


