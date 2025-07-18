import React from 'react';
import logo from '../assets/logo.svg';
import searchIcon from '../assets/Search.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate('/SearchPage');
  }
  return (
    <header className=" w-[390px] bg-white flex flex-col items-center select-none">
      {/* Status Bar (고정) */}
      <div className="flex gap-1" />
      {/* Main Header */}
      <div className="relative w-[390px] h-[56px] flex items-center bg-white px-6">
        <img src={logo} alt="Return Zone Logo" className="h-[42px] w-[96px] object-contain" />
        <img onClick={handleSearchClick}
          src={searchIcon}
          alt="검색"
          className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header; 