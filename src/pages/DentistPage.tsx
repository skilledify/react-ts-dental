import { useEffect, type FC } from "react";
import { useParams } from "react-router";
import FormSection from "../components/FormSection/FormSection";
import Dentist from "../components/Dentist/Dentist";

const DentistPage: FC = () => {

  const { id } = useParams<{ id: string }>();

  useEffect(() => {

    window.scrollTo(0, 0);
  }, [id]);


  return (
    <>
{}
      <Dentist id={id} />
      <FormSection />
    </>
  )
}

export default DentistPage
