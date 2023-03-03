import React from "react";
import "./form.css";

const Form = () => {
    return (
        <section>
                <h2>Contact us</h2>
                <form action="traitement.php" method="post">
                    <input type="text" name="firstname" id="firstname" placeholder="Firstname"required></input>
                    <input type="text" name="lastname" id="lastname" placeholder="Lastname"required></input>
                    <input type="email" name="email" id="email" placeholder="Email adress"required></input>
                    <input type="phone" name="phone" id="phone" placeholder="Phone number"required></input>
                    <textarea placeholder="Type your message..."></textarea>
                    <button type="submit" value="Submit">Submit</button>
                </form>
        </section>
    )
}

export default Form;