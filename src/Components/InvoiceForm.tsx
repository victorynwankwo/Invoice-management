import React from "react";
import "./InvoiceForm.css";

interface InvoiceFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvoiceForm = ({ isOpen, onClose }: InvoiceFormProps) => {
  if (!isOpen) return null;

  return (
    <div className="InvoiceForm-overlay" onClick={onClose}>
      <div
        className="InvoiceForm-container">
            <div className="invoice-header">
                <h1>Edit #XM9141</h1>
            </div>
            <div className="invoice-body-wrapper">
        

            </div>
      </div>
    </div>
  );
};

export default InvoiceForm;