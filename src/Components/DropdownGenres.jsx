import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropdownGenres = ({onGeneroSeleccionado}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value.text);
    setIsOpen(false);
    onGeneroSeleccionado(value.text);
  };

  return (
    <div className="inline-flex">
      <div className="relative ml-2 mt-1 inline-flex w-96 rounded-md bg-transparent border-b border-purple2 border-opacity-40">
        <div
          className="w-[100%] rounded-l-md px-4 py-2"
        >
          {selectedOption || "Selecciona el género"}
        </div>
        <div className="relative">
          <button
            type="button"
            onClick={toggling}
            className="hover:text-white inline-flex h-full items-center
                justify-center rounded-r-md  border-gray-10 px-2 text-white bg-purple3 bg-opacity-50 hover:bg-purple2 hover:bg-opacity-70"
          >
            <IoIosArrowDown className="font-bold" />
          </button>
        </div>
        {isOpen && (
          <div
            className="absolute top-6 right-0 z-10 mt-4 w-fit min-w-auto origin-top-right rounded-md 
        border border-purple2 bg-black bg-opacity-75 shadow-lg max-h-48 overflow-y-auto"
          >
            {genres.map((option, index) => (
              <div key={index}>
                <button
                  onClick={onOptionClicked(option)}
                  type="button"
                  className="block rounded-md px-4 py-2 text-sm no-underline hover:bg-purple2
                hover:bg-opacity-40 w-[100%]"
                >
                  {option.text}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownGenres;
