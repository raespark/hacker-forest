import React from 'react';

import { Link } from 'react-router-dom';

import './LifeHacks.scss';

const LifeHacks = (props) => {
  return <div className="life-hacks content">
    <div className="header">
      <h1>LIFE HACKS!</h1>
    </div>
    <div className="body">

      <div className="hack">
        <h2 className="hack-title">{'Light bulb! Try using a screwdriver when a light goes out.'}</h2>
        <hr/>
        <div className="hack-image-container">
          <img className="hack-image" src="ScrewBulbs.png" alt="two light bulbs and a screw driver"/>
        </div>
        <hr/>
        <p className="hack-text">
          {'Did you know it\'s so much easier to remove light bulb with a screwdriver? ' + 
          'Some have said they were underwhelmed with the results but we could not believe watt happened! 💡'}
        </p>
        <div className="read-more">
          <Link className="read-more-link" to="/lifehacks/read-more">{'Read more...'}</Link>
        </div>
      </div>

      <div className="hack">
        <h2 className="hack-title">{'Hang on! Gonna go stir up some trouble!'}</h2>
        <hr/>
        <div className="hack-image-container">
          <img className="hack-image" src="Hangers.png" alt="two hangers"/>
        </div>
        <hr/>
        <p className="hack-text">
          {'Lost your nice soup ladle or favorite stirring spoon? Hang in there friend cause we got a solution for you! ' + 
          'Did you know that coat hangers are twice as effective at stirring your foods as a normal spoon? Who would’ve thought! 🥄'}
        </p>
        <div className="read-more">
          <Link className="read-more-link" to="/lifehacks/read-more">{'Read more...'}</Link>
        </div>
      </div>

      <div className="hack">
        <h2 className="hack-title">{'These gloves will knock your socks off!'}</h2>
        <hr/>
        <div className="hack-image-container">
          <img className="hack-image" src="socks.png" alt="two socks and a fly"/>
        </div>
        <hr/>
        <p className="hack-text">
          {'Have some old socks and winter chill is coming on? Cut em up! They’ll keep you just as warm as any glove,' + 
          ' and keep you looking just as fly as those flies their smell was attracting. Pee-yew! 🧦'}
        </p>
        <div className="read-more">
          <Link className="read-more-link" to="/lifehacks/read-more">{'Read more...'}</Link>
        </div>
      </div>

      <div className="hack">
        <h2 className="hack-title">{'Forgot your sunglasses for your beach trip? We got ya covered!'}</h2>
        <hr/>
        <div className="hack-image-container">
          <img className="hack-image" src="sunglasses.png" alt="sunglasses on the sand"/>
        </div>
        <hr/>
        <p className="hack-text">
          {'Headed for a trip to the beach but forgot your sunglasses and don’t want to have your eyes hurt from the harmful rays? ' + 
          'Sunscreen is here to save the day! Sunscreen is made to block those nasty sunbeams so your eyes can rest easy! 🕶️'}
        </p>
        <div className="read-more">
          <Link className="read-more-link" to="/lifehacks/read-more">{'Read more...'}</Link>
        </div>
      </div>

      <div className="hack">
        <h2 className="hack-title">{'Spoooky, The internet is filled with ghosts!'}</h2>
        <hr/>
        <div className="hack-image-container">
          <img className="hack-image" src="ghost.png" alt="a ghost coming out of a globe"/>
        </div>
        <hr/>
        <p className="hack-text">
          {'The internet is haunted! There’s text and images that can only be seen when using your cursor to highlight them, ' + 
          'otherwise they’re completely invisible! Who knows what deep secrets and nasty skeletons could be hiding in the internets closet? 🔎'}
        </p>
        <div className="read-more">
          <Link className="read-more-link" to="/lifehacks/read-more">{'Read more...'}</Link>
        </div>
      </div>

      <div className="hack">
        <h2 className="hack-title">{'Dress for success! '}</h2>
        <hr/>
        <div className="hack-image-container">
          <img className="hack-image" src="toiletpaper.png" alt="toilet paper"/>
        </div>
        <hr/>
        <p className="hack-text">
          {'Ran out of toilet paper and don’t know what to do? A shirt works just as well! They’re soft, 2 ply, strong, and absorbent! ' + 
          'No more needing to call for help from your roommate, your clothes got ya covered! 👕'}
        </p>
        <div className="read-more">
          <Link className="read-more-link" to="/lifehacks/read-more">{'Read more...'}</Link>
        </div>
      </div>

    </div>
  </div>
}

export default LifeHacks;