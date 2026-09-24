import React, { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  comment: string;
}

const ContactsSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    comment: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Отправленные данные:', formData);
    setFormData({ name: '', phone: '', email: '', comment: '' });
  };

  return (
    <section className="py-[60px] font-['Source_Sans_Pro',sans-serif] text-[#302d2d]">
      <div className="mx-auto px-[20px] max-w-[1200px]">
        {/* Title */}
        <div className="mx-auto mb-[45px] max-w-[470px] text-center">
          <h2 className="mb-[20px] font-normal text-[46px] leading-[55px]">
            Контакты
          </h2>
        </div>

        {/* Contacts Grid */}
        <div className="gap-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {/* Item 1: Address */}
          <div className="flex flex-col justify-center items-center bg-[#5eb8f0] p-[50px_30px] rounded-[5px] text-white text-center">
            <div className="mb-[20px]">
              <img src="../../src/assets/images/location.svg" alt="Локация" className="w-[35px] h-auto" />
            </div>
            <div className="mb-[15px] font-bold text-[24px]">Наш офис</div>
            <div className="text-[18px]">г.Москва, ул. Прокофьева 18</div>
          </div>

          {/* Item 2: Phone */}
          <div className="flex flex-col justify-center items-center bg-[#54a0cf] p-[50px_30px] rounded-[5px] text-white text-center">
            <div className="mb-[20px]">
              <img src="../../src/assets/images/phone.svg" alt="Телефон" className="w-[35px] h-auto" />
            </div>
            <div className="mb-[15px] font-bold text-[24px]">Наш телефон</div>
            <div className="text-[18px]">
              <a href="tel:+74950000000" className="text-white hover:underline">
                +7 (495) 000 00 00
              </a>
            </div>
          </div>

          {/* Item 3: Email */}
          <div className="flex flex-col justify-center items-center bg-[#29a9f9] p-[50px_30px] rounded-[5px] text-white text-center">
            <div className="mb-[20px]">
              <img src="../../src/assets/images/envelope.svg" alt="Email" className="w-[35px] h-auto" />
            </div>
            <div className="mb-[15px] font-bold text-[24px]">Наш email</div>
            <div className="text-[18px]">
              <a href="mailto:info@dentaltooth.ru" className="text-white hover:underline">
                info@dentaltooth.ru
              </a>
            </div>
          </div>

          {/* Item 4: Socials */}
          <div className="flex flex-col justify-center items-center bg-[#328dc6] p-[50px_30px] rounded-[5px] text-white text-center">
            <div className="mb-[20px]">
              <img src="../../src/assets/images/molekula.svg" alt="Мы в социальных сетях" className="w-[35px] h-auto" />
            </div>
            <div className="mb-[15px] font-bold text-[24px]">
              Мы в социальных сетях
            </div>
            <div className="text-[18px]">
              <div className="flex justify-center items-center gap-[20px] mt-[5px]">
                <a href="#" className="inline-block hover:scale-110 transition-transform duration-300">
                  <img src="../../src/assets/images/twitter.svg" alt="Twitter" className="w-auto h-auto" />
                </a>
                <a href="#" className="inline-block hover:scale-110 transition-transform duration-300">
                  <img src="../../src/assets/images/instagram.svg" alt="Instagram" className="w-auto h-auto" />
                </a>
                <a href="#" className="inline-block hover:scale-110 transition-transform duration-300">
                  <img src="../../src/assets/images/vk.svg" alt="Vk" className="w-auto h-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mx-auto mt-[60px] max-w-[560px]">
          <h3 className="mb-[40px] font-normal text-[42px] text-center">
            Связаться с нами
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                required
                className="p-[18px_22px] border border-[#e4e4e4] focus:border-[#5eb8f0] rounded-[10px] outline-none focus:ring-[#5eb8f0] focus:ring-1 w-full text-[18px] transition-colors placeholder-[#b9b9b9]"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ваш телефон"
                required
                className="p-[18px_22px] border border-[#e4e4e4] focus:border-[#5eb8f0] rounded-[10px] outline-none focus:ring-[#5eb8f0] focus:ring-1 w-full text-[18px] transition-colors placeholder-[#b9b9b9]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ваш email"
                required
                className="p-[18px_22px] border border-[#e4e4e4] focus:border-[#5eb8f0] rounded-[10px] outline-none focus:ring-[#5eb8f0] focus:ring-1 w-full text-[18px] transition-colors placeholder-[#b9b9b9]"
              />
            </div>
            <div>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Комментарий"
                rows={5}
                className="p-[18px_22px] border border-[#e4e4e4] focus:border-[#5eb8f0] rounded-[10px] outline-none focus:ring-[#5eb8f0] focus:ring-1 w-full h-[256px] text-[18px] transition-colors resize-y placeholder-[#b9b9b9]"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#f86d6d] hover:bg-[#dd5959] p-[15px] border-none rounded-[25px] w-full text-[16px] text-white transition-colors duration-300 cursor-pointer"
              >
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;