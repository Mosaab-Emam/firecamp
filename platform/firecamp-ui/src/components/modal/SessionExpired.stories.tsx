import { useState } from "react";
import { VscGithub } from "@react-icons/all-files/vsc/VscGithub";
import { VscLock } from "@react-icons/all-files/vsc/VscLock";
import { VscAccount } from "@react-icons/all-files/vsc/VscAccount";
import { GrGoogle } from "@react-icons/all-files/gr/GrGoogle";

import { default as Modal } from './Modal';
import { default as Button } from '../buttons/Button';
import { default as FormField } from '../form/FormField';
import { default as Input } from '../input/Input';


export default {
    title: "UI-Kit/Modal",
    component: Modal,
    argTypes: {
        className: ""
    }
};

const Template = (args: any) => {
    let [isOpen, toggleOpen] = useState(true);

return <div className="bg-app-background h-screen w-screen block">
    <Button text="Open Modal"  onClick={() => toggleOpen(true)}/>
    <Modal {...args} isOpen={isOpen} onClose={() => toggleOpen(false)}>
        <Modal.Header >
            {args?.header() || ''}
        </Modal.Header>
        <Modal.Body >
            {args?.body() || ''}
        </Modal.Body>
        <Modal.Footer >
            {args?.footer() || ''}
        </Modal.Footer>
    </Modal>
</div>};

export const SessionExpireDemo = Template.bind({});
SessionExpireDemo.args = {
    className: 'test',
    header: () => <SignUpHeader />,
    body: () => <SignUpBody />,
    footer: () => <SignUpFooter />
};

const SignUpHeader = () => {
    return (
        <div className="text-error text-lg text-center mb-6">Session expired</div>
    )
}
const SignUpBody = () => {
    return (
        <div>
            <div className="" >
                <div className="text-center w-full text-sm mb-5">Sign in again to continue</div>
                <FormField label="Username or E-mail" >
                    <VscAccount title="Account" size={16} />
                    <Input value="dnishchit@gmail.com" />
                </FormField>
                <FormField label="password" >
                    <Input placeholder='password' iconPosition='left' icon={<VscLock title="Account" size={16} />} />
                </FormField>
                <a className="cursor-pointer text-app-foreground block pb-6 text-right text-sm">Forgot Password?</a>
                <Button primary={true} text="sign in" fullWidth={true} md={true} />
            </div>
            <hr className="border-modalBorder -ml-8 -mr-8 mb-6 mt-6" />
            <div className="">

                <a href="#" className="text-app-foreground flex items-center justify-center bg-focusColor !border-app-border border p-1.5 hover:bg-inputFocusBackground hover:border-transparent hover:text-modalActiveForeground mb-6"> <VscGithub size={20} className="mr-2" /> continue with <span className="text-modalActiveForeground ml-2">github</span></a>
                <a href="#" className="text-app-foreground flex items-center justify-center bg-focusColor !border-app-border border p-1.5 hover:bg-inputFocusBackground hover:border-transparent hover:text-modalActiveForeground mb-6"> <GrGoogle size={20} className="mr-2" /> continue with <span className="text-modalActiveForeground ml-2">google</span></a>

            </div>
        </div>
    )
}
const SignUpFooter = () => {
    return (
        <div className="text-sm mt-6">
            <div className="text-center">SignOut Forcefully</div>
        </div>
    )
}
