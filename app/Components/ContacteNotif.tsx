function ContacteNotif() {
  return (
    // <div
    //   id="toast-simple"
    //   className="flex items-center w-full p-4 space-x-4 rtl:space-x-reverse text-white divide-x rtl:divide-x-reverse divide-gray-200  shadow-sm  bg-gray-800"
    //   role="alert"
    // >
    <div
      id="toast-simple"
      className="flex items-center w-full p-4 space-x-4 rtl:space-x-reverse text-white divide-x rtl:divide-x-reverse divide-gray-200 shadow-gray-700 rounded-b-lg  shadow-lg  bg-[#260C56]"
      role="alert"
    >
      <svg
        className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
        />
      </svg>
      <div className="flex flex-2 justify-evenly  ps-4 text-sm font-normal hover:text-amber-600">
        <p>sutha.eatham@gmail.com</p>
        <p>14.00 bis 20.00 Uhr </p>
      </div>
    </div>
  );
}

export default ContacteNotif;
