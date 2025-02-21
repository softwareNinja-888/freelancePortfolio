import { useState } from "react";

export function FormFooter() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    // Function to validate form fields
    const validateForm = () => {
        let newErrors = {};

        if (!firstName.trim()) newErrors.firstName = "First name is required";
        if (!lastName.trim()) newErrors.lastName = "Last name is required";
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email format";
        }
        

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if no errors
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return; // Stop if validation fails

        setIsSubmitting(true);

        const formData = { firstName, lastName, email, phone, message };

        try {
            const response = await fetch("https://formbold.com/s/9E72K", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhone("");
                setMessage("");
                setErrors({});
            } else {
                console.error("Error submitting form");
            }
        } catch (error) {
            console.error("Network error:", error);
        }

        setIsSubmitting(false);
    };

    return (
        <div className="w-10/12 lg:w-[420px] m-auto text-white">
            {isSubmitted ? (
                <p className="text-green-500 font-bold text-center">Thanks for reaching out! I’ll get back to you as soon as possible—usually within a few hours.</p>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* FIRST NAME */}
                    <label htmlFor="firstName" className="block font-inter">
                        First Name *
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        className="w-full px-3 py-2 border border-white rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-0"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}

                    {/* LAST NAME */}
                    <label htmlFor="lastName" className="block font-inter">
                        Last Name *
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        className="w-full px-3 py-2 border border-white rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-0"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}

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
                        className="w-full px-3 py-2 border border-white rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-0"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    {/* PHONE */}
                    <label htmlFor="phoneFoot" className="block font-inter">
                        Enter your phone number
                    </label>
                    <input
                        type="text"
                        id="phoneFoot"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+ (code) 7856 6745"
                        className="w-full px-3 py-2 border border-white rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-0"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                    {/* MESSAGE */}
                    <label htmlFor="message" className="block font-inter">
                        Write your message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message..."
                        className="w-full px-3 py-2 border h-24 resize-none border-white rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-0"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                    {/* SUBMIT BUTTON */}
                    <button
                        type="submit"
                        className="w-full mt-3 bg-primary text-secondary py-2 font-lora cursor-pointer flex justify-center items-center gap-2"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 text-secondary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                                    ></path>
                                </svg>
                                Submitting...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}
