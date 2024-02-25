import React from 'react'
import './Banner.css';

export const Banner = () => {
  return (
    <header className='banner'
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://i.imgur.com/e1hLQ2m.png")`,
            backgroundPosition:"center center",
        }}>
            <div className="banner_content">
                <h1 className="banner_title">Movie Name</h1>
                <div className="banner_button">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <h1 className="banner_description">This is a test description</h1>
                h1
            </div>
        </header>
  )
}
