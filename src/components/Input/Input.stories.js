import { React } from 'react';
import InputComp from './InputComp';

export default {
    title: 'Input',
    component: InputComp,
    argTypes: {
        inputType: { control: 'select' }
    },
}

const Template = (args) => <InputComp {...args} />;
export const UserName = Template.bind({});
UserName.args = {
    inputType: "text",
}
export const Password = Template.bind({});
Password.args = {
    inputType: "password"
}