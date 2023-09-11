"use client";
import { Card, CardHeader, CardBody, Input, Button, Divider, Spacer } from "@nextui-org/react";
import React, { useState } from "react";

export default function VerifyComponent() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="items-center justify-center w-96 mx-auto pt-10 pb-10">
                <CardHeader className="justify-center font-bold">Verify your email address</CardHeader>
                <CardBody className="flex flex-col space-y-10">
                    <Divider/>
                    <Spacer y={5}/>
                    <p>An OTP has been sent out to your email address. Please enter it below:</p>
                    <form className="flex flex-col space-y-10">  
                        <Input placeholder="OTP"/>
                        <Button color="secondary">
                            Verify
                        </Button>
                    </form>  
                </CardBody>
            </Card>
        </div>
    )
}