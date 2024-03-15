import React from "react";

export default function GenderCheckBox(onCheckboxChange, selectedGender) {
  const handleCheckboxChange = (gender) => {
    onCheckboxChange(gender);
  };
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={
            'label gap-2 cursor-pointer ${selectedGender === "Male"? "selected": "" }'
          }
        >
          <span className="label-tetx"> Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent mt-2"
            checked={selectedGender === "Male"}
            onChange={() => handleCheckboxChange("Male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={
            'label gap-2 cursor-pointer ${selectedGender === "Female"? "selected": "" }'
          }
        >
          <span className="label-tetx ml-4"> Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-secondary mt-2"
            checked={selectedGender === "Female"}
            onChange={() => handleCheckboxChange("Female")}
          />
        </label>
      </div>
    </div>
  );
}
