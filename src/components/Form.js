import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
    name: yup.string().required("You must provide a name.").min(2,"Your name is too short.")
})

export default function Form(){
    const {register, handleSubmit, errors} =useForm({validationSchema: schema})
    const onSubmit = data => {console.log(data)}
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="Customer Name">Customer Name:</label>
                <input id="name" type="text" name="name" ref={register}/>
                {errors.name && <p className="error">{errors.name.message}</p>}
                <br/>
            <label htmlFor="Pizza Size">Size:</label>
                <select id="size" name="size" ref={register}>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>XLarge</option>
                </select>
                <br/>
            <label htmlFor="Toppings Checklist">Toppings:</label><br/>
                <input id="pepperoni" type="checkbox" name="pepperoni" ref={register}/>
                <label htmlFor="pepperoni">pepperoni</label><br/>
                <input id="sausage" type="checkbox" name="sausage" ref={register}/>
                <label htmlFor="sausage">sausage</label><br/>
                <input id="bacon" type="checkbox" name="bacon" ref={register}/>
                <label htmlFor="bacon">bacon</label><br/>
                <input id="olives" type="checkbox" name="olives" ref={register}/>
                <label htmlFor="olives">olives</label><br/>
                <input id="pineapple" type="checkbox" name="pineapple" ref={register}/>
                <label htmlFor="pineapple">pineapple</label><br/>
                <input id="ham" type="checkbox" name="ham" ref={register}/>
                <label htmlFor="ham">ham</label><br/>
            <label htmlFor="Sauce">Sauce</label><br/>
                <input id="original" type="radio" name="sauce" value="original" ref={register}/>
                <label htmlFor="original">original</label><br/>
                <input id="barbeque" type="radio" name="sauce" value="barbeque" ref={register}/>
                <label htmlFor="barbeque">barbeque</label><br/>
                <input id="ranch" type="radio" name="sauce" value="ranch" ref={register}/>
                <label htmlFor="garlic ranch">garlic ranch</label><br/>
                <input id="alfredo" type="radio" name="sauce" value="alfredo" ref={register}/>
                <label htmlFor="spinach alfredo">spinach alfredo</label><br/>
            <label htmlFor="Instructions">Special Instructions:</label><br/>
                <textarea id="instructions" name="instructions" placeholder="Special Instructions"  ref={register}/><br/>
            <input type="submit"/>
        </form>
    )
}