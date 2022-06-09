import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";

const ContactForm = () => {
    const { data, setData, post, errors } = useForm({
        fullname: '',
        email: '',
        phone: '',
        message: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("contact.save"));
    }

    return (
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div>
                    <h1 className="mb-8 text-3xl font-bold">
                        <InertiaLink
                            href={route("contacts.index")}
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            Contact
                        </InertiaLink>
                        <span className="font-medium text-indigo-600"> / </span>
                        Create
                    </h1>
                </div>
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">Nom complet</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="Title"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={(e) =>
                                        setData("fullname", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.fullname}
                                </span>
                            </div>

                            <div className="mb-4">
                                <label className="">Email</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.email}
                                </span>
                            </div>

                            <div className="mb-4">
                                <label className="">message</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="message"
                                    name="message"
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.message}
                                </span>
                            </div>

                            <div className="mb-4">
                                <label className="">Phone</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="phone"
                                    name="phone"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.fullname}
                                </span>
                            </div>
                             
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;