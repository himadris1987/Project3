import React, { useContext, useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import axe from "../../Assets/axe.png";
import sword from "../../Assets/sword.png";
import hammer from "../../Assets/hammer.png";
import health from "../../Assets/potion.png";
import light from "../../Assets/lightarmor.png";
import heavy from "../../Assets/heavyarmor.png";
import DeveloperContext from "../../Utils/DeveloperContext";
import API from "../../Utils/API";
import "./style.css";

import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

//const Bounce = styled.div`animation: 2s hVlBnv infinite`;
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
let BounceStyle = {animation: `2s hVlBnv infinite`};
let bounceAnimation = `2s ${keyframes`${bounce}`} infinite`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

//let BounceStyle = {animation: `2s ${keyframes`${bounce}`} infinite`};
// let CardImageStyle = {};



function Stores() {
  const { buyPotion, gilcontext, hpcontext, attackcontext, defensecontext, speedcontext, potioncontext } = useContext(DeveloperContext)
  console.log(gilcontext);
  const [buttonAEnabled, setButtonAEnabled] = useState(true);
  const [buttonBEnabled, setButtonBEnabled] = useState(true);
  const [buttonCEnabled, setButtonCEnabled] = useState(true);
  const [buttonDEnabled, setButtonDEnabled] = useState(true);
  const [buttonEEnabled, setButtonEEnabled] = useState(true);
  const [buttonFEnabled, setButtonFEnabled] = useState(true);
  const [potionButton, setPotionButton] = useState(false);
  const [potion, setPotion] = useState(0);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [hp, setHp] = useState(0);
  const [gil, setGil] = useState(0);

  let numAttack = attack;
  let numDefense = defense;
  let numSpeed = speed;
  let numHp = hp;
  let numGil = gil;

  const handleButtonAPressed = () => {
    setButtonAEnabled(false);
    setButtonBEnabled(false);
    setButtonCEnabled(false);
    console.log(attack, defense, speed, gil);
    numAttack = numAttack + 25;
    numDefense = numDefense + 10;
    numSpeed = numSpeed + 5;
    numGil = gilcontext - 5;
    setAttack(numAttack);
    setDefense(numDefense);
    setSpeed(numSpeed);
    setGil(numGil);
    buyPotion("attackcontext", numAttack);
    buyPotion("defensecontext", numDefense);
    buyPotion("speedcontext", numSpeed);
    buyPotion("gilcontext", numGil);
    const swordstat = { attack: numAttack, defense: numDefense, gil: numGil };
    API.saveStat(swordstat);
  }


  const handleButtonBPressed = () => {
    setButtonAEnabled(false);
    setButtonBEnabled(false);
    setButtonCEnabled(false);
    console.log(attack, defense, speed, gil);
    numAttack = numAttack + 35;
    numDefense = numDefense + 8;
    numSpeed = numSpeed + 3;
    numGil = gilcontext - 5;
    setAttack(numAttack);
    setDefense(numDefense);
    setSpeed(numSpeed);
    setGil(numGil);
    buyPotion("attackcontext", numAttack);
    buyPotion("defensecontext", numDefense);
    buyPotion("speedcontext", numSpeed);
    buyPotion("gilcontext", numGil);
    const axestat = { attack: numAttack, defense: numDefense, gil: numGil };
    API.saveStat(axestat);
  }
  const handleButtonCPressed = () => {
    setButtonAEnabled(false);
    setButtonBEnabled(false);
    setButtonCEnabled(false);
    console.log(attack, defense, speed, gil);
    numAttack = numAttack + 45;
    numDefense = numDefense + 5;
    numSpeed = numSpeed + 2;
    numGil = gilcontext - 5;
    setAttack(numAttack);
    setDefense(numDefense);
    setSpeed(numSpeed);
    setGil(numGil);
    buyPotion("attackcontext", numAttack);
    buyPotion("defensecontext", numDefense);
    buyPotion("speedcontext", numSpeed);
    buyPotion("gilcontext", numGil);
    const macestat = { attack: numAttack, defense: numDefense, gil: numGil };
    API.saveStat(macestat);
  }
  const handleButtonDPressed = () => {
    console.log(potion)
    let numPotions = potion;
    numPotions = numPotions + 1;
    numGil = gilcontext - 50;
    if (numPotions === 5) {
      setPotionButton(true)
    }
    setPotion(numPotions);
    setButtonDEnabled(false);
    buyPotion("potioncontext", numPotions);
    buyPotion("gilcontext", numGil);
    const potionstat = { gil: numGil };
    const potionitem = { potion: numPotions };
    API.saveStat(potionstat);
    API.saveItem(potionitem);

  }
  const handleButtonEPressed = () => {
    setButtonEEnabled(false);
    setButtonFEnabled(false);
    console.log(hp, attack, defense, speed, gil);
    numHp = numHp + 50;
    numAttack = numAttack + 0;
    numDefense = numDefense + 20;
    numSpeed = numSpeed - 3;
    numGil = gilcontext - 150;
    setHp(numHp)
    setAttack(numAttack);
    setDefense(numDefense);
    setSpeed(numSpeed);
    setGil(numGil);
    buyPotion("hpcontext", numHp);
    buyPotion("attackcontext", numAttack);
    buyPotion("defensecontext", numDefense);
    buyPotion("speedcontext", numSpeed);
    buyPotion("gilcontext", numGil);
    const lightstat = { hp: numHp, attack: numAttack, defense: numDefense, gil: numGil };
    API.saveStat(lightstat);
  }
  const handleButtonFPressed = () => {
    setButtonEEnabled(false);
    setButtonFEnabled(false);
    console.log(hp, attack, defense, speed, gil);
    numHp = numHp + 35;
    numAttack = numAttack + 0;
    numDefense = numDefense + 50;
    numSpeed = numSpeed - 10;
    numGil = gilcontext - 200;
    setHp(numHp)
    setAttack(numAttack);
    setDefense(numDefense);
    setSpeed(numSpeed);
    setGil(numGil);
    buyPotion("hpcontext", numHp);
    buyPotion("attackcontext", numAttack);
    buyPotion("defensecontext", numDefense);
    buyPotion("speedcontext", numSpeed);
    buyPotion("gilcontext", numGil);
<<<<<<< HEAD
    const heavystat = { hp: numHp, attack: numAttack, defense: numDefense, gil: numGil };
    API.saveStat(heavystat);
=======
    const heavystat = { hp: numHp, attack: numAttack, defense: numDefense, gil: numGil, potion: potion };
    API.saveStat(heavystat).then(res => { console.log(res.data) });
>>>>>>> 72bf78fa22550ce38aef8f5fbcb5eae3b528ebf3

  }

  return (



    <div>
      <Jumbotron>
        <h1>Welcome to the Shop</h1>
        <p>
          Please purchase what type of weapon, armor and potions you need for battle.
          Whatever you choose, your defeat is inevitible! When you have purchased
          everything you need, please click below to proceed to your first fight!.
        </p>
        <p>
          <Button

            href="/stage1">Continue Adventure</Button>
        </p>
        <p>Gil: {gilcontext} </p>
      </Jumbotron>
      <CardGroup>
        <Card>
<<<<<<< HEAD
          <div style="bounceAnimation">
            <Card.Img onMouseEnter={()=>console.log("mouseEnter")} variant="top" src={sword} />
            </div>
          <Card.Body>

            <Card.Title id="sword">Sword </Card.Title>

=======
          <Card.Img variant="top" src={sword} />
          <Card.Body>
            <Card.Title id="sword">Sword </Card.Title>
>>>>>>> 72bf78fa22550ce38aef8f5fbcb5eae3b528ebf3
            <Card.Text>
              <ListGroup>
                <ListGroup.Item>Attack: 25</ListGroup.Item>
                <ListGroup.Item>Defense: 10</ListGroup.Item>
                <ListGroup.Item>Speed: 5</ListGroup.Item>
                <ListGroup.Item>Gil: 30</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              disabled={!buttonAEnabled}
              onClick={handleButtonAPressed}
              id="buy" variant="primary">Buy</Button>{' '}
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={axe} />
          <Card.Body>
            <Card.Title id="axe" >Axe </Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item>Attack: 35</ListGroup.Item>
                <ListGroup.Item>Defense: 8</ListGroup.Item>
                <ListGroup.Item>Speed: 3</ListGroup.Item>
                <ListGroup.Item>Gil: 50</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              disabled={!buttonBEnabled}
              onClick={handleButtonBPressed}
              id="buy" variant="primary">Buy</Button>{' '}
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={hammer} />
          <Card.Body>
            <Card.Title id="hammer">Mace </Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item>Attack: 45</ListGroup.Item>
                <ListGroup.Item>Defense: 5</ListGroup.Item>
                <ListGroup.Item>Speed: 2</ListGroup.Item>
                <ListGroup.Item>Gil: 75</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              disabled={!buttonCEnabled}
              onClick={handleButtonCPressed}
              id="buy" variant="primary">Buy</Button>{' '}</Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={health} />
          <Card.Body>
            <Card.Title id="potion">Potion </Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item>HP+: 50</ListGroup.Item>
                <ListGroup.Item>Gil: 50</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button button id="potionButton"
              disabled={potionButton}
              onClick={handleButtonDPressed}
              id="buy" variant="primary">Buy</Button>{' '}</Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={light} />
          <Card.Body>
            <Card.Title id="light">Light Armor </Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item>HP: 50</ListGroup.Item>
                <ListGroup.Item>Attack: 0</ListGroup.Item>
                <ListGroup.Item>Defense: 20</ListGroup.Item>
                <ListGroup.Item>Speed: -3</ListGroup.Item>
                <ListGroup.Item>Gil: 150</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              disabled={!buttonEEnabled}
              onClick={handleButtonEPressed}
              id="buy" variant="primary">Buy</Button>{' '}</Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={heavy} />
          <Card.Body>
            <Card.Title id="heavy">Heavy Armor </Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item>HP: 35</ListGroup.Item>
                <ListGroup.Item>Attack: 0</ListGroup.Item>
                <ListGroup.Item>Defense: 50</ListGroup.Item>
                <ListGroup.Item>Speed: -10</ListGroup.Item>
                <ListGroup.Item>Gil: 200</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              disabled={!buttonFEnabled}
              onClick={handleButtonFPressed}
              id="buy" variant="primary">Buy</Button>{' '}</Card.Footer>
        </Card>
      </CardGroup>
    </div>

  );


}


export default Stores;