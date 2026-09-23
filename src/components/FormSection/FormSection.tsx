import React, { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

 const FormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Форматирование и маска телефона (+7 (XXX) XXX-XX-XX)
  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, '');
    if (!digits) return '';
    
    // Поддержка ввода начиная с 7 или 8
    let result = '+7 ';
    const phoneDigits = digits.startsWith('7') || digits.startsWith('8') ? digits.slice(1) : digits;

    if (phoneDigits.length > 0) {
      result += `(${phoneDigits.slice(0, 3)}`;
    }
    if (phoneDigits.length >= 3) {
      result += `) ${phoneDigits.slice(3, 6)}`;
    }
    if (phoneDigits.length >= 6) {
      result += `-${phoneDigits.slice(6, 8)}`;
    }
    if (phoneDigits.length >= 8) {
      result += `-${phoneDigits.slice(8, 10)}`;
    }

    return result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, phone: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Сбрасываем ошибку при вводе
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Валидация формы
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, введите номер телефона';
    } else if (cleanPhone.length < 11) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Имитация отправки формы
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({ name: '', phone: '' });
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-[#dfeefc] via-[#a7d2fb]/92 to-[#dfeefc]">
      <div className="relative mx-auto px-5 py-[130px] max-lg:py-16 max-w-[1200px]">
        <div className="flex items-center">
          {/* Карточка формы */}
          <div className="inline-block z-10 relative bg-white shadow-[0px_0px_8px_2px_rgba(108,108,108,0.25)] p-[58px_50px] max-sm:p-8 rounded-[20px] w-full max-w-[425px]">
            <h3 className="mb-[30px] font-normal text-[#302d2d] text-[32px] text-center leading-tight">
              Записаться на прием
            </h3>

            {isSuccess ? (
              <div className="py-8 font-medium text-emerald-600 text-center">
                Спасибо! Ваша заявка успешно отправлена.
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Поле Имени */}
                <div className="mb-5">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    className={`w-full rounded-[10px] border px-[25px] py-[18px] text-[18px] outline-none transition-colors placeholder:text-[#b9b9b9] placeholder:font-['Source_Sans_Pro'] ${
                      errors.name ? 'border-red-500 bg-red-50/30' : 'border-[#e4e4e4] focus:border-[#5eb8f0]'
                    }`}
                  />
                  {errors.name && (
                    <span className="block mt-1 pl-2 text-red-500 text-xs">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Поле Телефона */}
                <div className="mb-5">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ваш телефон"
                    className={`w-full rounded-[10px] border px-[25px] py-[18px] text-[18px] outline-none transition-colors placeholder:text-[#b9b9b9] placeholder:font-['Source_Sans_Pro'] ${
                      errors.phone ? 'border-red-500 bg-red-50/30' : 'border-[#e4e4e4] focus:border-[#5eb8f0]'
                    }`}
                  />
                  {errors.phone && (
                    <span className="block mt-1 pl-2 text-red-500 text-xs">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Кнопка отправки */}
                <div className="relative mb-5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex justify-center items-center bg-[#5eb8f0] hover:bg-[#51a8de] disabled:opacity-70 px-[25px] py-[18px] rounded-[30px] w-full text-[18px] text-white transition-colors duration-350 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-block border-2 border-white border-t-transparent rounded-full w-6 h-6 animate-spin" />
                    ) : (
                      'Записаться на прием'
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* Согласие */}
            <div className="mx-auto max-w-[280px] font-light text-[#747474] text-[14px] text-center leading-[1.5]">
              Нажимая кнопку, я даю свое согласие на обработку моих персональных данных
            </div>
          </div>

          {/* Изображение справа */}
          <div className="max-lg:hidden right-0 bottom-0 absolute">
            <img
              src="../../src/assets/images/form-girl.png"
              alt="Записаться на прием"
              className="block max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FormSection