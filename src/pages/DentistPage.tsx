import { useEffect, type FC } from "react";
import { useParams } from "react-router";
import FormSection from "../components/FormSection/FormSection";
import Dentist from "../components/Dentist/Dentist";

const DentistPage: FC = () => {
// Получаем параметр id из URL (например, '1' для Бориса)
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    // Прокручиваем страницу наверх при переходе
    window.scrollTo(0, 0);
  }, [id]);


  return (
    <>
{/* Пробрасываем id врача в компонент Dentist */}
      <Dentist id={id} />
      <FormSection />
    </>
  )
}

export default DentistPage