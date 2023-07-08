import { useEffect, useState } from "react";
import { genres } from "./GenresData";
import GroupCardsSong from "../cards-music/GroupCardsSong";
import { apiUrl } from "../../api/apiurl";
import axios from "axios";

const GenresCards = ({ email }) => {

  const [showSelectedGenre, setShowSelectedGenre] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genero, setGenero] = useState('')

  const handleClick = (index) => {
    setShowSelectedGenre(true);
    setSelectedGenre((prevSelectedGenre) => {
      if (prevSelectedGenre === null) {
        return [genres[index]];
      } else {
        return [...prevSelectedGenre, genres[index]];
      }
    });
    filtrarGenero(genres[index]);
  };
  
  
  const sendEmail = email

  console.log(email);

    const filtrarGenero = (genero) => {

      if (genero === null) {
        // No hay género seleccionado, puedes manejar esta situación como desees
        return (setGenero('Clasica'));
      }

      axios.defaults.headers.post['Content-Type'] = 'application/json';

      const body = { gender : genero.text}

      let url = apiUrl + 'songs/searchGender';
      axios.get(url, { data : body }, { params : { user : sendEmail }, headers : { 'Content-Type' : 'application/json' }})
      .then(function (response) {
          console.log(response.data);
      })
      .catch(function (error) {
          console.log(error, 'error');
      });
  };

  return (
    <>
    {selectedGenre ? (
      <GroupCardsSong
      genre={selectedGenre}
      onGoBack={() => {
        setShowSelectedGenre(false);
        setSelectedGenre(null);
      }}
      fromGenresCards={true} 
    />
    ) : (
    <div className="grid grid-cols-2 gap-4">
      {genres.map((option, index) => (
        <div key={index}>
          <a
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:h-32 md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-purple dark:bg-opacity-60 dark:hover:bg-purple dark:hover:bg-opacity-30 cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-32 md:w-32 md:rounded-none md:rounded-l-lg"
              src={option.img}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ml-3">
                {option.text}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ml-3">
                Género Musical
              </p>
            </div>
          </a>
        </div>
      ))}
      </div>
    )}
    </>
  );
};

export default GenresCards;