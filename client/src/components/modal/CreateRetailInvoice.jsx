import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicModal from "@mui/material/Modal";
import { FaFileInvoice } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function CreateRetailInvoiceModal() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const formFields = [
    { placeholder: "Date", width: "w-[25%]", required: true },
    { placeholder: "Party Name", width: "w-[35%]", required: true },
    // { placeholder: "GSTIN of party", width: "w-[35%]" },
    { placeholder: "Invoice No", width: "w-[25%]", required: true },
    { placeholder: "Mobile Number", width: "w-[35%]" },
    { placeholder: "Email Id", width: "w-[35%]" },
    { placeholder: "Address", width: "w-[25%]" },
    { placeholder: "State", width: "w-[35%]" },
    { placeholder: "District", width: "w-[35%]" },
    { placeholder: "Product Name", width: "w-[25%]", required: true },
    { placeholder: "HSN/SAC No", width: "w-[35%]" },
    { placeholder: "Quantity", width: "w-[35%]" },
    { placeholder: "Discount", width: "w-[25%]" },
    { placeholder: "Product Amount", width: "w-[35%]" },
    { placeholder: "Taxable Value", width: "w-[35%]" },
    { placeholder: "CGST", width: "w-[25%]" },
    { placeholder: "SGST", width: "w-[35%]" },
    { placeholder: "Cess", width: "w-[35%]" },
    { placeholder: "Total Amount", width: "w-[25%]", required: true },
  ];

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: "",
      });
    }
  };

  const handleReset = () => {
    setFormData({});
    setErrors({});
  };

  const handleSubmit = () => {
    let valid = true;
    let newErrors = {};

    formFields.forEach((field) => {
      const fieldKey = field.placeholder.toLowerCase().replace(/\s+/g, "");
      if (field.required && !formData[fieldKey]) {
        newErrors[fieldKey] = `${field.placeholder} is required`;
        valid = false;
      }
    });

    setErrors(newErrors);

    if (valid) {
      // Form is valid, proceed with submission
      console.log("Form data submitted: ", formData);
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    handleReset();
  };

  return (
    <div>
      <Button
        component="label"
        onClick={handleOpen}
        variant="contained"
        tabIndex={-1}
        endIcon={<FaFileInvoice height={6} width={6} />}
        style={{ backgroundColor: "#3E39D9",borderRadius: "10px 10px 10px 10px" }}
      >
        <span className="tracking-widest">Create Retail Invoice</span>
      </Button>

      <BasicModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-lg">
          <div className="flex pb-4 justify-between px-4 items-center text-2xl">
            <span>Add Retail Invoice </span>
            <button onClick={handleClose} className="text-red-400 text-3xl">
              ×
            </button>
          </div>

          <div className="h-[70vh] no-scrollbar overflow-y-scroll mx-auto p-4 grid grid-cols-3 w-full">
            {formFields.map((field, index) => {
              const fieldKey = field.placeholder
                .toLowerCase()
                .replace(/\s+/g, "");
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-start w-full p-2"
                >
                  <div className={`relative ${field.width} w-[90%]`}>
                    <label
                      htmlFor={fieldKey}
                      className={`absolute left-3 transition-transform duration-300 ease-in-out pointer-events-none ${
                        formData[fieldKey]
                          ? "-translate-y-6 scale-75 text-gray-800"
                          : "top-3 text-gray-500"
                      }`}
                    >
                      {field.placeholder}
                    </label>
                    <input
                      type="text"
                      id={fieldKey}
                      value={formData[fieldKey] || ""}
                      onChange={(e) => handleInputChange(e, fieldKey)}
                      onFocus={(e) =>
                        e.target.previousSibling.classList.add(
                          "-translate-y-6",
                          "scale-75",
                          "text-gray-800"
                        )
                      }
                      onBlur={(e) => {
                        if (!e.target.value) {
                          e.target.previousSibling.classList.remove(
                            "-translate-y-6",
                            "scale-75",
                            "text-gray-800"
                          );
                          e.target.previousSibling.classList.add(
                            "top-3",
                            "text-gray-500"
                          );
                        }
                      }}
                      className="mt-1 block w-full border border-[#727D7D] rounded-md p-2 bg-transparent text-gray-800 placeholder-transparent"
                    />
                    {errors[fieldKey] && (
                      <span className="text-red-500 text-sm">
                        {errors[fieldKey]}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleSubmit}
              class="mt-4 w-28  text-gray-800 bg-yellow-700 py-1 rounded-md hover:bg-yellow-800 outline outline-2 outline-offset-2 ..."
            >
              Add
            </button>
            <button
              onClick={handleReset}
              class="mt-4 w-28  text-red-400 rounded-md py-1 hover:text-gray-800 hover:bg-red-800 outline outline-2 outline-offset-2 ..."
            >
              Reset
            </button>
          </div>
        </Box>
      </BasicModal>
    </div>
  );
}
