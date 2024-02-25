import React from 'react'
import './Banner.css';

export const Banner = () => {
    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1)+'...':string;
    
    }
    return (
    <header className='banner'
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/800px-Black_flag.svg.png")`,
            backgroundPosition:"center center",
        }}>
            <div className="banner_content">
                <h1 className="banner_title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className="banner_description">{truncate(`This is a test descriptionhasfhiuafiacicbsacb asuhfuiac dchbiddc zdsiuafuiaz dbcizcbzc asciabcidac zhcizczd Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nostrum, rerum quaerat, recusandae dolor laboriosam, perferendis tenetur iste modi minima quas earum? Quasi, nihil enim repudiandae animi ipsum consectetur praesentiumb Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit odio, repudiandae quibusdam esse beatae delectus neque officiis omnis facilis eveniet magni enim sapiente praesentium amet eaque illo ad! Est, amet`,250)}</h1>
                
            </div>
            <div className="banner_fadeBottom"></div>
        </header>
  )
}
