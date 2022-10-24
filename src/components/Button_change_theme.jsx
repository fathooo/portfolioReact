import { useState, useEffect } from "react";
import {
    RiSunLine,
    RiMoonLine

  } from "react-icons/ri";


function change_theme(theme) {
  const darkTheme = 'dark-theme'
  let moon_button = document.querySelector('.moon_icon');
  let sun_button = document.querySelector('.sun_icon');
  
  const selectedTheme = theme  
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  
  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  }

  if (selectedTheme === 'dark') {
      moon_button.classList.add('change-theme__icon-active');
      sun_button.classList.remove('change-theme__icon-active');
  }
  
  if (selectedTheme === 'light') {
      sun_button.classList.add('change-theme__icon-active');
      moon_button.classList.remove('change-theme__icon-active');
  }
  
  if (theme) {
      localStorage.setItem('selected-theme', getCurrentTheme())
      if (getCurrentTheme() === 'dark') {
          moon_button.classList.add('change-theme__icon-active');
          sun_button.classList.remove('change-theme__icon-active');
      }
      if (getCurrentTheme() === 'light') {
          sun_button.classList.add('change-theme__icon-active');
          moon_button.classList.remove('change-theme__icon-active');
      }
   
}
}

export function Button_change_theme(){
      const selectedTheme = localStorage.getItem('selected-theme');
      const [theme, setTheme] = useState(selectedTheme);
        
        useEffect(() => {
            if (theme === 'light') {
                setTheme(theme);
                change_theme(theme)
            } 
            if (theme === 'dark') {
                setTheme(theme);
                change_theme(theme)
            }
        }, [theme]);
        
        return (
            <div className="button_toggle_thememode" id="change-theme">
            <i
              className="change-theme__icon moon_icon change-theme-dark"
              onClick={() => setTheme("dark")}
            >
              <RiMoonLine />
            </i>
            <i
              className="change-theme__icon sun_icon change-theme-light"
              onClick={() => setTheme("light")}
            >
              <RiSunLine />
            </i>
          </div>
        )
  
}


