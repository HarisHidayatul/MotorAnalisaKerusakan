import logo from './logo.svg';
import React,{ Component } from "react";
import './App.css';
import { Link } from 'react-router-dom';

function Motormenu() {
  return (
    <div>
      <Link>Home</Link>
      <Link>Motor Specification</Link>
      <Link>Contact</Link>
      <Link>About Us</Link>
    </div>
  );
}

export default Motormenu;
