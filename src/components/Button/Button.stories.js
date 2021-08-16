import { React } from 'react';
import ButtonComp from './ButtonComp';

export default {
    title: 'Button',
    component: ButtonComp,
    argTypes: {
        backgroundColor: { control: 'color' },
        className: { control: 'select' }
    },
}

const Template = (args) => <ButtonComp {...args} />;
export const LoginButton = Template.bind({});
LoginButton.args = {
    buttonType: "submit",
    className: "sign-in",
    buttonClick: () => { return },
    buttonName: "LOG IN",
}
export const LogOutButton = Template.bind({});
LogOutButton.args = {
    buttonType: "button",
    className: "logout-btn",
    buttonClick: () => { return },
    buttonName: "LogOut",
}


