"use client";
import { useFormikContext } from "formik";

function FormSelect({
  items = [],
  name,
}) {

  const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <div className="payment flex flex-col gap-3">
        {items?.map((item) => (
          <div
            key={item.type}
            className={`text-title font-semibold text-base  shadow rounded py-2 px-3 cursor-pointer 
                ${values[name] === item?.type
                ? "bg-primary bg-opacity-5 border-primary border-2"
                : (errors[name] && touched[name])
                  ? "bg-red-500 bg-opacity-5 border-red-500 border-2"
                  : "bg-white border-white border-2"
              }
                `}
            onClick={() => {
              setFieldTouched(name);
              setFieldValue(name, item?.type);
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
      {touched[name] && (
        <span className="text-red-400 text-sm">{errors[name]}</span>
      )}
    </>
  );
}

export default FormSelect;
