import React, { useState, useEffect } from "react";
import "./Inspiration.scss";
import Hat from "../../assets/images/avatar_hat.jpg";
import JaneImage from "../../assets/images/jane.jpg";
import Team1Image from "../../assets/images/team1.jpg";
import Team4 from "../../assets/images/team4.jpg";
import { inspire } from "../../posts";
import { inspirationItems } from "../../requests/inspiration";

function Inspiration() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getPhotos(4);
  }, []);

  const getPhotos = async (limit) => {
    setLoading(true);
    await inspirationItems(limit)
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='sidebar-5-img '>
      {loading && "loading..."}
      {photos.map((item, index) => {
        return <img src={item.url} key={item.id} />;
      })}
    </div>
  );
}
export default Inspiration;
