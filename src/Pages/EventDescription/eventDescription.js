import React from 'react'
import './eventDescription.css'

const EventDescription = () => {
  return (
    <div className='description-container' id='description'>
        <div className='description-left'>
            <h1 className='description-title'>Biz Bize <br/> Nedir?</h1>
        </div>
        <div className='description-right'>
            <p className='description-paragraph'>
            "Biz Bize" etkinliği, Yıldız Teknik Üniversitesi'nde gerçekleşen ve Sky Lab Bilgisayar Bilimleri Kulübü tarafından düzenlenen özel bir buluşmadır. Bu etkinlik, okulumuzdan mezun bilgisayar veya matematik mühendisliği bölümlerinden gelen değerli mezunlarımızı, öğrencilerle bir araya getirme amacını taşır. Katılımcılar, kendi kariyer yolculuklarını paylaşma fırsatı bulacak ve öğrencilere gelecekteki mesleki hedeflere yönelik ilham verici perspektifler sunacak. Söyleşiler, panel tartışmaları ve ağ oluşturma etkinlikleri ile dolu olan "Biz Bize", mezunlarımız ve öğrenciler arasında güçlü bağları pekiştirmeyi ve bilgi alışverişini teşvik etmeyi amaçlamaktadır. Bu etkinlik, bilgi, deneyim ve ilham dolu bir gün geçirmek isteyen herkesi bekliyor.
            </p>
        </div>
    </div>
  )
}

export default EventDescription