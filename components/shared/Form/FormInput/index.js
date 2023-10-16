"use client";
import { useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function FormInput({
  name,
  tooltip = false,
  hoverBoxContent,
  type = "text",
  editProfile = false,
  isNicePhone = false,
  products,
  setEmailCurrentValue,
  ...otherProps
}) {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormikContext();
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (name === "email") {
      setEmailCurrentValue(values[name]);
    }
  }, [values[name]]);

  useEffect(() => {
    const total =
      products?.map((x) => x.price * x.quantity)?.reduce((a, b) => a + b, 0) ||
      0;
    const cost =
      products?.map((x) => x.cost * x.quantity)?.reduce((a, b) => a + b, 0) ||
      0;
    if (name === "grand_total") {
      setFieldValue(name, total + (values?.shipping || 0));
    }
    if (name === "cost") {
      setFieldValue(name, cost + (values?.shipping || 0));
    }
  }, [products, values["shipping"]]);

  return (
    <div className={`pb-1`}>
      <div className="relative flex items-center field mt-3">
        <input
          name={name}
          onBlur={() => setFieldTouched(name)}
          onChange={handleChange(name)}
          value={values[name]}
          type={inputType}
          {...otherProps}
          className={` ${
            isNicePhone
              ? "nice_phone"
              : "form_input py-3 px-4 w-full outline-none border-b bg-[#000] text-center border-[#D9D9D9] text-white"
          }`}
        />
        {!isNicePhone && (
          <div
            className={touched[name] && errors[name] ? "line line_red" : "line"}
          ></div>
        )}
        {type === "password" && (
          <>
            {inputType == "password" ? (
              <AiFillEye
                onClick={() => setInputType("text")}
                className={`absolute z-20 cursor-pointer right-0 mr-4 text-[#63CF50]`}
                size={23}
              />
            ) : (
              <AiFillEyeInvisible
                onClick={() => setInputType("password")}
                className={`absolute z-20 cursor-pointer right-0 mr-4 text-[#63CF50]`}
                size={23}
              />
            )}
          </>
        )}
      </div>
      <div className="h-[20px] mt-1">
        {touched[name] && (
          <span className="text-red-500 text-center text-sm block mb-0 px-4">
            {errors[name]}
          </span>
        )}
      </div>
    </div>
  );
}

export default FormInput;
