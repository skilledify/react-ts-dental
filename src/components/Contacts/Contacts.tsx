// import React, { useState } from 'react';

// interface FormData {
//   name: string;
//   phone: string;
//   email: string;
//   comment: string;
// }

// const ContactsSection: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     phone: '',
//     email: '',
//     comment: '',
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log('Отправленные данные:', formData);
//     setFormData({ name: '', phone: '', email: '', comment: '' });
//   };

//   return (
//     <section className="py-[60px] font-['Source_Sans_Pro',sans-serif] text-[#302d2d]">
//       <div className="mx-auto px-[20px] max-w-[1200px]">
//         {/* Title */}
//         <div className="mx-auto mb-[45px] max-w-[470px] text-center">
//           <h2 className="mb-[20px] font-normal text-[46px] leading-[55px]">
//             Контакты
//           </h2>
//         </div>

//         {/* Contacts Grid */}
//         <div className="gap-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
//           {/* Item 1: Address */}
//           <div className="flex flex-col justify-center items-center bg-[#5eb8f0] p-[50px_30px] rounded-[5px] text-white text-center">
//             <div className="mb-[20px]">
//               <img src="../../src/assets/images/location.svg" alt="Локация" className="w-[35px] h-auto" />
//             </div>
//             <div className="mb-[15px] font-bold text-[24px]">Наш офис</div>
//             <div className="text-[18px]">г.Москва, ул. Прокофьева 18</div>
//           </div>

//           {/* Item 2: Phone */}
//           <div className="flex flex-col justify-center items-center bg-[#54a0cf] p-[50px_30px] rounded-[5px] text-white text-center">
//             <div className="mb-[20px]">
//               <img src="../../src/assets/images/phone.svg" alt="Телефон" className="w-[35px] h-auto" />
//             </div>
//             <div className="mb-[15px] font-bold text-[24px]">Наш телефон</div>
//             <div className="text-[18px]">
//               <a href="tel:+74950000000" className="text-white hover:underline">
//                 +7 (495) 000 00 00
//               </a>
//             </div>
//           </div>

//           {/* Item 3: Email */}
//           <div className="flex flex-col justify-center items-center bg-[#29a9f9] p-[50px_30px] rounded-[5px] text-white text-center">
//             <div className="mb-[20px]">
//               <img src="../../src/assets/images/envelope.svg" alt="Email" className="w-[35px] h-auto" />
//             </div>
//             <div className="mb-[15px] font-bold text-[24px]">Наш email</div>
//             <div className="text-[18px]">
//               <a href="mailto:info@dentaltooth.ru" className="text-white hover:underline">
//                 info@dentaltooth.ru
//               </a>
//             </div>
//           </div>

//           {/* Item 4: Socials */}
//           <div className="flex flex-col justify-center items-center bg-[#328dc6] p-[50px_30px] rounded-[5px] text-white text-center">
//             <div className="mb-[20px]">
//               <img src="../../src/assets/images/molekula.svg" alt="Мы в социальных сетях" className="w-[35px] h-auto" />
//             </div>
//             <div className="mb-[15px] font-bold text-[24px]">
//               Мы в социальных сетях
//             </div>
//             <div className="text-[18px]">
//               <div className="flex justify-center items-center gap-[20px] mt-[5px]">
//                 <a href="#" className="inline-block hover:scale-110 transition-transform duration-300">
//                   <img src="../../src/assets/images/twitter.svg" alt="Twitter" className="w-auto h-auto" />
//                 </a>
//                 <a href="#" className="inline-block hover:scale-110 transition-transform duration-300">
//                   <img src="../../src/assets/images/instagram.svg" alt="Instagram" className="w-auto h-auto" />
//                 </a>
//                 <a href="#" className="inline-block hover:scale-110 transition-transform duration-300">
//                   <img src="../../src/assets/images/vk.svg" alt="Vk" className="w-auto h-auto" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form Section */}
//         <div className="mx-auto mt-[60px] max-w-[560px]">
//           <h3 className="mb-[40px] font-normal text-[42px] text-center">
//             Связаться с нами
//           </h3>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Ваше имя"
//                 required
//                 className="p-[18px_22px] border border-[#e4e4e4] focus:border-[#5eb8f0] rounded-[10px] outline-none focus:ring-[#5eb8f0] focus:ring-1 w-full text-[18px] transition-colors placeholder-[#b9b9b9]"
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Ваш телефон"
//                 required
//                 className="p-[18px_22px] border border-[#e4e4e4] focus:border-[#5eb8f0] rounded-[10px] outline-none focus:ring-[#5eb8f0] focus:ring-1 w-full text-[18px] transition-colors placeholder-[#b9b9b9]"
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Ваш email"
//                 required
//                 className="p-[18px_22px] border border-[#e4e4e4] focus:border-[#5eb8f0] rounded-[10px] outline-none focus:ring-[#5eb8f0] focus:ring-1 w-full text-[18px] transition-colors placeholder-[#b9b9b9]"
//               />
//             </div>
//             <div>
//               <textarea
//                 name="comment"
//                 value={formData.comment}
//                 onChange={handleChange}
//                 placeholder="Комментарий"
//                 rows={5}
//                 className="p-[18px_22px] border border-[#e4e4e4] focus:border-[#5eb8f0] rounded-[10px] outline-none focus:ring-[#5eb8f0] focus:ring-1 w-full h-[256px] text-[18px] transition-colors resize-y placeholder-[#b9b9b9]"
//               />
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="bg-[#f86d6d] hover:bg-[#dd5959] p-[15px] border-none rounded-[25px] w-full text-[16px] text-white transition-colors duration-300 cursor-pointer"
//               >
//                 Отправить
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactsSection;

// import React, { useState } from 'react';

// interface FormData {
//   name: string;
//   phone: string;
//   email: string;
//   comment: string;
// }

// interface FormErrors {
//   name?: string;
//   phone?: string;
//   email?: string;
//   comment?: string;
// }

// interface ContactCard {
//   id: string;
//   bgColor: string;
//   icon: string;
//   title: string;
//   content: React.ReactNode;
// }

// const CONTACTS_DATA: ContactCard[] = [
//   {
//     id: 'office',
//     bgColor: 'bg-[#5eb8f0]',
//     icon: 'images/location.svg',
//     title: 'Наш офис',
//     content: 'г.Москва, ул. Прокофьева 18',
//   },
//   {
//     id: 'phone',
//     bgColor: 'bg-[#54a0cf]',
//     icon: 'images/phone.svg',
//     title: 'Наш телефон',
//     content: (
//       <a href="tel:+74950000000" className="text-white hover:underline">
//         +7 (495) 000 00 00
//       </a>
//     ),
//   },
//   {
//     id: 'email',
//     bgColor: 'bg-[#29a9f9]',
//     icon: 'images/envelope.svg',
//     title: 'Наш email',
//     content: (
//       <a href="mailto:info@dentaltooth.ru" className="text-white hover:underline">
//         info@dentaltooth.ru
//       </a>
//     ),
//   },
//   {
//     id: 'socials',
//     bgColor: 'bg-[#328dc6]',
//     icon: 'images/molekula.svg',
//     title: 'Мы в социальных сетях',
//     content: (
//       <div className="flex justify-center items-center gap-[20px] mt-[5px]">
//         <a
//           href="#"
//           aria-label="Twitter"
//           className="inline-block rounded focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-110 transition-transform duration-300"
//         >
//           <img src="images/twitter.svg" alt="" className="w-auto h-auto" />
//         </a>
//         <a
//           href="#"
//           aria-label="Instagram"
//           className="inline-block rounded focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-110 transition-transform duration-300"
//         >
//           <img src="images/instagram.svg" alt="" className="w-auto h-auto" />
//         </a>
//         <a
//           href="#"
//           aria-label="VKontakte"
//           className="inline-block rounded focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-110 transition-transform duration-300"
//         >
//           <img src="images/vk.svg" alt="" className="w-auto h-auto" />
//         </a>
//       </div>
//     ),
//   },
// ];

// // Маска телефона +7 (XXX) XXX-XX-XX
// const formatPhoneNumber = (value: string): string => {
//   const digits = value.replace(/\D/g, '');
  
//   if (!digits) return '';
  
//   let formatted = '+7';
//   const numberDigits = digits.startsWith('7') || digits.startsWith('8') ? digits.slice(1) : digits;

//   if (numberDigits.length > 0) {
//     formatted += ` (${numberDigits.slice(0, 3)}`;
//   }
//   if (numberDigits.length >= 3) {
//     formatted += `) ${numberDigits.slice(3, 6)}`;
//   }
//   if (numberDigits.length >= 6) {
//     formatted += `-${numberDigits.slice(6, 8)}`;
//   }
//   if (numberDigits.length >= 8) {
//     formatted += `-${numberDigits.slice(8, 10)}`;
//   }

//   return formatted;
// };

// const Contacts: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     phone: '',
//     email: '',
//     comment: '',
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
//     name: false,
//     phone: false,
//     email: false,
//     comment: false,
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   // Валидация отдельных полей
//   const validateField = (name: keyof FormData, value: string): string | undefined => {
//     switch (name) {
//       case 'name':
//         if (!value.trim()) return 'Введите ваше имя';
//         if (value.trim().length < 2) return 'Имя должно быть не короче 2 символов';
//         return undefined;

//       case 'phone': {
//         const rawDigits = value.replace(/\D/g, '');
//         if (!rawDigits) return 'Введите ваш номер телефона';
//         if (rawDigits.length < 11) return 'Введите полный номер телефона';
//         return undefined;
//       }

//       case 'email':
//         if (!value.trim()) return 'Введите ваш email';
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Введите корректный email';
//         return undefined;

//       case 'comment':
//         if (value.length > 1000) return 'Комментарий слишком длинный (макс. 1000 символов)';
//         return undefined;

//       default:
//         return undefined;
//     }
//   };

//   // Валидация всей формы
//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {};
//     (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
//       const error = validateField(field, formData[field]);
//       if (error) newErrors[field] = error;
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     const fieldName = name as keyof FormData;

//     let updatedValue = value;

//     // Применяем маску для телефона
//     if (fieldName === 'phone') {
//       updatedValue = formatPhoneNumber(value);
//     }

//     setFormData((prev) => ({ ...prev, [fieldName]: updatedValue }));

//     // Валидируем "на лету", если поле уже посещалось
//     if (touched[fieldName]) {
//       const error = validateField(fieldName, updatedValue);
//       setErrors((prev) => ({ ...prev, [fieldName]: error }));
//     }
//   };

//   const handleBlur = (
//     e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     const fieldName = name as keyof FormData;

//     setTouched((prev) => ({ ...prev, [fieldName]: true }));
//     const error = validateField(fieldName, value);
//     setErrors((prev) => ({ ...prev, [fieldName]: error }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Помечаем все поля как touched
//     setTouched({
//       name: true,
//       phone: true,
//       email: true,
//       comment: true,
//     });

//     if (!validateForm()) return;

//     setIsSubmitting(true);
//     setIsSuccess(false);

//     try {
//       // Имитация сетевого запроса
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       console.log('Отправленные данные:', formData);
//       setIsSuccess(true);
//       setFormData({ name: '', phone: '', email: '', comment: '' });
//       setTouched({ name: false, phone: false, email: false, comment: false });
//       setErrors({});
//     } catch (error) {
//       console.error('Ошибка отправки:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contacts" className="py-[60px] font-['Source_Sans_Pro',sans-serif] text-[#302d2d]">
//       <div className="mx-auto px-[20px] max-w-[1200px]">
//         {/* Title */}
//         <div className="mx-auto mb-[45px] max-w-[470px] text-center">
//           <h2 className="mb-[20px] font-normal text-[46px] leading-[55px]">
//             Контакты
//           </h2>
//         </div>

//         {/* Contacts Grid */}
//         <div className="gap-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
//           {CONTACTS_DATA.map((card) => (
//             <div
//               key={card.id}
//               className={`${card.bgColor} text-white p-[50px_30px] rounded-[5px] flex flex-col justify-center items-center text-center shadow-sm transition-transform duration-300 hover:-translate-y-1`}
//             >
//               <div className="mb-[20px]">
//                 <img src={card.icon} alt="" className="w-[35px] h-auto" />
//               </div>
//               <div className="mb-[15px] font-bold text-[24px]">{card.title}</div>
//               <div className="text-[18px]">{card.content}</div>
//             </div>
//           ))}
//         </div>

//         {/* Contact Form Section */}
//         <div className="mx-auto mt-[60px] max-w-[560px]">
//           <h3 className="mb-[40px] font-normal text-[42px] text-center">
//             Связаться с нами
//           </h3>

//           {isSuccess && (
//             <div
//               role="alert"
//               className="bg-green-50 mb-[25px] p-[16px_20px] border border-green-200 rounded-[10px] text-[16px] text-green-800 text-center animate-fade-in"
//             >
//               Спасибо! Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.
//             </div>
//           )}

//           <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[20px]">
//             {/* Name Input */}
//             <div>
//               <label htmlFor="contacts-name" className="sr-only">
//                 Ваше имя
//               </label>
//               <input
//                 id="contacts-name"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="Ваше имя *"
//                 aria-invalid={!!errors.name}
//                 aria-describedby={errors.name ? 'name-error' : undefined}
//                 className={`w-full border rounded-[10px] p-[18px_22px] text-[18px] outline-none placeholder-[#b9b9b9] transition-colors ${
//                   errors.name
//                     ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
//                     : 'border-[#e4e4e4] focus:border-[#5eb8f0] focus:ring-1 focus:ring-[#5eb8f0]'
//                 }`}
//               />
//               {errors.name && (
//                 <span id="name-error" className="block mt-1 text-red-500 text-sm text-left">
//                   {errors.name}
//                 </span>
//               )}
//             </div>

//             {/* Phone Input */}
//             <div>
//               <label htmlFor="contacts-phone" className="sr-only">
//                 Ваш телефон
//               </label>
//               <input
//                 id="contacts-phone"
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="Ваш телефон *"
//                 aria-invalid={!!errors.phone}
//                 aria-describedby={errors.phone ? 'phone-error' : undefined}
//                 className={`w-full border rounded-[10px] p-[18px_22px] text-[18px] outline-none placeholder-[#b9b9b9] transition-colors ${
//                   errors.phone
//                     ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
//                     : 'border-[#e4e4e4] focus:border-[#5eb8f0] focus:ring-1 focus:ring-[#5eb8f0]'
//                 }`}
//               />
//               {errors.phone && (
//                 <span id="phone-error" className="block mt-1 text-red-500 text-sm text-left">
//                   {errors.phone}
//                 </span>
//               )}
//             </div>

//             {/* Email Input */}
//             <div>
//               <label htmlFor="contacts-email" className="sr-only">
//                 Ваш email
//               </label>
//               <input
//                 id="contacts-email"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="Ваш email *"
//                 aria-invalid={!!errors.email}
//                 aria-describedby={errors.email ? 'email-error' : undefined}
//                 className={`w-full border rounded-[10px] p-[18px_22px] text-[18px] outline-none placeholder-[#b9b9b9] transition-colors ${
//                   errors.email
//                     ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
//                     : 'border-[#e4e4e4] focus:border-[#5eb8f0] focus:ring-1 focus:ring-[#5eb8f0]'
//                 }`}
//               />
//               {errors.email && (
//                 <span id="email-error" className="block mt-1 text-red-500 text-sm text-left">
//                   {errors.email}
//                 </span>
//               )}
//             </div>

//             {/* Comment Textarea */}
//             <div>
//               <label htmlFor="contacts-comment" className="sr-only">
//                 Комментарий
//               </label>
//               <textarea
//                 id="contacts-comment"
//                 name="comment"
//                 value={formData.comment}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="Комментарий"
//                 rows={5}
//                 aria-invalid={!!errors.comment}
//                 aria-describedby={errors.comment ? 'comment-error' : undefined}
//                 className={`w-full border rounded-[10px] p-[18px_22px] text-[18px] outline-none placeholder-[#b9b9b9] h-[256px] resize-y transition-colors ${
//                   errors.comment
//                     ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
//                     : 'border-[#e4e4e4] focus:border-[#5eb8f0] focus:ring-1 focus:ring-[#5eb8f0]'
//                 }`}
//               />
//               {errors.comment && (
//                 <span id="comment-error" className="block mt-1 text-red-500 text-sm text-left">
//                   {errors.comment}
//                 </span>
//               )}
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="flex justify-center items-center gap-2 bg-[#f86d6d] hover:bg-[#dd5959] active:bg-[#c94b4b] disabled:bg-[#f86d6d]/60 p-[15px] border-none rounded-[25px] w-full text-[16px] text-white transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <svg
//                       className="w-5 h-5 text-white animate-spin"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       />
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       />
//                     </svg>
//                     Отправка...
//                   </>
//                 ) : (
//                   'Отправить'
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contacts;
import React, { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  comment: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  comment?: string;
}

interface ContactCard {
  id: string;
  bgColor: string;
  icon: string;
  title: string;
  content: React.ReactNode;
}

const CONTACTS_DATA: ContactCard[] = [
  {
    id: 'office',
    bgColor: 'bg-[#5eb8f0]',
    icon: 'images/location.svg',
    title: 'Наш офис',
    content: 'г.Москва, ул. Прокофьева 18',
  },
  {
    id: 'phone',
    bgColor: 'bg-[#54a0cf]',
    icon: 'images/phone.svg',
    title: 'Наш телефон',
    content: (
      <a href="tel:+74950000000" className="text-white hover:underline">
        +7 (495) 000 00 00
      </a>
    ),
  },
  {
    id: 'email',
    bgColor: 'bg-[#29a9f9]',
    icon: 'images/envelope.svg',
    title: 'Наш email',
    content: (
      <a href="mailto:info@dentaltooth.ru" className="text-white hover:underline">
        info@dentaltooth.ru
      </a>
    ),
  },
  {
    id: 'socials',
    bgColor: 'bg-[#328dc6]',
    icon: 'images/molekula.svg',
    title: 'Мы в социальных сетях',
    content: (
      <div className="flex justify-center items-center gap-[20px] mt-[5px]">
        <a
          href="#"
          aria-label="Twitter"
          className="inline-block rounded focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-110 transition-transform duration-300"
        >
          <img src="images/twitter.svg" alt="" className="w-auto h-auto" />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="inline-block rounded focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-110 transition-transform duration-300"
        >
          <img src="images/instagram.svg" alt="" className="w-auto h-auto" />
        </a>
        <a
          href="#"
          aria-label="VKontakte"
          className="inline-block rounded focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-110 transition-transform duration-300"
        >
          <img src="images/vk.svg" alt="" className="w-auto h-auto" />
        </a>
      </div>
    ),
  },
];

const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  if (!digits) return '';
  
  let formatted = '+7';
  const numberDigits = digits.startsWith('7') || digits.startsWith('8') ? digits.slice(1) : digits;

  if (numberDigits.length > 0) {
    formatted += ` (${numberDigits.slice(0, 3)}`;
  }
  if (numberDigits.length >= 3) {
    formatted += `) ${numberDigits.slice(3, 6)}`;
  }
  if (numberDigits.length >= 6) {
    formatted += `-${numberDigits.slice(6, 8)}`;
  }
  if (numberDigits.length >= 8) {
    formatted += `-${numberDigits.slice(8, 10)}`;
  }

  return formatted;
};

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    comment: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    name: false,
    phone: false,
    email: false,
    comment: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Введите ваше имя';
        if (value.trim().length < 2) return 'Имя должно быть не короче 2 символов';
        return undefined;

      case 'phone': {
        const rawDigits = value.replace(/\D/g, '');
        if (!rawDigits) return 'Введите ваш номер телефона';
        if (rawDigits.length < 11) return 'Введите полный номер телефона';
        return undefined;
      }

      case 'email':
        if (!value.trim()) return 'Введите ваш email';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Введите корректный email';
        return undefined;

      case 'comment':
        if (value.length > 1000) return 'Комментарий слишком длинный (макс. 1000 символов)';
        return undefined;

      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;

    let updatedValue = value;

    if (fieldName === 'phone') {
      updatedValue = formatPhoneNumber(value);
    }

    setFormData((prev) => ({ ...prev, [fieldName]: updatedValue }));

    if (touched[fieldName]) {
      const error = validateField(fieldName, updatedValue);
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;

    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const error = validateField(fieldName, value);
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched({
      name: true,
      phone: true,
      email: true,
      comment: true,
    });

    if (!validateForm()) return;

    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Отправленные данные:', formData);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', comment: '' });
      setTouched({ name: false, phone: false, email: false, comment: false });
      setErrors({});
    } catch (error) {
      console.error('Ошибка отправки:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contacts" className="scroll-mt-[100px]">
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
            {CONTACTS_DATA.map((card) => (
              <div
                key={card.id}
                className={`${card.bgColor} text-white p-[50px_30px] rounded-[5px] flex flex-col justify-center items-center text-center shadow-sm transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className="mb-[20px]">
                  <img src={card.icon} alt="" className="w-[35px] h-auto" />
                </div>
                <div className="mb-[15px] font-bold text-[24px]">{card.title}</div>
                <div className="text-[18px]">{card.content}</div>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="mx-auto mt-[60px] max-w-[560px]">
            <h3 className="mb-[40px] font-normal text-[42px] text-center">
              Связаться с нами
            </h3>

            {isSuccess && (
              <div
                role="alert"
                className="bg-green-50 mb-[25px] p-[16px_20px] border border-green-200 rounded-[10px] text-[16px] text-green-800 text-center animate-fade-in"
              >
                Спасибо! Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[20px]">
              {/* Name Input */}
              <div>
                <label htmlFor="contacts-name" className="sr-only">
                  Ваше имя
                </label>
                <input
                  id="contacts-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Ваше имя *"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full border rounded-[10px] p-[18px_22px] text-[18px] outline-none placeholder-[#b9b9b9] transition-colors ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-[#e4e4e4] focus:border-[#5eb8f0] focus:ring-1 focus:ring-[#5eb8f0]'
                  }`}
                />
                {errors.name && (
                  <span id="name-error" className="block mt-1 text-red-500 text-sm text-left">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="contacts-phone" className="sr-only">
                  Ваш телефон
                </label>
                <input
                  id="contacts-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Ваш телефон *"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  className={`w-full border rounded-[10px] p-[18px_22px] text-[18px] outline-none placeholder-[#b9b9b9] transition-colors ${
                    errors.phone
                      ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-[#e4e4e4] focus:border-[#5eb8f0] focus:ring-1 focus:ring-[#5eb8f0]'
                  }`}
                />
                {errors.phone && (
                  <span id="phone-error" className="block mt-1 text-red-500 text-sm text-left">
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="contacts-email" className="sr-only">
                  Ваш email
                </label>
                <input
                  id="contacts-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Ваш email *"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full border rounded-[10px] p-[18px_22px] text-[18px] outline-none placeholder-[#b9b9b9] transition-colors ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-[#e4e4e4] focus:border-[#5eb8f0] focus:ring-1 focus:ring-[#5eb8f0]'
                  }`}
                />
                {errors.email && (
                  <span id="email-error" className="block mt-1 text-red-500 text-sm text-left">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Comment Textarea */}
              <div>
                <label htmlFor="contacts-comment" className="sr-only">
                  Комментарий
                </label>
                <textarea
                  id="contacts-comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Комментарий"
                  rows={5}
                  aria-invalid={!!errors.comment}
                  aria-describedby={errors.comment ? 'comment-error' : undefined}
                  className={`w-full border rounded-[10px] p-[18px_22px] text-[18px] outline-none placeholder-[#b9b9b9] h-[256px] resize-y transition-colors ${
                    errors.comment
                      ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-[#e4e4e4] focus:border-[#5eb8f0] focus:ring-1 focus:ring-[#5eb8f0]'
                  }`}
                />
                {errors.comment && (
                  <span id="comment-error" className="block mt-1 text-red-500 text-sm text-left">
                    {errors.comment}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex justify-center items-center gap-2 bg-[#f86d6d] hover:bg-[#dd5959] active:bg-[#c94b4b] disabled:bg-[#f86d6d]/60 p-[15px] border-none rounded-[25px] w-full text-[16px] text-white transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="w-5 h-5 text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Отправка...
                    </>
                  ) : (
                    'Отправить'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;