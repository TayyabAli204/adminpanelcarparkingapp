import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDistance, setLocation } from "../../store/searchSlice";

const Google_API_Key= import.meta.env.VITE_API_KEY;

function SearchBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    let autocomplete;

    function handleScriptLoad() {
      // Create the search box and link it to the UI element.
      const input = document.getElementById("pac-input");
      input.addEventListener("input", handleInputChange);
      autocomplete = new window.google.maps.places.Autocomplete(input);
      autocomplete.addListener("place_changed", handlePlaceSelect);
    }
    function handleInputChange() {
      // Get the value of the input field
      const inputValue = document.getElementById("pac-input").value;
    
      // Do something with the value
      if(inputValue===''){
        dispatch(setLocation(''))
      }
    }
    function handlePlaceSelect() {
      const place = autocomplete.getPlace();
     
      dispatch(setLocation({ place }));
      // dispatch(setDistance(place.geometry?.location))
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${Google_API_Key}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", handleScriptLoad);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <input
        className="px-2 py-2 w-80"
        id="pac-input"
        type="text"
        placeholder="Enter an location"
      />
    </div>
  );
}

export default SearchBar;
