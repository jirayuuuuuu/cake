import React from 'react'
import Layout from './../Template/Layout';
import ProductCard from '../Components/ProductCard';
import Cake from './../Components/Cake';
import Cookie from '../Components/Cookie';

const Product = () => {
  return (
    <Layout>
      <div className="p-4 border-4 border-blue-500 rounded-lg bg-white shadow-md">
    <h1 className="text-5xl font-bold mb-6 text-center text-blue-400">Product</h1>
    <hr className="mb-4 border-blue-400" />
    <div className="grid grid-cols-2 gap-4">
          <ProductCard 
            name="Chocolate"
            price={80}
            description="Chocolate Bar"
          />
          <ProductCard 
            name="Vanila"
            price={70}
            description="Vanila Bar with Oatmeal"
          />
          <ProductCard 
            name="Chocolate"
            price={80}
            description="Chocolate Bar"
          />
          <ProductCard 
            name="Vanila"
            price={70}
            description="Vanila Bar with Oatmeal"
          />
        </div>
      </div>
      <hr className="my-8 border-gray-500" />
      
      <div className="p-4 border-4 border-green-700  rounded-lg bg-white shadow-md">
        <h1 className="text-5xl font-bold mt-4 mb-6 text-center text-green-600">Cake Menu</h1>
        <hr className="mb-4 border-green-400" />
        <div className="grid grid-cols-1 gap-4">
          <Cake
            name="Cream Cake"
            price="190 baht per pound"
            description="เหมาะสำหรับการเฉลิมฉลองทุกโอกาสพิเศษ!"
          />
          <Cake
            name="Jam Cake"
            price="200 baht per pound"
            description="เติมสีสันและความสดชื่นให้ทุกโอกาส!"
          />
          <Cake
            name="Coffee cake"
            price="200 baht per pound"
            description="เหมาะสำหรับคนรักกาแฟและช่วงเวลาผ่อนคลาย!"
          />
          <Cake
            name="Chocolate Cake"
            price="250 baht per pound"
            description="เอาใจสายช็อกโกแลตในทุกโอกาส!"
          />
          <Cake
            name="Butter Cake"
            price="80 baht per piece"
            description="สัมผัสความเรียบง่ายที่เต็มไปด้วยเสน่ห์ในทุกคำ!"
          />
        </div>
      </div>
      <hr className="my-8 border-gray-500" />

      <div className="p-4 border-4 border-red-700 rounded-lg bg-white shadow-md">
        <h1 className="text-5xl font-bold mt-4 mb-6 text-center text-red-600">Cookie Menu</h1>
        <hr className="mb-4 border-red-400" />
        <div className="grid grid-cols-1 gap-4">
          <Cookie
            name="Fresh Butter Cookies"
            price="Small Box: 150 THB | Large Box: 200 THB"
            description="ความอร่อยที่ละลายในปาก!"
          />
          <Cookie
            name="Corn Flakes Cookies"
            price="Small Box: 170 THB | Large Box: 230 THB"
            description="ความมันจากคอร์นเฟลกส์ เคี้ยวเพลินไม่มีเบื่อ!"
          />
          <Cookie
            name="Cashew Nut Cookies"
            price="Small Box: 180 THB | Large Box: 250 THB"
            description="หอมมันด้วยเม็ดมะม่วงหิมพานต์เต็มคำ อร่อยเกินห้ามใจ!"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Product;
