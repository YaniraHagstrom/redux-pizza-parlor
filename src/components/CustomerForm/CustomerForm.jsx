import './CustomerForm.css';

export default function CustomerForm(){
    return (
        <form action="">
            <input 
                type="text"
                // value={}
                // onChange={}
                placeholder="Name"
            />
            <input 
                type="text"
                // value={}
                // onChange={}
                placeholder="Name"
            />
            <input 
                type="text"
                // value={}
                // onChange={}
                placeholder="Name"
            />
            <input 
                type="text"
                // value={}
                // onChange={}
                placeholder="Name"
            />
            <label class="container">Pickup
                <input type="radio" checked="checked" name="radio"/>
                <span class="checkmark"></span>
            </label>
            <label class="container">Delivery
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
            </label>
        </form>
    )
}