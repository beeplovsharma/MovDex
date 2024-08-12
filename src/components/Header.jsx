import React, { useEffect, useState } from "react";
import ContentWrapper from "./ContentWrapper";
import { NavLink, useNavigate,useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [lastScrollY, setLastScrollY] = useState('')
  const [showNavBar, setShowNavBar] = useState(true)

  const queryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setIsSearch(false);
    }
  };

  const controlNavbar = () => {
    if(window.scrollY > 200){
      if(window.scrollY>lastScrollY){
        setShowNavBar(false);
      }
      else{
        setShowNavBar(true);
      }
    }
    else{
      setShowNavBar(true);
    }
    setLastScrollY(window.scrollY)
    // console.log(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    window.scrollTo(0,'smooth');
  }, [location])
  
  
  return (
    <>
      <div
        className={`text-[white] z-[99] backdrop-blur-sm bg-[rgba(0,0,0,0.25)] fixed ${
          showNavBar ? "-translate-y-[0]" : "-translate-y-[100%]"
        } duration-300 top-0 left-0 w-full`}
      >
        <ContentWrapper>
          <div className="p-3 flex justify-between">
            <h1 className="">(LOGO)</h1>
            <div className="flex items-center gap-6 font-semibold">
              <NavLink to="/explore/movie">
                <p className="hidden md:block hover:text-orange duration-300">
                  Movies
                </p>
              </NavLink>

              <NavLink to="/explore/tv">
                <p className="hidden md:block hover:text-orange duration-300">
                  TV Shows
                </p>
              </NavLink>

              {isOpen ? (
                <RxCross2
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden"
                />
              ) : (
                <RxHamburgerMenu
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden"
                />
              )}
              <IoMdSearch
                onClick={() => setIsSearch(!isSearch)}
                className="hover:text-orange duration-300"
              />
            </div>
          </div>

          <div
            className={`flex flex-col items-center gap-2 ${
              isOpen ? "translate-y-[0]" : "translate-y-[-200px]"
            } ${isOpen ? "h-[80px]" : "h-[0]"}  duration-300`}
          >
            <NavLink to="/explore/movie">Movies</NavLink>
            <NavLink to="/explore/tv">TV Shows</NavLink>
          </div>
        </ContentWrapper>

        {isSearch && (
          <div className={`mt-4 mb-4 w-full`}>
            <ContentWrapper>
              <div className="search-box relative gap-2">
                <input
                  type="text"
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={queryHandler}
                  placeholder="Search a movie or tv show..."
                  className="w-full px-6 py-2 rounded-full outline-orange text-black"
                />
                <RxCross2
                  color="black"
                  onClick={() => setIsSearch(false)}
                  className="absolute top-1/2 right-4 -translate-y-[50%] opacity-70"
                />
              </div>
            </ContentWrapper>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
