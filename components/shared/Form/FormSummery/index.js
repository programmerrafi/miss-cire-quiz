"use client";
import { useFormikContext } from "formik";

function FormSummery({ oldOrder }) {
  const { values } = useFormikContext();

  const formatCurrency = (value) => {
    return value.toLocaleString("bn-BD", {
      style: "currency",
      currency: "BDT",
    })?.slice(0, -4) + ' TK'
  };

  const render = (key, value, old) => {
    if(key === 'address') {
      if(oldOrder && old) return oldOrder?.address?.address
      return value
    }
    if(key === 'name') {
      if(oldOrder && old) return oldOrder?.user_name
      return value
    }
    if (key === 'grand_total' || key === 'cost' || key === 'paid_by_customer' || key === 'shipping') {
      return formatCurrency(value)
    }
    if (key == 'is_delivery_paid') {
      return value ? 'Yes' : 'No'
    }
    return value
  }

  return (
    <div className={`flex flex-col gap-2`}>
      {Object.keys(values).map((key, index) => {
        return (
          <div key={index} className={`flex gap-6`}>
            <span className={`text-base text-gray-500 w-[140px]`}>{key}</span>
            <span className={`text-base font-medium flex-1 text-gray-800`}> 
            {oldOrder && (
              <span className="text-red-500 mr-2">({render(key, oldOrder?.[key], true)})</span>
            )}
            {/* <del>{render(key, oldOrder?.[key], true)}</del>  */}
            {render(key, values[key])}
            </span>
          </div>
        );
      })}
      <div className={`flex gap-6 mt-2 border-t pt-3`}>
        <span className={`text-lg text-gray-700 w-[140px]`}>Payment Due</span>
        <span className={`text-lg font-medium flex-1 text-gray-900`}>{formatCurrency(values["grand_total"] - values["paid_by_customer"])}</span>
      </div>
      <div className={`flex gap-6`}>
        <span className={`text-lg text-gray-700 w-[140px]`}>Profit</span>
        <span className={`text-lg font-medium flex-1 text-gray-900`}>{formatCurrency(values["grand_total"] - values["cost"])}</span>
      </div>
    </div>
  );
}

export default FormSummery;
