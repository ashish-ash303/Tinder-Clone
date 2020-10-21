import React from 'react'
import "./SwipeButton.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButton() {
    return (
        <div className="swipebutton">
            <IconButton className="swipebutton__repeat">
            <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipebutton__left">
            <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipebutton__star">
            <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipebutton__right">
            <FavouriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipebutton__lighting">
            <FlashOnIcon fontSize="large"/>
            </IconButton>
          
           
            
           
           
           




            
        </div>
    )
}

export default SwipeButton
