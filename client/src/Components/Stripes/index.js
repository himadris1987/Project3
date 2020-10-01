import React, { useContext, useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import axe from "../../Assets/axe.png";
import sword from "../../Assets/sword.png";
import hammer from "../../Assets/hammer.png";
import health from "../../Assets/potion.png";
import light from "../../Assets/lightarmor.png";
import heavy from "../../Assets/heavyarmor.png";

import "react-toastify/dist/ReactToastify.css";
import "./style.css";

toast.configure();

function Stripes() {
    const [Lsword] = React.useState({
        name: "Andonisus, Reaper of Souls",
        price: 25.00,
        description: "This blade is dimensional, it appears to be fading from existence"

    });
    const [Lhammer] = React.useState({
        name: "Val'anyr, Hammer of Ancient Kings",
        price: 25.00,
        description: "The power of creation courses through this weapon"
    });

    const [Laxe] = React.useState({
        name: "Shadowmourne",
        price: 25.00,
        description: "A weapon of pure evil, forged from the blood of the old gods and the souls of the dead"
    });

    const [Llight] = React.useState({
        name: "Achor, the Eternal Hunger",
        price: 50.00,
        description: "Warriors posses a thirst for battle, as endless as the legions of their enemies"
    });

    const [Lheavy] = React.useState({
        name: "Breastplate of the Golden Val'kyr",
        price: 50.00,
        description: "The remnant of a greate commander who descended upon her enemies from the heavens, shining with the radiance of the sun",
    });

    const [elixir] = React.useState({
        name: "Elixir",
        price: 75.00,
        description: "For warriors who want the nectar of the gods to vanquish their enemies"
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
                                <ListGroup.Item className="item-stat" >Attack: 25</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Defense: 10</ListGroup.Item>
                                <ListGroup.Item className="item-stat" > Speed: 5</ListGroup.Item>
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
                        <Card.Img variant="top" class="bounce" src={hammer} />
                    </div>
                    <Card.Body>
                        <Card.Title id="axe" >{Laxe.name} </Card.Title>
                        <Card.Text>
                            {Laxe.description}
                            <ListGroup>
                                <ListGroup.Item className="item-stat" v>Attack: 35</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Defense: 8</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Speed: 3</ListGroup.Item>
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
                                <ListGroup.Item className="item-stat" >Attack: 45</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Defense: 5</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Speed: 2</ListGroup.Item>
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
                        <Card.Img variant="top" class="bounce" src={hammer} />

                    </div>
                    <Card.Body>
                        <Card.Title id="potion">{elixir.name} </Card.Title>
                        <Card.Text>
                            {elixir.description}
                            <ListGroup>
                                <ListGroup.Item className="item-stat" >HP+: 50</ListGroup.Item>
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
                        <Card.Img variant="top" class="bounce" src={hammer} />

                    </div>
                    <Card.Body>
                        <Card.Title id="light">{Llight.name} </Card.Title>
                        <Card.Text>
                            {Llight.description}
                            <ListGroup>
                                <ListGroup.Item className="item-stat" >HP: 80</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Attack: 0</ListGroup.Item>
                                <ListGroup.Item className="item-stat" v>Defense: 20</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Speed: -3</ListGroup.Item>
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
                        <Card.Img variant="top" class="bounce" src={hammer} />
                    </div>
                    <Card.Body>
                        <Card.Title id="heavy">{Lheavy.name} </Card.Title>
                        <Card.Text>
                            {Lheavy.description}
                            <ListGroup>
                                <ListGroup.Item className="item-stat" >HP: 70</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Attack: 0</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Defense: 50</ListGroup.Item>
                                <ListGroup.Item className="item-stat" >Speed: -10</ListGroup.Item>
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