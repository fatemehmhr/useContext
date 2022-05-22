import React, { useState, useEffect, Fragment } from "react";
import { inspire } from "../../posts";
import "./Inspiration.scss";
import axios from "axios";
import { inspirationItems } from "../../requests/inspiration";

export default function Inspiration() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getInspirationItems(4);
  }, []);

  const getInspirationItems = async (limit) => {
    setLoading(true);
    await inspirationItems(limit)
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='col col-left'>
      {loading && "loading..."}
      {photos.map((item, index) => {
        return (
          <Fragment key={item.id}>
            <img className='inspire-img' src={item.url} />
            <h2>{item.title}</h2>
          </Fragment>
        );
      })}
    </div>
  );
}
