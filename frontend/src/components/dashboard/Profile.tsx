"use client"
import React, { useState } from "react";
import {
    Card,
    CardHeader,
    Spacer,
    Button,
    CardBody,
    Image
} from "@nextui-org/react";

export default function Profile() {

    const user = {
        name: "John Doe",
        email: "johndoe@gmail.com",
        
    }

    // type User = {
    //     id: str,
    //     image?: str,
    //     name: str,
    //     email: str,
    //     password: str, 
    //     role: Role, // (admin, user)
    //     status: Status, // (active, inactive)
    //     createdOn: Date;
    // }

    return (
        <>
            <Card className="items-center justify-center w-96">
                <CardHeader className="">
                    <div className="flex flex-row">
                        <Image className="shadow-lg border rounded-3xl w-1/3" src="https://www.svgrepo.com/show/527961/user.svg"/>

                    </div>
                </CardHeader>
                <CardBody>

                </CardBody>
            </Card>
        </>
    )
}