import React from "react"
import "./css/Main.css"
import { useSelector, useDispatch } from 'react-redux'
import { changeTopText, changeBottomText, changeMemeImage } from './memeSlice'

export default function Main() {

    const meme = useSelector((state) => state.meme)

    const dispatch = useDispatch()

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        dispatch(changeMemeImage(url))
    }

    function handleTopTextChange(event) {
        dispatch(changeTopText(event.target.value))
    }

    function handleBottomTextChange(event) {
        dispatch(changeBottomText(event.target.value))
    }

    return (
        <div>
            <div className="memeInputsBox">
                <input type="textbox"
                    className="topText"
                    placeholder="top text..."
                    onChange={handleTopTextChange}
                    name="topText"
                    value={meme.topText}
                />
                <input type="textbox"
                    className="bottomText"
                    placeholder="bottom text..."
                    onChange={handleBottomTextChange}
                    name="bottomText"
                    value={meme.bottomText}
                    
                />
            </div>
            <div className="memeButtonBox">
                <button className="getNewImgButton" onClick={getMemeImage}>
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src={meme.image} className="meme_image" />
                <h2 className="meme_topText">{meme.topText}</h2>
                <h2 className="meme_bottomText">{meme.bottomText}</h2>
            </div>
        </div>
    )
}