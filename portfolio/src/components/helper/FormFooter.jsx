import { useState } from "react";

export function FormFooter(){
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubscribed(true)
      console.log("Email:", email);
      console.log("Subscribed:", subscribed);
    };
  
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-10/12 lg:w-[420px] m-auto  text-white">

            {/* FIRST NAME  */}

            <label htmlFor="firstName" className="block font-inter">
                First Name *
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              placeholder="First Name"
              className="w-full px-3 py-2 border border-white rounded focus:outline-none focus:ring-2 focus:ring-primary  focus:border-0"
              required
            /> 

            {/* LAST NAME  */}

            <label htmlFor="lastName" className="block font-inter">
                Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              placeholder="Last Name"
              className="w-full px-3 py-2 border border-white rounded focus:outline-none focus:ring-2 focus:ring-primary  focus:border-0"
              required
            />

            {/* EMAIL */}

            <label htmlFor="emailFoot" className="block font-inter">
              Enter your email *
            </label>
            <input
              type="email"
              id="emailFoot"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-3 py-2 border border-white rounded focus:outline-none focus:ring-2 focus:ring-primary  focus:border-0"
              required
            />

            {/* MESSAGE US  */}

            <label htmlFor="message" className="block font-inter">
                Write your message 
            </label> 
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message..." className="w-full px-3 py-2 border h-24 resize-none  border-white rounded focus:outline-none focus:ring-2 focus:ring-primary  focus:border-0" >  
            </textarea>

            {/* SUBMIT FORM */}

            <button
              type="submit"
              className="w-full mt-3 bg-primary text-secondary py-2 font-lora cursor-pointer"
            >
             Submit
            </button>
        </form>
    );
}

