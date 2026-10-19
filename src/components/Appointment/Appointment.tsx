

import React, { useState } from 'react';


import locationIcon from '../../assets/images/location.svg';
import phoneIcon from '../../assets/images/phone.svg';
import envelopeIcon from '../../assets/images/envelope.svg';
import molekulaIcon from '../../assets/images/molekula.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import instagramIcon from '../../assets/images/instagram.svg';
import vkIcon from '../../assets/images/vk.svg';


import appointmentImg from '../../assets/images/appointment.svg';

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

const APPOINTMENT_DATA: ContactCard[] = [
 {
    id: 'office',
    bgColor: 'bg-[#5eb8f0]',
    icon: locationIcon,
    title: 'Наш офис',
    content: 'г.Москва, ул. Прокофьева 18',
  },
 {
    id: 'phone',
    bgColor: 'bg-[#54a0cf]',
    icon: phoneIcon,
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
    icon: envelopeIcon,
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
    icon: molekulaIcon,
    title: 'Мы в социальных сетях',
    content: (
      <div className="flex justify-center items-center gap-[20px] mt-[5px]">
        <a
          href="#"
          aria-label="Twitter"
          className="inline-block rounded focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-110 transition-transform duration-300"
        >
          <img src={twitterIcon} alt="Twitter" className="w-auto h-auto" />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="inline-block rounded focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-110 transition-transform duration-300"
        >
          <img src={instagramIcon} alt="Instagram" className="w-auto h-auto" />
        </a>
        <a
          href="#"
          aria-label="VKontakte"
          className="inline-block rounded focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-110 transition-transform duration-300"
        >
          <img src={vkIcon} alt="VKontakte" className="w-auto h-auto" />
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

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState<FormData>( {
    name: '',
    phone: '',
    email: '',
    comment: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>( {
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

    setTouched( {
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
    <div id="appointment" className="scroll-mt-[100px]">
      <section className="py-[60px] text-[#302d2d]">
        <div className="mx-auto px-[20px] max-w-[1200px]">
          {}
          <div className="mx-auto mb-[45px] max-w-[470px] text-center">
            <h2 className="mb-[20px] font-normal text-[36px] sm:text-[46px] leading-tight sm:leading-[55px]">
              Контакты
            </h2>
          </div>

          {}
          <div className="gap-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {APPOINTMENT_DATA.map((card) => (
              <div
                key={card.id}
                className={`${card.bgColor} text-white p-[40px_20px] sm:p-[50px_30px] rounded-[5px] flex flex-col justify-center items-center text-center shadow-sm transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className="mb-[20px]">
                  <img src={card.icon} alt="" className="w-[35px] h-auto" />
                </div>
                <div className="mb-[15px] font-bold text-[22px] sm:text-[24px]">{card.title}</div>
                <div className="text-[16px] sm:text-[18px]">{card.content}</div>
              </div>
            ))}
          </div>

          {}
          <div className="mx-auto mt-[60px] max-w-[1100px]">
            <h3 className="mb-[40px] font-normal text-[32px] sm:text-[42px] text-center">
              Записаться на прием
            </h3>

            <div className="items-center gap-[40px] grid grid-cols-1 lg:grid-cols-2">
              {}
              <div className="hidden lg:flex justify-center items-center p-4">
                <img
                  src={appointmentImg}
                  alt="Записаться на прием"
                  className="rounded-lg w-full max-w-[460px] h-auto object-contain"
                />
              </div>

              {}
              <div className="mx-auto w-full max-w-[560px] lg:max-w-none">
                {isSuccess && (
                  <div
                    role="alert"
                    className="bg-green-50 mb-[25px] p-[16px_20px] border border-green-200 rounded-[10px] text-[16px] text-green-800 text-center animate-fade-in"
                  >
                    Спасибо! Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[20px]">
                  {}
                  <div>
                    <label htmlFor="appointment-name" className="sr-only">
                      Ваше имя
                    </label>
                    <input
                      id="appointment-name"
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

                  {}
                  <div>
                    <label htmlFor="appointment-phone" className="sr-only">
                      Ваш телефон
                    </label>
                    <input
                      id="appointment-phone"
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

                  {}
                  <div>
                    <label htmlFor="appointment-email" className="sr-only">
                      Ваш email
                    </label>
                    <input
                      id="appointment-email"
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

                  {}
                  <div>
                    <label htmlFor="appointment-comment" className="sr-only">
                      Комментарий
                    </label>
                    <textarea
                      id="appointment-comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Комментарий"
                      rows={5}
                      aria-invalid={!!errors.comment}
                      aria-describedby={errors.comment ? 'comment-error' : undefined}
                      className={`w-full border rounded-[10px] p-[18px_22px] text-[18px] outline-none placeholder-[#b9b9b9] h-[180px] sm:h-[220px] resize-y transition-colors ${
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

                  {}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
