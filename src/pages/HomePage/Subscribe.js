import React, { Component } from 'react'
import {AiOutlineSend } from "react-icons/ai";
import Button from '@restart/ui/esm/Button'
export class Subscribe extends Component {
        render() {
            function sayHello() {
              alert("You are Join");
            }
        return (
            <>
                <div className="SubImg text-center">
                    <h1 className="subfont"> SUBSCRIBE TO OUR NEWSLETTER </h1>
                    <input type="email" id="fname" name="fname" placeholder="enter your email"/>
                        <br/>
                            <Button onClick={sayHello}
                             className="subbutoon" type="submit" >
                                Join<AiOutlineSend  className="StarSpace" size="1.2em" color="white"/>
                            </Button>
                        
                </div>
            </>
        )
    }
}

export default Subscribe
