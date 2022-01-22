import * as React from "react";
import Layout from "../components/layout";

let contacts = {
    "E-mail": "karlobpalisoc@gmail.com",
};

let contact = () => {
    return (
        <Layout>
            <div className="text-sm">
                <span className="font-medium">
                    Need web presence for your business or maybe a web
                    portfolio? Feel free to leave a message in my inbox.
                </span>
                <br />
                <br />
                <br />

                {Object.entries(contacts).map(([service, id]) => (
                    <div>
                        {service}: <u>{id}</u>
                        <br />
                        <br />
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default contact;
