import React, { useContext, useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import axe from "../../Assets/blood_axe.gif";
import sword from "../../Assets/shadow_sword.gif";
import hammer from "../../Assets/ancient_hammer.gif";
import health from "../../Assets/divine_potion.gif";
import light from "../../Assets/armor_of_the_warrior's_hunger.png";
import heavy from "../../Assets/armor_of_the_valkyrie.gif";


import "react-toastify/dist/ReactToastify.css";
import "./style.css";

toast.configure();

function Stripes() {
    const [Lsword] = React.useState({
        name: "Shadow Sword",
        price: 25.00,
        description: "This sword will consume the souls of any slain around it, continually gaining power.",

    });
    const [Lhammer] = React.useState({
        name: "Ancient Hammer",
        price: 25.00,
        description: "This hammer has been known to grant the wielder the power of creation. Some believe the ancients used this to build the great cities of old.",
    });

    const [Laxe] = React.useState({
        name: "Blood Axe",
        price: 25.00,
        description: "It is said that this axe has a thirst for blood that can not be quenched. Any one foolish enough to wield it will be cursed with that same thirst.",
    });

    const [Llight] = React.useState({
        name: "Armor of the Warrior's Hunger",
        price: 50.00,
        description: "This armor grants those who don it an unquenchable and ferocious hunger for battle that few can withstand.",
    });

    const [Lheavy] = React.useState({
        name: "Armor of the Valkyrie",
        price: 50.00,
        description: "This is the armor worn by the great commanders who would wage war in the heavens.",
    });

    const [elixir] = React.useState({
        name: "Divine Potion",
        price: 75.00,
        description: "This vessel holds the tears of the gods, granting those who drink it's unknown power."
    });


    async function handleToken(token, addresses) {
        const response = await axios.post(
            "https://dry-mountain-58151.herokuapp.com/Stripe",
            { token, Lsword, Lhammer, Laxe, Llight, Lheavy, elixir }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    return (

        // div className="container">
        //   <div className="product">
        //     <h1>{sword.name}{sword.description}</h1>
        //     <h3>On Sale · ${sword.price}</h3>
        //   </div>
        //   <StripeCheckout
        //     stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        //     token={handleToken}
        //     amount={product.price * 100}
        //     name="Tesla Roadster"
        //     billingAddress

        //   />

        <div>
            <CardGroup>
                <Card className="item-card">
                    <div className="item-background">
                        <Card.Img variant="top" class="bounce" src={sword} />
                    </div>
                    <Card.Body>
                        <Card.Title id="sword">{Lsword.name}</Card.Title>
                        <Card.Text>
                            {Lsword.description}
                            <ListGroup>
                                <ListGroup.Item className="item-stat" >Attack: 50</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Defense: 20</ListGroup.Item>
                                <ListGroup.Item className="item-stat" > Speed: 10</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >${Lsword.price}</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        <StripeCheckout
                            stripeKey="pk_test_51HVM9oKzUcTIu3IVlMjIWsyRbxA6I8ftbSDzhF2DZrnHGJoIMYADHemLU2dqrV55bAlDAff5NQJ3dXS8waRoZLgq00D1Nr0z1f"
                            token={handleToken}
                            amount={Lsword.price * 100}
                            name="Andonisus, Reaper of Souls"
                            billingAddress
                        />
                    </Card.Body>
                </Card>
                <Card className="item-card">
                    <div className="item-background">
                        <Card.Img variant="top" class="bounce" src={axe} />
                    </div>
                    <Card.Body>
                        <Card.Title id="axe" >{Laxe.name} </Card.Title>
                        <Card.Text>
                            {Laxe.description}
                            <ListGroup>
                                <ListGroup.Item className="item-stat" v>Attack: 70</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Defense: 20</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Speed: 6</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >${Laxe.price}</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        <StripeCheckout
                            stripeKey="pk_test_51HVM9oKzUcTIu3IVlMjIWsyRbxA6I8ftbSDzhF2DZrnHGJoIMYADHemLU2dqrV55bAlDAff5NQJ3dXS8waRoZLgq00D1Nr0z1f"
                            token={handleToken}
                            amount={Laxe.price * 100}
                            name="Shadowmourne"
                            billingAddress
                        />
                    </Card.Body>
                </Card>
                <Card className="item-card">
                    <div className="item-background">
                        <Card.Img variant="top" class="bounce" src={hammer} />
                    </div>
                    <Card.Body>
                        <Card.Title id="hammer">{Lhammer.name} </Card.Title>
                        <Card.Text>
                            {Lhammer.description}
                            <ListGroup>
                                <ListGroup.Item className="item-stat" >Attack: 90</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Defense: 10</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Speed: 5</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >${Lhammer.price}</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        <StripeCheckout
                            stripeKey="pk_test_51HVM9oKzUcTIu3IVlMjIWsyRbxA6I8ftbSDzhF2DZrnHGJoIMYADHemLU2dqrV55bAlDAff5NQJ3dXS8waRoZLgq00D1Nr0z1f"
                            token={handleToken}
                            amount={Lhammer.price * 100}
                            name="Val'anyr, Hammer of Ancient Kings"
                            billingAddress
                        />
                    </Card.Body>
                </Card>
                <Card className="item-card">
                    <div className="item-background">
                        <Card.Img variant="top" class="bounce" src={health} />

                    </div>
                    <Card.Body>
                        <Card.Title id="potion">{elixir.name} </Card.Title>
                        <Card.Text>
                            {elixir.description}
                            <ListGroup>
                                <ListGroup.Item className="item-stat" >HP+: 100</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >${elixir.price}</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        <StripeCheckout
                            stripeKey="pk_test_51HVM9oKzUcTIu3IVlMjIWsyRbxA6I8ftbSDzhF2DZrnHGJoIMYADHemLU2dqrV55bAlDAff5NQJ3dXS8waRoZLgq00D1Nr0z1f"
                            token={handleToken}
                            amount={elixir.price * 100}
                            name="Elixir"
                            billingAddress
                        />
                    </Card.Body>
                </Card>
                <Card className="item-card">
                    <div className="item-background">
                        <Card.Img variant="top" class="bounce" src={light} />

                    </div>
                    <Card.Body>
                        <Card.Title id="light">{Llight.name} </Card.Title>
                        <Card.Text>
                            {Llight.description}
                            <ListGroup>
                                <ListGroup.Item className="item-stat" >HP: 160</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Attack: 0</ListGroup.Item>
                                <ListGroup.Item className="item-stat" v>Defense: 40</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Speed: 0</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >${Llight.price}</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        <StripeCheckout
                            stripeKey="pk_test_51HVM9oKzUcTIu3IVlMjIWsyRbxA6I8ftbSDzhF2DZrnHGJoIMYADHemLU2dqrV55bAlDAff5NQJ3dXS8waRoZLgq00D1Nr0z1f"
                            token={handleToken}
                            amount={Llight.price * 100}
                            name="Achor, the Eternal Hunger"
                            billingAddress
                        />
                    </Card.Body>
                </Card>
                <Card className="item-card">
                    <div className="item-background">
                        <Card.Img variant="top" class="bounce" src={heavy} />
                    </div>
                    <Card.Body>
                        <Card.Title id="heavy">{Lheavy.name} </Card.Title>
                        <Card.Text>
                            {Lheavy.description}
                            <ListGroup>
                                <ListGroup.Item className="item-stat" >HP: 140</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Attack: 0</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Defense: 100</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Speed: -5</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >${Lheavy.price}</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        <StripeCheckout
                            stripeKey="pk_test_51HVM9oKzUcTIu3IVlMjIWsyRbxA6I8ftbSDzhF2DZrnHGJoIMYADHemLU2dqrV55bAlDAff5NQJ3dXS8waRoZLgq00D1Nr0z1f"
                            token={handleToken}
                            amount={Lheavy.price * 100}
                            name="Breastplate of the Golden Val'kyr"
                            billingAddress
                        />
                    </Card.Body>
                </Card>
            </CardGroup>



            {/* <div className="container">
      <div className="product">
        <h1>{sword.name}{sword.description}</h1>
        <h3>On Sale · ${sword.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        
      />
    </div> */}
        </div>
    );
}

export default Stripes;