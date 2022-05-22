import React from "react";
import { about } from "../../posts";

export default function About() {
  return (
    <div className='col col-left'>
      <h2>{about.title}</h2>
      <p>{about.body}</p>
    </div>
  );
}
