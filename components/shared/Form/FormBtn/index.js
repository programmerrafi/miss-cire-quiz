"use client";
import { useFormikContext } from "formik";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../../Button";

function FormBtn({ title, loading = false, disabled }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      className="w-full mt-1"
      title={title}
      loading={loading}
      onClick={handleSubmit}
      type="button"
      disabled={disabled}
    />
  );
}

export default FormBtn;
