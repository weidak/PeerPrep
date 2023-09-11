import { Input, Button, Link } from "@nextui-org/react";
import { useState } from "react";

interface ChangePasswordProps {
    setIsChangePassword: (isChangePassword: boolean) => void;
}

export default function ChangePassword({setIsChangePassword}: ChangePasswordProps) {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    return (
        <>
            <form className="justify-center max-w-xl space-y-4">
                <Input 
                    variant="bordered"
                    type="password"
                    label="Old password" 
                    onInput={(e) => {
                        setOldPassword(e.currentTarget.value);
                    }}
                />
                <Input 
                    variant="bordered"
                    type="password"
                    label="New password" 
                    onInput={(e) => {
                        setNewPassword(e.currentTarget.value);
                    }}
                />
                <Input 
                    variant="bordered"
                    type="password"
                    label="Re-enter new password" 
                    onInput={(e) => {
                        setConfirmNewPassword(e.currentTarget.value);
                    }}
                />
                { (newPassword != confirmNewPassword) ? (<div className="text-center text-xs underline font-bold decoration-red-500">Passwords do not match</div>) : (<> </>)}
                { (oldPassword == newPassword) && (oldPassword != "") ? (<div className="text-center text-xs underline font-bold decoration-red-500">Old and new passwords cannot be the same</div>) : (<> </>)}
                <div className="flex flex-row justify-between">
                    <Button type="submit" color="secondary">
                        Confirm
                    </Button>
                    <Link className="cursor-pointer" onClick={() => {setIsChangePassword(false)}}>Edit information</Link>
                </div>
            </form>
        </>
    )
}