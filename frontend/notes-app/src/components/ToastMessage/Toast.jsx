import React, { useEffect } from "react";
import { MdCheck, MdDelete } from "react-icons/md";

const Toast = ({ isShown, message, type, onClose }) => {
  useEffect(() => {
    let timeoutId;
    if (isShown) {
      timeoutId = setTimeout(() => {
        onClose();
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isShown, onClose]);

  return (
    <div
      className={`fixed top-16 right-10 transition-all duration-150 ${
        isShown ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`p-2 rounded-md ${
          type === "delete" ? "bg-red-500" : "bg-green-500"
        }`}
      >
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              type === "delete" ? "bg-red-200" : "bg-green-200"
            }`}
          >
            {type === "delete" ? (
              <MdDelete className="text-lg text-red-700" />
            ) : (
              <MdCheck className="text-lg text-green-700" />
            )}
          </div>

          <p
            className={`text-sm ${
              type === "delete" ? "text-red-100" : "text-green-100"
            }`}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
