import React, { FC } from "react";
import "./form-title.css";

type FormTitleChildren = {
  title: React.ReactNode;
};

const FormTitle: FC<FormTitleChildren> = ({ title }) => {
  return <h1 className='form-title'>{title}</h1>;
};

export default FormTitle;
